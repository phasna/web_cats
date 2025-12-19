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
