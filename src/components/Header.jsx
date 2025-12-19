import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Heart,
  Gift,
  Camera,
  FileText,
  Menu,
  X,
  Info,
  HelpCircle,
} from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: "/", label: "Accueil", icon: Home },
    { to: "/chats", label: "Chats à adopter", icon: Heart },
    { to: "/adoption", label: "Demande d'adoption", icon: FileText },
    { to: "/dons", label: "Faire un don", icon: Gift },
    { to: "/visite-virtuelle", label: "Visite virtuelle", icon: Camera },
    { to: "/a-propos", label: "À propos", icon: Info },
    { to: "/faq", label: "FAQ", icon: HelpCircle },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-primary-100">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Heart
                className="w-8 h-8 text-primary-600 group-hover:scale-110 transition-transform duration-200"
                fill="currentColor"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary-600">
                Association des Chats
              </span>
              <span className="text-xs text-gray-500 hidden sm:block">
                Adoption responsable
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive(link.to)
                      ? "bg-primary-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-1 animate-slide-up">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
                    isActive(link.to)
                      ? "bg-primary-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{link.label}</span>
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
