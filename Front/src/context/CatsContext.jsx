import { createContext, useContext, useState, useMemo } from "react";

const CatsContext = createContext();

export const useCats = () => {
  const context = useContext(CatsContext);
  if (!context) {
    throw new Error("useCats must be used within a CatsProvider");
  }
  return context;
};

// Données initiales enrichies
const initialCats = [
  {
    id: 1,
    name: "Mimi",
    age: 3,
    breed: "Persan",
    gender: "Femelle",
    description:
      "Mimi est une chatte douce et calme, parfaite avec les enfants. Elle adore les câlins et passer du temps sur les genoux. Elle a été trouvée dans un parc et a reçu tous les soins nécessaires. Elle est très sociable et s'adapte facilement aux nouvelles situations.",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600",
    vaccinated: true,
    sterilized: true,
    vaccinatedDate: "2024-01-15",
    identificationNumber: "FR250123456789",
    location: "Paris",
    childFriendly: true,
    specialNeeds: false,
    specialNeedsDescription: "",
    aggressive: false,
    aggressiveDetails: "",
    adoptionFee: 150,
    available: true,
    arrivalDate: "2024-01-10",
    weight: 4.2,
    color: "Blanc et crème",
    personality: ["Calme", "Affectueuse", "Sociable", "Joueur"],
    health: {
      status: "Excellent",
      lastCheckup: "2024-01-15",
      notes: "En parfaite santé, tous les vaccins à jour",
    },
    history:
      "Mimi a été trouvée dans un parc parisien. Elle était très maigre et avait besoin de soins. Après plusieurs semaines de soins vétérinaires et d'affection, elle est maintenant prête à trouver une famille aimante.",
    criteria: {
      experience: "débutant",
      children: true,
      childrenAgeMin: 3,
      otherPets: true,
      otherPetsTypes: ["chats", "chiens"],
      space: "appartement",
      activity: "calme",
      timeAvailability: "moyen",
      garden: false,
    },
    photos: [
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600",
      "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=600",
    ],
    physicalCharacteristics: {
      size: "Moyen",
      coatLength: "Long",
      coatType: "Dense et soyeux",
      eyeColor: "Or et vert",
      tailLength: "Longue et touffue",
      earType: "Petites et arrondies",
      build: "Robuste",
    },
    behavior: {
      activityLevel: "Calme",
      playfulness: "Modéré",
      independence: "Moyen",
      sociability: "Très sociable",
      vocalization: "Peu vocal",
      groomingNeeds: "Élevé (brossage quotidien recommandé)",
      energyLevel: "Faible à modéré",
      curiosity: "Modérée",
      adaptability: "Excellente",
    },
    preferences: {
      favoriteActivities: [
        "Dormir sur les genoux",
        "Jouer avec des peluches",
        "Regarder par la fenêtre",
      ],
      favoriteFood: "Croquettes premium pour chat d'intérieur",
      favoriteToys: [
        "Balles en laine",
        "Plumes suspendues",
        "Souris en peluche",
      ],
      sleepSchedule: "Dort beaucoup, surtout l'après-midi",
      preferredSpots: ["Canapé", "Lit", "Fenêtre ensoleillée"],
      socialPreference: "Aime la compagnie humaine constante",
    },
    careInstructions: {
      feeding: "2 repas par jour, portions de 60g de croquettes + 50g de pâtée",
      grooming: "Brossage quotidien obligatoire, bain mensuel recommandé",
      exercise: "Jeux modérés 15-20 min par jour",
      litterBox:
        "Changez la litière tous les 2-3 jours, préférence pour litière agglomérante",
      vetVisits: "Contrôle annuel, vaccination annuelle",
    },
    medicalHistory: {
      surgeries: ["Stérilisation - 2024-01-10"],
      treatments: ["Vermifuge - 2024-01-12", "Anti-parasitaires - 2024-01-12"],
      allergies: "Aucune connue",
      medications: "Aucune",
      chronicConditions: "Aucune",
    },
    dailyRoutine: {
      morning: "Réveil vers 7h, petit-déjeuner, sieste sur le canapé",
      afternoon: "Jeux légers, observation de la fenêtre, sieste prolongée",
      evening: "Repas du soir, câlins et moments de détente avec les humains",
      night: "Dort dans un panier douillet ou sur le lit",
    },
    training: {
      litterTrained: true,
      leashTrained: false,
      commands: ["Répond au nom", "Vient quand on l'appelle"],
      tricks: ["Assis", "Donne la patte"],
      behavioralNotes: "Très obéissante, répond bien aux récompenses positives",
    },
    environmentNeeds: {
      indoor: true,
      outdoor: false,
      temperature: "Température ambiante confortable (18-22°C)",
      space: "Minimum 20m², aime avoir plusieurs espaces de repos",
      accessories: [
        "Griffoir vertical obligatoire",
        "Plusieurs gamelles",
        "Paniers douillets",
      ],
    },
  },
  {
    id: 2,
    name: "Max",
    age: 5,
    breed: "Européen",
    gender: "Mâle",
    description:
      "Max est un chat actif et joueur, idéal pour une famille avec jardin. Il adore courir et jouer à l'extérieur. Très intelligent et curieux, il a besoin d'activité régulière. Il aime aussi les moments de calme et les câlins le soir.",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600",
    vaccinated: true,
    sterilized: true,
    vaccinatedDate: "2024-02-01",
    identificationNumber: "FR250987654321",
    location: "Lyon",
    childFriendly: true,
    specialNeeds: false,
    specialNeedsDescription: "",
    aggressive: false,
    aggressiveDetails: "",
    adoptionFee: 120,
    available: true,
    arrivalDate: "2024-01-20",
    weight: 5.8,
    color: "Tigré roux",
    personality: ["Actif", "Joueur", "Intelligent", "Indépendant"],
    health: {
      status: "Excellent",
      lastCheckup: "2024-02-01",
      notes: "Chat en très bonne santé, très actif",
    },
    history:
      "Max était le chat d'une famille qui a dû déménager à l'étranger. Il a passé plusieurs mois dans notre refuge et s'adapte très bien. Il cherche maintenant une nouvelle famille avec de l'espace pour s'épanouir.",
    criteria: {
      experience: "intermédiaire",
      children: true,
      childrenAgeMin: 6,
      otherPets: false,
      otherPetsTypes: [],
      space: "maison",
      activity: "actif",
      timeAvailability: "élevé",
      garden: true,
    },
    photos: [
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600",
    ],
    physicalCharacteristics: {
      size: "Grand",
      coatLength: "Court",
      coatType: "Dense et lustré",
      eyeColor: "Jaune et vert",
      tailLength: "Moyenne",
      earType: "Moyennes et pointues",
      build: "Athlétique",
    },
    behavior: {
      activityLevel: "Actif",
      playfulness: "Élevé",
      independence: "Élevé",
      sociability: "Sociable mais indépendant",
      vocalization: "Modéré",
      groomingNeeds: "Faible (brossage hebdomadaire suffisant)",
      energyLevel: "Élevé",
      curiosity: "Très élevée",
      adaptability: "Bonne",
    },
    preferences: {
      favoriteActivities: [
        "Courir dans le jardin",
        "Chasser les jouets",
        "Escalader",
        "Explorer",
      ],
      favoriteFood: "Croquettes actives, aime la variété",
      favoriteToys: ["Canne à pêche", "Laser", "Ballons", "Objets qui roulent"],
      sleepSchedule: "Dort la nuit, actif le jour",
      preferredSpots: ["Jardin", "Arbre à chat", "Hauteurs"],
      socialPreference:
        "Aime l'indépendance mais apprécie les moments de jeu avec les humains",
    },
    careInstructions: {
      feeding:
        "2-3 repas par jour, portions de 80g de croquettes, activité physique importante",
      grooming: "Brossage 2-3 fois par semaine",
      exercise:
        "Minimum 1h d'activité par jour, idéalement avec accès extérieur",
      litterBox: "Litière à changer tous les 2 jours, préfère litière minérale",
      vetVisits: "Contrôle annuel, vaccination annuelle",
    },
    medicalHistory: {
      surgeries: ["Stérilisation - 2024-01-22"],
      treatments: ["Vermifuge - 2024-01-22", "Anti-parasitaires - 2024-01-22"],
      allergies: "Aucune connue",
      medications: "Aucune",
      chronicConditions: "Aucune",
    },
    dailyRoutine: {
      morning: "Réveil actif vers 6h, petit-déjeuner, exploration du jardin",
      afternoon: "Sieste courte, jeux actifs, observation des oiseaux",
      evening: "Repas du soir, dernière session de jeux, retour à l'intérieur",
      night: "Dort calmement après une journée active",
    },
    training: {
      litterTrained: true,
      leashTrained: false,
      commands: ["Répond au nom", "Vient", "Assis"],
      tricks: ["Saut", "Rapporte"],
      behavioralNotes:
        "Très intelligent, apprend rapidement, a besoin de stimulation mentale",
    },
    environmentNeeds: {
      indoor: false,
      outdoor: true,
      temperature: "Adaptable, supporte bien le froid modéré",
      space: "Besoin d'espace extérieur sécurisé (jardin) minimum 50m²",
      accessories: [
        "Arbre à chat multi-niveaux",
        "Griffoirs variés",
        "Jouets interactifs",
        "Accès extérieur sécurisé",
      ],
    },
  },
  {
    id: 3,
    name: "Luna",
    age: 2,
    breed: "Siamois",
    gender: "Femelle",
    description:
      "Luna a besoin d'une famille patiente. Elle a un handicap à la patte arrière droite mais est très affectueuse. Elle se déplace parfaitement et adore les jeux. Elle a juste besoin d'un peu plus d'attention et de compréhension.",
    image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=600",
    vaccinated: true,
    sterilized: true,
    vaccinatedDate: "2024-01-25",
    identificationNumber: "FR250555666777",
    location: "Marseille",
    childFriendly: false,
    specialNeeds: true,
    specialNeedsDescription:
      "Handicap à la patte arrière droite suite à un accident. Nécessite des surfaces non glissantes et évite les enfants en bas âge qui pourraient accidentellement lui faire mal.",
    aggressive: false,
    aggressiveDetails: "",
    adoptionFee: 100,
    available: true,
    arrivalDate: "2023-12-15",
    weight: 3.5,
    color: "Crème et chocolat",
    personality: ["Affectueuse", "Calme", "Patient", "Sociable"],
    health: {
      status: "Bon",
      lastCheckup: "2024-01-25",
      notes:
        "Handicap stable, aucun traitement particulier nécessaire, suivi vétérinaire semestriel recommandé",
    },
    history:
      "Luna a été victime d'un accident de la route. Après plusieurs opérations et des mois de rééducation, elle se porte bien mais garde un handicap à la patte. Elle cherche une famille calme et attentionnée.",
    criteria: {
      experience: "expérimenté",
      children: false,
      childrenAgeMin: null,
      otherPets: false,
      otherPetsTypes: [],
      space: "calme",
      activity: "calme",
      timeAvailability: "élevé",
      garden: false,
    },
    photos: [
      "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=600",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600",
    ],
    physicalCharacteristics: {
      size: "Petit à moyen",
      coatLength: "Court",
      coatType: "Fin et serré",
      eyeColor: "Bleu profond",
      tailLength: "Longue et fine",
      earType: "Grandes et pointues",
      build: "Svelte et élégante",
    },
    behavior: {
      activityLevel: "Calme",
      playfulness: "Modéré",
      independence: "Faible",
      sociability: "Sociable mais méfiante",
      vocalization: "Vocal (miaule souvent)",
      groomingNeeds: "Faible (brossage hebdomadaire)",
      energyLevel: "Faible",
      curiosity: "Modérée",
      adaptability: "Moyenne, besoin de temps",
    },
    preferences: {
      favoriteActivities: [
        "Câlins doux",
        "Jeux calmes",
        "Observer",
        "Se percher en hauteur",
      ],
      favoriteFood: "Pâtée humide, préfère les textures douces",
      favoriteToys: [
        "Plumes douces",
        "Peluches",
        "Jeux de recherche de nourriture",
      ],
      sleepSchedule: "Dort beaucoup, siestes fréquentes",
      preferredSpots: [
        "Paniers douillets",
        "Endroits calmes et élevés",
        "Près des radiateurs",
      ],
      socialPreference: "Préfère un environnement calme avec peu de visiteurs",
    },
    careInstructions: {
      feeding:
        "Petits repas fréquents (3-4 fois par jour), portions de 40g, alimentation douce",
      grooming:
        "Brossage 2 fois par semaine, attention particulière aux zones sensibles",
      exercise: "Jeux très doux 10-15 min par jour, pas de mouvements brusques",
      litterBox:
        "Litière fine et douce, changement quotidien, hauteur réduite recommandée",
      vetVisits:
        "Contrôle tous les 6 mois, vaccination annuelle, suivi du handicap",
    },
    medicalHistory: {
      surgeries: [
        "Stérilisation - 2024-01-20",
        "Opération patte arrière - 2023-12-20",
      ],
      treatments: [
        "Anti-douleur post-opératoire",
        "Vermifuge - 2024-01-20",
        "Anti-parasitaires - 2024-01-20",
      ],
      allergies: "Aucune connue",
      medications: "Aucune actuellement",
      chronicConditions:
        "Handicap patte arrière droite (suite accident), adaptation réussie",
    },
    dailyRoutine: {
      morning: "Réveil doux vers 8h, petit-déjeuner, retour au repos",
      afternoon: "Sieste longue, réveil pour observation tranquille",
      evening: "Repas, moment de calme avec les humains, retour au repos",
      night: "Dort profondément, besoin de calme absolu",
    },
    training: {
      litterTrained: true,
      leashTrained: false,
      commands: ["Répond au nom", "Vient (avec patience)"],
      tricks: "Apprentissage limité dû au handicap mais très intelligente",
      behavioralNotes:
        "Très douce et patiente, nécessite une approche calme et respectueuse de son handicap",
    },
    environmentNeeds: {
      indoor: true,
      outdoor: false,
      temperature: "Température constante et confortable (20-22°C)",
      space: "Espace calme et sécurisé, éviter les surfaces glissantes",
      accessories: [
        "Griffoir bas",
        "Paniers avec accès facile",
        "Rampes si nécessaire",
        "Gamelles à hauteur adaptée",
      ],
    },
  },
  {
    id: 4,
    name: "Tigrou",
    age: 7,
    breed: "Maine Coon",
    gender: "Mâle",
    description:
      "Tigrou est un grand chat majestueux. Il peut être timide au début mais devient très affectueux une fois qu'il vous fait confiance. Il a besoin d'une famille qui comprendra sa nature réservée.",
    image: "https://images.unsplash.com/photo-1534361960057-19889db5defd?w=600",
    vaccinated: true,
    sterilized: true,
    vaccinatedDate: "2024-02-10",
    identificationNumber: "FR250111222333",
    location: "Paris",
    childFriendly: true,
    specialNeeds: false,
    specialNeedsDescription: "",
    aggressive: true,
    aggressiveDetails:
      "Peut être territorial avec les autres chats. Nécessite une introduction progressive. Peut griffer si effrayé ou stressé.",
    adoptionFee: 180,
    available: true,
    arrivalDate: "2024-01-05",
    weight: 7.5,
    color: "Tigré brun",
    personality: ["Réservé", "Intelligent", "Loyal", "Indépendant"],
    health: {
      status: "Excellent",
      lastCheckup: "2024-02-10",
      notes: "Chat en excellente santé pour son âge, suivi annuel recommandé",
    },
    history:
      "Tigrou a été abandonné par son propriétaire qui ne pouvait plus s'en occuper. Il a mis du temps à s'adapter mais se porte maintenant très bien. Il cherche une famille expérimentée.",
    criteria: {
      experience: "expérimenté",
      children: true,
      childrenAgeMin: 10,
      otherPets: false,
      otherPetsTypes: [],
      space: "maison",
      activity: "calme",
      timeAvailability: "élevé",
      garden: true,
    },
    photos: [
      "https://images.unsplash.com/photo-1534361960057-19889db5defd?w=600",
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600",
    ],
    physicalCharacteristics: {
      size: "Très grand",
      coatLength: "Long",
      coatType: "Dense, imperméable et soyeux",
      eyeColor: "Or cuivré",
      tailLength: "Très longue et touffue",
      earType: "Grandes avec plumets",
      build: "Grand et musclé",
    },
    behavior: {
      activityLevel: "Calme",
      playfulness: "Modéré",
      independence: "Très élevé",
      sociability: "Réservé mais loyal",
      vocalization: "Peu vocal, miaulements doux",
      groomingNeeds: "Élevé (brossage 3-4 fois par semaine)",
      energyLevel: "Modéré",
      curiosity: "Modérée",
      adaptability: "Moyenne, besoin de temps pour s'adapter",
    },
    preferences: {
      favoriteActivities: [
        "Observer depuis les hauteurs",
        "Jouer seul",
        "Se percher",
        "Explorer avec précaution",
      ],
      favoriteFood: "Croquettes premium pour grands chats",
      favoriteToys: ["Jeux de puzzle", "Objets suspendus", "Boîtes"],
      sleepSchedule: "Dort beaucoup, surtout en journée",
      preferredSpots: [
        "Hauteurs (armoires, étagères)",
        "Endroits isolés et calmes",
        "Sous les meubles",
      ],
      socialPreference:
        "Besoin d'espace personnel, préfère un foyer sans autres chats",
    },
    careInstructions: {
      feeding:
        "2 repas par jour, portions de 100g de croquettes + 80g de pâtée",
      grooming: "Brossage 3-4 fois par semaine obligatoire, bain trimestriel",
      exercise: "Jeux modérés et calmes, escalade sur arbre à chat",
      litterBox: "Litière grande taille, changement tous les 2 jours",
      vetVisits:
        "Contrôle annuel, attention particulière aux articulations (âge)",
    },
    medicalHistory: {
      surgeries: ["Stérilisation - 2024-01-08"],
      treatments: [
        "Vermifuge - 2024-02-10",
        "Anti-parasitaires - 2024-02-10",
        "Contrôle articulations - 2024-02-10",
      ],
      allergies: "Aucune connue",
      medications: "Aucune",
      chronicConditions: "Aucune, surveillance articulations recommandée (âge)",
    },
    dailyRoutine: {
      morning: "Réveil tardif vers 9h, petit-déjeuner, retour au repos",
      afternoon:
        "Sieste longue, observation tranquille, moments de jeu solitaire",
      evening:
        "Repas du soir, interaction calme avec les humains, préparation au repos",
      night: "Dort profondément, aime avoir son espace personnel",
    },
    training: {
      litterTrained: true,
      leashTrained: false,
      commands: ["Répond au nom (avec patience)", "Vient (quand il le décide)"],
      tricks: "Apprentissage limité, préfère son indépendance",
      behavioralNotes:
        "Très intelligent et observateur, nécessite une approche douce et respectueuse de sa personnalité réservée. Peut être territorial.",
    },
    environmentNeeds: {
      indoor: true,
      outdoor: false,
      temperature: "Température confortable (18-22°C)",
      space:
        "Espace spacieux avec hauteurs, minimum 40m², éviter les espaces confinés",
      accessories: [
        "Grand arbre à chat multi-niveaux",
        "Plusieurs griffoirs",
        "Endroits en hauteur",
        "Espaces isolés pour repos",
      ],
    },
  },
  {
    id: 5,
    name: "Nala",
    age: 1,
    breed: "British Shorthair",
    gender: "Femelle",
    description:
      "Nala est une jeune chatte pleine d'énergie et de joie de vivre. Elle adore jouer et est très curieuse. Parfaite pour une famille active qui pourra répondre à son besoin d'activité.",
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600",
    vaccinated: true,
    sterilized: true,
    vaccinatedDate: "2024-02-15",
    identificationNumber: "FR250444555666",
    location: "Lyon",
    childFriendly: true,
    specialNeeds: false,
    specialNeedsDescription: "",
    aggressive: false,
    aggressiveDetails: "",
    adoptionFee: 160,
    available: true,
    arrivalDate: "2024-02-01",
    weight: 3.2,
    color: "Bleu-gris",
    personality: ["Énergique", "Joueur", "Curieux", "Sociable"],
    health: {
      status: "Excellent",
      lastCheckup: "2024-02-15",
      notes: "Jeune chatte en parfaite santé, très active",
    },
    history:
      "Nala est arrivée très jeune au refuge après avoir été trouvée seule. Elle a été bien soignée et éduquée. Elle est maintenant prête pour une nouvelle famille qui lui donnera beaucoup d'amour.",
    criteria: {
      experience: "débutant",
      children: true,
      childrenAgeMin: 5,
      otherPets: true,
      otherPetsTypes: ["chats"],
      space: "appartement",
      activity: "actif",
      timeAvailability: "élevé",
      garden: false,
    },
    photos: [
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600",
    ],
    physicalCharacteristics: {
      size: "Petit à moyen",
      coatLength: "Court",
      coatType: "Dense, doux et pelucheux",
      eyeColor: "Or cuivré",
      tailLength: "Moyenne",
      earType: "Petites et arrondies",
      build: "Compacte et robuste",
    },
    behavior: {
      activityLevel: "Très actif",
      playfulness: "Très élevé",
      independence: "Faible",
      sociability: "Très sociable",
      vocalization: "Modéré",
      groomingNeeds: "Faible (brossage hebdomadaire)",
      energyLevel: "Très élevé",
      curiosity: "Très élevée",
      adaptability: "Excellente",
    },
    preferences: {
      favoriteActivities: [
        "Jouer activement",
        "Courir",
        "Explorer",
        "Interaction avec les humains",
        "Jouer avec d'autres chats",
      ],
      favoriteFood: "Croquettes pour chatons/chats actifs, aime la variété",
      favoriteToys: [
        "Tous les types de jouets",
        "Canne à pêche",
        "Balles",
        "Puzzles interactifs",
        "Jouets qui bougent",
      ],
      sleepSchedule: "Dort la nuit, très actif le jour",
      preferredSpots: [
        "Au centre de l'action",
        "Près des humains",
        "Espaces de jeu",
      ],
      socialPreference:
        "Aime être entourée, recherche constamment l'interaction",
    },
    careInstructions: {
      feeding:
        "3-4 repas par jour (chatte en croissance), portions de 50g de croquettes + 40g de pâtée",
      grooming: "Brossage hebdomadaire suffisant",
      exercise: "Minimum 1h30 d'activité par jour, jeux interactifs essentiels",
      litterBox: "Litière à changer tous les 2 jours",
      vetVisits:
        "Contrôle tous les 6 mois (jeune chatte), vaccination annuelle",
    },
    medicalHistory: {
      surgeries: ["Stérilisation - 2024-02-05"],
      treatments: [
        "Vermifuge - 2024-02-15",
        "Anti-parasitaires - 2024-02-15",
        "Vaccination complète",
      ],
      allergies: "Aucune connue",
      medications: "Aucune",
      chronicConditions: "Aucune, jeune chatte en excellente santé",
    },
    dailyRoutine: {
      morning:
        "Réveil énergique vers 6h30, petit-déjeuner, session de jeux intense",
      afternoon:
        "Jeux actifs et exploration, courtes siestes, interaction constante",
      evening: "Repas du soir, dernière session de jeux, calme progressif",
      night: "Dort bien après une journée active",
    },
    training: {
      litterTrained: true,
      leashTrained: false,
      commands: ["Répond au nom", "Vient", "Assis", "Donne la patte"],
      tricks: ["Saute", "Rapporte", "Cherche", "Apporte"],
      behavioralNotes:
        "Très intelligente et apprend rapidement, répond très bien au renforcement positif, a besoin de stimulation constante",
    },
    environmentNeeds: {
      indoor: true,
      outdoor: false,
      temperature: "Température normale (18-22°C)",
      space: "Espace avec zones de jeu, minimum 30m²",
      accessories: [
        "Nombreux jouets variés",
        "Arbre à chat avec plateformes",
        "Griffoirs",
        "Jeux interactifs",
        "Caches pour siestes",
      ],
    },
  },
];

