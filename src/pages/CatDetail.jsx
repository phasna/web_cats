import { useParams, Link, useNavigate } from "react-router-dom";
import { useCats } from "../context/CatsContext";
import {
  Heart,
  MapPin,
  Shield,
  Baby,
  AlertCircle,
  CheckCircle,
  XCircle,
  Calendar,
  Clock,
  Scale,
  Palette,
  FileText,
  ArrowLeft,
  Share2,
  Camera,
} from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";

const CatDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cats } = useCats();
  const cat = cats.find((c) => c.id === parseInt(id));
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!cat) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Chat non trouvé</h1>
        <Link to="/chats" className="text-primary-600 hover:underline">
          Retour à la liste des chats
        </Link>
      </div>
    );
  }

  const daysSinceArrival = Math.floor(
    (new Date() - new Date(cat.arrivalDate)) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-primary-600 mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Retour</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Images Section */}
        <div>
          <div className="card p-0 overflow-hidden">
            <img
              src={cat.photos?.[selectedImageIndex] || cat.image}
              alt={cat.name}
              className="w-full h-96 lg:h-[500px] object-cover"
            />
          </div>

          {/* Thumbnail gallery */}
          {cat.photos && cat.photos.length > 1 && (
            <div className="grid grid-cols-4 gap-2 mt-4">
              {cat.photos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImageIndex === index
                      ? "border-primary-600 ring-2 ring-primary-300"
                      : "border-gray-200 hover:border-primary-400"
                  }`}
                >
                  <img
                    src={photo}
                    alt={`${cat.name} ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-4xl font-bold mb-2">{cat.name}</h1>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-1" />
                    <span>{cat.location}</span>
                  </div>
                  <span>•</span>
                  <span>{cat.age} ans</span>
                  <span>•</span>
                  <span>{cat.breed}</span>
                </div>
              </div>
              <button className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {cat.vaccinated && (
                <div className="badge badge-success flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  <span>Vacciné</span>
                </div>
              )}
              {cat.sterilized && (
                <div className="badge badge-info flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>Stérilisé</span>
                </div>
              )}
              {cat.childFriendly && (
                <div className="badge badge-info flex items-center gap-1">
                  <Baby className="w-4 h-4" />
                  <span>Compatible enfants</span>
                </div>
              )}
              {cat.specialNeeds && (
                <div className="badge badge-warning flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  <span>Besoins spéciaux</span>
                </div>
              )}
              {cat.aggressive && (
                <div className="badge badge-danger flex items-center gap-1">
                  <XCircle className="w-4 h-4" />
                  <span>Peut être agressif</span>
                </div>
              )}
            </div>
          </div>

          {/* Quick Info */}
          <div className="card bg-gray-50">
            <h3 className="text-lg font-semibold mb-4">Informations rapides</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-gray-600 text-sm">Prix d'adoption</span>
                <p className="text-2xl font-bold text-primary-600">
                  {cat.adoptionFee}€
                </p>
              </div>
              <div>
                <span className="text-gray-600 text-sm">Poids</span>
                <div className="flex items-center gap-1">
                  <Scale className="w-4 h-4 text-gray-400" />
                  <p className="text-xl font-semibold">{cat.weight} kg</p>
                </div>
              </div>
              <div>
                <span className="text-gray-600 text-sm">Couleur</span>
                <div className="flex items-center gap-1">
                  <Palette className="w-4 h-4 text-gray-400" />
                  <p className="text-lg font-medium">{cat.color}</p>
                </div>
              </div>
              <div>
                <span className="text-gray-600 text-sm">Sexe</span>
                <p className="text-lg font-medium">{cat.gender}</p>
              </div>
              {cat.identificationNumber && (
                <div className="col-span-2">
                  <span className="text-gray-600 text-sm">
                    Numéro d'identification
                  </span>
                  <p className="text-sm font-mono">
                    {cat.identificationNumber}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {cat.description}
            </p>

            {/* History */}
            {cat.history && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h3 className="font-semibold mb-2">Histoire</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {cat.history}
                </p>
              </div>
            )}
          </div>

          {/* Personality */}
          {cat.personality && cat.personality.length > 0 && (
            <div className="card">
              <h3 className="text-lg font-semibold mb-3">Personnalité</h3>
              <div className="flex flex-wrap gap-2">
                {cat.personality.map((trait, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Health */}
          {cat.health && (
            <div className="card">
              <h3 className="text-lg font-semibold mb-3">État de santé</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Statut:</span>
                  <span className="font-semibold text-green-600">
                    {cat.health.status}
                  </span>
                </div>
                {cat.health.lastCheckup && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dernier contrôle:</span>
                    <span className="font-medium">
                      {format(new Date(cat.health.lastCheckup), "dd MMMM yyyy")}
                    </span>
                  </div>
                )}
                {cat.health.notes && (
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-sm text-gray-600">{cat.health.notes}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Special needs */}
          {cat.specialNeeds && cat.specialNeedsDescription && (
            <div className="card bg-yellow-50 border-2 border-yellow-200">
              <div className="flex items-start gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <h3 className="font-semibold text-yellow-900">
                  Besoins spéciaux
                </h3>
              </div>
              <p className="text-yellow-800 text-sm">
                {cat.specialNeedsDescription}
              </p>
            </div>
          )}

          {/* Aggressive warning */}
          {cat.aggressive && cat.aggressiveDetails && (
            <div className="card bg-red-50 border-2 border-red-200">
              <div className="flex items-start gap-2 mb-2">
                <XCircle className="w-5 h-5 text-red-600 mt-0.5" />
                <h3 className="font-semibold text-red-900">Avertissement</h3>
              </div>
              <p className="text-red-800 text-sm">{cat.aggressiveDetails}</p>
            </div>
          )}

          {/* Adoption Criteria */}
          <div className="card bg-primary-50">
            <h3 className="text-xl font-bold mb-4">
              Critères d'adoption recommandés
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-gray-600">
                  Expérience requise
                </span>
                <p className="font-semibold capitalize">
                  {cat.criteria.experience}
                </p>
              </div>
              <div>
                <span className="text-sm text-gray-600">
                  Compatible enfants
                </span>
                <p className="font-semibold">
                  {cat.criteria.children
                    ? `Oui (${cat.criteria.childrenAgeMin}+ ans)`
                    : "Non"}
                </p>
              </div>
              <div>
                <span className="text-sm text-gray-600">
                  Compatible autres animaux
                </span>
                <p className="font-semibold">
                  {cat.criteria.otherPets
                    ? `Oui (${
                        cat.criteria.otherPetsTypes?.join(", ") || "tous"
                      })`
                    : "Non"}
                </p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Espace requis</span>
                <p className="font-semibold capitalize">{cat.criteria.space}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Niveau d'activité</span>
                <p className="font-semibold capitalize">
                  {cat.criteria.activity}
                </p>
              </div>
              {cat.criteria.garden !== undefined && (
                <div>
                  <span className="text-sm text-gray-600">Jardin</span>
                  <p className="font-semibold">
                    {cat.criteria.garden ? "Recommandé" : "Non requis"}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Distribution info */}
          <div className="card bg-green-50 border-2 border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-green-900">
                Distribution de croquettes
              </h3>
            </div>
            <p className="text-green-800 text-sm mb-2">
              Distribution gratuite de croquettes (300g ou 900g) tous les
              vendredis soirs de 18h à 20h pour les familles adoptantes.
            </p>
            <p className="text-green-700 text-xs">
              Présentez-vous avec votre carte d'adoption pour récupérer vos
              rations.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            to={`/adoption?catId=${cat.id}`}
            className="btn-primary w-full text-lg py-4 flex items-center justify-center gap-2"
          >
            <Heart className="w-6 h-6" />
            Adopter {cat.name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CatDetail;
