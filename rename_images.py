#!/usr/bin/env python3
"""
rename_images.py — rename Afrodeco artwork images and keep the code in sync.

HOW TO USE
----------
1. Edit `image-names.tsv`. It has two TAB-separated columns:
       current_filename   <TAB>   new_filename
   Change the SECOND column to whatever beautiful name you want.
   Rules:
     - keep the file extension (e.g. .png stays .png, .jpg stays .jpg)
     - no spaces or special characters in new names (a-z, 0-9, - and _ only)
     - every new name must be unique
   Rows where both columns are identical are skipped.

2. Dry run (shows what WOULD happen, changes nothing):
       python3 rename_images.py --check

3. Apply:
       python3 rename_images.py

What it does on apply:
  - validates the whole mapping first (aborts on any problem, touches nothing)
  - rewrites every image reference in data.js and index.html
    (both the  BASE + "file"  form and the full  /main/file  URL form)
  - `git mv`s each file so history is preserved
  - re-audits: confirms 0 broken references afterwards

portfolio.html (base64-embedded images) and the fonts/ folder are never touched.
"""

import re
import os
import sys
import glob
import subprocess

MAPPING_FILE = "image-names.tsv"
CODE_FILES = ("data.js", "index.html")
VALID_NAME = re.compile(r"^[A-Za-z0-9_.+-]+$")  # no spaces / special chars
IMG_EXT = ("png", "jpg", "jpeg", "JPG", "JPEG", "PNG")


def die(msg):
    print(f"\n[ABORT] {msg}\n", file=sys.stderr)
    sys.exit(1)


def load_mapping():
    if not os.path.exists(MAPPING_FILE):
        die(f"{MAPPING_FILE} not found. Run this script from the project root.")
    rows = []
    with open(MAPPING_FILE, encoding="utf-8") as fh:
        for raw in fh:
            line = raw.rstrip("\n")
            if not line.strip() or line.lstrip().startswith("#"):
                continue
            if "\t" not in line:
                continue
            cur, new = line.split("\t", 1)
            cur, new = cur.strip(), new.strip()
            if cur == "current" and new == "new":  # header
                continue
            rows.append((cur, new))
    return rows


def disk_images():
    d = set()
    for ext in IMG_EXT:
        d |= set(glob.glob(f"*.{ext}"))
    return d


def validate(rows, disk):
    pending = [(c, n) for c, n in rows if c != n]  # rows that actually change

    # every 'current' in the file must exist on disk
    for cur, _ in rows:
        if cur not in disk:
            die(f"'{cur}' is listed in {MAPPING_FILE} but not found on disk.")

    # new names must be well-formed and keep their extension
    for cur, new in pending:
        if not VALID_NAME.match(new):
            die(f"'{new}' contains spaces or invalid characters.")
        if os.path.splitext(cur)[1].lower() != os.path.splitext(new)[1].lower():
            die(f"extension changed: '{cur}' -> '{new}' (keep the same extension).")

    # all resulting names unique (case-insensitive)
    final_names = {c: n for c, n in rows}
    result = [final_names[c].lower() for c in final_names]
    dupes = {x for x in result if result.count(x) > 1}
    if dupes:
        die(f"duplicate target name(s): {sorted(dupes)}")

    # a new name must not collide with a file that is NOT being renamed away
    staying = {c for c, n in rows if c == n}
    for cur, new in pending:
        if new in staying:
            die(f"'{new}' collides with existing file '{new}' that is not being renamed.")

    return pending


def rewrite_code(pending, dry):
    mp = {c: n for c, n in pending}
    # longest-first so a short name never matches inside a longer one
    olds = sorted(mp, key=len, reverse=True)
    if not olds:
        print("No name changes in mapping — nothing to rewrite.")
        return
    pattern = re.compile("|".join(re.escape(o) for o in olds))
    for cf in CODE_FILES:
        if not os.path.exists(cf):
            continue
        txt = open(cf, encoding="utf-8").read()
        counts = {}

        def repl(m):
            o = m.group(0)
            counts[o] = counts.get(o, 0) + 1
            return mp[o]

        new_txt = pattern.sub(repl, txt)
        total = sum(counts.values())
        print(f"  {cf}: {total} reference(s) in {len(counts)} file name(s)"
              + (" [dry-run]" if dry else ""))
        if not dry and new_txt != txt:
            open(cf, "w", encoding="utf-8").write(new_txt)


def move_files(pending, dry):
    for cur, new in pending:
        if dry:
            print(f"  git mv  {cur}  ->  {new}  [dry-run]")
        else:
            subprocess.run(["git", "mv", "--", cur, new], check=True)
    if not dry:
        print(f"  renamed {len(pending)} file(s)")


def audit():
    disk = disk_images()
    img_re = re.compile(r'(?:BASE\s*\+\s*"([^"]+)")|/main/([A-Za-z0-9 _.+-]+\.(?:png|jpg|jpeg|JPG))')
    broken = []
    for cf in CODE_FILES:
        if not os.path.exists(cf):
            continue
        txt = open(cf, encoding="utf-8").read()
        for m in img_re.finditer(txt):
            name = m.group(1) or m.group(2)
            if name.startswith("fonts/"):
                continue
            if name not in disk:
                broken.append((cf, name))
    if broken:
        print("\n[WARN] broken references found:")
        for cf, n in broken:
            print(f"   {cf}: {n}")
    else:
        print("\nAudit: all image references resolve to real files. OK.")


def main():
    dry = "--check" in sys.argv or "-n" in sys.argv
    rows = load_mapping()
    disk = disk_images()
    pending = validate(rows, disk)
    print(f"{len(rows)} mapped, {len(pending)} to rename"
          + (" (dry run)\n" if dry else "\n"))
    if pending:
        print("Rewriting code references:")
        rewrite_code(pending, dry)
        print("Moving files:")
        move_files(pending, dry)
    audit()
    if dry:
        print("\nDry run only — nothing was changed. Re-run without --check to apply.")


if __name__ == "__main__":
    main()
