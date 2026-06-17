import os
import shutil
import re
from PIL import Image

def process_images():
    root_dir = '/home/horacefayomi/personal-work/others/afrodecoo'
    images_dir = os.path.join(root_dir, 'images')
    backup_dir = os.path.join(images_dir, 'backup')

    # 1. Create directories if not exist
    os.makedirs(backup_dir, exist_ok=True)

    # 2. (Removed) The script no longer moves images from the root into the backup folder.
    # Backup folder should be populated manually or left unchanged.
    extensions = ('.png', '.jpg', '.jpeg', '.JPG', '.PNG', '.JPEG')

    # 3. Clear all images from images_dir (except backup dir)
    for file in os.listdir(images_dir):
        file_path = os.path.join(images_dir, file)
        if os.path.isfile(file_path) and file.endswith(extensions):
            os.remove(file_path)

    # 4. Compress images from backup and save to images_dir
    processed_count = 0
    final_extensions = {}
    
    for file in os.listdir(backup_dir):
        if file.endswith(extensions):
            src_path = os.path.join(backup_dir, file)
            base_name, orig_ext = os.path.splitext(file)
            temp_jpg_path = os.path.join(images_dir, f"temp_{base_name}.jpg")
            
            try:
                with Image.open(src_path) as img:
                    if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                        bg = Image.new('RGB', img.size, (255, 255, 255))
                        if img.mode in ('RGBA', 'LA'):
                            bg.paste(img, mask=img.split()[-1])
                        else:
                            bg.paste(img)
                        img = bg
                    elif img.mode != 'RGB':
                        img = img.convert('RGB')
                        
                    img.save(temp_jpg_path, 'JPEG', quality=50, optimize=True)
                
                orig_size = os.path.getsize(src_path)
                new_size = os.path.getsize(temp_jpg_path)
                
                MIN_SIZE = 10 * 1024 # 10KB
                
                # If compression reduces size AND the new size is at least 10KB, use the JPEG
                if new_size < orig_size and new_size >= MIN_SIZE:
                    final_path = os.path.join(images_dir, f"{base_name}.jpg")
                    shutil.move(temp_jpg_path, final_path)
                    final_extensions[base_name] = '.jpg'
                    print(f"Compressed {file}: {orig_size//1024}KB -> {new_size//1024}KB")
                else:
                    # Otherwise keep the original file and its extension
                    os.remove(temp_jpg_path)
                    norm_ext = orig_ext.lower()
                    final_path = os.path.join(images_dir, f"{base_name}{norm_ext}")
                    shutil.copy2(src_path, final_path)
                    final_extensions[base_name] = norm_ext
                    reason = f"compressed was larger ({new_size//1024}KB vs {orig_size//1024}KB)" if new_size >= orig_size else f"compressed size {new_size//1024}KB was below 10KB threshold"
                    print(f"Kept original {file}: {reason}")
                    
                processed_count += 1
            except Exception as e:
                print(f"Error processing {file}: {e}")
                
    print(f"Processed {processed_count} images.")

    # 5. Update HTML and JS files
    files_to_update = ['index.html', 'portfolio.html', 'data.js']
    
    def replacer(match):
        base_name = match.group(1)
        if base_name in final_extensions:
            return f"{base_name}{final_extensions[base_name]}"
        return match.group(0)

    for filename in files_to_update:
        file_path = os.path.join(root_dir, filename)
        if not os.path.exists(file_path):
            continue
            
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        if filename in ('index.html', 'portfolio.html'):
            def url_replacer(match):
                base_name = match.group(1)
                if base_name in final_extensions:
                    return f"https://raw.githubusercontent.com/Afrodeco/afrodecoo/main/images/{base_name}{final_extensions[base_name]}"
                return match.group(0)
                
            # Support matching both /main/ and /main/images/ paths, just in case
            pattern = r"https://raw\.githubusercontent\.com/Afrodeco/afrodecoo/main/(?:images/)?([a-zA-Z0-9_\-]+)\.(png|jpg|jpeg|PNG|JPG|JPEG)"
            content, count = re.subn(pattern, url_replacer, content)
            print(f"Updated {count} URLs in {filename}")
            
        elif filename == 'data.js':
            pattern = r'([a-zA-Z0-9_\-]+)\.(png|jpg|jpeg|PNG|JPG|JPEG)'
            content, count = re.subn(pattern, replacer, content)
            print(f"Updated {count} image strings in {filename}")

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
            
if __name__ == '__main__':
    process_images()
