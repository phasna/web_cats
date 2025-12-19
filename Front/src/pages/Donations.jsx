import { useState } from "react";
import {
  Heart,
  CreditCard,
  Package,
  Gift,
  CheckCircle,
  Euro,
  Info,
  Banknote,
  TrendingUp,
} from "lucide-react";
import { useCats } from "../context/CatsContext";

const Donations = () => {
  const { statistics } = useCats();
  const [donationType, setDonationType] = useState("financial");
  const [formData, setFormData] = useState({
    amount: "",
    name: "",
    email: "",
    message: "",
    anonymous: false,
    materialType: "",
    materialDescription: "",
    contactPreference: "email",
  });
  const [submitted, setSubmitted] = useState(false);

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
    setTimeout(() => {
      alert(
        "Merci pour votre don ! Votre générosité nous aide à sauver plus de chats."
      );
      setFormData({
        amount: "",
        name: "",
        email: "",
        message: "",
        anonymous: false,
        materialType: "",
        materialDescription: "",
        contactPreference: "email",
      });
      setSubmitted(false);
    }, 2000);
  };

  const quickAmounts = [25, 50, 100, 200, 500];

  const donationImpact = {
    25: "Nourriture pour 1 chat pendant 1 semaine",
    50: "Vaccination d'un chat",
    100: "Stérilisation d'un chat",
    200: "Soins vétérinaires complets pour 1 chat",
    500: "Soins et hébergement d'un chat pendant 1 mois",
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Faire un don</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Votre générosité nous permet de sauver et prendre soin de nombreux
          chats abandonnés. Chaque don, petit ou grand, fait une différence
          réelle.
        </p>
      </div>

      {/* Stats Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="card bg-gradient-to-br from-primary-600 to-primary-700 text-white text-center">
          <div className="text-3xl font-bold mb-2">{statistics.total}</div>
          <div className="text-primary-100">Chats secourus</div>
        </div>
        <div className="card bg-gradient-to-br from-green-600 to-green-700 text-white text-center">
          <div className="text-3xl font-bold mb-2">{statistics.adopted}</div>
          <div className="text-green-100">Chats adoptés</div>
        </div>
        <div className="card bg-gradient-to-br from-blue-600 to-blue-700 text-white text-center">
          <div className="text-3xl font-bold mb-2">
            {statistics.vaccinationRate}%
          </div>
          <div className="text-blue-100">Taux de vaccination</div>
        </div>
      </div>

      {/* Donation Type Tabs */}
      <div className="flex gap-4 justify-center mb-8">
        <button
          onClick={() => setDonationType("financial")}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
            donationType === "financial"
              ? "bg-primary-600 text-white shadow-lg scale-105"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          <CreditCard className="w-5 h-5" />
          Don financier
        </button>
        <button
          onClick={() => setDonationType("material")}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
            donationType === "material"
              ? "bg-primary-600 text-white shadow-lg scale-105"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          <Package className="w-5 h-5" />
          Don matériel
        </button>
      </div>

      {submitted ? (
        <div className="card text-center py-12">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Merci pour votre don !</h2>
          <p className="text-gray-600">
            Votre générosité fait toute la différence pour nos chats.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {donationType === "financial" ? (
                <>
                  <div className="card">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <Gift className="w-6 h-6 text-primary-600" />
                      Don financier
                    </h2>

                    <div className="mb-6">
                      <label className="block text-sm font-semibold mb-2">
                        Montant (€) *
                      </label>
                      <div className="relative">
                        <Euro className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="number"
                          name="amount"
                          value={formData.amount}
                          onChange={handleChange}
                          required
                          min="5"
                          placeholder="Montant"
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
                        />
                      </div>

                      {/* Quick amount buttons */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {quickAmounts.map((amount) => (
                          <button
                            key={amount}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                amount: amount.toString(),
                              }))
                            }
                            className="px-4 py-2 bg-gray-100 hover:bg-primary-100 hover:text-primary-600 rounded-lg transition-colors font-semibold"
                          >
                            {amount}€
                          </button>
                        ))}
                      </div>

                      {/* Impact indicator */}
                      {formData.amount &&
                        donationImpact[parseInt(formData.amount)] && (
                          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                            <div className="flex items-center gap-2 text-green-800">
                              <Heart className="w-5 h-5" />
                              <span className="font-semibold">
                                {donationImpact[parseInt(formData.amount)]}
                              </span>
                            </div>
                          </div>
                        )}
                    </div>

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
                    </div>

                    <div className="mt-4">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="anonymous"
                          checked={formData.anonymous}
                          onChange={handleChange}
                          className="mr-2"
                        />
                        <span className="text-sm">Faire un don anonyme</span>
                      </label>
                    </div>

                    <div className="mt-4">
                      <label className="block text-sm font-semibold mb-2">
                        Message (optionnel)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="3"
                        placeholder="Un mot pour nos chats..."
                        className="input-field"
                      />
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-start gap-2 mb-2">
                        <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-blue-900 mb-1">
                            Modes de paiement acceptés
                          </p>
                          <p className="text-sm text-blue-700">
                            Carte bancaire, PayPal, Virement bancaire, Chèque
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-blue-200">
                        <p className="text-sm text-blue-700">
                          <strong>Déduction fiscale :</strong> Les dons sont
                          déductibles des impôts à hauteur de 66% conformément à
                          la législation française (réduction d'impôt de 66%
                          dans la limite de 20% du revenu imposable).
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="card">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <Package className="w-6 h-6 text-primary-600" />
                      Don matériel
                    </h2>

                    <p className="text-gray-600 mb-6">
                      Vous pouvez nous aider en donnant des produits utiles pour
                      nos chats. Tous les dons matériels sont les bienvenus !
                    </p>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          Type de don *
                        </label>
                        <select
                          name="materialType"
                          value={formData.materialType}
                          onChange={handleChange}
                          required
                          className="input-field"
                        >
                          <option value="">Sélectionner</option>
                          <option value="nourriture">
                            Nourriture (croquettes, pâtée)
                          </option>
                          <option value="litiere">Litière</option>
                          <option value="jouets">Jouets</option>
                          <option value="accessoires">
                            Accessoires (gamelles, paniers, griffoirs)
                          </option>
                          <option value="medicaments">
                            Médicaments et soins vétérinaires
                          </option>
                          <option value="couvertures">
                            Couvertures et literie
                          </option>
                          <option value="transport">
                            Accessoires de transport (cages, paniers)
                          </option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          Description détaillée *
                        </label>
                        <textarea
                          name="materialDescription"
                          value={formData.materialDescription}
                          onChange={handleChange}
                          required
                          rows="4"
                          placeholder="Décrivez ce que vous souhaitez donner (quantité, état, marque, date de péremption si applicable...)"
                          className="input-field"
                        />
                      </div>

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
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          Préférence de contact
                        </label>
                        <select
                          name="contactPreference"
                          value={formData.contactPreference}
                          onChange={handleChange}
                          className="input-field"
                        >
                          <option value="email">Email</option>
                          <option value="phone">Téléphone</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-yellow-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-yellow-900 mb-1">
                            Point de dépôt
                          </p>
                          <p className="text-sm text-yellow-800">
                            Vous pouvez déposer vos dons matériels à notre siège
                            tous les jours de 10h à 18h, ou nous contacter pour
                            organiser un rendez-vous. Merci de vérifier l'état
                            et les dates de péremption avant le dépôt.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <button
                type="submit"
                className="btn-primary w-full text-lg py-3 flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5" />
                {donationType === "financial"
                  ? "Faire un don"
                  : "Envoyer la demande de don"}
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="card bg-primary-50 border-2 border-primary-200">
              <h3 className="text-xl font-bold mb-4">Impact de votre don</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>100% des dons vont directement aux chats</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Comptes vérifiés et transparents</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Réduction d'impôts possible</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Reçu fiscal disponible</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold mb-4">Autres façons d'aider</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold mb-1">Bénévolat</p>
                  <p className="text-gray-600">
                    Rejoignez notre équipe de bénévoles
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Parrainage</p>
                  <p className="text-gray-600">
                    Parrainez un chat à long terme
                  </p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Famille d'accueil</p>
                  <p className="text-gray-600">
                    Accueillez temporairement un chat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donations;
