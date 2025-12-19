import { createContext, useContext, useState } from "react";

const CatsContext = createContext();

export const useCats = () => {
  const context = useContext(CatsContext);
  if (!context) {
    throw new Error("useCats must be used within a CatsProvider");
  }
  return context;
};

export const CatsProvider = ({ children }) => {
  const [cats, setCats] = useState([
    {
      id: 1,
      name: "Mimi",
      age: 3,
      breed: "Persan",
      gender: "Femelle",
      description:
        "Mimi est une chatte douce et calme, parfaite avec les enfants.",
      image:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400",
      vaccinated: true,
      sterilized: true,
      location: "Paris",
      childFriendly: true,
      specialNeeds: false,
      aggressive: false,
      adoptionFee: 150,
      available: true,
      criteria: {
        experience: "débutant",
        children: true,
        otherPets: true,
        space: "appartement",
        activity: "calme",
      },
    },
    {
      id: 2,
      name: "Max",
      age: 5,
      breed: "Europeen",
      gender: "Mâle",
      description:
        "Max est un chat actif et joueur, idéal pour une famille avec jardin.",
      image:
        "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400",
      vaccinated: true,
      sterilized: true,
      location: "Lyon",
      childFriendly: true,
      specialNeeds: false,
      aggressive: false,
      adoptionFee: 120,
      available: true,
      criteria: {
        experience: "intermédiaire",
        children: true,
        otherPets: false,
        space: "maison",
        activity: "actif",
      },
    },
    {
      id: 3,
      name: "Luna",
      age: 2,
      breed: "Siamois",
      gender: "Femelle",
      description:
        "Luna a besoin d'une famille patiente. Elle a un handicap mais est très affectueuse.",
      image:
        "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400",
      vaccinated: true,
      sterilized: true,
      location: "Marseille",
      childFriendly: false,
      specialNeeds: true,
      aggressive: false,
      adoptionFee: 100,
      available: true,
      criteria: {
        experience: "expérimenté",
        children: false,
        otherPets: false,
        space: "calme",
        activity: "calme",
      },
    },
  ]);

  const addCat = (cat) => {
    const newCat = {
      ...cat,
      id: cats.length + 1,
      available: true,
    };
    setCats([...cats, newCat]);
  };

  const updateCat = (id, updates) => {
    setCats(cats.map((cat) => (cat.id === id ? { ...cat, ...updates } : cat)));
  };

  const matchCatWithPerson = (personCriteria) => {
    return cats.filter((cat) => {
      if (!cat.available) return false;

      const experienceMatch =
        !personCriteria.experience ||
        cat.criteria.experience === personCriteria.experience;
      const childrenMatch =
        personCriteria.children === null ||
        cat.criteria.children === personCriteria.children;
      const otherPetsMatch =
        personCriteria.otherPets === null ||
        cat.criteria.otherPets === personCriteria.otherPets;
      const childFriendlyMatch =
        personCriteria.children === null ||
        cat.childFriendly === personCriteria.children;

      return (
        experienceMatch && childrenMatch && otherPetsMatch && childFriendlyMatch
      );
    });
  };

  return (
    <CatsContext.Provider
      value={{ cats, addCat, updateCat, matchCatWithPerson }}
    >
      {children}
    </CatsContext.Provider>
  );
};
