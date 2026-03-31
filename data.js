// ============================================================
//  AFRODECO — FICHIER DE DONNÉES
// ============================================================

const BASE = "https://raw.githubusercontent.com/Afrodeco/afrodecoo/main/";

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
      BASE + "Boho-1.png",
      BASE + "Boho-2.png",
      BASE + "Boho-3.png"
    ],
    imageVis: BASE + "Boho-3.png"
  },
  {
    id: 2,
    titre: "Abstrait 1",
    artiste: "Afrodeco Studio",
    description: "Une œuvre abstraite qui apporte de la chaleur à votre déco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "Abstrait-1.png"
  },
  {
    id: 3,
    titre: "Abstrait 2",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux formes organiques et aux tons naturels.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "Abstrait-2.png"
  },
  {
    id: 4,
    titre: "Abstrait 3",
    artiste: "Afrodeco Studio",
    description: "Œuvre abstraite aux tonalités riches et à la texture généreuse.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "Abstrait-3.jpg"
  },
  {
    id: 5,
    titre: "Terre & Pierres",
    artiste: "Afrodeco Studio",
    description: "Formes organiques abstraites aux tons terreux sur fond texturé.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "Abstrait-4.png"
  },
  {
    id: 6,
    titre: "Abstrait 5",
    artiste: "Afrodeco Studio",
    description: "Œuvre abstraite aux tonalités profondes et à la composition équilibrée.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "Abstrait-5.png"
  },
  {
    id: 7,
    titre: "Abstrait 6",
    artiste: "Afrodeco Studio",
    description: "Jeu de formes et de matières inspiré des traditions artistiques africaines.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "Abstrait-6.png"
  },
  {
    id: 8,
    titre: "Abstrait 7",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite entre ombre et lumière, texture et profondeur.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "Abstrait-7.png"
  },
  {
    id: 9,
    titre: "Abstrait 8",
    artiste: "Afrodeco Studio",
    description: "Œuvre abstraite aux contrastes saisissants, entre douceur et intensité.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "Abstrait-8.jpg"
  },
  {
    id: 10,
    titre: "Abstrait 9",
    artiste: "Afrodeco Studio",
    description: "Palette terreuse et formes libres pour une présence apaisante sur vos murs.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "Abstrait-9.jpg"
  },
  {
    id: 11,
    titre: "Abstrait 10",
    artiste: "Afrodeco Studio",
    description: "Une abstraction contemporaine aux influences africaines marquées.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "Abstrait-10.jpg"
  },
  {
    id: 12,
    titre: "Abstrait 11",
    artiste: "Afrodeco Studio",
    description: "Lignes organiques et matières texturées pour une œuvre pleine de caractère.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "Abstrait-11.jpg"
  },
  {
    id: 13,
    titre: "Abstrait 12",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds, idéale pour sublimer un salon.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "Abstrait-12.png"
  },
  {
    id: 14,
    titre: "Abstrait 13",
    artiste: "Afrodeco Studio",
    description: "Équilibre subtil entre géométrie et spontanéité, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "Abstrait-13.jpg"
  },
  {
    id: 15,
    titre: "Abstrait 14",
    artiste: "Afrodeco Studio",
    description: "Une œuvre puissante aux couleurs profondes, entre terre et ciel africain.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "Abstrait-14.jpg"
  },
  {
    id: 16,
    titre: "Matisse 1 — Visage",
    artiste: "Afrodeco Studio",
    description: "Silhouette épurée inspirée de Matisse, entre force et sensibilité.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    serie: true,
    images: [
      BASE + "Matisse 1 mockup.png",
      BASE + "Matisse 1 design.png"
    ],
    imageVis: BASE + "Matisse 1 design.png"
  },
  {
    id: 17,
    titre: "Matisse 2 — Corps & Fleurs",
    artiste: "Afrodeco Studio",
    description: "Quatre formes graphiques bleu nuit et or, hommage aux découpages de Matisse.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    serie: true,
    images: [
      BASE + "Matisse 2 mockup.png",
      BASE + "Matisse 2 design.png"
    ],
    imageVis: BASE + "Matisse 2 design.png"
  },
  {
    id: 18,
    titre: "Matisse 3 — Lignes",
    artiste: "Afrodeco Studio",
    description: "Lignes organiques vert sauge et terracotta sur fond crème.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    serie: true,
    images: [
      BASE + "Matisse 3 mockup.png",
      BASE + "Matisse 3 design.png"
    ],
    imageVis: BASE + "Matisse 3 design.png"
  },
  {
    id: 19,
    titre: "Matisse 4",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite dans l'esprit Matisse, élégante et intemporelle.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    serie: true,
    images: [
      BASE + "Matisse 4 mockup.png",
      BASE + "Matisse 4 design.png"
    ],
    imageVis: BASE + "Matisse 4 design.png"
  },
  {
    id: 20,
    titre: "Matisse 5",
    artiste: "Afrodeco Studio",
    description: "Formes découpées aux couleurs vives, énergie et modernité.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    serie: true,
    images: [
      BASE + "Matisse 5 mockup.png",
      BASE + "Matisse 5 design.png"
    ],
    imageVis: BASE + "Matisse 5 design.png"
  },
  {
    id: 21,
    titre: "Géométrie 1",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "Geometrie-1.jpg"
  },
  {
    id: 22,
    titre: "Géométrie 2",
    artiste: "Afrodeco Studio",
    description: "Jeu de formes géométriques et de contrastes pour une présence forte.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "Geometrie-2.jpg"
  },
  {
    id: 23,
    titre: "Photo 1",
    artiste: "Afrodeco Studio",
    description: "Photographie d'art tirée sur papier fine-art, numérotée et signée.",
    categorie: "photographie",
    prix: 150,
    dimensions: "60×40 cm",
    image: BASE + "Photos-1.jpg"
  },
  {
    id: 24,
    titre: "Photo 2",
    artiste: "Afrodeco Studio",
    description: "Photographie d'art tirée sur papier fine-art, numérotée et signée.",
    categorie: "photographie",
    prix: 150,
    dimensions: "60×40 cm",
    image: BASE + "Photos-2.jpg"
  },
  {
    id: 25,
    titre: "Photo 3",
    artiste: "Afrodeco Studio",
    description: "Photographie d'art tirée sur papier fine-art, numérotée et signée.",
    categorie: "photographie",
    prix: 150,
    dimensions: "60×40 cm",
    image: BASE + "Photos-3.jpg"
  },
  {
    id: 26,
    titre: "Photo 4",
    artiste: "Afrodeco Studio",
    description: "Photographie d'art tirée sur papier fine-art, numérotée et signée.",
    categorie: "photographie",
    prix: 150,
    dimensions: "60×40 cm",
    image: BASE + "Photos-4.jpg"
  },
  {
    id: 27,
    titre: "Photo 5",
    artiste: "Afrodeco Studio",
    description: "Photographie d'art tirée sur papier fine-art, numérotée et signée.",
    categorie: "photographie",
    prix: 150,
    dimensions: "60×40 cm",
    image: BASE + "Photos-5.jpg"
  },
  {
    id: 28,
    titre: "Photo 6",
    artiste: "Afrodeco Studio",
    description: "Photographie d'art tirée sur papier fine-art, numérotée et signée.",
    categorie: "photographie",
    prix: 150,
    dimensions: "60×40 cm",
    image: BASE + "Photos-6.jpg"
  },
  {
    id: 29,
    titre: "Photo 7",
    artiste: "Afrodeco Studio",
    description: "Photographie d'art tirée sur papier fine-art, numérotée et signée.",
    categorie: "photographie",
    prix: 150,
    dimensions: "60×40 cm",
    image: BASE + "Photos-7.jpg"
  },
  {
    id: 30,
    titre: "Photo 8",
    artiste: "Afrodeco Studio",
    description: "Photographie d'art tirée sur papier fine-art, numérotée et signée.",
    categorie: "photographie",
    prix: 150,
    dimensions: "60×40 cm",
    image: BASE + "Photos-8.jpg"
  },
  {
    id: 32,
    titre: "Nature 1",
    artiste: "Afrodeco Studio",
    description: "Œuvre inspirée de la nature africaine, entre végétation luxuriante et sérénité.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/058b2f4c6fcc12ec1a661bd50eb9fd6aa2bdfac5/Nature-1.png"
  },
  {
    id: 33,
    titre: "Nature 2",
    artiste: "Afrodeco Studio",
    description: "Composition naturelle aux tons apaisants, évocation du paysage africain.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/058b2f4c6fcc12ec1a661bd50eb9fd6aa2bdfac5/Nature-2.png"
  },
  {
    id: 34,
    titre: "Nature 3",
    artiste: "Afrodeco Studio",
    description: "Paysage végétal contemporain aux couleurs profondes et à la texture généreuse.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/058b2f4c6fcc12ec1a661bd50eb9fd6aa2bdfac5/Nature-3.png"
  },
  {
    id: 35,
    titre: "Nature 4",
    artiste: "Afrodeco Studio",
    description: "Formes organiques et palette naturelle pour une présence apaisante sur vos murs.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/058b2f4c6fcc12ec1a661bd50eb9fd6aa2bdfac5/Nature-4.png"
  },
  {
    id: 36,
    titre: "Nature 5",
    artiste: "Afrodeco Studio",
    description: "Œuvre végétale aux influences africaines, entre force et douceur.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/058b2f4c6fcc12ec1a661bd50eb9fd6aa2bdfac5/Nature-5.png"
  },
  {
    id: 37,
    titre: "Nature 6",
    artiste: "Afrodeco Studio",
    description: "Œuvre inspirée de la nature africaine, entre végétation luxuriante et sérénité.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/f3727293feb4001d2f89da551df7f305e587625f/Nature-6.png"
  },
  {
    id: 38,
    titre: "Nature 7",
    artiste: "Afrodeco Studio",
    description: "Composition naturelle aux tons apaisants, évocation du paysage africain.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/f3727293feb4001d2f89da551df7f305e587625f/Nature-7.png"
  },
  {
    id: 39,
    titre: "Nature 8",
    artiste: "Afrodeco Studio",
    description: "Paysage végétal contemporain aux couleurs profondes et à la texture généreuse.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/f3727293feb4001d2f89da551df7f305e587625f/Nature-8.png"
  },
  {
    id: 40,
    titre: "Nature 9",
    artiste: "Afrodeco Studio",
    description: "Formes organiques et palette naturelle pour une présence apaisante sur vos murs.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/f3727293feb4001d2f89da551df7f305e587625f/Nature-9.png"
  },
  {
    id: 41,
    titre: "Nature 10",
    artiste: "Afrodeco Studio",
    description: "Œuvre végétale aux influences africaines, entre force et douceur.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/f3727293feb4001d2f89da551df7f305e587625f/Nature-10.png"
  },
  {
    id: 31,
    titre: "Ouidah Mibiton",
    artiste: "Alex Maurel",
    description: "Un hommage vibrant à la Porte du Non-Retour de Ouidah. Style graphique audacieux, couleurs éclatantes et lignes épurées pour transmettre mémoire et résilience. Plus qu'un tableau : une œuvre chargée d'histoire.",
    categorie: "art-africain",
    prix: 0,
    dimensions: "30×40 cm / 50×70 cm — Impression sur papier encadré bois et verre",
    serie: true,
    images: [
      BASE + "Alex Maurel-1.jpg",
      BASE + "Alex Maurel-2.jpg"
    ],
    imageVis: BASE + "Alex Maurel Oeuvre sans mockup.jpg"
  }
];