export const CatsProvider = ({ children }) => {
  const [cats, setCats] = useState(initialCats);
  const [adoptionRequests, setAdoptionRequests] = useState([]);

  const addCat = (cat) => {
    const newCat = {
      ...cat,
      id: Math.max(...cats.map((c) => c.id)) + 1,
      available: true,
      arrivalDate: cat.arrivalDate || new Date().toISOString().split("T")[0],
      photos: cat.photos || [cat.image],
    };
    setCats([...cats, newCat]);
  };

  const updateCat = (id, updates) => {
    setCats(cats.map((cat) => (cat.id === id ? { ...cat, ...updates } : cat)));
  };

  const deleteCat = (id) => {
    setCats(cats.filter((cat) => cat.id !== id));
  };

  const matchCatWithPerson = (personCriteria) => {
    return cats.filter((cat) => {
      if (!cat.available) return false;

      const experienceMatch =
        !personCriteria.experience ||
        cat.criteria.experience === personCriteria.experience ||
        (personCriteria.experience === "intermédiaire" &&
          cat.criteria.experience === "débutant");

      const childrenMatch =
        personCriteria.children === null ||
        (cat.criteria.children === personCriteria.children &&
          (!personCriteria.children ||
            !personCriteria.childrenAge ||
            !cat.criteria.childrenAgeMin ||
            personCriteria.childrenAge >= cat.criteria.childrenAgeMin));

      const otherPetsMatch =
        personCriteria.otherPets === null ||
        cat.criteria.otherPets === personCriteria.otherPets;

      const spaceMatch =
        !personCriteria.space ||
        cat.criteria.space === personCriteria.space ||
        (personCriteria.space === "maison" &&
          cat.criteria.space === "appartement");

      const gardenMatch =
        !personCriteria.garden || cat.criteria.garden === personCriteria.garden;

      return (
        experienceMatch &&
        childrenMatch &&
        otherPetsMatch &&
        spaceMatch &&
        gardenMatch
      );
    });
  };

  const addAdoptionRequest = (request) => {
    const newRequest = {
      ...request,
      id: adoptionRequests.length + 1,
      date: new Date().toISOString(),
      status: "pending",
    };
    setAdoptionRequests([...adoptionRequests, newRequest]);
  };

  const getStatistics = useMemo(() => {
    const total = cats.length;
    const available = cats.filter((c) => c.available).length;
    const adopted = total - available;
    const vaccinated = cats.filter((c) => c.vaccinated).length;
    const specialNeeds = cats.filter((c) => c.specialNeeds).length;
    const childFriendly = cats.filter((c) => c.childFriendly).length;

    return {
      total,
      available,
      adopted,
      vaccinated,
      specialNeeds,
      childFriendly,
      vaccinationRate: total > 0 ? Math.round((vaccinated / total) * 100) : 0,
    };
  }, [cats]);

  return (
    <CatsContext.Provider
      value={{
        cats,
        addCat,
        updateCat,
        deleteCat,
        matchCatWithPerson,
        adoptionRequests,
        addAdoptionRequest,
        statistics: getStatistics,
      }}
    >
      {children}
    </CatsContext.Provider>
  );
};
