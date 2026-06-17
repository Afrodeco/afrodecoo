# Afrodeco - Project Context for Agents

This document provides the product and technical context for the Afrodeco platform. It is intended to give AI agents an immediate understanding of the project without needing to explore the codebase from scratch.

## Product Context

**Afrodeco** is an online gallery and platform dedicated to contemporary African art. It connects creators of patterns, decorative art, and photographers with interior architects, decorators, and art enthusiasts.

### Key Offerings
- **Artworks**: Abstract compositions, Matisse-inspired series, geometric art, nature themes, children's illustrations, and fine-art photography.
- **Formats**: Prints on matte paper (framed) and prints on canvas (framed).

### Core Features & Pages
- **Home (`#page-home`)**: Hero section, category navigation, social proof (customer photos in their spaces), and customer reviews.
- **Tableaux / Gallery (`#page-tableaux`)**: A masonry grid displaying all artworks with category filters (Tout, Abstrait, Géométrique, Matisse, Nature, Enfants, etc.).
- **Artistes (`#page-artistes`)**: Profiles of artists (e.g., Afrodeco Studio, Itssenaxia, Alex Maurel) alongside their respective artworks.
- **Product Page (`#page-produit`)**: Detailed view of a selected artwork, displaying dimensions, pricing, and an action to "Order on WhatsApp" (`wa.me` link).
- **Visualizer (`#page-visualiseur`)**: An interactive feature allowing users to:
  - Upload a photo of their own room.
  - Select an artwork and place it on the wall.
  - Apply perspective warping to match the wall angle.
  - Adjust size, position (X/Y), and frame type (black wood, natural wood, white wood, canvas).
  - Download the visualized composite image.
- **À Propos (`#page-apropos`)**: Company history and contact information.

## Technical Context

The project is built with a **pure Vanilla HTML, CSS, and JavaScript** stack. It does not use modern frontend frameworks (like React or Vue) or build tools (like Webpack or Vite).

### Architecture
- **Single Page Application (SPA) Approach**: All "pages" are contained within `index.html` as `<div>` elements with the class `.page`. Navigation is handled by a simple JavaScript function `showPage(pageName)` that toggles the `.active` class to show/hide sections.
- **Styling**: 
  - Styles are defined in a `<style>` block within the `<head>` of the HTML files.
  - Uses CSS variables (`:root`) for a consistent color palette (`--black`, `--white`, `--grey`, `--grey-light`, etc.).
  - Custom fonts (Aspekta, Nomad) are loaded via `@font-face` using base64 data URIs or raw GitHub URLs.
  - Layouts heavily rely on CSS Grid and Flexbox. The masonry gallery is built using the CSS `columns` property.
- **Data Management**:
  - Data is statically mocked in `data.js`.
  - It exposes global constant arrays: `TABLEAUX` (artworks with properties like `id`, `titre`, `artiste`, `description`, `categorie`, `prix`, `dimensions`, `images`) and `ARTISTES` (artist details).
  - Images are hosted on GitHub under the `images/` directory (`raw.githubusercontent.com/.../images/`) or via external providers like Cloudinary.

### File Structure
- `index.html`: The main application file containing all markup, CSS, and core UI logic (navigation, dynamic rendering of the gallery, visualizer logic).
- `portfolio.html`: An alternative gallery/portfolio view file.
- `data.js`: The database file containing the `TABLEAUX` and `ARTISTES` arrays.
- `README.md`: Minimal project documentation.
- `process_images.py`: A Python script used to automatically back up original images, compress them into JPEGs, intelligently keep the original file if the compressed JPEG is larger, and automatically update file references across `index.html`, `portfolio.html`, and `data.js` based on the optimal chosen format.
- `images/`: Directory containing the compressed `.jpg` artwork assets.
- `images/backup/`: Directory containing the original, unprocessed images.

```
.
├── Agent.md
├── CNAME
├── data.js
├── fonts
│   ├── Aspekta-150.woff2
│   ├── ...
│   ├── Nomad-Regular.woff2
│   └── README.md
├── image-names.tsv
├── image-rename-manifest.tsv
├── images
│   ├── alba.jpg
│   ├── ...
│   └── zuri.jpg
├── index.html
├── portfolio.html
├── process_images.py
├── README.md
└──rename_images.py
```

### Interactive Visualizer Details (`#vis2Canvas`)
- Built using HTML5 `<canvas>` and the 2D rendering context.
- Implements a custom 4-point perspective warping algorithm (`drawWarp`) to project artworks onto uploaded room photos realistically.
- Manages state for the uploaded room image, selected artwork slots, and frame styling (adding borders/colors via the Canvas API).


#### data.js content schema

```json
const BASE = "https://raw.githubusercontent.com/Afrodeco/afrodecoo/main/images/";

const TABLEAUX = [
  {
    id: 1,
    titre: "Série Boho",
    artiste: "Afrodeco Studio",
    description: "Trio géométrique minimaliste aux lignes épurées. Vendu en série de 3.",
    categorie: "geometrique",
    prix: 185,
    dimensions: "40×50 cm — Série de 3",
    serie: true,
    images: [
      BASE + "honey-1.jpg",
      BASE + "honey-2.jpg",
      BASE + "honey-3.jpg"
    ],
    imageVis: BASE + "honey-3.jpg"
  }
];

const ARTISTES = [
  {
    nom: "Itssenaxia",
    specialite: "Illustration — Art Numérique",
    localisation: "Bénin",
    bio: "Itssenaxia est un artiste numérique béninois au style unique, mêlant illustration pop art, références africaines et univers surréalistes. Ses œuvres combinent couleurs vibrantes, personnages expressifs et messages culturels forts.",
    photo: `${BASE}/artists/a1_itssenaxia.jpg`
  },
  ...
];

const CATEGORIES_TABLEAUX = [
  { id: "tout", label: "Tout" },
  ...
];
```
