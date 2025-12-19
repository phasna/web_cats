import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCats } from "../context/CatsContext";
import {
  CheckCircle,
  AlertCircle,
  FileText,
  Heart,
  Shield,
  Plus,
  X,
} from "lucide-react";

const RegisterCat = () => {
  const { addCat } = useCats();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    breed: "",
    gender: "",
    description: "",
    location: "",
    vaccinated: false,
    sterilized: false,
    vaccinatedDate: "",
    identificationNumber: "",
    childFriendly: false,
    specialNeeds: false,
    specialNeedsDescription: "",
    aggressive: false,
    aggressiveDetails: "",
    adoptionFee: "",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600",
    photos: [],
    weight: "",
    color: "",
    personality: [],
    personalityInput: "",
    arrivalDate: new Date().toISOString().split("T")[0],
    health: {
      status: "Excellent",
      lastCheckup: "",
      notes: "",
    },
    history: "",
    criteria: {
      experience: "débutant",
      children: false,
      childrenAgeMin: "",
      otherPets: false,
      otherPetsTypes: [],
      space: "appartement",
      activity: "calme",
      timeAvailability: "moyen",
      garden: false,
    },
  });
  const [submitted, setSubmitted] = useState(false);
  const [currentSection, setCurrentSection] = useState(1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.startsWith("criteria.")) {
      const criteriaField = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        criteria: {
          ...prev.criteria,
          [criteriaField]: type === "checkbox" ? checked : value,
        },
      }));
    } else if (name.startsWith("health.")) {
      const healthField = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        health: {
          ...prev.health,
          [healthField]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const addPersonalityTrait = () => {
    if (formData.personalityInput.trim()) {
      setFormData((prev) => ({
        ...prev,
        personality: [...prev.personality, prev.personalityInput.trim()],
        personalityInput: "",
      }));
    }
  };

  const removePersonalityTrait = (index) => {
    setFormData((prev) => ({
      ...prev,
      personality: prev.personality.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const catData = {
      ...formData,
      photos: formData.photos.length > 0 ? formData.photos : [formData.image],
      age: parseInt(formData.age),
      adoptionFee: parseInt(formData.adoptionFee),
      weight: parseFloat(formData.weight),
      criteria: {
        ...formData.criteria,
        childrenAgeMin: formData.criteria.childrenAgeMin
          ? parseInt(formData.criteria.childrenAgeMin)
          : null,
      },
    };
    addCat(catData);
    setSubmitted(true);
    setTimeout(() => {
      alert("Chat enregistré avec succès !");
      navigate("/chats");
    }, 2000);
  };

  const sections = [
    { id: 1, title: "Informations de base", icon: FileText },
    { id: 2, title: "Santé et soins", icon: Shield },
    { id: 3, title: "Critères d'adoption", icon: Heart },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl animate-fade-in">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Enregistrer un chat
      </h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Formulaire complet pour enregistrer un nouveau chat dans le système de
        l'association. Tous les chats doivent être identifiés dans le territoire
        national.
      </p>

      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {sections.map((section, index) => {
            const Icon = section.icon;
            const isActive = currentSection === section.id;
            const isCompleted = currentSection > section.id;
            return (
              <div key={section.id} className="flex-1 flex items-center">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                      isCompleted
                        ? "bg-green-500 border-green-500 text-white"
                        : isActive
                        ? "bg-primary-600 border-primary-600 text-white"
                        : "bg-white border-gray-300 text-gray-400"
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <Icon className="w-6 h-6" />
                    )}
                  </div>
                  <span
                    className={`mt-2 text-sm font-medium ${
                      isActive ? "text-primary-600" : "text-gray-500"
                    }`}
                  >
                    {section.title}
                  </span>
                </div>
                {index < sections.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-2 ${
                      isCompleted ? "bg-green-500" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {submitted ? (
        <div className="card text-center py-12">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Chat enregistré !</h2>
          <p className="text-gray-600">
            Le chat a été ajouté avec succès à notre système.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1: Basic Information */}
          {currentSection === 1 && (
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Informations de base</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Âge (ans) *
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    min="0"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Race *
                  </label>
                  <input
                    type="text"
                    name="breed"
                    value={formData.breed}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Sexe *
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Sélectionner</option>
                    <option value="Mâle">Mâle</option>
                    <option value="Femelle">Femelle</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Couleur *
                  </label>
                  <input
                    type="text"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    required
                    placeholder="Ex: Blanc et crème"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Poids (kg) *
                  </label>
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    required
                    min="0"
                    step="0.1"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Localisation (ville) *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    placeholder="Ex: Paris, Lyon, Marseille"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Frais d'adoption (€) *
                  </label>
                  <input
                    type="number"
                    name="adoptionFee"
                    value={formData.adoptionFee}
                    onChange={handleChange}
                    required
                    min="0"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Date d'arrivée *
                  </label>
                  <input
                    type="date"
                    name="arrivalDate"
                    value={formData.arrivalDate}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Photo principale (URL) *
                  </label>
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-semibold mb-2">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="input-field"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-semibold mb-2">
                  Histoire
                </label>
                <textarea
                  name="history"
                  value={formData.history}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Histoire du chat, comment il a été trouvé..."
                  className="input-field"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-semibold mb-2">
                  Personnalité
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={formData.personalityInput}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        personalityInput: e.target.value,
                      }))
                    }
                    onKeyPress={(e) =>
                      e.key === "Enter" &&
                      (e.preventDefault(), addPersonalityTrait())
                    }
                    placeholder="Ajouter un trait de personnalité"
                    className="input-field flex-1"
                  />
                  <button
                    type="button"
                    onClick={addPersonalityTrait}
                    className="btn-primary"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.personality.map((trait, idx) => (
                    <span
                      key={idx}
                      className="badge badge-info flex items-center gap-1"
                    >
                      {trait}
                      <button
                        type="button"
                        onClick={() => removePersonalityTrait(idx)}
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setCurrentSection(2)}
                className="btn-primary mt-6 w-full"
              >
                Suivant
              </button>
            </div>
          )}

          {/* Section 2: Health */}
          {currentSection === 2 && (
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Santé et soins</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="vaccinated"
                      checked={formData.vaccinated}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <span className="ml-2">Chat vacciné</span>
                  </label>
                  {formData.vaccinated && (
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Date de vaccination
                      </label>
                      <input
                        type="date"
                        name="vaccinatedDate"
                        value={formData.vaccinatedDate}
                        onChange={handleChange}
                        className="input-field"
                      />
                    </div>
                  )}
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="sterilized"
                      checked={formData.sterilized}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <span className="ml-2">Chat stérilisé</span>
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Numéro d'identification *
                  </label>
                  <input
                    type="text"
                    name="identificationNumber"
                    value={formData.identificationNumber}
                    onChange={handleChange}
                    required
                    placeholder="Ex: FR250123456789"
                    className="input-field"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Puce électronique ou tatouage (obligatoire)
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-blue-900">
                        Identification obligatoire
                      </p>
                      <p className="text-sm text-blue-700 mt-1">
                        Tous les chats doivent être identifiés dans le
                        territoire national (puce électronique ou tatouage).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      État de santé
                    </label>
                    <select
                      name="health.status"
                      value={formData.health.status}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="Excellent">Excellent</option>
                      <option value="Bon">Bon</option>
                      <option value="Moyen">Moyen</option>
                      <option value="Sous surveillance">
                        Sous surveillance
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Dernier contrôle
                    </label>
                    <input
                      type="date"
                      name="health.lastCheckup"
                      value={formData.health.lastCheckup}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Notes santé
                  </label>
                  <textarea
                    name="health.notes"
                    value={formData.health.notes}
                    onChange={handleChange}
                    rows="3"
                    className="input-field"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="childFriendly"
                      checked={formData.childFriendly}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <span className="ml-2">Compatible avec enfants</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="specialNeeds"
                      checked={formData.specialNeeds}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <span className="ml-2">Besoins spéciaux / Handicap</span>
                  </label>
                  {formData.specialNeeds && (
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold mb-2">
                        Description des besoins spéciaux
                      </label>
                      <textarea
                        name="specialNeedsDescription"
                        value={formData.specialNeedsDescription}
                        onChange={handleChange}
                        rows="3"
                        className="input-field"
                      />
                    </div>
                  )}
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="aggressive"
                      checked={formData.aggressive}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <span className="ml-2">Peut être agressif</span>
                  </label>
                  {formData.aggressive && (
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold mb-2">
                        Détails sur l'agressivité
                      </label>
                      <textarea
                        name="aggressiveDetails"
                        value={formData.aggressiveDetails}
                        onChange={handleChange}
                        rows="2"
                        className="input-field"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setCurrentSection(1)}
                  className="btn-secondary flex-1"
                >
                  Précédent
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentSection(3)}
                  className="btn-primary flex-1"
                >
                  Suivant
                </button>
              </div>
            </div>
          )}

          {/* Section 3: Adoption Criteria */}
          {currentSection === 3 && (
            <div className="card">
              <h2 className="text-2xl font-bold mb-4">Critères d'adoption</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Expérience requise *
                  </label>
                  <select
                    name="criteria.experience"
                    value={formData.criteria.experience}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="débutant">Débutant</option>
                    <option value="intermédiaire">Intermédiaire</option>
                    <option value="expérimenté">Expérimenté</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Compatible enfants *
                  </label>
                  <select
                    name="criteria.children"
                    value={formData.criteria.children}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        criteria: {
                          ...prev.criteria,
                          children: e.target.value === "true",
                        },
                      }))
                    }
                    required
                    className="input-field"
                  >
                    <option value="false">Non</option>
                    <option value="true">Oui</option>
                  </select>
                  {formData.criteria.children && (
                    <div className="mt-2">
                      <label className="block text-sm font-semibold mb-2">
                        Âge minimum des enfants
                      </label>
                      <input
                        type="number"
                        name="criteria.childrenAgeMin"
                        value={formData.criteria.childrenAgeMin}
                        onChange={handleChange}
                        min="0"
                        className="input-field"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Compatible autres animaux *
                  </label>
                  <select
                    name="criteria.otherPets"
                    value={formData.criteria.otherPets}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        criteria: {
                          ...prev.criteria,
                          otherPets: e.target.value === "true",
                        },
                      }))
                    }
                    required
                    className="input-field"
                  >
                    <option value="false">Non</option>
                    <option value="true">Oui</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Espace requis *
                  </label>
                  <select
                    name="criteria.space"
                    value={formData.criteria.space}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="appartement">Appartement</option>
                    <option value="maison">Maison avec jardin</option>
                    <option value="calme">Espace calme</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Niveau d'activité *
                  </label>
                  <select
                    name="criteria.activity"
                    value={formData.criteria.activity}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="calme">Calme</option>
                    <option value="actif">Actif</option>
                    <option value="très actif">Très actif</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Temps disponible
                  </label>
                  <select
                    name="criteria.timeAvailability"
                    value={formData.criteria.timeAvailability}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="faible">Faible</option>
                    <option value="moyen">Moyen</option>
                    <option value="élevé">Élevé</option>
                  </select>
                </div>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="criteria.garden"
                    checked={formData.criteria.garden}
                    onChange={handleChange}
                    className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="ml-2">Jardin recommandé</span>
                </label>
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setCurrentSection(2)}
                  className="btn-secondary flex-1"
                >
                  Précédent
                </button>
                <button
                  type="submit"
                  className="btn-primary flex-1 text-lg py-3"
                >
                  Enregistrer le chat
                </button>
              </div>
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default RegisterCat;
