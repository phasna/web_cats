import { useState, useEffect } from "react";
import { useCats } from "../context/CatsContext";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  CheckCircle,
  AlertCircle,
  Heart,
  User,
  Mail,
  Phone,
  MapPin,
  Home,
  Info,
} from "lucide-react";

const AdoptionRequest = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const catId = searchParams.get("catId");
  const { cats, matchCatWithPerson, addAdoptionRequest } = useCats();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    experience: "",
    children: null,
    childrenAge: "",
    childrenCount: "",
    otherPets: null,
    otherPetsDetails: "",
    space: "",
    activity: "",
    timeAvailability: "",
    garden: null,
    selectedCatId: catId || "",
    motivation: "",
    previousExperience: "",
  });

  const [matchedCats, setMatchedCats] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    if (
      formData.experience &&
      formData.children !== null &&
      formData.otherPets !== null &&
      formData.space &&
      formData.activity
    ) {
      const matches = matchCatWithPerson({
        experience: formData.experience,
        children: formData.children,
        otherPets: formData.otherPets,
        space: formData.space,
        garden: formData.garden,
      });
      setMatchedCats(matches);
    }
  }, [
    formData.experience,
    formData.children,
    formData.otherPets,
    formData.space,
    formData.activity,
    formData.garden,
  ]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    addAdoptionRequest({
      ...formData,
      selectedCat: cats.find((c) => c.id === parseInt(formData.selectedCatId)),
    });
    setTimeout(() => {
      alert(
        "Votre demande d'adoption a été envoyée avec succès ! Nous vous contacterons sous peu."
      );
      navigate("/chats");
    }, 2000);
  };

  const selectedCat = cats.find(
    (c) => c.id === parseInt(formData.selectedCatId)
  );

  const steps = [
    { number: 1, title: "Informations personnelles", icon: User },
    { number: 2, title: "Critères de compatibilité", icon: Heart },
    { number: 3, title: "Chat et motivation", icon: Info },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Demande d'adoption
      </h1>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = currentStep === step.number;
            const isCompleted = currentStep > step.number;
            return (
              <div key={step.number} className="flex-1 flex items-center">
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
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
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
          <h2 className="text-2xl font-bold mb-2">Demande envoyée !</h2>
          <p className="text-gray-600">
            Nous traiterons votre demande et vous contacterons sous peu.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="card">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <User className="w-6 h-6 text-primary-600" />
                Informations personnelles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Adresse *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Ville *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Code postal *
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>
                <div className="flex items-end">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="btn-primary w-full"
                  >
                    Suivant
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Compatibility Criteria */}
          {currentStep === 2 && (
            <div className="card">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6 text-primary-600" />
                Critères de compatibilité
              </h2>
              <p className="text-gray-600 mb-6">
                Remplissez ces critères pour que nous puissions vous proposer
                les chats les plus adaptés à votre situation.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Expérience avec les chats *
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Sélectionner</option>
                    <option value="débutant">
                      Débutant (première adoption)
                    </option>
                    <option value="intermédiaire">
                      Intermédiaire (quelques expériences)
                    </option>
                    <option value="expérimenté">
                      Expérimenté (plusieurs chats dans le passé)
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Avez-vous des enfants ? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="children"
                        value="true"
                        checked={formData.children === true}
                        onChange={() =>
                          setFormData((prev) => ({ ...prev, children: true }))
                        }
                        className="mr-2"
                      />
                      Oui
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="children"
                        value="false"
                        checked={formData.children === false}
                        onChange={() =>
                          setFormData((prev) => ({ ...prev, children: false }))
                        }
                        className="mr-2"
                      />
                      Non
                    </label>
                  </div>
                  {formData.children && (
                    <div className="grid grid-cols-2 gap-4 mt-3">
                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          Âges des enfants
                        </label>
                        <input
                          type="text"
                          name="childrenAge"
                          value={formData.childrenAge}
                          onChange={handleChange}
                          placeholder="Ex: 5, 8 ans"
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          Nombre d'enfants
                        </label>
                        <input
                          type="number"
                          name="childrenCount"
                          value={formData.childrenCount}
                          onChange={handleChange}
                          min="1"
                          className="input-field"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Avez-vous d'autres animaux ? *
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="otherPets"
                        value="true"
                        checked={formData.otherPets === true}
                        onChange={() =>
                          setFormData((prev) => ({ ...prev, otherPets: true }))
                        }
                        className="mr-2"
                      />
                      Oui
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="otherPets"
                        value="false"
                        checked={formData.otherPets === false}
                        onChange={() =>
                          setFormData((prev) => ({ ...prev, otherPets: false }))
                        }
                        className="mr-2"
                      />
                      Non
                    </label>
                  </div>
                  {formData.otherPets && (
                    <textarea
                      name="otherPetsDetails"
                      value={formData.otherPetsDetails}
                      onChange={handleChange}
                      placeholder="Détails sur vos autres animaux (type, nombre, âge...)"
                      rows="3"
                      className="input-field mt-3"
                    />
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Type d'habitat *
                  </label>
                  <select
                    name="space"
                    value={formData.space}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Sélectionner</option>
                    <option value="appartement">Appartement</option>
                    <option value="maison">Maison avec jardin</option>
                    <option value="calme">Espace calme</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Niveau d'activité recherché *
                  </label>
                  <select
                    name="activity"
                    value={formData.activity}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Sélectionner</option>
                    <option value="calme">Calme</option>
                    <option value="actif">Actif</option>
                    <option value="très actif">Très actif</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Temps disponible pour le chat *
                  </label>
                  <select
                    name="timeAvailability"
                    value={formData.timeAvailability}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Sélectionner</option>
                    <option value="faible">Faible (moins de 2h/jour)</option>
                    <option value="moyen">Moyen (2-4h/jour)</option>
                    <option value="élevé">Élevé (plus de 4h/jour)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Avez-vous un jardin ou un extérieur sécurisé ?
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="garden"
                        value="true"
                        checked={formData.garden === true}
                        onChange={() =>
                          setFormData((prev) => ({ ...prev, garden: true }))
                        }
                        className="mr-2"
                      />
                      Oui
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="garden"
                        value="false"
                        checked={formData.garden === false}
                        onChange={() =>
                          setFormData((prev) => ({ ...prev, garden: false }))
                        }
                        className="mr-2"
                      />
                      Non
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="btn-secondary flex-1"
                >
                  Précédent
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="btn-primary flex-1"
                >
                  Suivant
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Cat Selection and Motivation */}
          {currentStep === 3 && (
            <>
              {/* Matched Cats */}
              {matchedCats.length > 0 && (
                <div className="card bg-primary-50 border-2 border-primary-200">
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="w-6 h-6 text-primary-600" />
                    <h2 className="text-2xl font-bold">
                      Chats compatibles avec votre profil
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {matchedCats.map((cat) => (
                      <div
                        key={cat.id}
                        className={`bg-white p-4 rounded-lg cursor-pointer border-2 transition-all ${
                          formData.selectedCatId === cat.id.toString()
                            ? "border-primary-600 bg-primary-50 shadow-md"
                            : "border-gray-200 hover:border-primary-300"
                        }`}
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            selectedCatId: cat.id.toString(),
                          }))
                        }
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <img
                              src={cat.image}
                              alt={cat.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div>
                              <h3 className="font-bold text-lg">{cat.name}</h3>
                              <p className="text-sm text-gray-600">
                                {cat.description.substring(0, 100)}...
                              </p>
                              <p className="text-sm text-primary-600 font-semibold mt-1">
                                {cat.adoptionFee}€
                              </p>
                            </div>
                          </div>
                          {formData.selectedCatId === cat.id.toString() && (
                            <CheckCircle className="w-6 h-6 text-primary-600" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Specific Cat Selection */}
              {selectedCat &&
                !matchedCats.find((c) => c.id === selectedCat.id) && (
                  <div className="card bg-blue-50 border-2 border-blue-200">
                    <h2 className="text-xl font-bold mb-2">Chat sélectionné</h2>
                    <div className="flex items-center gap-4">
                      <img
                        src={selectedCat.image}
                        alt={selectedCat.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <p className="text-gray-700 font-semibold">
                          {selectedCat.name}
                        </p>
                        <p className="text-primary-600 font-bold">
                          {selectedCat.adoptionFee}€
                        </p>
                      </div>
                    </div>
                  </div>
                )}

              {selectedCat && selectedCat.aggressive && (
                <div className="card bg-yellow-50 border-2 border-yellow-400">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-6 h-6 text-yellow-600" />
                    <h3 className="font-bold text-lg">Avertissement</h3>
                  </div>
                  <p className="text-gray-700">
                    Ce chat peut présenter des comportements agressifs. Une
                    expérience préalable est recommandée.
                  </p>
                </div>
              )}

              {/* Motivation */}
              <div className="card">
                <h2 className="text-2xl font-bold mb-4">Votre motivation</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Pourquoi souhaitez-vous adopter un chat ? *
                    </label>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder="Expliquez votre motivation pour adopter un chat..."
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Expérience précédente avec les chats
                    </label>
                    <textarea
                      name="previousExperience"
                      value={formData.previousExperience}
                      onChange={handleChange}
                      rows="3"
                      placeholder="Parlez-nous de vos expériences précédentes avec les chats (si vous en avez eu)..."
                      className="input-field"
                    />
                  </div>
                </div>
              </div>

              {/* Adoption Fees */}
              {selectedCat && (
                <div className="card bg-gray-50">
                  <h3 className="text-lg font-bold mb-2">Frais d'adoption</h3>
                  <p className="text-gray-700 mb-2">
                    Les frais d'adoption couvrent les soins vétérinaires
                    (vaccination, stérilisation, identification).
                  </p>
                  <p className="text-primary-600 font-bold text-xl">
                    Frais pour {selectedCat.name}: {selectedCat.adoptionFee}€
                  </p>
                </div>
              )}

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="btn-secondary flex-1"
                >
                  Précédent
                </button>
                <button
                  type="submit"
                  className="btn-primary flex-1 text-lg py-3"
                >
                  Envoyer la demande d'adoption
                </button>
              </div>
            </>
          )}
        </form>
      )}
    </div>
  );
};

export default AdoptionRequest;
