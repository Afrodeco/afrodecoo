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
    titre: "Saffron",
    artiste: "Afrodeco Studio",
    description: "Une œuvre abstraite qui apporte de la chaleur à votre déco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "saffron.png"
  },
  {
    id: 3,
    titre: "Naya",
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
    titre: "Oryx",
    artiste: "Afrodeco Studio",
    description: "Œuvre abstraite aux tonalités profondes et à la composition équilibrée.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "oryx.png"
  },
  {
    id: 7,
    titre: "Zambezi",
    artiste: "Afrodeco Studio",
    description: "Jeu de formes et de matières inspiré des traditions artistiques africaines.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "zambezi.png"
  },
  {
    id: 8,
    titre: "Fiorella",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite entre ombre et lumière, texture et profondeur.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "fiorella.png"
  },
  {
    id: 9,
    titre: "Apollo",
    artiste: "Afrodeco Studio",
    description: "Œuvre abstraite aux contrastes saisissants, entre douceur et intensité.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "apollo.jpg"
  },
  {
    id: 10,
    titre: "Sienna",
    artiste: "Afrodeco Studio",
    description: "Palette terreuse et formes libres pour une présence apaisante sur vos murs.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "sienna.jpg"
  },
  {
    id: 11,
    titre: "Jasmine",
    artiste: "Afrodeco Studio",
    description: "Une abstraction contemporaine aux influences africaines marquées.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "jasmine.jpg"
  },
  {
    id: 12,
    titre: "Gazelle",
    artiste: "Afrodeco Studio",
    description: "Lignes organiques et matières texturées pour une œuvre pleine de caractère.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "gazelle.jpg"
  },
  {
    id: 13,
    titre: "Sahel",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds, idéale pour sublimer un salon.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "sahel.png"
  },
  {
    id: 14,
    titre: "Terracotta",
    artiste: "Afrodeco Studio",
    description: "Équilibre subtil entre géométrie et spontanéité, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "terracotta.jpg"
  },
  {
    id: 15,
    titre: "Helios",
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
    titre: "Violet",
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
    titre: "Kudu",
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
    titre: "Peony",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "peony.jpg"
  },
  {
    id: 22,
    titre: "Jaguar",
    artiste: "Afrodeco Studio",
    description: "Jeu de formes géométriques et de contrastes pour une présence forte.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "jaguar.jpg"
  },
  {
    id: 23,
    titre: "Lemur",
    artiste: "Afrodeco Studio",
    description: "Photographie d'art tirée sur papier fine-art, numérotée et signée.",
    categorie: "photographie",
    prix: 150,
    dimensions: "60×40 cm",
    image: BASE + "lemur.jpg"
  },
  {
    id: 24,
    titre: "Oya",
    artiste: "Afrodeco Studio",
    description: "Photographie d'art tirée sur papier fine-art, numérotée et signée.",
    categorie: "photographie",
    prix: 150,
    dimensions: "60×40 cm",
    image: BASE + "oya.jpg"
  },
  {
    id: 25,
    titre: "Rosso",
    artiste: "Afrodeco Studio",
    description: "Photographie d'art tirée sur papier fine-art, numérotée et signée.",
    categorie: "photographie",
    prix: 150,
    dimensions: "60×40 cm",
    image: BASE + "rosso.jpg"
  },
  {
    id: 26,
    titre: "Bastet",
    artiste: "Afrodeco Studio",
    description: "Photographie d'art tirée sur papier fine-art, numérotée et signée.",
    categorie: "photographie",
    prix: 150,
    dimensions: "60×40 cm",
    image: BASE + "bastet.jpg"
  },
  {
    id: 27,
    titre: "Nour",
    artiste: "Afrodeco Studio",
    description: "Photographie d'art tirée sur papier fine-art, numérotée et signée.",
    categorie: "photographie",
    prix: 150,
    dimensions: "60×40 cm",
    image: BASE + "nour.jpg"
  },
  {
    id: 28,
    titre: "Citron",
    artiste: "Afrodeco Studio",
    description: "Photographie d'art tirée sur papier fine-art, numérotée et signée.",
    categorie: "photographie",
    prix: 150,
    dimensions: "60×40 cm",
    image: BASE + "citron.jpg"
  },
  {
    id: 29,
    titre: "Tulip",
    artiste: "Afrodeco Studio",
    description: "Photographie d'art tirée sur papier fine-art, numérotée et signée.",
    categorie: "photographie",
    prix: 150,
    dimensions: "60×40 cm",
    image: BASE + "tulip.jpg"
  },
  {
    id: 30,
    titre: "Fennec",
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
    titre: "Jamal",
    artiste: "Afrodeco Studio",
    description: "Œuvre inspirée de la nature africaine, entre végétation luxuriante et sérénité.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "jamal.png"
  },
  {
    id: 33,
    titre: "Zinnia",
    artiste: "Afrodeco Studio",
    description: "Œuvre inspirée de la nature africaine, entre végétation luxuriante et sérénité.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "zinnia.png"
  },
  {
    id: 34,
    titre: "Okapi",
    artiste: "Afrodeco Studio",
    description: "Œuvre inspirée de la nature africaine, entre végétation luxuriante et sérénité.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "okapi.png"
  },
  {
    id: 35,
    titre: "Ife",
    artiste: "Afrodeco Studio",
    description: "Œuvre inspirée de la nature africaine, entre végétation luxuriante et sérénité.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "ife.png"
  },
  {
    id: 36,
    titre: "Perla",
    artiste: "Afrodeco Studio",
    description: "Œuvre inspirée de la nature africaine, entre végétation luxuriante et sérénité.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "perla.png"
  },
  {
    id: 37,
    titre: "Anubis",
    artiste: "Afrodeco Studio",
    description: "Œuvre inspirée de la nature africaine, entre végétation luxuriante et sérénité.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "anubis.png"
  },
  {
    id: 38,
    titre: "Zaid",
    artiste: "Afrodeco Studio",
    description: "Œuvre inspirée de la nature africaine, entre végétation luxuriante et sérénité.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "zaid.png"
  },
  {
    id: 39,
    titre: "Melon",
    artiste: "Afrodeco Studio",
    description: "Œuvre inspirée de la nature africaine, entre végétation luxuriante et sérénité.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "melon.png"
  },
  {
    id: 40,
    titre: "Aster",
    artiste: "Afrodeco Studio",
    description: "Œuvre inspirée de la nature africaine, entre végétation luxuriante et sérénité.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "aster.png"
  },
  {
    id: 41,
    titre: "Cherry",
    artiste: "Afrodeco Studio",
    description: "Œuvre inspirée de la nature africaine, entre végétation luxuriante et sérénité.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "cherry.png"
  },
  {
    id: 42,
    titre: "Cinnamon",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "cinnamon.png"
  },
  {
    id: 43,
    titre: "Kestrel",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "kestrel.png"
  },
  {
    id: 44,
    titre: "Kofi",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "kofi.png"
  },
  {
    id: 45,
    titre: "Toscana",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "toscana.png"
  },
  {
    id: 46,
    titre: "Persephone",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "persephone.png"
  },
  {
    id: 47,
    titre: "Salma",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "salma.png"
  },
  {
    id: 48,
    titre: "Clove",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "clove.png"
  },
  {
    id: 49,
    titre: "Oleander",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "oleander.png"
  },
  {
    id: 50,
    titre: "Osprey",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "osprey.png"
  },
  {
    id: 51,
    titre: "Azalea",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "azalea.png"
  },
  {
    id: 52,
    titre: "Raven",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "raven.png"
  },
  {
    id: 53,
    titre: "Ayo",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "ayo.png"
  },
  {
    id: 54,
    titre: "Portofino",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "portofino.png"
  },
  {
    id: 55,
    titre: "Pandora",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "pandora.png"
  },
  {
    id: 56,
    titre: "Rania",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "rania.png"
  },
  {
    id: 57,
    titre: "Ginger",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "ginger.png"
  },
  {
    id: 58,
    titre: "Mimosa",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "mimosa.png"
  },
  {
    id: 59,
    titre: "Tamarind",
    artiste: "Afrodeco Studio",
    description: "Citation inspirante pour dynamiser votre espace de travail.",
    categorie: "office",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "tamarind.png"
  },
  {
    id: 60,
    titre: "Serval",
    artiste: "Afrodeco Studio",
    description: "Citation inspirante pour dynamiser votre espace de travail.",
    categorie: "office",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "serval.png"
  },
  {
    id: 61,
    titre: "Anansi",
    artiste: "Afrodeco Studio",
    description: "Citation inspirante pour dynamiser votre espace de travail.",
    categorie: "office",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "anansi.png"
  },
  {
    id: 62,
    titre: "Viola",
    artiste: "Afrodeco Studio",
    description: "Citation inspirante pour dynamiser votre espace de travail.",
    categorie: "office",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "viola.png"
  },
  {
    id: 63,
    titre: "Thoth",
    artiste: "Afrodeco Studio",
    description: "Citation inspirante pour dynamiser votre espace de travail.",
    categorie: "office",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "thoth.png"
  },
  {
    id: 64,
    titre: "Rim",
    artiste: "Afrodeco Studio",
    description: "Citation inspirante pour dynamiser votre espace de travail.",
    categorie: "office",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "rim.png"
  },
  {
    id: 65,
    titre: "Sesame",
    artiste: "Afrodeco Studio",
    description: "Citation inspirante pour dynamiser votre espace de travail.",
    categorie: "office",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "sesame.png"
  },
  {
    id: 66,
    titre: "Caracal",
    artiste: "Afrodeco Studio",
    description: "Citation inspirante pour dynamiser votre espace de travail.",
    categorie: "office",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "caracal.png"
  },
  {
    id: 67,
    titre: "Plaines",
    artiste: "Afrodeco Studio",
    description: "Une œuvre aux teintes douces et apaisantes, inspirée des grandes plaines africaines. Idéale pour créer une ambiance sereine dans votre espace.",
    categorie: "nature",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "yemoja.png",
    imageVis: BASE + "sekhmet.png",
    photosProduit: [
      BASE + "yemoja.png",
      BASE + "azzurro.png",
      BASE + "sekhmet.png",
      BASE + "dina.png"
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
    image: BASE + "eos.png",
    imageVis: BASE + "eos.png",
    photosProduit: [
      BASE + "eos.png",
      BASE + "dalia.png",
      BASE + "timbuktu.png",
      BASE + "sole.png"
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
      BASE + "cheetah.png",
      BASE + "zanzibar.png"
    ],
    imageVis: BASE + "aria.png",
    photosProduit: [
      BASE + "aria.png",
      BASE + "nyx.png",
      BASE + "soraya.png",
      BASE + "cheetah.png",
      BASE + "zanzibar.png"
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
    titre: "Amira",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "amira.png",
    imageVis: BASE + "amira.png",
    photosProduit: [BASE + "amira.png"]
  },
  {
    id: 77,
    titre: "Peach",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "peach.png",
    imageVis: BASE + "peach.png",
    photosProduit: [BASE + "peach.png"]
  },
  {
    id: 78,
    titre: "Gardenia",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "gardenia.png",
    imageVis: BASE + "gardenia.png",
    photosProduit: [BASE + "gardenia.png"]
  },
  {
    id: 79,
    titre: "Zebra",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "zebra.png",
    imageVis: BASE + "zebra.png",
    photosProduit: [BASE + "zebra.png"]
  },
  {
    id: 80,
    titre: "Zola",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "zola.png",
    imageVis: BASE + "zola.png",
    photosProduit: [BASE + "zola.png"]
  },
  {
    id: 81,
    titre: "Luce",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "luce.png",
    imageVis: BASE + "luce.png",
    photosProduit: [BASE + "luce.png"]
  },
  {
    id: 82,
    titre: "Bragi",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "bragi.png",
    imageVis: BASE + "bragi.png",
    photosProduit: [BASE + "bragi.png"]
  },
  {
    id: 83,
    titre: "Yasmin",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "yasmin.png",
    imageVis: BASE + "yasmin.png",
    photosProduit: [BASE + "yasmin.png"]
  },
  {
    id: 84,
    titre: "Mint",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "mint.png",
    imageVis: BASE + "mint.png",
    photosProduit: [BASE + "mint.png"]
  },
  {
    id: 85,
    titre: "Primrose",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "primrose.png",
    imageVis: BASE + "primrose.png",
    photosProduit: [BASE + "primrose.png"]
  },
  {
    id: 86,
    titre: "Impala",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "impala.png",
    imageVis: BASE + "impala.png",
    photosProduit: [BASE + "impala.png"]
  },
  {
    id: 87,
    titre: "Thandi",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "thandi.png",
    imageVis: BASE + "thandi.png",
    photosProduit: [BASE + "thandi.png"]
  },
  {
    id: 88,
    titre: "Sera",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "sera.png",
    imageVis: BASE + "sera.png",
    photosProduit: [BASE + "sera.png"]
  },
  {
    id: 89,
    titre: "Isis",
    artiste: "Afrodeco Studio",
    description: "Composition dans l'esprit Matisse, aux formes épurées et aux couleurs apaisantes.",
    categorie: "matisse",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "isis.png",
    imageVis: BASE + "isis.png",
    photosProduit: [BASE + "isis.png"]
  },

  {
    id: 90,
    titre: "Paprika",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "paprika.jpg",
    imageVis: BASE + "paprika.jpg",
    photosProduit: [BASE + "paprika.jpg"]
  },
  {
    id: 91,
    titre: "Hibiscus",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "hibiscus.jpg",
    imageVis: BASE + "hibiscus.jpg",
    photosProduit: [BASE + "hibiscus.jpg"]
  },
  {
    id: 92,
    titre: "Ibis",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "ibis.jpg",
    imageVis: BASE + "ibis.jpg",
    photosProduit: [BASE + "ibis.jpg"]
  },
  {
    id: 93,
    titre: "Kalahari",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "kalahari.jpg",
    imageVis: BASE + "kalahari.jpg",
    photosProduit: [BASE + "kalahari.jpg"]
  },
  {
    id: 94,
    titre: "Bellini",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "bellini.jpg",
    imageVis: BASE + "bellini.jpg",
    photosProduit: [BASE + "bellini.jpg"]
  },
  {
    id: 95,
    titre: "Athena",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "athena.jpg",
    imageVis: BASE + "athena.jpg",
    photosProduit: [BASE + "athena.jpg"]
  },
  {
    id: 96,
    titre: "Leila",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "leila.jpg",
    imageVis: BASE + "leila.jpg",
    photosProduit: [BASE + "leila.jpg"]
  },
  {
    id: 97,
    titre: "Cardamom",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "cardamom.jpg",
    imageVis: BASE + "cardamom.jpg",
    photosProduit: [BASE + "cardamom.jpg"]
  },
  {
    id: 98,
    titre: "Magnolia",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "magnolia.jpg",
    imageVis: BASE + "magnolia.jpg",
    photosProduit: [BASE + "magnolia.jpg"]
  },
  {
    id: 99,
    titre: "Falcon",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "falcon.jpg",
    imageVis: BASE + "falcon.jpg",
    photosProduit: [BASE + "falcon.jpg"]
  },
  {
    id: 100,
    titre: "Serengeti",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "serengeti.jpg",
    imageVis: BASE + "serengeti.jpg",
    photosProduit: [BASE + "serengeti.jpg"]
  },
  {
    id: 101,
    titre: "Dolce",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "dolce.jpg",
    imageVis: BASE + "dolce.jpg",
    photosProduit: [BASE + "dolce.jpg"]
  },
  {
    id: 102,
    titre: "Artemis",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "artemis.jpg",
    imageVis: BASE + "artemis.jpg",
    photosProduit: [BASE + "artemis.jpg"]
  },
  {
    id: 103,
    titre: "Noor",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "noor.jpg",
    imageVis: BASE + "noor.jpg",
    photosProduit: [BASE + "noor.jpg"]
  },
  {
    id: 104,
    titre: "Vanilla",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "vanilla.jpg",
    imageVis: BASE + "vanilla.jpg",
    photosProduit: [BASE + "vanilla.jpg"]
  },
  {
    id: 105,
    titre: "Camelia",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "camelia.jpg",
    imageVis: BASE + "camelia.jpg",
    photosProduit: [BASE + "camelia.jpg"]
  },
  {
    id: 106,
    titre: "Leopard",
    artiste: "Afrodeco Studio",
    description: "Composition abstraite aux tons chauds et aux formes organiques, signature Afrodeco.",
    categorie: "abstrait",
    prix: 184,
    dimensions: "120×80 cm",
    image: BASE + "leopard.jpg",
    imageVis: BASE + "leopard.jpg",
    photosProduit: [BASE + "leopard.jpg"]
  },
  {
    id: 107,
    titre: "Kilimanjaro",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "kilimanjaro.png",
    imageVis: BASE + "kilimanjaro.png",
    photosProduit: [BASE + "kilimanjaro.png"]
  },
  {
    id: 108,
    titre: "Vesuvio",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "vesuvio.png",
    imageVis: BASE + "vesuvio.png",
    photosProduit: [BASE + "vesuvio.png"]
  },
  {
    id: 109,
    titre: "Gaia",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "gaia.png",
    imageVis: BASE + "gaia.png",
    photosProduit: [BASE + "gaia.png"]
  },
  {
    id: 110,
    titre: "Yara",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "yara.png",
    imageVis: BASE + "yara.png",
    photosProduit: [BASE + "yara.png"]
  },
  {
    id: 111,
    titre: "Mango",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "mango.png",
    imageVis: BASE + "mango.png",
    photosProduit: [BASE + "mango.png"]
  },
  {
    id: 112,
    titre: "Lily",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "lily.png",
    imageVis: BASE + "lily.png",
    photosProduit: [BASE + "lily.png"]
  },
  {
    id: 113,
    titre: "Panther",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "panther.png",
    imageVis: BASE + "panther.png",
    photosProduit: [BASE + "panther.png"]
  },
  {
    id: 114,
    titre: "Sankofa",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "sankofa.png",
    imageVis: BASE + "sankofa.png",
    photosProduit: [BASE + "sankofa.png"]
  },
  {
    id: 115,
    titre: "Capri",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "capri.png",
    imageVis: BASE + "capri.png",
    photosProduit: [BASE + "capri.png"]
  },
  {
    id: 116,
    titre: "Rhea",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "rhea.png",
    imageVis: BASE + "rhea.png",
    photosProduit: [BASE + "rhea.png"]
  },
  {
    id: 117,
    titre: "Mira",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "mira.png",
    imageVis: BASE + "mira.png",
    photosProduit: [BASE + "mira.png"]
  },
  {
    id: 118,
    titre: "Papaya",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "papaya.png",
    imageVis: BASE + "papaya.png",
    photosProduit: [BASE + "papaya.png"]
  },
  {
    id: 119,
    titre: "Jacaranda",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "jacaranda.png",
    imageVis: BASE + "jacaranda.png",
    photosProduit: [BASE + "jacaranda.png"]
  },
  {
    id: 120,
    titre: "Lynx",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "lynx.png",
    imageVis: BASE + "lynx.png",
    photosProduit: [BASE + "lynx.png"]
  },
  {
    id: 121,
    titre: "Ubuntu",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "ubuntu.png",
    imageVis: BASE + "ubuntu.png",
    photosProduit: [BASE + "ubuntu.png"]
  },
  {
    id: 122,
    titre: "Siena",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "siena.png",
    imageVis: BASE + "siena.png",
    photosProduit: [BASE + "siena.png"]
  },
  {
    id: 123,
    titre: "Calypso",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "calypso.png",
    imageVis: BASE + "calypso.png",
    photosProduit: [BASE + "calypso.png"]
  },
  {
    id: 124,
    titre: "Aziz",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "aziz.png",
    imageVis: BASE + "aziz.png",
    photosProduit: [BASE + "aziz.png"]
  },
  {
    id: 125,
    titre: "Guava",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "guava.png",
    imageVis: BASE + "guava.png",
    photosProduit: [BASE + "guava.png"]
  },
  {
    id: 126,
    titre: "Frangipani",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "frangipani.png",
    imageVis: BASE + "frangipani.png",
    photosProduit: [BASE + "frangipani.png"]
  },
  {
    id: 127,
    titre: "Heron",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "heron.jpg",
    imageVis: BASE + "heron.jpg",
    photosProduit: [BASE + "heron.jpg"]
  },
  {
    id: 128,
    titre: "Amani",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "amani.png",
    imageVis: BASE + "amani.png",
    photosProduit: [BASE + "amani.png"]
  },
  {
    id: 129,
    titre: "Verona",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "verona.png",
    imageVis: BASE + "verona.png",
    photosProduit: [BASE + "verona.png"]
  },
  {
    id: 130,
    titre: "Iris",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "iris.png",
    imageVis: BASE + "iris.png",
    photosProduit: [BASE + "iris.png"]
  },
  {
    id: 131,
    titre: "Rami",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "rami.png",
    imageVis: BASE + "rami.png",
    photosProduit: [BASE + "rami.png"]
  },
  {
    id: 132,
    titre: "Date",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "date.png",
    imageVis: BASE + "date.png",
    photosProduit: [BASE + "date.png"]
  },
  {
    id: 133,
    titre: "Orchid",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "orchid.png",
    imageVis: BASE + "orchid.png",
    photosProduit: [BASE + "orchid.png"]
  },
  {
    id: 134,
    titre: "Crane",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "crane.jpg",
    imageVis: BASE + "crane.jpg",
    photosProduit: [BASE + "crane.jpg"]
  },
  {
    id: 135,
    titre: "Zuri",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "zuri.jpg",
    imageVis: BASE + "zuri.jpg",
    photosProduit: [BASE + "zuri.jpg"]
  },
  {
    id: 136,
    titre: "Murano",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "murano.jpg",
    imageVis: BASE + "murano.jpg",
    photosProduit: [BASE + "murano.jpg"]
  },
  {
    id: 137,
    titre: "Orion",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "orion.png",
    imageVis: BASE + "orion.png",
    photosProduit: [BASE + "orion.png"]
  },
  {
    id: 138,
    titre: "Omar",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "omar.png",
    imageVis: BASE + "omar.png",
    photosProduit: [BASE + "omar.png"]
  },
  {
    id: 139,
    titre: "Almond",
    artiste: "Afrodeco Studio",
    description: "Composition géométrique aux formes précises et aux lignes épurées.",
    categorie: "geometrique",
    prix: 145,
    dimensions: "130×130 cm",
    image: BASE + "almond.png",
    imageVis: BASE + "almond.png",
    photosProduit: [BASE + "almond.png"]
  },
  {
    id: 140,
    titre: "Nala",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "nala.jpg",
    imageVis: BASE + "nala.jpg",
    photosProduit: [BASE + "nala.jpg"]
  },
  {
    id: 141,
    titre: "Fresco",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "fresco.jpg",
    imageVis: BASE + "fresco.jpg",
    photosProduit: [BASE + "fresco.jpg"]
  },
  {
    id: 142,
    titre: "Aurora",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "aurora.jpg",
    imageVis: BASE + "aurora.jpg",
    photosProduit: [BASE + "aurora.jpg"]
  },
  {
    id: 143,
    titre: "Farah",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "farah.png",
    imageVis: BASE + "farah.png",
    photosProduit: [BASE + "farah.png"]
  },
  {
    id: 144,
    titre: "Nutmeg",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "nutmeg.png",
    imageVis: BASE + "nutmeg.png",
    photosProduit: [BASE + "nutmeg.png"]
  },
  {
    id: 145,
    titre: "Protea",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "protea.png",
    imageVis: BASE + "protea.png",
    photosProduit: [BASE + "protea.png"]
  },
  {
    id: 146,
    titre: "Antelope",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "antelope.jpg",
    imageVis: BASE + "antelope.jpg",
    photosProduit: [BASE + "antelope.jpg"]
  },
  {
    id: 147,
    titre: "Simba",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "simba.jpg",
    imageVis: BASE + "simba.jpg",
    photosProduit: [BASE + "simba.jpg"]
  },
  {
    id: 148,
    titre: "Bella",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "bella.jpg",
    imageVis: BASE + "bella.jpg",
    photosProduit: [BASE + "bella.jpg"]
  },
  {
    id: 149,
    titre: "Freya",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "freya.jpg",
    imageVis: BASE + "freya.jpg",
    photosProduit: [BASE + "freya.jpg"]
  },
  {
    id: 150,
    titre: "Nadia",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "nadia.png",
    imageVis: BASE + "nadia.png",
    photosProduit: [BASE + "nadia.png"]
  },
  {
    id: 151,
    titre: "Anise",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "anise.png",
    imageVis: BASE + "anise.png",
    photosProduit: [BASE + "anise.png"]
  },
  {
    id: 152,
    titre: "Poppy",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "poppy.jpg",
    imageVis: BASE + "poppy.jpg",
    photosProduit: [BASE + "poppy.jpg"]
  },
  {
    id: 153,
    titre: "Springbok",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "springbok.png",
    imageVis: BASE + "springbok.png",
    photosProduit: [BASE + "springbok.png"]
  },
  {
    id: 154,
    titre: "Asha",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "asha.png",
    imageVis: BASE + "asha.png",
    photosProduit: [BASE + "asha.png"]
  },
  {
    id: 155,
    titre: "Stella",
    artiste: "Afrodeco Studio",
    description: "Illustration colorée et joyeuse pour décorer la chambre de votre enfant.",
    categorie: "enfants",
    prix: 145,
    dimensions: "50×70 cm",
    image: BASE + "stella.jpg",
    imageVis: BASE + "stella.jpg",
    photosProduit: [BASE + "stella.jpg"]
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
    photo: BASE + "dahlia.JPG",
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
