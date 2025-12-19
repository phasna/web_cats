import { Link } from "react-router-dom";
import { Heart, MapPin, Shield, Baby, AlertCircle, Clock } from "lucide-react";

const CatCard = ({ cat }) => {
  const daysSinceArrival = Math.floor(
    (new Date() - new Date(cat.arrivalDate)) / (1000 * 60 * 60 * 24)
  );

  return (
    <Link
      to={`/chat/${cat.id}`}
      className="card group hover:scale-105 transition-transform duration-200"
    >
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={cat.image}
          alt={cat.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {cat.vaccinated && (
            <div className="badge badge-success flex items-center gap-1 shadow-md">
              <Shield className="w-3 h-3" />
              <span className="text-xs">Vacciné</span>
            </div>
          )}
          {cat.childFriendly && (
            <div className="badge badge-info flex items-center gap-1 shadow-md">
              <Baby className="w-3 h-3" />
              <span className="text-xs">Enfants OK</span>
            </div>
          )}
          {cat.specialNeeds && (
            <div className="badge badge-warning flex items-center gap-1 shadow-md">
              <AlertCircle className="w-3 h-3" />
              <span className="text-xs">Spécial</span>
            </div>
          )}
          {cat.aggressive && (
            <div className="badge badge-danger flex items-center gap-1 shadow-md">
              <AlertCircle className="w-3 h-3" />
              <span className="text-xs">Attention</span>
            </div>
          )}
        </div>
        {daysSinceArrival > 30 && (
          <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
            En attente depuis {daysSinceArrival} jours
          </div>
        )}
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="text-2xl font-bold mb-1 group-hover:text-primary-600 transition-colors">
            {cat.name}
          </h3>
          <div className="flex items-center text-gray-600 text-sm mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{cat.location}</span>
            <span className="mx-2">•</span>
            <span>{cat.age} ans</span>
            <span className="mx-2">•</span>
            <span>{cat.breed}</span>
          </div>
        </div>

        <p className="text-gray-600 line-clamp-2 text-sm leading-relaxed">
          {cat.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {cat.personality?.slice(0, 3).map((trait, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
            >
              {trait}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div>
            <span className="text-primary-600 font-bold text-xl">
              {cat.adoptionFee}€
            </span>
            <span className="text-gray-500 text-sm ml-1">frais d'adoption</span>
          </div>
          <div className="flex items-center text-primary-600 font-semibold group-hover:scale-110 transition-transform">
            <Heart className="w-5 h-5 mr-1" />
            <span>Voir détails</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CatCard;
