import { useState, useMemo } from "react";
import { useCats } from "../context/CatsContext";
import CatCard from "../components/CatCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import { Heart, Filter as FilterIcon } from "lucide-react";

const CatsList = () => {
  const { cats } = useCats();
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    breed: "",
    age: "",
    gender: "",
    childFriendly: null,
    specialNeeds: null,
    priceRange: "",
  });

  const filteredCats = useMemo(() => {
    let result = cats.filter((cat) => cat.available);

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (cat) =>
          cat.name.toLowerCase().includes(query) ||
          cat.breed.toLowerCase().includes(query) ||
          cat.description.toLowerCase().includes(query) ||
          cat.location.toLowerCase().includes(query) ||
          cat.personality?.some((trait) => trait.toLowerCase().includes(query))
      );
    }

    // Location filter
    if (filters.location) {
      result = result.filter((cat) => cat.location === filters.location);
    }

    // Breed filter
    if (filters.breed) {
      result = result.filter((cat) => cat.breed === filters.breed);
    }

    // Age filter
    if (filters.age) {
      const [min, max] = filters.age
        .split("-")
        .map((a) => a.replace("+", "999"));
      result = result.filter((cat) => {
        const age = parseInt(cat.age);
        if (filters.age === "6+") return age >= 6;
        return age >= parseInt(min) && age <= parseInt(max);
      });
    }

    // Gender filter
    if (filters.gender) {
      result = result.filter((cat) => cat.gender === filters.gender);
    }

    // Child friendly filter
    if (filters.childFriendly !== null) {
      result = result.filter(
        (cat) => cat.childFriendly === filters.childFriendly
      );
    }

    // Special needs filter
    if (filters.specialNeeds !== null) {
      result = result.filter(
        (cat) => cat.specialNeeds === filters.specialNeeds
      );
    }

    // Price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange
        .split("-")
        .map((p) => p.replace("+", "9999"));
      result = result.filter((cat) => {
        const price = cat.adoptionFee;
        if (filters.priceRange === "151+") return price >= 151;
        return price >= parseInt(min) && price <= parseInt(max);
      });
    }

    return result;
  }, [cats, searchQuery, filters]);

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Chats à adopter</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Découvrez tous nos compagnons félins en attente d'un foyer aimant
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <SearchBar
          onSearch={setSearchQuery}
          placeholder="Rechercher par nom, race, localisation ou personnalité..."
        />
      </div>

      {/* Filter Bar */}
      <FilterBar onFilterChange={setFilters} cats={cats} />

      {/* Results count */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-gray-600">
          <span className="font-semibold text-primary-600">
            {filteredCats.length}
          </span>{" "}
          chat{filteredCats.length > 1 ? "s" : ""} trouvé
          {filteredCats.length > 1 ? "s" : ""}
        </p>
      </div>

      {/* Cats Grid */}
      {filteredCats.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCats.map((cat) => (
            <CatCard key={cat.id} cat={cat} />
          ))}
        </div>
      ) : (
        <div className="card text-center py-12">
          <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Aucun chat trouvé</h3>
          <p className="text-gray-600 mb-6">
            Aucun chat ne correspond à vos critères de recherche. Essayez de
            modifier vos filtres.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setFilters({
                location: "",
                breed: "",
                age: "",
                gender: "",
                childFriendly: null,
                specialNeeds: null,
                priceRange: "",
              });
            }}
            className="btn-primary"
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}
    </div>
  );
};

export default CatsList;
