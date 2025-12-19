import { useState } from "react";
import { Camera, MapPin, Calendar, Users, Heart } from "lucide-react";
import { useCats } from "../context/CatsContext";

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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
            <Camera className="w-8 h-8 text-primary-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">Visite virtuelle</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Découvrez nos refuges et nos chats depuis chez vous. Visitez
          virtuellement nos installations et rencontrez nos adorables compagnons
          félins.
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
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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
        {["Paris", "Lyon", "Marseille"].map((location) => {
          const locationCats = cats.filter(
            (cat) => cat.location === location && cat.available
          );
          if (
            locationCats.length === 0 &&
            selectedLocation !== "tous" &&
            selectedLocation !== location
          )
            return null;

          return (
            <div key={location} className="card">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-6 h-6 text-primary-600" />
                <h2 className="text-2xl font-bold">{location}</h2>
              </div>

              <div className="bg-gray-200 h-64 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Vue virtuelle du refuge</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Tour panoramique 360° disponible
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-5 h-5" />
                  <span>
                    {locationCats.length} chat
                    {locationCats.length > 1 ? "s" : ""} disponible
                    {locationCats.length > 1 ? "s" : ""}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span>Ouvert tous les jours 10h-18h</span>
                </div>
              </div>

              <button className="btn-primary mt-4 w-full">
                Commencer la visite virtuelle
              </button>
            </div>
          );
        })}
      </div>

      {/* Cats Gallery */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-center">
          Rencontrez nos chats
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredCats.map((cat) => (
            <div
              key={cat.id}
              className="card p-0 overflow-hidden group cursor-pointer"
            >
              <div className="relative">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg">{cat.name}</h3>
                <p className="text-sm text-gray-600">{cat.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visit Information */}
      <div className="mt-12 card bg-primary-50">
        <h3 className="text-2xl font-bold mb-4">
          Informations sur les visites
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Visite virtuelle</h4>
            <p className="text-gray-600">
              Explorez nos refuges en ligne avec nos visites virtuelles 360°.
              Découvrez les installations et les chats disponibles depuis votre
              canapé.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Visite sur place</h4>
            <p className="text-gray-600">
              Vous pouvez également nous rendre visite en personne. Tous nos
              refuges sont ouverts tous les jours de 10h à 18h. Nous
              recommandons de prendre rendez-vous.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualVisit;
