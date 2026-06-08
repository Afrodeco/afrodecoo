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
      BASE + "honey-1.png",
      BASE + "honey-2.png",
      BASE + "honey-3.png"
    ],
    imageVis: BASE + "honey-3.png"
  },
  {
    id: 2,
    titre: "Abstrait 1",
    artiste: "Afrodeco Studio",
    description: "Une œuvre abstraite qui apporte de la chaleur à votre déco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "saffron.png"
  },
  {
    id: 3,
    titre: "Abstrait 2",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux formes organiques et aux tons naturels.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "naya.png"
  },

  {
    id: 5,
    titre: "Terre & Pierres",
    artiste: "Afrodeco Studio",
    description: "Formes organiques abstraites aux tons terreux sur fond texturé.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "lotus.png"
  },
  {
    id: 6,
    titre: "Abstrait 5",
    artiste: "Afrodeco Studio",
    description: "Œuvre abstraite aux tonalités profondes et à la composition équilibrée.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "oryx.png"
  },
  {
    id: 7,
    titre: "Abstrait 6",
    artiste: "Afrodeco Studio",
    description: "Jeu de formes et de matières inspiré des traditions artistiques africaines.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "zambezi.png"
  },
  {
    id: 8,
    titre: "Abstrait 7",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite entre ombre et lumière, texture et profondeur.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "fiorella.png"
  },
  {
    id: 9,
    titre: "Abstrait 8",
    artiste: "Afrodeco Studio",
    description: "Œuvre abstraite aux contrastes saisissants, entre douceur et intensité.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "apollo.jpg"
  },
  {
    id: 10,
    titre: "Abstrait 9",
    artiste: "Afrodeco Studio",
    description: "Palette terreuse et formes libres pour une présence apaisante sur vos murs.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "sienna.jpg"
  },
  {
    id: 11,
    titre: "Abstrait 10",
    artiste: "Afrodeco Studio",
    description: "Une abstraction contemporaine aux influences africaines marquées.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "jasmine.jpg"
  },
  {
    id: 12,
    titre: "Abstrait 11",
    artiste: "Afrodeco Studio",
    description: "Lignes organiques et matières texturées pour une œuvre pleine de caractère.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "gazelle.jpg"
  },
  {
    id: 13,
    titre: "Abstrait 12",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds, idéale pour sublimer un salon.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "sahel.png"
  },
  {
    id: 14,
    titre: "Abstrait 13",
    artiste: "Afrodeco Studio",
    description: "Équilibre subtil entre géométrie et spontanéité, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "terracotta.jpg"
  },
  {
    id: 15,
    titre: "Abstrait 14",
    artiste: "Afrodeco Studio",
    description: "Une œuvre puissante aux couleurs profondes, entre terre et ciel africain.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "helios.jpg"
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
      BASE + "idun-2.png",
      BASE + "idun-1.png"
    ],
    imageVis: BASE + "idun-1.png"
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
      BASE + "samira-2.png",
      BASE + "samira-1.png"
    ],
    imageVis: BASE + "samira-1.png"
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
      BASE + "sage-2.png",
      BASE + "sage-1.png"
    ],
    imageVis: BASE + "sage-1.png"
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
      BASE + "violet-2.png",
      BASE + "violet-1.png"
    ],
    imageVis: BASE + "violet-1.png"
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
      BASE + "kudu-2.png",
      BASE + "kudu-1.png"
    ],
    imageVis: BASE + "kudu-1.png"
  },
  {
    id: 21,
    titre: "Géométrie 1",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "peony.jpg"
  },
  {
    id: 22,
    titre: "Géométrie 2",
    artiste: "Afrodeco Studio",
    description: "Jeu de formes géométriques et de contrastes pour une présence forte.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "jaguar.jpg"
  },
  {
    id: 23,
    titre: "Photo 1",
    artiste: "Afrodeco Studio",
    description: "Photographie d'art tirée sur papier fine-art, numérotée et signée.",
    categorie: "photographie",
    prix: 150,
    dimensions: "60×40 cm",
    image: BASE + "lemur.jpg"
  },
  {
    id: 24,
    titre: "Photo 2",
    artiste: "Afrodeco Studio",
    description: "Photographie d'art tirée sur papier fine-art, numérotée et signée.",
    categorie: "photographie",
    prix: 150,
    dimensions: "60×40 cm",
    image: BASE + "oya.jpg"
  },
  {
    id: 25,
    titre: "Photo 3",
    artiste: "Afrodeco Studio",
    description: "Photographie d'art tirée sur papier fine-art, numérotée et signée.",
    categorie: "photographie",
    prix: 150,
    dimensions: "60×40 cm",
    image: BASE + "rosso.jpg"
  },
  {
    id: 26,
    titre: "Photo 4",
    artiste: "Afrodeco Studio",
    description: "Photographie d'art tirée sur papier fine-art, numérotée et signée.",
    categorie: "photographie",
    prix: 150,
    dimensions: "60×40 cm",
    image: BASE + "bastet.jpg"
  },
  {
    id: 27,
    titre: "Photo 5",
    artiste: "Afrodeco Studio",
    description: "Photographie d'art tirée sur papier fine-art, numérotée et signée.",
    categorie: "photographie",
    prix: 150,
    dimensions: "60×40 cm",
    image: BASE + "nour.jpg"
  },
  {
    id: 28,
    titre: "Photo 6",
    artiste: "Afrodeco Studio",
    description: "Photographie d'art tirée sur papier fine-art, numérotée et signée.",
    categorie: "photographie",
    prix: 150,
    dimensions: "60×40 cm",
    image: BASE + "citron.jpg"
  },
  {
    id: 29,
    titre: "Photo 7",
    artiste: "Afrodeco Studio",
    description: "Photographie d'art tirée sur papier fine-art, numérotée et signée.",
    categorie: "photographie",
    prix: 150,
    dimensions: "60×40 cm",
    image: BASE + "tulip.jpg"
  },
  {
    id: 30,
    titre: "Photo 8",
    artiste: "Afrodeco Studio",
    description: "Photographie d'art tirée sur papier fine-art, numérotée et signée.",
    categorie: "photographie",
    prix: 150,
    dimensions: "60×40 cm",
    image: BASE + "fennec.jpg"
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
      BASE + "cocoa-2.jpg",
      BASE + "cocoa-3.jpg"
    ],
    imageVis: BASE + "cocoa-1.jpg"
  },
  {
    id: 32,
    titre: "Nature 1",
    artiste: "Afrodeco Studio",
    description: "Œuvre inspirée de la nature africaine, entre végétation luxuriante et sérénité.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/058b2f4c6fcc12ec1a661bd50eb9fd6aa2bdfac5/jamal.png"
  },
  {
    id: 33,
    titre: "Nature 2",
    artiste: "Afrodeco Studio",
    description: "Œuvre inspirée de la nature africaine, entre végétation luxuriante et sérénité.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/058b2f4c6fcc12ec1a661bd50eb9fd6aa2bdfac5/zinnia.png"
  },
  {
    id: 34,
    titre: "Nature 3",
    artiste: "Afrodeco Studio",
    description: "Œuvre inspirée de la nature africaine, entre végétation luxuriante et sérénité.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/058b2f4c6fcc12ec1a661bd50eb9fd6aa2bdfac5/okapi.png"
  },
  {
    id: 35,
    titre: "Nature 4",
    artiste: "Afrodeco Studio",
    description: "Œuvre inspirée de la nature africaine, entre végétation luxuriante et sérénité.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/058b2f4c6fcc12ec1a661bd50eb9fd6aa2bdfac5/ife.png"
  },
  {
    id: 36,
    titre: "Nature 5",
    artiste: "Afrodeco Studio",
    description: "Œuvre inspirée de la nature africaine, entre végétation luxuriante et sérénité.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/058b2f4c6fcc12ec1a661bd50eb9fd6aa2bdfac5/perla.png"
  },
  {
    id: 37,
    titre: "Nature 6",
    artiste: "Afrodeco Studio",
    description: "Œuvre inspirée de la nature africaine, entre végétation luxuriante et sérénité.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/f3727293feb4001d2f89da551df7f305e587625f/anubis.png"
  },
  {
    id: 38,
    titre: "Nature 7",
    artiste: "Afrodeco Studio",
    description: "Œuvre inspirée de la nature africaine, entre végétation luxuriante et sérénité.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/f3727293feb4001d2f89da551df7f305e587625f/zaid.png"
  },
  {
    id: 39,
    titre: "Nature 8",
    artiste: "Afrodeco Studio",
    description: "Œuvre inspirée de la nature africaine, entre végétation luxuriante et sérénité.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/f3727293feb4001d2f89da551df7f305e587625f/melon.png"
  },
  {
    id: 40,
    titre: "Nature 9",
    artiste: "Afrodeco Studio",
    description: "Œuvre inspirée de la nature africaine, entre végétation luxuriante et sérénité.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/f3727293feb4001d2f89da551df7f305e587625f/aster.png"
  },
  {
    id: 41,
    titre: "Nature 10",
    artiste: "Afrodeco Studio",
    description: "Œuvre inspirée de la nature africaine, entre végétation luxuriante et sérénité.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/f3727293feb4001d2f89da551df7f305e587625f/cherry.png"
  },
  {
    id: 42,
    titre: "Kid 1",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/cinnamon.png"
  },
  {
    id: 43,
    titre: "Kid 2",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/kestrel.png"
  },
  {
    id: 44,
    titre: "Kid 3",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/kofi.png"
  },
  {
    id: 45,
    titre: "Kid 4",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/toscana.png"
  },
  {
    id: 46,
    titre: "Kid 5",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/persephone.png"
  },
  {
    id: 47,
    titre: "Kid 6",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/salma.png"
  },
  {
    id: 48,
    titre: "Kid 7",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/clove.png"
  },
  {
    id: 49,
    titre: "Kid 8",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/oleander.png"
  },
  {
    id: 50,
    titre: "Kid 9",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/osprey.png"
  },
  {
    id: 51,
    titre: "Kid 10",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/azalea.png"
  },
  {
    id: 52,
    titre: "Kid 11",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/raven.png"
  },
  {
    id: 53,
    titre: "Kid 12",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/ayo.png"
  },
  {
    id: 54,
    titre: "Kid 13",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/portofino.png"
  },
  {
    id: 55,
    titre: "Kid 14",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/pandora.png"
  },
  {
    id: 56,
    titre: "Kid 15",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/rania.png"
  },
  {
    id: 57,
    titre: "Kid 16",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/ginger.png"
  },
  {
    id: 58,
    titre: "Kid 17",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0029b4c62ecdfe8b2c1a19d0c107e6e81a1fd7c/mimosa.png"
  },
  {
    id: 59,
    titre: "Quotes 1",
    artiste: "Afrodeco Studio",
    description: "Citation inspirante pour dynamiser votre espace de travail.",
    categorie: "office",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/6cf3673cefbcd785821c6b46de37975cf0e5722d/tamarind.png"
  },
  {
    id: 60,
    titre: "Quotes 2",
    artiste: "Afrodeco Studio",
    description: "Citation inspirante pour dynamiser votre espace de travail.",
    categorie: "office",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/6cf3673cefbcd785821c6b46de37975cf0e5722d/serval.png"
  },
  {
    id: 61,
    titre: "Quotes 3",
    artiste: "Afrodeco Studio",
    description: "Citation inspirante pour dynamiser votre espace de travail.",
    categorie: "office",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/6cf3673cefbcd785821c6b46de37975cf0e5722d/anansi.png"
  },
  {
    id: 62,
    titre: "Quotes 4",
    artiste: "Afrodeco Studio",
    description: "Citation inspirante pour dynamiser votre espace de travail.",
    categorie: "office",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/6cf3673cefbcd785821c6b46de37975cf0e5722d/viola.png"
  },
  {
    id: 63,
    titre: "Quotes 5",
    artiste: "Afrodeco Studio",
    description: "Citation inspirante pour dynamiser votre espace de travail.",
    categorie: "office",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/6cf3673cefbcd785821c6b46de37975cf0e5722d/thoth.png"
  },
  {
    id: 64,
    titre: "Quotes 6",
    artiste: "Afrodeco Studio",
    description: "Citation inspirante pour dynamiser votre espace de travail.",
    categorie: "office",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/6cf3673cefbcd785821c6b46de37975cf0e5722d/rim.png"
  },
  {
    id: 65,
    titre: "Quotes 7",
    artiste: "Afrodeco Studio",
    description: "Citation inspirante pour dynamiser votre espace de travail.",
    categorie: "office",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/6cf3673cefbcd785821c6b46de37975cf0e5722d/sesame.png"
  },
  {
    id: 66,
    titre: "Quotes 8",
    artiste: "Afrodeco Studio",
    description: "Citation inspirante pour dynamiser votre espace de travail.",
    categorie: "office",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/6cf3673cefbcd785821c6b46de37975cf0e5722d/caracal.png"
  },
  {
    id: 67,
    titre: "Plaines",
    artiste: "Afrodeco Studio",
    description: "Une œuvre aux teintes douces et apaisantes, inspirée des grandes plaines africaines. Idéale pour créer une ambiance sereine dans votre espace.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/38ae359daa97cb9fedd2226c80a0af1be79521cd/yemoja.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d0dd8f977bea0111d089f7a6896078acc360f0ef/sekhmet.png",
    photosProduit: [
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/38ae359daa97cb9fedd2226c80a0af1be79521cd/yemoja.png",
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/38ae359daa97cb9fedd2226c80a0af1be79521cd/azzurro.png",
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/38ae359daa97cb9fedd2226c80a0af1be79521cd/sekhmet.png",
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/38ae359daa97cb9fedd2226c80a0af1be79521cd/dina.png"
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
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d2e46b27ee16c5b620f81ac1458e9d8749912ebf/eos.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d2e46b27ee16c5b620f81ac1458e9d8749912ebf/eos.png",
    photosProduit: [
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d2e46b27ee16c5b620f81ac1458e9d8749912ebf/eos.png",
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d2e46b27ee16c5b620f81ac1458e9d8749912ebf/dalia.png",
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d2e46b27ee16c5b620f81ac1458e9d8749912ebf/timbuktu.png",
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/d2e46b27ee16c5b620f81ac1458e9d8749912ebf/sole.png"
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
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/efed2fdce192fd7657df465da541948b0d15e69c/cheetah.png",
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/efed2fdce192fd7657df465da541948b0d15e69c/zanzibar.png"
    ],
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/efed2fdce192fd7657df465da541948b0d15e69c/aria.png",
    photosProduit: [
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/efed2fdce192fd7657df465da541948b0d15e69c/aria.png",
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/efed2fdce192fd7657df465da541948b0d15e69c/nyx.png",
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/efed2fdce192fd7657df465da541948b0d15e69c/soraya.png",
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/efed2fdce192fd7657df465da541948b0d15e69c/cheetah.png",
      "https://raw.githubusercontent.com/Afrodeco/afrodecoo/efed2fdce192fd7657df465da541948b0d15e69c/zanzibar.png"
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
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/amira.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/amira.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/amira.png"]
  },
  {
    id: 77,
    titre: "Matisse 07",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/peach.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/peach.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/peach.png"]
  },
  {
    id: 78,
    titre: "Matisse 08",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/gardenia.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/gardenia.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/gardenia.png"]
  },
  {
    id: 79,
    titre: "Matisse 09",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/zebra.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/zebra.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/zebra.png"]
  },
  {
    id: 80,
    titre: "Matisse 10",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/zola.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/zola.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/zola.png"]
  },
  {
    id: 81,
    titre: "Matisse 11",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/luce.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/luce.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/luce.png"]
  },
  {
    id: 82,
    titre: "Matisse 12",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/bragi.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/bragi.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/bragi.png"]
  },
  {
    id: 83,
    titre: "Matisse 13",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/yasmin.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/yasmin.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/yasmin.png"]
  },
  {
    id: 84,
    titre: "Matisse 14",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/mint.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/mint.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/mint.png"]
  },
  {
    id: 85,
    titre: "Matisse 15",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/primrose.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/primrose.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/primrose.png"]
  },
  {
    id: 86,
    titre: "Matisse 16",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/impala.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/impala.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/impala.png"]
  },
  {
    id: 87,
    titre: "Matisse 17",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/thandi.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/thandi.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/thandi.png"]
  },
  {
    id: 88,
    titre: "Matisse 18",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/sera.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/sera.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/sera.png"]
  },
  {
    id: 89,
    titre: "Matisse 19",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/isis.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/isis.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/73c808f3738bb28f65e64eaa5c74ecebca39ebc1/isis.png"]
  },

  {
    id: 90,
    titre: "Abstrait 15",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/paprika.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/paprika.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/paprika.jpg"]
  },
  {
    id: 91,
    titre: "Abstrait 16",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/hibiscus.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/hibiscus.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/hibiscus.jpg"]
  },
  {
    id: 92,
    titre: "Abstrait 17",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/ibis.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/ibis.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/ibis.jpg"]
  },
  {
    id: 93,
    titre: "Abstrait 18",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/kalahari.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/kalahari.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/kalahari.jpg"]
  },
  {
    id: 94,
    titre: "Abstrait 19",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/bellini.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/bellini.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/bellini.jpg"]
  },
  {
    id: 95,
    titre: "Abstrait 20",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/athena.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/athena.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/athena.jpg"]
  },
  {
    id: 96,
    titre: "Abstrait 21",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/leila.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/leila.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/leila.jpg"]
  },
  {
    id: 97,
    titre: "Abstrait 22",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/cardamom.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/cardamom.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/cardamom.jpg"]
  },
  {
    id: 98,
    titre: "Abstrait 23",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/magnolia.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/magnolia.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/magnolia.jpg"]
  },
  {
    id: 99,
    titre: "Abstrait 24",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/falcon.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/falcon.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/falcon.jpg"]
  },
  {
    id: 100,
    titre: "Abstrait 25",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/serengeti.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/serengeti.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/serengeti.jpg"]
  },
  {
    id: 101,
    titre: "Abstrait 26",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/dolce.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/dolce.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/dolce.jpg"]
  },
  {
    id: 102,
    titre: "Abstrait 27",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/artemis.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/artemis.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/artemis.jpg"]
  },
  {
    id: 103,
    titre: "Abstrait 28",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/noor.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/noor.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/noor.jpg"]
  },
  {
    id: 104,
    titre: "Abstrait 29",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/vanilla.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/vanilla.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/vanilla.jpg"]
  },
  {
    id: 105,
    titre: "Abstrait 30",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/camelia.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/camelia.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/camelia.jpg"]
  },
  {
    id: 106,
    titre: "Abstrait 31",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/leopard.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/leopard.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/c1b065a2e60c626c092076f3a37809c0db37e76c/leopard.jpg"]
  },
  {
    id: 107,
    titre: "Géométrie 10",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/kilimanjaro.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/kilimanjaro.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/kilimanjaro.png"]
  },
  {
    id: 108,
    titre: "Géométrie 11",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/vesuvio.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/vesuvio.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/vesuvio.png"]
  },
  {
    id: 109,
    titre: "Géométrie 12",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/gaia.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/gaia.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/gaia.png"]
  },
  {
    id: 110,
    titre: "Géométrie 13",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/yara.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/yara.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/yara.png"]
  },
  {
    id: 111,
    titre: "Géométrie 14",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/mango.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/mango.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/mango.png"]
  },
  {
    id: 112,
    titre: "Géométrie 15",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/lily.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/lily.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/lily.png"]
  },
  {
    id: 113,
    titre: "Géométrie 16",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/panther.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/panther.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/panther.png"]
  },
  {
    id: 114,
    titre: "Géométrie 17",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/sankofa.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/sankofa.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/sankofa.png"]
  },
  {
    id: 115,
    titre: "Géométrie 18",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/capri.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/capri.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/capri.png"]
  },
  {
    id: 116,
    titre: "Géométrie 19",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/rhea.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/rhea.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/rhea.png"]
  },
  {
    id: 117,
    titre: "Géométrie 20",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/mira.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/mira.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/mira.png"]
  },
  {
    id: 118,
    titre: "Géométrie 21",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/papaya.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/papaya.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/papaya.png"]
  },
  {
    id: 119,
    titre: "Géométrie 22",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/jacaranda.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/jacaranda.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/jacaranda.png"]
  },
  {
    id: 120,
    titre: "Géométrie 23",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/lynx.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/lynx.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/lynx.png"]
  },
  {
    id: 121,
    titre: "Géométrie 24",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/ubuntu.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/ubuntu.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/ubuntu.png"]
  },
  {
    id: 122,
    titre: "Géométrie 25",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/siena.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/siena.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/siena.png"]
  },
  {
    id: 123,
    titre: "Géométrie 26",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/calypso.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/calypso.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/calypso.png"]
  },
  {
    id: 124,
    titre: "Géométrie 27",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/aziz.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/aziz.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/aziz.png"]
  },
  {
    id: 125,
    titre: "Géométrie 28",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/guava.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/guava.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/guava.png"]
  },
  {
    id: 126,
    titre: "Géométrie 29",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/frangipani.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/frangipani.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/frangipani.png"]
  },
  {
    id: 127,
    titre: "Géométrie 3",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/heron.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/heron.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/heron.jpg"]
  },
  {
    id: 128,
    titre: "Géométrie 30",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/amani.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/amani.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/amani.png"]
  },
  {
    id: 129,
    titre: "Géométrie 31",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/verona.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/verona.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/verona.png"]
  },
  {
    id: 130,
    titre: "Géométrie 32",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/iris.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/iris.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/iris.png"]
  },
  {
    id: 131,
    titre: "Géométrie 33",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/rami.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/rami.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/rami.png"]
  },
  {
    id: 132,
    titre: "Géométrie 34",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/date.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/date.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/date.png"]
  },
  {
    id: 133,
    titre: "Géométrie 35",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/orchid.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/orchid.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/orchid.png"]
  },
  {
    id: 134,
    titre: "Géométrie 4",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/crane.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/crane.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/crane.jpg"]
  },
  {
    id: 135,
    titre: "Géométrie 5",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/zuri.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/zuri.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/zuri.jpg"]
  },
  {
    id: 136,
    titre: "Géométrie 6",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/murano.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/murano.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/murano.jpg"]
  },
  {
    id: 137,
    titre: "Géométrie 7",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/orion.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/orion.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/orion.png"]
  },
  {
    id: 138,
    titre: "Géométrie 8",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/omar.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/omar.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/omar.png"]
  },
  {
    id: 139,
    titre: "Géométrie 9",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/almond.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/almond.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/30a52602184d2391386cf862ab0b7e4d983c9ff2/almond.png"]
  },
  {
    id: 140,
    titre: "Kid 18",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/nala.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/nala.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/nala.jpg"]
  },
  {
    id: 141,
    titre: "Kid 19",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/fresco.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/fresco.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/fresco.jpg"]
  },
  {
    id: 142,
    titre: "Kid 20",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/aurora.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/aurora.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/aurora.jpg"]
  },
  {
    id: 143,
    titre: "Kid 21",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/farah.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/farah.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/farah.png"]
  },
  {
    id: 144,
    titre: "Kid 22",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/nutmeg.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/nutmeg.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/nutmeg.png"]
  },
  {
    id: 145,
    titre: "Kid 23",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/protea.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/protea.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/protea.png"]
  },
  {
    id: 146,
    titre: "Kid 24",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/antelope.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/antelope.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/antelope.jpg"]
  },
  {
    id: 147,
    titre: "Kid 25",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/simba.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/simba.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/simba.jpg"]
  },
  {
    id: 148,
    titre: "Kid 26",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/bella.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/bella.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/bella.jpg"]
  },
  {
    id: 149,
    titre: "Kid 27",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/freya.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/freya.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/freya.jpg"]
  },
  {
    id: 150,
    titre: "Kid 28",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/nadia.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/nadia.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/nadia.png"]
  },
  {
    id: 151,
    titre: "Kid 29",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/anise.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/anise.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/anise.png"]
  },
  {
    id: 152,
    titre: "Kid 30",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/poppy.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/poppy.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/poppy.jpg"]
  },
  {
    id: 153,
    titre: "Kid 31",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/springbok.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/springbok.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/springbok.png"]
  },
  {
    id: 154,
    titre: "Kid 32",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/asha.png",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/asha.png",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/asha.png"]
  },
  {
    id: 155,
    titre: "Kid 33",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/stella.jpg",
    imageVis: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/stella.jpg",
    photosProduit: ["https://raw.githubusercontent.com/Afrodeco/afrodecoo/7b62b756cc44d7c426caed96f8a50e4d752c0343/stella.jpg"]
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
    photo: "https://raw.githubusercontent.com/Afrodeco/afrodecoo/main/dahlia.JPG",
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
