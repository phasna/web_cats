import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com",
      label: "Facebook",
      color: "hover:text-blue-600",
    },
    {
      icon: Instagram,
      href: "https://instagram.com",
      label: "Instagram",
      color: "hover:text-pink-600",
    },
    {
      icon: Twitter,
      href: "https://twitter.com",
      label: "Twitter",
      color: "hover:text-blue-400",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:text-blue-700",
    },
    {
      icon: Youtube,
      href: "https://youtube.com",
      label: "YouTube",
      color: "hover:text-red-600",
    },
  ];

  const quickLinks = [
    { to: "/chats", label: "Chats à adopter" },
    { to: "/adoption", label: "Faire une demande" },
    { to: "/dons", label: "Faire un don" },
    { to: "/visite-virtuelle", label: "Visite virtuelle" },
    { to: "/a-propos", label: "À propos" },
    { to: "/enregistrer-chat", label: "Enregistrer un chat" },
  ];

  const legalLinks = [
    { to: "#", label: "Mentions légales" },
    { to: "#", label: "Politique de confidentialité" },
    { to: "#", label: "CGU" },
    { to: "#", label: "Cookies" },
  ];

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Téléphone</p>
                  <a
                    href="tel:+33123456789"
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    01 23 45 67 89
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:contact@association-chats.fr"
                    className="text-gray-300 hover:text-primary-400 transition-colors break-all"
                  >
                    contact@association-chats.fr
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Adresse</p>
                  <p className="text-gray-300">123 Rue des Chats</p>
                  <p className="text-gray-300">75000 Paris, France</p>
                </div>
              </div>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">
              Navigation
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-primary-400 transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">
              Horaires
            </h3>
            <div className="space-y-2 text-gray-300">
              <div>
                <p className="font-semibold">Lundi - Vendredi</p>
                <p>10h - 18h</p>
              </div>
              <div>
                <p className="font-semibold">Samedi</p>
                <p>10h - 17h</p>
              </div>
              <div>
                <p className="font-semibold">Dimanche</p>
                <p>Fermé</p>
              </div>
              <div className="pt-2 border-t border-gray-700">
                <p className="font-semibold text-primary-400">
                  Distribution croquettes
                </p>
                <p>Vendredis 18h - 20h</p>
              </div>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">
              Suivez-nous
            </h3>
            <p className="text-gray-300 mb-4">
              Rejoignez notre communauté et suivez nos actualités
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center ${social.color} transition-all duration-200 hover:scale-110 border border-gray-700`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white placeholder-gray-400"
                />
                <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-r-lg transition-colors">
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} Association des Chats. Tous droits réservés.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.to}
                  className="text-gray-400 hover:text-primary-400 text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
