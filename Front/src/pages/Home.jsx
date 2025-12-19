import { Link } from "react-router-dom";
import {
  Heart,
  Users,
  Shield,
  Calendar,
  Package,
  CheckCircle,
} from "lucide-react";
import HomeSection from "../components/HomeSection";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Chats identifiés et vaccinés",
      description:
        "Tous nos chats sont identifiés dans le territoire national, vaccinés et stérilisés.",
    },
    {
      icon: Heart,
      title: "Adoption responsable",
      description:
        "Système de critères pour trouver le chat parfait qui correspond à votre famille.",
    },
    {
      icon: Users,
      title: "Compatible avec enfants",
      description:
        "Nous vérifions la compatibilité de chaque chat avec les enfants avant l'adoption.",
    },
    {
      icon: Calendar,
      title: "Distribution des rations",
      description:
        "Vendredis soirs : distribution de croquettes (300g, 900g) pour les familles adoptantes.",
    },
    {
      icon: Package,
      title: "Dons acceptés",
      description:
        "Soutenez notre association par des dons financiers ou matériels (nourriture, jouets).",
    },
    {
      icon: CheckCircle,
      title: "Suivi post-adoption",
      description:
        "Accompagnement et suivi après l'adoption pour garantir le bien-être des chats.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Association des Chats</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Donnez une seconde chance aux chats abandonnés. Trouvez votre
            compagnon félin idéal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/chats"
              className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
            >
              Voir les chats à adopter
            </Link>
            <Link
              to="/adoption"
              className="btn-secondary bg-primary-500 hover:bg-primary-400 text-white"
            >
              Faire une demande d'adoption
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pourquoi nous choisir ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                150+
              </div>
              <div className="text-gray-600">Chats adoptés</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                50+
              </div>
              <div className="text-gray-600">Chats disponibles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-600 mb-2">
                100%
              </div>
              <div className="text-gray-600">Chats vaccinés</div>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution Section */}
      <HomeSection />

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à adopter ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Utilisez notre système de critères pour trouver le chat parfait qui
            correspond à votre mode de vie.
          </p>
          <Link
            to="/adoption"
            className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
          >
            Faire une demande d'adoption
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
