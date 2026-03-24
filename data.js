// ============================================================
//  AFRODECO — FICHIER DE DONNÉES
//  Pour ajouter un tableau : copie un bloc { ... } et modifie
//  Pour ajouter un artiste : copie un bloc dans ARTISTES
// ============================================================

const TABLEAUX = [
  {
    id: 1,
    titre: "Abstrait",
    artiste: "Afrodeco Studio",
    description: "Une œuvre abstraite qui apporte de la chaleur à votre déco.",
    categorie: "art-contemporain",
    prix: 184,
    dimensions: "120/80 cm",
    image: "https://github.com/Afrodeco/afrodecoo/blob/bb317b94a5eba7a1b83625cf8283354f35fbde6b/Abstrait%20%201%20(126%20x%2086%20cm).png"
  },
  {
    id: 2,
    titre: "Éclat d'Harmattan",
    artiste: "Afrodeco Studio",
    description: "Abstraction inspirée des vents chauds du Sahel, entre force et douceur.",
    categorie: "abstrait",
    prix: 350,
    dimensions: "60×80 cm",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80"
  },
  {
    id: 3,
    titre: "Lumières du Kalahari",
    artiste: "Afrodeco Studio",
    description: "La savane africaine capturée dans ses teintes les plus envoûtantes.",
    categorie: "nature",
    prix: 420,
    dimensions: "80×100 cm",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80"
  },
  {
    id: 4,
    titre: "Femme Dogon",
    artiste: "Kemi Adeyemi",
    description: "Portrait délicat issu de la tradition Dogon, revisitée en art contemporain.",
    categorie: "portrait",
    prix: 260,
    dimensions: "30×40 cm",
    image: "https://images.unsplash.com/photo-1580130379624-3a069adbffc5?w=800&q=80"
  },
  {
    id: 5,
    titre: "Tissu Kente",
    artiste: "Kemi Adeyemi",
    description: "Hommage aux motifs géométriques du tissu Kente, patrimoine immatériel ghanéen.",
    categorie: "geometrique",
    prix: 310,
    dimensions: "50×70 cm",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80"
  },
  {
    id: 6,
    titre: "Baobab au Crépuscule",
    artiste: "Afrodeco Studio",
    description: "L'arbre sacré africain sous un ciel embrasé — majestueux et intemporel.",
    categorie: "nature",
    prix: 480,
    dimensions: "100×120 cm",
    image: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&q=80"
  },
  {
    id: 7,
    titre: "Petit Prince de Lagos",
    artiste: "Afrodeco Studio",
    description: "Une œuvre colorée et douce, idéale pour illuminer la chambre d'un enfant.",
    categorie: "enfants",
    prix: 195,
    dimensions: "30×40 cm",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&q=80"
  },
  {
    id: 8,
    titre: "Relief Sahara",
    artiste: "Kemi Adeyemi",
    description: "Art texturé en relief, inspiré des dunes et formations rocheuses du désert.",
    categorie: "texture",
    prix: 520,
    dimensions: "60×80 cm",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80"
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
