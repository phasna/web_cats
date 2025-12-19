import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCats } from "../context/CatsContext";
import { CheckCircle, AlertCircle } from "lucide-react";

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
    childFriendly: false,
    specialNeeds: false,
    aggressive: false,
    adoptionFee: "",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400",
    criteria: {
      experience: "débutant",
      children: false,
      otherPets: false,
      space: "appartement",
      activity: "calme",
    },
  });
  const [submitted, setSubmitted] = useState(false);

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
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCat(formData);
    setSubmitted(true);
    setTimeout(() => {
      alert("Chat enregistré avec succès !");
      navigate("/chats");
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Enregistrer un chat
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Formulaire pour enregistrer un nouveau chat dans le système de
        l'association. Tous les chats doivent être identifiés dans le territoire
        national.
      </p>

      {submitted ? (
        <div className="card text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Chat enregistré !</h2>
          <p className="text-gray-600">
            Le chat a été ajouté avec succès à notre système.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Informations de base */}
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Sélectionner</option>
                  <option value="Mâle">Mâle</option>
                  <option value="Femelle">Femelle</option>
                </select>
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Soins et santé */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Soins et santé</h2>
            <div className="space-y-3">
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
            </div>

            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-blue-900">
                    Identification obligatoire
                  </p>
                  <p className="text-sm text-blue-700 mt-1">
                    Tous les chats doivent être identifiés dans le territoire
                    national (puce électronique ou tatouage).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Critères d'adoption */}
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="false">Non</option>
                  <option value="true">Oui</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Compatible autres animaux *
                </label>
                <select
                  name="criteria.otherPets"
                  value={formData.criteria.otherPets}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="calme">Calme</option>
                  <option value="actif">Actif</option>
                  <option value="très actif">Très actif</option>
                </select>
              </div>
            </div>
          </div>

          <button type="submit" className="btn-primary w-full text-lg py-3">
            Enregistrer le chat
          </button>
        </form>
      )}
    </div>
  );
};

export default RegisterCat;
