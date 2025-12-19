import { Filter, X } from "lucide-react";
import { useState } from "react";

const FilterBar = ({ onFilterChange, cats }) => {
  const [filters, setFilters] = useState({
    location: "",
    breed: "",
    age: "",
    gender: "",
    childFriendly: null,
    specialNeeds: null,
    priceRange: "",
  });

  const [isOpen, setIsOpen] = useState(false);

  const locations = [...new Set(cats.map((cat) => cat.location))].sort();
  const breeds = [...new Set(cats.map((cat) => cat.breed))].sort();

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const emptyFilters = {
      location: "",
      breed: "",
      age: "",
      gender: "",
      childFriendly: null,
      specialNeeds: null,
      priceRange: "",
    };
    setFilters(emptyFilters);
    onFilterChange(emptyFilters);
  };

  const activeFiltersCount = Object.values(filters).filter(
    (v) => v !== "" && v !== null
  ).length;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-gray-700 hover:text-primary-600 font-semibold transition-colors"
        >
          <Filter className="w-5 h-5" />
          <span>Filtres</span>
          {activeFiltersCount > 0 && (
            <span className="bg-primary-600 text-white text-xs px-2 py-0.5 rounded-full">
              {activeFiltersCount}
            </span>
          )}
        </button>
        {activeFiltersCount > 0 && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-primary-600 transition-colors"
          >
            <X className="w-4 h-4" />
            Réinitialiser
          </button>
        )}
      </div>

      {isOpen && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-slide-up">
          {/* Localisation */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Localisation
            </label>
            <select
              value={filters.location}
              onChange={(e) => handleFilterChange("location", e.target.value)}
              className="input-field"
            >
              <option value="">Toutes</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Race */}
          <div>
            <label className="block text-sm font-semibold mb-2">Race</label>
            <select
              value={filters.breed}
              onChange={(e) => handleFilterChange("breed", e.target.value)}
              className="input-field"
            >
              <option value="">Toutes</option>
              {breeds.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </div>

          {/* Âge */}
          <div>
            <label className="block text-sm font-semibold mb-2">Âge</label>
            <select
              value={filters.age}
              onChange={(e) => handleFilterChange("age", e.target.value)}
              className="input-field"
            >
              <option value="">Tous</option>
              <option value="0-2">0-2 ans (Jeune)</option>
              <option value="3-5">3-5 ans (Adulte)</option>
              <option value="6+">6+ ans (Senior)</option>
            </select>
          </div>

          {/* Sexe */}
          <div>
            <label className="block text-sm font-semibold mb-2">Sexe</label>
            <select
              value={filters.gender}
              onChange={(e) => handleFilterChange("gender", e.target.value)}
              className="input-field"
            >
              <option value="">Tous</option>
              <option value="Mâle">Mâle</option>
              <option value="Femelle">Femelle</option>
            </select>
          </div>

          {/* Compatible enfants */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Compatible enfants
            </label>
            <select
              value={
                filters.childFriendly === null ? "" : filters.childFriendly
              }
              onChange={(e) =>
                handleFilterChange(
                  "childFriendly",
                  e.target.value === "" ? null : e.target.value === "true"
                )
              }
              className="input-field"
            >
              <option value="">Tous</option>
              <option value="true">Oui</option>
              <option value="false">Non</option>
            </select>
          </div>

          {/* Besoins spéciaux */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Besoins spéciaux
            </label>
            <select
              value={filters.specialNeeds === null ? "" : filters.specialNeeds}
              onChange={(e) =>
                handleFilterChange(
                  "specialNeeds",
                  e.target.value === "" ? null : e.target.value === "true"
                )
              }
              className="input-field"
            >
              <option value="">Tous</option>
              <option value="true">Oui</option>
              <option value="false">Non</option>
            </select>
          </div>

          {/* Prix */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Prix d'adoption
            </label>
            <select
              value={filters.priceRange}
              onChange={(e) => handleFilterChange("priceRange", e.target.value)}
              className="input-field"
            >
              <option value="">Tous</option>
              <option value="0-120">0-120€</option>
              <option value="121-150">121-150€</option>
              <option value="151+">151€ et plus</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
