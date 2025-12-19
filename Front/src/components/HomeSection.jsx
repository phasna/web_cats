import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const HomeSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="card bg-gradient-to-r from-primary-600 to-primary-700 text-white">
          <div className="flex items-center gap-4 mb-4">
            <Calendar className="w-8 h-8" />
            <h2 className="text-3xl font-bold">Distribution de croquettes</h2>
          </div>
          <p className="text-xl mb-4">
            Distribution gratuite de croquettes tous les vendredis soirs pour
            les familles adoptantes.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
              <span className="font-semibold">300g</span> - Portions
              individuelles
            </div>
            <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
              <span className="font-semibold">900g</span> - Portions familiales
            </div>
          </div>
          <p className="mt-4 text-primary-100">
            Pour récupérer vos croquettes, présentez-vous tous les vendredis de
            18h à 20h à notre siège.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
