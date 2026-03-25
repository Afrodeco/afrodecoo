// ============================================================
//  AFRODECO — FICHIER DE DONNÉES
//
//  TABLEAU SIMPLE (une seule image) :
//  { id, titre, artiste, description, categorie, prix, dimensions, image: "lien" }
//
//  TABLEAU ROND :
//  { ..., rond: true, image: "lien" }
//
//  SÉRIE / CARROUSEL (plusieurs images) :
//  { ..., serie: true, images: ["lien1", "lien2", "lien3"] }
//
//  VISUALISEUR (image différente pour le visualiseur) :
//  { ..., imageVis: "lien" }
// ============================================================

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
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/main/Boho-1.png",
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/main/Boho-2.png",
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/main/Boho-3.png"
    ],
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/main/Boho-3.png"
  },
  {
    id: 2,
    titre: "Abstrait 1",
    artiste: "Afrodeco Studio",
    description: "Une œuvre abstraite qui apporte de la chaleur à votre déco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/main/Abstrait-1.png"
  },
  {
    id: 3,
    titre: "Abstrait 2",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux formes organiques et aux tons naturels.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/main/Abstrait-2.png"
  },
  {
    id: 4,
    titre: "Terre & Pierres",
    artiste: "Afrodeco Studio",
    description: "Formes organiques abstraites aux tons terreux sur fond texturé.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/main/Abstrait-4.png"
  },
  {
    id: 5,
    titre: "Abstrait 5",
    artiste: "Afrodeco Studio",
    description: "Œuvre abstraite aux tonalités profondes et à la composition équilibrée.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/main/Abstrait-5.png"
  },
  {
    id: 6,
    titre: "Abstrait 6",
    artiste: "Afrodeco Studio",
    description: "Jeu de formes et de matières inspiré des traditions artistiques africaines.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/main/Abstrait-6.png"
  },
  {
    id: 7,
    titre: "Abstrait 7",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite entre ombre et lumière, texture et profondeur.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/main/Abstrait-7.png"
  },
  {
    id: 8,
    titre: "Abstrait 8",
    artiste: "Afrodeco Studio",
    description: "Œuvre abstraite aux contrastes saisissants, entre douceur et intensité.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/main/Abstrait-8.jpg"
  },
  {
    id: 9,
    titre: "Abstrait 9",
    artiste: "Afrodeco Studio",
    description: "Palette terreuse et formes libres pour une présence apaisante sur vos murs.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/main/Abstrait-9.jpg"
  },
  {
    id: 10,
    titre: "Abstrait 10",
    artiste: "Afrodeco Studio",
    description: "Une abstraction contemporaine aux influences africaines marquées.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/main/Abstrait-10.jpg"
  },
  {
    id: 11,
    titre: "Abstrait 11",
    artiste: "Afrodeco Studio",
    description: "Lignes organiques et matières texturées pour une œuvre pleine de caractère.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/main/Abstrait-11.jpg"
  },
  {
    id: 12,
    titre: "Abstrait 12",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds, idéale pour sublimer un salon.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/main/Abstrait-12.png"
  },
  {
    id: 13,
    titre: "Abstrait 13",
    artiste: "Afrodeco Studio",
    description: "Équilibre subtil entre géométrie et spontanéité, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/main/Abstrait-13.jpg"
  },
  {
    id: 14,
    titre: "Abstrait 14",
    artiste: "Afrodeco Studio",
    description: "Une œuvre puissante aux couleurs profondes, entre terre et ciel africain.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/main/Abstrait-14.jpg"
  },
  {
    id: 15,
    titre: "Femme Dogon",
    artiste: "Kemi Adeyemi",
    description: "Portrait délicat issu de la tradition Dogon, revisitée en art contemporain.",
    categorie: "portrait",
    prix: 260,
    dimensions: "30×40 cm",
    image: "https://images.unsplash.com/photo-1580130379624-3a069adbffc5?w=800&q=80"
  },
  {
    id: 16,
    titre: "Tissu Kente",
    artiste: "Kemi Adeyemi",
    description: "Hommage aux motifs géométriques du tissu Kente, patrimoine immatériel ghanéen.",
    categorie: "geometrique",
    prix: 310,
    dimensions: "50×70 cm",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80"
  },
  {
    id: 17,
    titre: "Baobab au Crépuscule",
    artiste: "Afrodeco Studio",
    description: "L'arbre sacré africain sous un ciel embrasé — majestueux et intemporel.",
    categorie: "nature",
    prix: 480,
    dimensions: "100×120 cm",
    image: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&q=80"
  }
];

const ARTISTES = [
  {
    nom: "Afrodeco Studio",
    bio: "Le studio créatif d'Afrodeco, collectif d'artistes passionnés par l'art africain contemporain.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
  },
  {
    nom: "Kemi Adeyemi",
    bio: "Artiste nigériane basée à Paris, Kemi mêle traditions yoruba et abstraction contemporaine.",
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80"
  }
];

const CATEGORIES_TABLEAUX = [
  { id: "tout", label: "Tout" },
  { id: "art-africain", label: "Art Africain" },
  { id: "abstrait", label: "Abstrait" },
  { id: "portrait", label: "Portraits" },
  { id: "nature", label: "Nature" },
  { id: "geometrique", label: "Géométrique" },
  { id: "texture", label: "Art Texturé" },
  { id: "enfants", label: "Chambre Enfants" }
];
