import { Link } from "react-router-dom";
import { useCats } from "../context/CatsContext";
import { Heart, MapPin, Shield, Baby, AlertCircle } from "lucide-react";
import { useState } from "react";

const CatsList = () => {
  const { cats } = useCats();
  const [filter, setFilter] = useState("tous");

  const availableCats = cats.filter((cat) => cat.available);
  const filteredCats =
    filter === "tous"
      ? availableCats
      : filter === "enfants"
      ? availableCats.filter((cat) => cat.childFriendly)
      : filter === "handicap"
      ? availableCats.filter((cat) => cat.specialNeeds)
      : availableCats;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Chats à adopter</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <button
          onClick={() => setFilter("tous")}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === "tous"
              ? "bg-primary-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Tous
        </button>
        <button
          onClick={() => setFilter("enfants")}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === "enfants"
              ? "bg-primary-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Compatible enfants
        </button>
        <button
          onClick={() => setFilter("handicap")}
          className={`px-4 py-2 rounded-lg transition-colors ${
            filter === "handicap"
              ? "bg-primary-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Handicapés
        </button>
      </div>

      {/* Cats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCats.map((cat) => (
          <Link key={cat.id} to={`/chat/${cat.id}`} className="card group">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                {cat.vaccinated && (
                  <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    Vacciné
                  </div>
                )}
                {cat.childFriendly && (
                  <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                    <Baby className="w-3 h-3" />
                    Enfants OK
                  </div>
                )}
                {cat.specialNeeds && (
                  <div className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    Spécial
                  </div>
                )}
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">{cat.name}</h3>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{cat.location}</span>
            </div>
            <p className="text-gray-600 mb-4 line-clamp-2">{cat.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-primary-600 font-bold">
                {cat.adoptionFee}€
              </span>
              <div className="flex items-center text-primary-600">
                <Heart className="w-5 h-5 mr-1" />
                <span>Adopter</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredCats.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">
            Aucun chat disponible pour ce filtre.
          </p>
        </div>
      )}
    </div>
  );
};

export default CatsList;
