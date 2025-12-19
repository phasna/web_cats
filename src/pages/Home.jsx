import { Link } from "react-router-dom";
import {
  Heart,
  Users,
  Shield,
  Calendar,
  Package,
  CheckCircle,
  TrendingUp,
  Award,
  Clock,
  Star,
} from "lucide-react";
import { useCats } from "../context/CatsContext";
import CatCard from "../components/CatCard";

const Home = () => {
  const { cats, statistics } = useCats();
  const featuredCats = cats.filter((cat) => cat.available).slice(0, 3);

  const features = [
    {
      icon: Shield,
      title: "Chats identifiés et vaccinés",
      description:
        "Tous nos chats sont identifiés dans le territoire national (puce électronique ou tatouage), vaccinés, stérilisés et suivis par nos vétérinaires partenaires. Chaque chat dispose d'un dossier médical complet.",
      color: "text-blue-600 bg-blue-100",
    },
    {
      icon: Heart,
      title: "Adoption responsable",
      description:
        "Notre système de critères sophistiqué permet de trouver le chat parfait qui correspond à votre mode de vie, votre situation familiale et vos attentes. Nous garantissons une compatibilité optimale.",
      color: "text-red-600 bg-red-100",
    },
    {
      icon: Users,
      title: "Compatible avec enfants",
      description:
        'Nous testons et vérifions soigneusement la compatibilité de chaque chat avec les enfants. Nos chats "compatible enfants" ont été évalués et sont adaptés aux familles avec enfants de tous âges.',
      color: "text-purple-600 bg-purple-100",
    },
    {
      icon: Calendar,
      title: "Distribution des rations",
      description:
        "Tous les vendredis soirs de 18h à 20h, nous distribuons gratuitement des croquettes aux familles adoptantes. Choisissez entre des portions de 300g (individuelles) ou 900g (familiales).",
      color: "text-green-600 bg-green-100",
    },
    {
      icon: Package,
      title: "Dons acceptés",
      description:
        "Soutenez notre association par des dons financiers (déductibles des impôts) ou matériels (nourriture, litière, jouets, accessoires, médicaments). Chaque don compte pour sauver plus de vies.",
      color: "text-yellow-600 bg-yellow-100",
    },
    {
      icon: CheckCircle,
      title: "Suivi post-adoption",
      description:
        "Nous restons en contact avec vous après l'adoption pour vous accompagner et garantir le bien-être de votre nouveau compagnon. Visites de suivi disponibles sur demande.",
      color: "text-indigo-600 bg-indigo-100",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Découvrez nos chats",
      description:
        "Parcourez notre catalogue de chats disponibles, consultez leurs profils détaillés et leurs critères de compatibilité.",
      icon: Heart,
    },
    {
      number: "2",
      title: "Remplissez le formulaire",
      description:
        "Remplissez notre formulaire de demande d'adoption avec vos informations et vos critères. Notre système vous proposera les chats les plus adaptés.",
      icon: CheckCircle,
    },
    {
      number: "3",
      title: "Rencontre et validation",
      description:
        "Organisez une rencontre avec le chat qui vous intéresse. Nous validons ensemble que c'est une bonne adéquation.",
      icon: Users,
    },
    {
      number: "4",
      title: "Adoption et suivi",
      description:
        "Finalisez l'adoption et accueillez votre nouveau compagnon ! Nous restons disponibles pour un suivi post-adoption.",
      icon: Award,
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Association des Chats
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Donnez une seconde chance aux chats abandonnés. Trouvez votre
            compagnon félin idéal grâce à notre système d'adoption responsable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/chats"
              className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-3"
            >
              <Heart className="w-5 h-5 inline mr-2" />
              Voir les chats à adopter
            </Link>
            <Link
              to="/adoption"
              className="btn-secondary bg-primary-500 hover:bg-primary-400 text-white text-lg px-8 py-3"
            >
              Faire une demande d'adoption
            </Link>
          </div>

          {/* Stats Quick View */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">{statistics.total}</div>
              <div className="text-sm opacity-90">Chats au refuge</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">
                {statistics.available}
              </div>
              <div className="text-sm opacity-90">Disponibles</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">
                {statistics.adopted}
              </div>
              <div className="text-sm opacity-90">Adoptés</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">
                {statistics.vaccinationRate}%
              </div>
              <div className="text-sm opacity-90">Vaccinés</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Pourquoi nous choisir ?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nous nous engageons à offrir le meilleur service d'adoption pour
              nos chats et pour vous
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="card text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Le processus d'adoption</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un processus simple et transparent en 4 étapes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="card text-center">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                        {step.number}
                      </div>
                    </div>
                    <div className="mt-6 mb-4 flex justify-center">
                      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary-300">
                      <div className="w-8 h-0.5 bg-primary-300"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Cats Section */}
      {featuredCats.length > 0 && (
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Chats vedettes</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Découvrez quelques-uns de nos adorables compagnons à la
                recherche d'un foyer
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCats.map((cat) => (
                <CatCard key={cat.id} cat={cat} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                to="/chats"
                className="btn-primary inline-flex items-center gap-2"
              >
                Voir tous les chats
                <TrendingUp className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Distribution Section */}
      <section className="py-16 lg:py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="card bg-gradient-to-r from-primary-700 to-primary-800 border-0 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Calendar className="w-10 h-10" />
                </div>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h2 className="text-3xl font-bold mb-3">
                  Distribution de croquettes
                </h2>
                <p className="text-lg mb-4 opacity-90">
                  Distribution gratuite tous les vendredis soirs de 18h à 20h
                  pour les familles adoptantes.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg backdrop-blur-sm">
                    <span className="font-bold text-xl">300g</span>
                    <span className="ml-2 opacity-90">
                      Portions individuelles
                    </span>
                  </div>
                  <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg backdrop-blur-sm">
                    <span className="font-bold text-xl">900g</span>
                    <span className="ml-2 opacity-90">Portions familiales</span>
                  </div>
                </div>
                <p className="mt-4 text-primary-100">
                  Présentez-vous à notre siège avec votre carte d'adoption pour
                  récupérer vos croquettes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Prêt à adopter ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Utilisez notre système de critères intelligent pour trouver le chat
            parfait qui correspond à votre mode de vie, votre famille et vos
            attentes.
          </p>
          <Link
            to="/adoption"
            className="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-3 inline-flex items-center gap-2"
          >
            <Heart className="w-5 h-5" />
            Faire une demande d'adoption
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