const ARTISTES = [
  {
    nom: "Alex Maurel",
    bio: "Designer graphique talentueux et amoureux de la ville de Ouidah, Alex Maurel s'est inspiré de ses racines pour créer Ouidah Mibiton. Une œuvre empreinte d'authenticité et de passion, qui capture l'essence de la Porte du Non-Retour. Son art raconte des récits profonds à travers une illustration moderne, mêlant couleurs éclatantes et lignes épurées pour transmettre une émotion unique.",
    photo: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/main/Alex Maurel.JPG",
    specialite: "Design Graphique — Illustration",
    localisation: "Ouidah, Bénin"
  },
  {
    nom: "Itssenaxia",
    bio: "À compléter avec la biographie d'Itssenaxia.",
    photo: "",
    specialite: "",
    localisation: ""
  }
];

const CATEGORIES_TABLEAUX = [
  { id: "tout", label: "Tout" },
  { id: "matisse", label: "Matisse" },
  { id: "abstrait", label: "Abstrait" },
  { id: "geometrique", label: "Géométrique" },
  { id: "photographie", label: "Photographies" },
  { id: "art-africain", label: "Art Africain" },
  { id: "portrait", label: "Portraits" },
  { id: "nature", label: "Nature" },
  { id: "enfants", label: "Chambre Enfants" }
];
