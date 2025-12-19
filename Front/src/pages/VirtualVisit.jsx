import { useState } from "react";
import {
  Camera,
  MapPin,
  Calendar,
  Users,
  Heart,
  ArrowRight,
  Play,
} from "lucide-react";
import { useCats } from "../context/CatsContext";
import { Link } from "react-router-dom";

const VirtualVisit = () => {
  const { cats } = useCats();
  const [selectedLocation, setSelectedLocation] = useState("tous");

  const locations = ["tous", ...new Set(cats.map((cat) => cat.location))];

  const filteredCats =
    selectedLocation === "tous"
      ? cats.filter((cat) => cat.available)
      : cats.filter(
          (cat) => cat.available && cat.location === selectedLocation
        );

  const locationStats = locations
    .filter((l) => l !== "tous")
    .map((location) => ({
      location,
      cats: cats.filter((cat) => cat.location === location && cat.available),
      totalCats: cats.filter((cat) => cat.location === location).length,
    }));

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
            <Camera className="w-10 h-10 text-primary-600" />
          </div>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          Visite virtuelle
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Découvrez nos refuges et nos chats depuis chez vous. Visitez
          virtuellement nos installations et rencontrez nos adorables compagnons
          félins en 360°.
        </p>
      </div>

      {/* Location Filter */}
      <div className="mb-8">
        <label className="block text-sm font-semibold mb-2">
          Filtrer par localisation
        </label>
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="input-field max-w-xs"
        >
          {locations.map((location) => (
            <option key={location} value={location}>
              {location === "tous" ? "Toutes les localisations" : location}
            </option>
          ))}
        </select>
      </div>

      {/* Virtual Tour Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {locationStats.map(({ location, cats: locationCats, totalCats }) => {
          if (selectedLocation !== "tous" && selectedLocation !== location)
            return null;
          if (locationCats.length === 0) return null;

          return (
            <div
              key={location}
              className="card hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold">{location}</h2>
              </div>

              {/* Virtual Tour Preview */}
              <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 h-64 rounded-lg mb-4 flex items-center justify-center overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white bg-opacity-90 rounded-full p-4">
                      <Play
                        className="w-12 h-12 text-primary-600"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center z-10">
                  <Camera className="w-16 h-16 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-700 font-semibold">
                    Vue virtuelle du refuge
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Tour panoramique 360° disponible
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Cliquez pour commencer la visite
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">Disponibles</span>
                  </div>
                  <p className="text-2xl font-bold text-primary-600">
                    {locationCats.length}
                  </p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">Total</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-700">
                    {totalCats}
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span>Ouvert tous les jours 10h-18h</span>
                </div>
                <div className="text-sm text-gray-600">
                  <strong>Adresse :</strong> 123 Rue des Chats, {location}
                </div>
              </div>

              <button className="btn-primary w-full flex items-center justify-center gap-2">
                Commencer la visite virtuelle
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          );
        })}
      </div>

      {/* Cats Gallery */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Rencontrez nos chats</h2>
          <Link
            to="/chats"
            className="text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-1"
          >
            Voir tous les chats
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        {filteredCats.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredCats.map((cat) => (
              <Link
                key={cat.id}
                to={`/chat/${cat.id}`}
                className="card p-0 overflow-hidden group cursor-pointer hover:scale-105 transition-transform"
              >
                <div className="relative">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary-600 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-gray-600">{cat.location}</p>
                  <p className="text-primary-600 font-semibold mt-2">
                    {cat.adoptionFee}€
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="card text-center py-12">
            <p className="text-gray-600">
              Aucun chat disponible dans cette localisation.
            </p>
          </div>
        )}
      </div>

      {/* Visit Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card bg-primary-50 border-2 border-primary-200">
          <div className="flex items-center gap-3 mb-4">
            <Camera className="w-8 h-8 text-primary-600" />
            <h3 className="text-2xl font-bold">Visite virtuelle</h3>
          </div>
          <div className="space-y-3 text-gray-700">
            <p>
              Explorez nos refuges en ligne avec nos visites virtuelles 360°.
              Découvrez les installations, les espaces de vie, les zones de jeu
              et les chats disponibles depuis votre canapé.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Tour panoramique interactif</li>
              <li>Vues à 360° de chaque espace</li>
              <li>Rencontrez les chats en temps réel</li>
              <li>Navigation intuitive</li>
            </ul>
          </div>
        </div>

        <div className="card bg-blue-50 border-2 border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-8 h-8 text-blue-600" />
            <h3 className="text-2xl font-bold">Visite sur place</h3>
          </div>
          <div className="space-y-3 text-gray-700">
            <p>
              Vous pouvez également nous rendre visite en personne. Tous nos
              refuges sont ouverts tous les jours de 10h à 18h. Nous
              recommandons de prendre rendez-vous pour une visite guidée.
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Ouvert tous les jours 10h-18h</li>
              <li>Visites guidées sur rendez-vous</li>
              <li>Parking disponible</li>
              <li>Accessible en transports en commun</li>
            </ul>
            <div className="pt-3 border-t border-blue-200">
              <p className="text-sm font-semibold text-blue-900">
                Pour prendre rendez-vous : contact@association-chats.fr ou 01 23
                45 67 89
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualVisit;
