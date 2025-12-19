import { useParams, Link } from "react-router-dom";
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
} from "lucide-react";

const CatDetail = () => {
  const { id } = useParams();
  const { cats } = useCats();
  const cat = cats.find((c) => c.id === parseInt(id));

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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image */}
        <div>
          <img
            src={cat.image}
            alt={cat.name}
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{cat.name}</h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {cat.vaccinated && (
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <Shield className="w-4 h-4" />
                Vacciné
              </div>
            )}
            {cat.sterilized && (
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <CheckCircle className="w-4 h-4" />
                Stérilisé
              </div>
            )}
            {cat.childFriendly && (
              <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <Baby className="w-4 h-4" />
                Compatible enfants
              </div>
            )}
            {cat.specialNeeds && (
              <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                Besoins spéciaux
              </div>
            )}
            {cat.aggressive && (
              <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <XCircle className="w-4 h-4" />
                Peut être agressif
              </div>
            )}
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <span className="font-semibold">Âge:</span> {cat.age} ans
            </div>
            <div>
              <span className="font-semibold">Race:</span> {cat.breed}
            </div>
            <div>
              <span className="font-semibold">Sexe:</span> {cat.gender}
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="font-semibold">Localisation:</span>{" "}
              {cat.location}
            </div>
            <div>
              <span className="font-semibold">Frais d'adoption:</span>{" "}
              {cat.adoptionFee}€
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Description</h2>
            <p className="text-gray-700">{cat.description}</p>
          </div>

          <div className="mb-6 bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Critères d'adoption</h3>
            <div className="space-y-2">
              <div>
                <span className="font-semibold">Expérience requise:</span>{" "}
                {cat.criteria.experience}
              </div>
              <div>
                <span className="font-semibold">Compatible enfants:</span>{" "}
                {cat.criteria.children ? "Oui" : "Non"}
              </div>
              <div>
                <span className="font-semibold">
                  Compatible autres animaux:
                </span>{" "}
                {cat.criteria.otherPets ? "Oui" : "Non"}
              </div>
              <div>
                <span className="font-semibold">Espace requis:</span>{" "}
                {cat.criteria.space}
              </div>
              <div>
                <span className="font-semibold">Niveau d'activité:</span>{" "}
                {cat.criteria.activity}
              </div>
            </div>
          </div>

          <div className="bg-primary-50 p-4 rounded-lg mb-6">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-primary-600" />
              <h3 className="text-lg font-semibold">
                Distribution de croquettes
              </h3>
            </div>
            <p className="text-gray-700">
              Distribution gratuite de croquettes (300g ou 900g) tous les
              vendredis soirs pour les familles adoptantes.
            </p>
          </div>

          <Link
            to={`/adoption?catId=${cat.id}`}
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            <Heart className="w-5 h-5" />
            Adopter {cat.name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CatDetail;
