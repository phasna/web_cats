import { useState, useEffect } from "react";
import { useCats } from "../context/CatsContext";
import { useSearchParams, useNavigate } from "react-router-dom";
import { CheckCircle, AlertCircle, Heart } from "lucide-react";

const AdoptionRequest = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const catId = searchParams.get("catId");
  const { cats, matchCatWithPerson } = useCats();

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
    otherPets: null,
    otherPetsDetails: "",
    space: "",
    activity: "",
    selectedCatId: catId || "",
  });

  const [matchedCats, setMatchedCats] = useState([]);
  const [submitted, setSubmitted] = useState(false);

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
      });
      setMatchedCats(matches);
    }
  }, [
    formData.experience,
    formData.children,
    formData.otherPets,
    formData.space,
    formData.activity,
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
    // Here you would normally send the data to a backend
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

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Demande d'adoption
      </h1>

      {submitted ? (
        <div className="card text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Demande envoyée !</h2>
          <p className="text-gray-600">
            Nous traiterons votre demande et vous contacterons sous peu.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Informations personnelles */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-4">
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Critères de compatibilité */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-4">
              Critères de compatibilité
            </h2>
            <p className="text-gray-600 mb-4">
              Remplissez ces critères pour que nous puissions vous proposer les
              chats les plus adaptés à votre situation.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Expérience avec les chats *
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Sélectionner</option>
                  <option value="débutant">Débutant</option>
                  <option value="intermédiaire">Intermédiaire</option>
                  <option value="expérimenté">Expérimenté</option>
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
                  <input
                    type="text"
                    name="childrenAge"
                    value={formData.childrenAge}
                    onChange={handleChange}
                    placeholder="Âges des enfants"
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
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
                    placeholder="Détails sur vos autres animaux"
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Sélectionner</option>
                  <option value="calme">Calme</option>
                  <option value="actif">Actif</option>
                  <option value="très actif">Très actif</option>
                </select>
              </div>
            </div>
          </div>

          {/* Chat suggéré ou sélectionné */}
          {matchedCats.length > 0 && (
            <div className="card bg-primary-50">
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
                        ? "border-primary-600 bg-primary-50"
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
                      <div>
                        <h3 className="font-bold text-lg">{cat.name}</h3>
                        <p className="text-sm text-gray-600">
                          {cat.description}
                        </p>
                        <p className="text-sm text-primary-600 font-semibold mt-1">
                          {cat.adoptionFee}€
                        </p>
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

          {/* Chat spécifique si sélectionné depuis la page détail */}
          {selectedCat && !matchedCats.find((c) => c.id === selectedCat.id) && (
            <div className="card bg-blue-50">
              <h2 className="text-xl font-bold mb-2">Chat sélectionné</h2>
              <p className="text-gray-700">
                {selectedCat.name} - {selectedCat.adoptionFee}€
              </p>
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

          {/* Informations sur les frais */}
          <div className="card bg-gray-50">
            <h3 className="text-lg font-bold mb-2">Frais d'adoption</h3>
            <p className="text-gray-700 mb-2">
              Les frais d'adoption couvrent les soins vétérinaires (vaccination,
              stérilisation, identification).
            </p>
            {selectedCat && (
              <p className="text-primary-600 font-bold">
                Frais pour {selectedCat.name}: {selectedCat.adoptionFee}€
              </p>
            )}
          </div>

          <button type="submit" className="btn-primary w-full text-lg py-3">
            Envoyer la demande d'adoption
          </button>
        </form>
      )}
    </div>
  );
};

export default AdoptionRequest;
