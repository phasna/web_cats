import {
  Heart,
  Users,
  Shield,
  Target,
  Award,
  Clock,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { useCats } from "../context/CatsContext";

const About = () => {
  const { statistics } = useCats();

  const values = [
    {
      icon: Heart,
      title: "Bien-être animal",
      description:
        "Le bien-être et le bonheur de chaque chat sont notre priorité absolue.",
    },
    {
      icon: Shield,
      title: "Transparence",
      description:
        "Nous garantissons une transparence totale sur nos actions et nos finances.",
    },
    {
      icon: Users,
      title: "Responsabilité",
      description: "Nous promouvons une adoption responsable et éclairée.",
    },
    {
      icon: Target,
      title: "Engagement",
      description:
        "Nous nous engageons pour sauver le maximum de vies félines.",
    },
  ];

  const achievements = [
    { number: statistics.total, label: "Chats secourus" },
    { number: statistics.adopted, label: "Chats adoptés" },
    {
      number: statistics.vaccinationRate,
      suffix: "%",
      label: "Taux de vaccination",
    },
    { number: statistics.specialNeeds, label: "Chats handicapés aidés" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          À propos de nous
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          L'Association des Chats œuvre depuis des années pour sauver, soigner
          et trouver des foyers aimants pour les chats abandonnés et maltraités.
        </p>
      </div>

      {/* Mission Section */}
      <section className="mb-16">
        <div className="card bg-gradient-to-br from-primary-600 to-primary-700 text-white">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Target className="w-12 h-12" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Notre mission</h2>
              <p className="text-lg leading-relaxed mb-4 opacity-95">
                L'Association des Chats a pour mission de secourir, soigner et
                placer les chats abandonnés, maltraités ou en difficulté. Nous
                offrons à chaque chat une seconde chance en lui trouvant un
                foyer permanent et aimant.
              </p>
              <p className="text-lg leading-relaxed opacity-95">
                Notre engagement va au-delà de l'adoption : nous éduquons le
                public sur la responsabilité des propriétaires d'animaux,
                promouvons la stérilisation et l'identification, et offrons un
                soutien continu aux familles adoptantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Nos valeurs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="card text-center hover:shadow-xl transition-all"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Achievements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Nos réalisations
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="card text-center bg-gradient-to-br from-primary-50 to-primary-100"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {achievement.number}
                {achievement.suffix}
              </div>
              <div className="text-gray-700 font-medium">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Comment nous travaillons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Secours</h3>
            <p className="text-gray-600">
              Nous recueillons les chats abandonnés, maltraités ou en danger
              dans toute la région. Notre réseau de bénévoles et partenaires
              nous permet d'intervenir rapidement.
            </p>
          </div>
          <div className="card">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Soins</h3>
            <p className="text-gray-600">
              Chaque chat reçoit tous les soins nécessaires : vaccination,
              stérilisation, identification, soins vétérinaires. Nous
              garantissons que chaque chat est en parfaite santé avant
              l'adoption.
            </p>
          </div>
          <div className="card">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Placement</h3>
            <p className="text-gray-600">
              Grâce à notre système de critères sophistiqué, nous trouvons le
              foyer idéal pour chaque chat. Nous assurons un suivi post-adoption
              pour garantir le bonheur de tous.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <div className="card bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-8">Notre équipe</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            L'Association des Chats est composée d'une équipe dévouée de
            bénévoles, vétérinaires, familles d'accueil et membres du personnel
            qui partagent la même passion : sauver des vies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-primary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Bénévoles</h3>
              <p className="text-gray-600 text-sm">
                Plus de 50 bénévoles actifs
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Familles d'accueil</h3>
              <p className="text-gray-600 text-sm">
                Réseau de 30 familles d'accueil
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Vétérinaires</h3>
              <p className="text-gray-600 text-sm">
                Partenaires vétérinaires certifiés
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="card bg-primary-50 border-2 border-primary-200">
        <h2 className="text-3xl font-bold text-center mb-8">Nous contacter</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Adresse</h3>
              <p className="text-gray-700">123 Rue des Chats</p>
              <p className="text-gray-700">75000 Paris, France</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Téléphone</h3>
              <p className="text-gray-700">01 23 45 67 89</p>
              <p className="text-gray-600 text-sm">Lun-Ven 10h-18h</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-gray-700">contact@association-chats.fr</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Horaires</h3>
              <p className="text-gray-700">Lundi - Vendredi : 10h - 18h</p>
              <p className="text-gray-700">Samedi : 10h - 17h</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
