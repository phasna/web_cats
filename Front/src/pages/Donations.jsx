import { useState } from "react";
import { Heart, CreditCard, Package, Gift, CheckCircle } from "lucide-react";

const Donations = () => {
  const [donationType, setDonationType] = useState("financial");
  const [formData, setFormData] = useState({
    amount: "",
    name: "",
    email: "",
    message: "",
    materialType: "",
    materialDescription: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
        materialType: "",
        materialDescription: "",
      });
      setSubmitted(false);
    }, 2000);
  };

  const quickAmounts = [25, 50, 100, 200, 500];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-center">Faire un don</h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Votre générosité nous permet de sauver et prendre soin de nombreux chats
        abandonnés. Merci pour votre soutien !
      </p>

      {/* Donation Type Tabs */}
      <div className="flex gap-4 justify-center mb-8">
        <button
          onClick={() => setDonationType("financial")}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
            donationType === "financial"
              ? "bg-primary-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          <CreditCard className="w-5 h-5" />
          Don financier
        </button>
        <button
          onClick={() => setDonationType("material")}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
            donationType === "material"
              ? "bg-primary-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          <Package className="w-5 h-5" />
          Don matériel
        </button>
      </div>

      {submitted ? (
        <div className="card text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Merci pour votre don !</h2>
          <p className="text-gray-600">
            Votre générosité fait toute la différence pour nos chats.
          </p>
        </div>
      ) : (
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
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                    min="5"
                    placeholder="Montant"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
                  />

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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Modes de paiement acceptés :</strong> Carte
                    bancaire, PayPal, Virement bancaire
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Les dons sont déductibles des impôts conformément à la
                    législation en vigueur.
                  </p>
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
                  Vous pouvez nous aider en donnant des produits utiles pour nos
                  chats.
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Description *
                    </label>
                    <textarea
                      name="materialDescription"
                      value={formData.materialDescription}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder="Décrivez ce que vous souhaitez donner (quantité, état, etc.)"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Point de dépôt :</strong> Vous pouvez déposer vos
                    dons matériels à notre siège tous les jours de 10h à 18h, ou
                    nous contacter pour organiser un rendez-vous.
                  </p>
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
      )}

      {/* Information Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card text-center">
          <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
          <p className="text-gray-600">Des dons vont directement aux chats</p>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-primary-600 mb-2">
            Transparent
          </div>
          <p className="text-gray-600">Comptes vérifiés annuellement</p>
        </div>
        <div className="card text-center">
          <div className="text-3xl font-bold text-primary-600 mb-2">
            Déductible
          </div>
          <p className="text-gray-600">Réduction d'impôts possible</p>
        </div>
      </div>
    </div>
  );
};

export default Donations;
