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
    description: "Œuvre inspirée de la nature africaine, entre végétation luxuriante et sérénité.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/058b2f4c6fcc12ec1a661bd50eb9fd6aa2bdfac5/Nature-2.png"
  },
  {
    id: 34,
    titre: "Nature 3",
    artiste: "Afrodeco Studio",
    description: "Œuvre inspirée de la nature africaine, entre végétation luxuriante et sérénité.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/058b2f4c6fcc12ec1a661bd50eb9fd6aa2bdfac5/Nature-3.png"
  },
  {
    id: 35,
    titre: "Nature 4",
    artiste: "Afrodeco Studio",
    description: "Œuvre inspirée de la nature africaine, entre végétation luxuriante et sérénité.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/058b2f4c6fcc12ec1a661bd50eb9fd6aa2bdfac5/Nature-4.png"
  },
  {
    id: 36,
    titre: "Nature 5",
    artiste: "Afrodeco Studio",
    description: "Œuvre inspirée de la nature africaine, entre végétation luxuriante et sérénité.",
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
    description: "Œuvre inspirée de la nature africaine, entre végétation luxuriante et sérénité.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/f3727293feb4001d2f89da551df7f305e587625f/Nature-7.png"
  },
  {
    id: 39,
    titre: "Nature 8",
    artiste: "Afrodeco Studio",
    description: "Œuvre inspirée de la nature africaine, entre végétation luxuriante et sérénité.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/f3727293feb4001d2f89da551df7f305e587625f/Nature-8.png"
  },
  {
    id: 40,
    titre: "Nature 9",
    artiste: "Afrodeco Studio",
    description: "Œuvre inspirée de la nature africaine, entre végétation luxuriante et sérénité.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/f3727293feb4001d2f89da551df7f305e587625f/Nature-9.png"
  },
  {
    id: 41,
    titre: "Nature 10",
    artiste: "Afrodeco Studio",
    description: "Œuvre inspirée de la nature africaine, entre végétation luxuriante et sérénité.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/f3727293feb4001d2f89da551df7f305e587625f/Nature-10.png"
  },
  {
    id: 42,
    titre: "Kid 1",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/Kid-1.png"
  },
  {
    id: 43,
    titre: "Kid 2",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/Kid-2.png"
  },
  {
    id: 44,
    titre: "Kid 3",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/Kid-3.png"
  },
  {
    id: 45,
    titre: "Kid 4",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/Kid-4.png"
  },
  {
    id: 46,
    titre: "Kid 5",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/Kid-5.png"
  },
  {
    id: 47,
    titre: "Kid 6",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/Kid-6.png"
  },
  {
    id: 48,
    titre: "Kid 7",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/Kid-7.png"
  },
  {
    id: 49,
    titre: "Kid 8",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/Kid-8.png"
  },
  {
    id: 50,
    titre: "Kid 9",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/Kid-9.png"
  },
  {
    id: 51,
    titre: "Kid 10",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/Kid-10.png"
  },
  {
    id: 52,
    titre: "Kid 11",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/Kid-11.png"
  },
  {
    id: 53,
    titre: "Kid 12",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/Kid-12.png"
  },
  {
    id: 54,
    titre: "Kid 13",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/Kid-13.png"
  },
  {
    id: 55,
    titre: "Kid 14",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/Kid-14.png"
  },
  {
    id: 56,
    titre: "Kid 15",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/Kid-15.png"
  },
  {
    id: 57,
    titre: "Kid 16",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/Kid-16.png"
  },
  {
    id: 58,
    titre: "Kid 17",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/Kid-17.png"
  },
  {
    id: 59,
    titre: "Quotes 1",
    artiste: "Afrodeco Studio",
    description: "Citation inspirante pour dynamiser votre espace de travail.",
    categorie: "office",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/6cf3673cefbcd785821c6b46de37975cf0e5722d/Quotes-1.png"
  },
  {
    id: 60,
    titre: "Quotes 2",
    artiste: "Afrodeco Studio",
    description: "Citation inspirante pour dynamiser votre espace de travail.",
    categorie: "office",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/6cf3673cefbcd785821c6b46de37975cf0e5722d/Quotes-2.png"
  },
  {
    id: 61,
    titre: "Quotes 3",
    artiste: "Afrodeco Studio",
    description: "Citation inspirante pour dynamiser votre espace de travail.",
    categorie: "office",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/6cf3673cefbcd785821c6b46de37975cf0e5722d/Quotes-3.png"
  },
  {
    id: 62,
    titre: "Quotes 4",
    artiste: "Afrodeco Studio",
    description: "Citation inspirante pour dynamiser votre espace de travail.",
    categorie: "office",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/6cf3673cefbcd785821c6b46de37975cf0e5722d/Quotes-4.png"
  },
  {
    id: 63,
    titre: "Quotes 5",
    artiste: "Afrodeco Studio",
    description: "Citation inspirante pour dynamiser votre espace de travail.",
    categorie: "office",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/6cf3673cefbcd785821c6b46de37975cf0e5722d/Quotes-5.png"
  },
  {
    id: 64,
    titre: "Quotes 6",
    artiste: "Afrodeco Studio",
    description: "Citation inspirante pour dynamiser votre espace de travail.",
    categorie: "office",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/6cf3673cefbcd785821c6b46de37975cf0e5722d/Quotes-6.png"
  },
  {
    id: 65,
    titre: "Quotes 7",
    artiste: "Afrodeco Studio",
    description: "Citation inspirante pour dynamiser votre espace de travail.",
    categorie: "office",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/6cf3673cefbcd785821c6b46de37975cf0e5722d/Quotes-7.png"
  },
  {
    id: 66,
    titre: "Quotes 8",
    artiste: "Afrodeco Studio",
    description: "Citation inspirante pour dynamiser votre espace de travail.",
    categorie: "office",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/6cf3673cefbcd785821c6b46de37975cf0e5722d/Quotes-8.png"
  },
  {
    id: 67,
    titre: "Plaines",
    artiste: "Afrodeco Studio",
    description: "Une œuvre aux teintes douces et apaisantes, inspirée des grandes plaines africaines. Idéale pour créer une ambiance sereine dans votre espace.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/38ae359daa97cb9fedd2226c80a0af1be79521cd/Plaines-1.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0dd8f977bea0111d089f7a6896078acc360f0ef/Plaines-3.png",
    photosProduit: [
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/38ae359daa97cb9fedd2226c80a0af1be79521cd/Plaines-1.png",
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/38ae359daa97cb9fedd2226c80a0af1be79521cd/Plaines-2.png",
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/38ae359daa97cb9fedd2226c80a0af1be79521cd/Plaines-3.png",
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/38ae359daa97cb9fedd2226c80a0af1be79521cd/Plaines-4.png"
    ]
  },
  {
    id: 68,
    titre: "Abstrait Nature",
    artiste: "Afrodeco Studio",
    description: "Une composition abstraite aux tons naturels et apaisants, évoquant la sérénité des paysages africains.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d2e46b27ee16c5b620f81ac1458e9d8749912ebf/Abstraittestplain-1.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d2e46b27ee16c5b620f81ac1458e9d8749912ebf/Abstraittestplain-1.png",
    photosProduit: [
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d2e46b27ee16c5b620f81ac1458e9d8749912ebf/Abstraittestplain-1.png",
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d2e46b27ee16c5b620f81ac1458e9d8749912ebf/Abstraittestplain-2.png",
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d2e46b27ee16c5b620f81ac1458e9d8749912ebf/Abstraittestmockup-1.png",
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d2e46b27ee16c5b620f81ac1458e9d8749912ebf/Abstraittestmockup-2.png"
    ]
  },
  {
    id: 69,
    titre: "Artsy",
    artiste: "Afrodeco Studio",
    description: "Un trio d'affiches au style africain contemporain, alliant graphisme audacieux et esthétique moderne.",
    categorie: "art-africain",
    prix: 184,
    dimensions: "50×70 cm",
    serie: true,
    images: [
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/efed2fdce192fd7657df465da541948b0d15e69c/Artsy-1.png",
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/efed2fdce192fd7657df465da541948b0d15e69c/Artsy-2.png"
    ],
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/efed2fdce192fd7657df465da541948b0d15e69c/Artsyplain-1.png",
    photosProduit: [
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/efed2fdce192fd7657df465da541948b0d15e69c/Artsyplain-1.png",
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/efed2fdce192fd7657df465da541948b0d15e69c/Artsyplain-2.png",
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/efed2fdce192fd7657df465da541948b0d15e69c/Artsyplain-3.png",
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/efed2fdce192fd7657df465da541948b0d15e69c/Artsy-1.png",
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/efed2fdce192fd7657df465da541948b0d15e69c/Artsy-2.png"
    ]
  },
  {
    id: 70,
    titre: "My Absurd World",
    artiste: "Itssenaxia",
    description: "Illustration afro-urbaine explosive, entre culture africaine et univers surréaliste. Personnage central portant des blocs colorés sur fond doré.",
    categorie: "art-africain",
    prix: 184,
    dimensions: "50×70 cm",
    image: "https://res.cloudinary.com/dycxgexgu/image/upload/Itssenaxia_Plain-11.jpg",
    imageVis: "https://res.cloudinary.com/dycxgexgu/image/upload/Itssenaxia_Plain-11.jpg",
    photosProduit: [
      "https://res.cloudinary.com/dycxgexgu/image/upload/Itssenaxia_Plain-11.jpg",
      "https://res.cloudinary.com/dycxgexgu/image/upload/Itssenaxia_Mockups-7.jpg"
    ]
  },
  {
    id: 71,
    titre: "Africa Rise #1",
    artiste: "Itssenaxia",
    description: "Composition pop art puissante sur fond de journal ancien. Une guerrière africaine moderne, entre histoire et modernité.",
    categorie: "art-africain",
    prix: 184,
    dimensions: "50×70 cm",
    image: "https://res.cloudinary.com/dycxgexgu/image/upload/Itssenaxia_Plain-12.jpg",
    imageVis: "https://res.cloudinary.com/dycxgexgu/image/upload/Itssenaxia_Plain-12.jpg",
    photosProduit: [
      "https://res.cloudinary.com/dycxgexgu/image/upload/Itssenaxia_Plain-12.jpg",
      "https://res.cloudinary.com/dycxgexgu/image/upload/Itssenaxia_Mockups-4.jpg"
    ]
  },
  {
    id: 72,
    titre: "Sanctuaire",
    artiste: "Itssenaxia",
    description: "Œuvre 3D surréaliste — une pagode miniature posée sur une colline verdoyante sous un ciel turquoise éclatant.",
    categorie: "nature",
    prix: 184,
    dimensions: "50×70 cm",
    image: "https://res.cloudinary.com/dycxgexgu/image/upload/Itssenaxia_Plain-13.jpg",
    imageVis: "https://res.cloudinary.com/dycxgexgu/image/upload/Itssenaxia_Plain-13.jpg",
    photosProduit: [
      "https://res.cloudinary.com/dycxgexgu/image/upload/Itssenaxia_Plain-13.jpg",
      "https://res.cloudinary.com/dycxgexgu/image/upload/Itssenaxia_Mockups-6.jpg"
    ]
  },
  {
    id: 73,
    titre: "Le Bateau Perdu",
    artiste: "Itssenaxia",
    description: "Scène onirique mêlant mur de pierre ancestral, herbe rose sauvage et bateau en papier blanc. Une poésie visuelle apaisante.",
    categorie: "nature",
    prix: 184,
    dimensions: "50×70 cm",
    image: "https://res.cloudinary.com/dycxgexgu/image/upload/Itssenaxia_Plain-14.jpg",
    imageVis: "https://res.cloudinary.com/dycxgexgu/image/upload/Itssenaxia_Plain-14.jpg",
    photosProduit: [
      "https://res.cloudinary.com/dycxgexgu/image/upload/Itssenaxia_Plain-14.jpg",
      "https://res.cloudinary.com/dycxgexgu/image/upload/Itssenaxia_Mockups-9.jpg"
    ]
  },
  {
    id: 74,
    titre: "Messages",
    artiste: "Itssenaxia",
    description: "Créature colorée sur fond violet intense, portant un message universel sur l'art comme langage. Illustration haute en couleur.",
    categorie: "art-africain",
    prix: 184,
    dimensions: "50×70 cm",
    image: "https://res.cloudinary.com/dycxgexgu/image/upload/Itssenaxia_Plain-15.jpg",
    imageVis: "https://res.cloudinary.com/dycxgexgu/image/upload/Itssenaxia_Plain-15.jpg",
    photosProduit: [
      "https://res.cloudinary.com/dycxgexgu/image/upload/Itssenaxia_Plain-15.jpg",
      "https://res.cloudinary.com/dycxgexgu/image/upload/Itssenaxia_Mockups-8.jpg"
    ]
  },
  {
    id: 75,
    titre: "Emancipation",
    artiste: "Itssenaxia",
    description: "Figure composite africaine sur fond beige texturé, évoquant l'histoire et la liberté des peuples. Texte Powers of Europe en arrière-plan.",
    categorie: "art-africain",
    prix: 184,
    dimensions: "50×70 cm",
    image: "https://res.cloudinary.com/dycxgexgu/image/upload/Itssenaxia_Plain-16.jpg",
    imageVis: "https://res.cloudinary.com/dycxgexgu/image/upload/Itssenaxia_Plain-16.jpg",
    photosProduit: [
      "https://res.cloudinary.com/dycxgexgu/image/upload/Itssenaxia_Plain-16.jpg",
      "https://res.cloudinary.com/dycxgexgu/image/upload/Itssenaxia_Mockups-5.jpg"
    ]
  },

  // ── MATISSE 06 → 19 ─────────────────────────────────────
  {
    id: 76,
    titre: "Matisse 06",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse6.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse6.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse6.png"]
  },
  {
    id: 77,
    titre: "Matisse 07",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse7.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse7.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse7.png"]
  },
  {
    id: 78,
    titre: "Matisse 08",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse8.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse8.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse8.png"]
  },
  {
    id: 79,
    titre: "Matisse 09",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse9.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse9.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse9.png"]
  },
  {
    id: 80,
    titre: "Matisse 10",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse10.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse10.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse10.png"]
  },
  {
    id: 81,
    titre: "Matisse 11",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse11.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse11.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse11.png"]
  },
  {
    id: 82,
    titre: "Matisse 12",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse12.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse12.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse12.png"]
  },
  {
    id: 83,
    titre: "Matisse 13",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse13.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse13.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse13.png"]
  },
  {
    id: 84,
    titre: "Matisse 14",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse14.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse14.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse14.png"]
  },
  {
    id: 85,
    titre: "Matisse 15",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse15.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse15.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse15.png"]
  },
  {
    id: 86,
    titre: "Matisse 16",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse16.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse16.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse16.png"]
  },
  {
    id: 87,
    titre: "Matisse 17",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse17.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse17.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse17.png"]
  },
  {
    id: 88,
    titre: "Matisse 18",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse18.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse18.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse18.png"]
  },
  {
    id: 89,
    titre: "Matisse 19",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse19.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse19.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/Matisse19.png"]
  },

  {
    id: 90,
    titre: "Abstrait 15",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait15.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait15.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait15.jpg"]
  },
  {
    id: 91,
    titre: "Abstrait 16",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait16.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait16.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait16.jpg"]
  },
  {
    id: 92,
    titre: "Abstrait 17",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait17.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait17.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait17.jpg"]
  },
  {
    id: 93,
    titre: "Abstrait 18",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait18.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait18.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait18.jpg"]
  },
  {
    id: 94,
    titre: "Abstrait 19",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait19.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait19.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait19.jpg"]
  },
  {
    id: 95,
    titre: "Abstrait 20",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait20.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait20.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait20.jpg"]
  },
  {
    id: 96,
    titre: "Abstrait 21",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait21.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait21.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait21.jpg"]
  },
  {
    id: 97,
    titre: "Abstrait 22",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait22.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait22.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait22.jpg"]
  },
  {
    id: 98,
    titre: "Abstrait 23",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait23.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait23.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait23.jpg"]
  },
  {
    id: 99,
    titre: "Abstrait 24",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait24.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait24.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait24.jpg"]
  },
  {
    id: 100,
    titre: "Abstrait 25",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait25.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait25.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait25.jpg"]
  },
  {
    id: 101,
    titre: "Abstrait 26",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait26.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait26.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait26.jpg"]
  },
  {
    id: 102,
    titre: "Abstrait 27",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait27.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait27.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait27.jpg"]
  },
  {
    id: 103,
    titre: "Abstrait 28",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait28.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait28.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait28.jpg"]
  },
  {
    id: 104,
    titre: "Abstrait 29",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait29.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait29.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait29.jpg"]
  },
  {
    id: 105,
    titre: "Abstrait 30",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait30.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait30.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait30.jpg"]
  },
  {
    id: 106,
    titre: "Abstrait 31",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait31.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait31.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/Abstrait31.jpg"]
  },
  {
    id: 107,
    titre: "Géométrie 10",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie10.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie10.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie10.png"]
  },
  {
    id: 108,
    titre: "Géométrie 11",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie11.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie11.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie11.png"]
  },
  {
    id: 109,
    titre: "Géométrie 12",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie12.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie12.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie12.png"]
  },
  {
    id: 110,
    titre: "Géométrie 13",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie13.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie13.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie13.png"]
  },
  {
    id: 111,
    titre: "Géométrie 14",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie14.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie14.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie14.png"]
  },
  {
    id: 112,
    titre: "Géométrie 15",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie15.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie15.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie15.png"]
  },
  {
    id: 113,
    titre: "Géométrie 16",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie16.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie16.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie16.png"]
  },
  {
    id: 114,
    titre: "Géométrie 17",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie17.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie17.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie17.png"]
  },
  {
    id: 115,
    titre: "Géométrie 18",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie18.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie18.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie18.png"]
  },
  {
    id: 116,
    titre: "Géométrie 19",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie19.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie19.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie19.png"]
  },
  {
    id: 117,
    titre: "Géométrie 20",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie20.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie20.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie20.png"]
  },
  {
    id: 118,
    titre: "Géométrie 21",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie21.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie21.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie21.png"]
  },
  {
    id: 119,
    titre: "Géométrie 22",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie22.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie22.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie22.png"]
  },
  {
    id: 120,
    titre: "Géométrie 23",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie23.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie23.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie23.png"]
  },
  {
    id: 121,
    titre: "Géométrie 24",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie24.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie24.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie24.png"]
  },
  {
    id: 122,
    titre: "Géométrie 25",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie25.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie25.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie25.png"]
  },
  {
    id: 123,
    titre: "Géométrie 26",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie26.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie26.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie26.png"]
  },
  {
    id: 124,
    titre: "Géométrie 27",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie27.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie27.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie27.png"]
  },
  {
    id: 125,
    titre: "Géométrie 28",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie28.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie28.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie28.png"]
  },
  {
    id: 126,
    titre: "Géométrie 29",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie29.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie29.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie29.png"]
  },
  {
    id: 127,
    titre: "Géométrie 3",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie3.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie3.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie3.jpg"]
  },
  {
    id: 128,
    titre: "Géométrie 30",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie30.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie30.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie30.png"]
  },
  {
    id: 129,
    titre: "Géométrie 31",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie31.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie31.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie31.png"]
  },
  {
    id: 130,
    titre: "Géométrie 32",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie32.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie32.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie32.png"]
  },
  {
    id: 131,
    titre: "Géométrie 33",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie33.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie33.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie33.png"]
  },
  {
    id: 132,
    titre: "Géométrie 34",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie34.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie34.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie34.png"]
  },
  {
    id: 133,
    titre: "Géométrie 35",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie35.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie35.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie35.png"]
  },
  {
    id: 134,
    titre: "Géométrie 4",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie4.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie4.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie4.jpg"]
  },
  {
    id: 135,
    titre: "Géométrie 5",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie5.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie5.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie5.jpg"]
  },
  {
    id: 136,
    titre: "Géométrie 6",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie6.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie6.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie6.jpg"]
  },
  {
    id: 137,
    titre: "Géométrie 7",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie7.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie7.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie7.png"]
  },
  {
    id: 138,
    titre: "Géométrie 8",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie8.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie8.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie8.png"]
  },
  {
    id: 139,
    titre: "Géométrie 9",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie9.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie9.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/Geometrie9.png"]
  },
  {
    id: 140,
    titre: "Kid 18",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-18.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-18.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-18.jpg"]
  },
  {
    id: 141,
    titre: "Kid 19",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-19.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-19.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-19.jpg"]
  },
  {
    id: 142,
    titre: "Kid 20",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-20.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-20.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-20.jpg"]
  },
  {
    id: 143,
    titre: "Kid 21",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-21.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-21.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-21.png"]
  },
  {
    id: 144,
    titre: "Kid 22",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-22.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-22.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-22.png"]
  },
  {
    id: 145,
    titre: "Kid 23",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-23.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-23.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-23.png"]
  },
  {
    id: 146,
    titre: "Kid 24",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-24.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-24.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-24.jpg"]
  },
  {
    id: 147,
    titre: "Kid 25",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-25.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-25.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-25.jpg"]
  },
  {
    id: 148,
    titre: "Kid 26",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-26.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-26.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-26.jpg"]
  },
  {
    id: 149,
    titre: "Kid 27",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-27.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-27.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-27.jpg"]
  },
  {
    id: 150,
    titre: "Kid 28",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-28.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-28.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-28.png"]
  },
  {
    id: 151,
    titre: "Kid 29",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-29.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-29.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-29.png"]
  },
  {
    id: 152,
    titre: "Kid 30",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-30.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-30.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-30.jpg"]
  },
  {
    id: 153,
    titre: "Kid 31",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-31.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-31.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-31.png"]
  },
  {
    id: 154,
    titre: "Kid 32",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-32.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-32.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-32.png"]
  },
  {
    id: 155,
    titre: "Kid 33",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-33.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-33.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/Kids-33.jpg"]
  },
];

const ARTISTES = [

  {
    nom: "Itssenaxia",
    specialite: "Illustration — Art Numérique",
    localisation: "Bénin",
    bio: "Itssenaxia est un artiste numérique béninois au style unique, mêlant illustration pop art, références africaines et univers surréalistes. Ses œuvres combinent couleurs vibrantes, personnages expressifs et messages culturels forts.",
    photo: ""
  },
  {
    nom: "Alex Maurel",
    bio: "Designer graphique talentueux et amoureux de la ville de Ouidah, Alex Maurel s'est inspiré de ses racines pour créer Ouidah Mibiton. Une œuvre empreinte d'authenticité et de passion, qui capture l'essence de la Porte du Non-Retour. Son art raconte des récits profonds à travers une illustration moderne, mêlant couleurs éclatantes et lignes épurées pour transmettre une émotion unique.",
    photo: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/main/Alex Maurel.JPG",
    specialite: "Design Graphique — Illustration",
    localisation: "Ouidah, Bénin"
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
  { id: "enfants", label: "Chambre Enfants" },
  { id: "office", label: "Office" }
];
