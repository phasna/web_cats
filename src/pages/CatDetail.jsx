import { useParams, Link, useNavigate } from "react-router-dom";
import { useCats } from "../context/CatsContext";
import {
  Heart,
  MapPin,
  Shield,
  Baby,
  AlertCircle,
  CheckCircle,
  XCircle,
  Calendar,
  Clock,
  Scale,
  Palette,
  FileText,
  ArrowLeft,
  Share2,
  Camera,
} from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";

const CatDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cats } = useCats();
  const cat = cats.find((c) => c.id === parseInt(id));
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!cat) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Chat non trouvé</h1>
        <Link to="/chats" className="text-primary-600 hover:underline">
          Retour à la liste des chats
        </Link>
      </div>
    );
  }

  const daysSinceArrival = Math.floor(
    (new Date() - new Date(cat.arrivalDate)) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-600 hover:text-primary-600 mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Retour</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Images Section */}
        <div>
          <div className="card p-0 overflow-hidden">
            <img
              src={cat.photos?.[selectedImageIndex] || cat.image}
              alt={cat.name}
              className="w-full h-96 lg:h-[500px] object-cover"
            />
          </div>

          {/* Thumbnail gallery */}
          {cat.photos && cat.photos.length > 1 && (
            <div className="grid grid-cols-4 gap-2 mt-4">
              {cat.photos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImageIndex === index
                      ? "border-primary-600 ring-2 ring-primary-300"
                      : "border-gray-200 hover:border-primary-400"
                  }`}
                >
                  <img
                    src={photo}
                    alt={`${cat.name} ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-4xl font-bold mb-2">{cat.name}</h1>
                <div className="flex items-center gap-4 text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-1" />
                    <span>{cat.location}</span>
                  </div>
                  <span>•</span>
                  <span>{cat.age} ans</span>
                  <span>•</span>
                  <span>{cat.breed}</span>
                </div>
              </div>
              <button className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {cat.vaccinated && (
                <div className="badge badge-success flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  <span>Vacciné</span>
                </div>
              )}
              {cat.sterilized && (
                <div className="badge badge-info flex items-center gap-1">
                  <CheckCircle className="w-4 h-4" />
                  <span>Stérilisé</span>
                </div>
              )}
              {cat.childFriendly && (
                <div className="badge badge-info flex items-center gap-1">
                  <Baby className="w-4 h-4" />
                  <span>Compatible enfants</span>
                </div>
              )}
              {cat.specialNeeds && (
                <div className="badge badge-warning flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  <span>Besoins spéciaux</span>
                </div>
              )}
              {cat.aggressive && (
                <div className="badge badge-danger flex items-center gap-1">
                  <XCircle className="w-4 h-4" />
                  <span>Peut être agressif</span>
                </div>
              )}
            </div>
          </div>

          {/* Quick Info */}
          <div className="card bg-gray-50">
            <h3 className="text-lg font-semibold mb-4">Informations rapides</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-gray-600 text-sm">Prix d'adoption</span>
                <p className="text-2xl font-bold text-primary-600">
                  {cat.adoptionFee}€
                </p>
              </div>
              <div>
                <span className="text-gray-600 text-sm">Poids</span>
                <div className="flex items-center gap-1">
                  <Scale className="w-4 h-4 text-gray-400" />
                  <p className="text-xl font-semibold">{cat.weight} kg</p>
                </div>
              </div>
              <div>
                <span className="text-gray-600 text-sm">Couleur</span>
                <div className="flex items-center gap-1">
                  <Palette className="w-4 h-4 text-gray-400" />
                  <p className="text-lg font-medium">{cat.color}</p>
                </div>
              </div>
              <div>
                <span className="text-gray-600 text-sm">Sexe</span>
                <p className="text-lg font-medium">{cat.gender}</p>
              </div>
              {cat.identificationNumber && (
                <div className="col-span-2">
                  <span className="text-gray-600 text-sm">
                    Numéro d'identification
                  </span>
                  <p className="text-sm font-mono">
                    {cat.identificationNumber}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {cat.description}
            </p>

            {/* History */}
            {cat.history && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h3 className="font-semibold mb-2">Histoire</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {cat.history}
                </p>
              </div>
            )}
          </div>

          {/* Personality */}
          {cat.personality && cat.personality.length > 0 && (
            <div className="card">
              <h3 className="text-lg font-semibold mb-3">Personnalité</h3>
              <div className="flex flex-wrap gap-2">
                {cat.personality.map((trait, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Health */}
          {cat.health && (
            <div className="card">
              <h3 className="text-lg font-semibold mb-3">État de santé</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Statut:</span>
                  <span className="font-semibold text-green-600">
                    {cat.health.status}
                  </span>
                </div>
                {cat.health.lastCheckup && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dernier contrôle:</span>
                    <span className="font-medium">
                      {format(new Date(cat.health.lastCheckup), "dd MMMM yyyy")}
                    </span>
                  </div>
                )}
                {cat.health.notes && (
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-sm text-gray-600">{cat.health.notes}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Special needs */}
          {cat.specialNeeds && cat.specialNeedsDescription && (
            <div className="card bg-yellow-50 border-2 border-yellow-200">
              <div className="flex items-start gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                <h3 className="font-semibold text-yellow-900">
                  Besoins spéciaux
                </h3>
              </div>
              <p className="text-yellow-800 text-sm">
                {cat.specialNeedsDescription}
              </p>
            </div>
          )}

          {/* Aggressive warning */}
          {cat.aggressive && cat.aggressiveDetails && (
            <div className="card bg-red-50 border-2 border-red-200">
              <div className="flex items-start gap-2 mb-2">
                <XCircle className="w-5 h-5 text-red-600 mt-0.5" />
                <h3 className="font-semibold text-red-900">Avertissement</h3>
              </div>
              <p className="text-red-800 text-sm">{cat.aggressiveDetails}</p>
            </div>
          )}

          {/* Adoption Criteria */}
          <div className="card bg-primary-50">
            <h3 className="text-xl font-bold mb-4">
              Critères d'adoption recommandés
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-sm text-gray-600">
                  Expérience requise
                </span>
                <p className="font-semibold capitalize">
                  {cat.criteria.experience}
                </p>
              </div>
              <div>
                <span className="text-sm text-gray-600">
                  Compatible enfants
                </span>
                <p className="font-semibold">
                  {cat.criteria.children
                    ? `Oui (${cat.criteria.childrenAgeMin}+ ans)`
                    : "Non"}
                </p>
              </div>
              <div>
                <span className="text-sm text-gray-600">
                  Compatible autres animaux
                </span>
                <p className="font-semibold">
                  {cat.criteria.otherPets
                    ? `Oui (${
                        cat.criteria.otherPetsTypes?.join(", ") || "tous"
                      })`
                    : "Non"}
                </p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Espace requis</span>
                <p className="font-semibold capitalize">{cat.criteria.space}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Niveau d'activité</span>
                <p className="font-semibold capitalize">
                  {cat.criteria.activity}
                </p>
              </div>
              {cat.criteria.garden !== undefined && (
                <div>
                  <span className="text-sm text-gray-600">Jardin</span>
                  <p className="font-semibold">
                    {cat.criteria.garden ? "Recommandé" : "Non requis"}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Distribution info */}
          <div className="card bg-green-50 border-2 border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-green-900">
                Distribution de croquettes
              </h3>
            </div>
            <p className="text-green-800 text-sm mb-2">
              Distribution gratuite de croquettes (300g ou 900g) tous les
              vendredis soirs de 18h à 20h pour les familles adoptantes.
            </p>
            <p className="text-green-700 text-xs">
              Présentez-vous avec votre carte d'adoption pour récupérer vos
              rations.
            </p>
          </div>

          {/* Physical Characteristics */}
          {cat.physicalCharacteristics && (
            <div className="card">
              <h3 className="text-xl font-bold mb-4">
                Caractéristiques physiques
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <span className="text-sm text-gray-600">Taille</span>
                  <p className="font-semibold">
                    {cat.physicalCharacteristics.size}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Type de pelage</span>
                  <p className="font-semibold">
                    {cat.physicalCharacteristics.coatType}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">
                    Longueur du pelage
                  </span>
                  <p className="font-semibold">
                    {cat.physicalCharacteristics.coatLength}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">
                    Couleur des yeux
                  </span>
                  <p className="font-semibold">
                    {cat.physicalCharacteristics.eyeColor}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Type de queue</span>
                  <p className="font-semibold">
                    {cat.physicalCharacteristics.tailLength}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Corpulence</span>
                  <p className="font-semibold">
                    {cat.physicalCharacteristics.build}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Behavior */}
          {cat.behavior && (
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Comportement</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="text-sm text-gray-600">
                    Niveau d'activité
                  </span>
                  <p className="font-semibold">{cat.behavior.activityLevel}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Joueur</span>
                  <p className="font-semibold">{cat.behavior.playfulness}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Indépendance</span>
                  <p className="font-semibold">{cat.behavior.independence}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Sociabilité</span>
                  <p className="font-semibold">{cat.behavior.sociability}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Vocalisation</span>
                  <p className="font-semibold">{cat.behavior.vocalization}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">
                    Besoin de toilettage
                  </span>
                  <p className="font-semibold text-sm">
                    {cat.behavior.groomingNeeds}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">
                    Niveau d'énergie
                  </span>
                  <p className="font-semibold">{cat.behavior.energyLevel}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Curiosité</span>
                  <p className="font-semibold">{cat.behavior.curiosity}</p>
                </div>
                <div className="md:col-span-2">
                  <span className="text-sm text-gray-600">Adaptabilité</span>
                  <p className="font-semibold">{cat.behavior.adaptability}</p>
                </div>
              </div>
            </div>
          )}

          {/* Preferences */}
          {cat.preferences && (
            <div className="card bg-purple-50 border-2 border-purple-200">
              <h3 className="text-xl font-bold mb-4">
                Préférences et habitudes
              </h3>
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-semibold text-purple-900">
                    Activités préférées
                  </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {cat.preferences.favoriteActivities?.map(
                      (activity, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                        >
                          {activity}
                        </span>
                      )
                    )}
                  </div>
                </div>
                <div>
                  <span className="text-sm font-semibold text-purple-900">
                    Nourriture préférée
                  </span>
                  <p className="text-purple-800 mt-1">
                    {cat.preferences.favoriteFood}
                  </p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-purple-900">
                    Jouets préférés
                  </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {cat.preferences.favoriteToys?.map((toy, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                      >
                        {toy}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-sm font-semibold text-purple-900">
                    Rythme de sommeil
                  </span>
                  <p className="text-purple-800 mt-1">
                    {cat.preferences.sleepSchedule}
                  </p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-purple-900">
                    Endroits préférés
                  </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {cat.preferences.preferredSpots?.map((spot, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                      >
                        {spot}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-sm font-semibold text-purple-900">
                    Préférence sociale
                  </span>
                  <p className="text-purple-800 mt-1">
                    {cat.preferences.socialPreference}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Care Instructions */}
          {cat.careInstructions && (
            <div className="card bg-green-50 border-2 border-green-200">
              <h3 className="text-xl font-bold mb-4">Instructions de soins</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-semibold text-green-900">
                    Alimentation
                  </span>
                  <p className="text-green-800 mt-1 text-sm">
                    {cat.careInstructions.feeding}
                  </p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-green-900">
                    Toilettage
                  </span>
                  <p className="text-green-800 mt-1 text-sm">
                    {cat.careInstructions.grooming}
                  </p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-green-900">
                    Exercice
                  </span>
                  <p className="text-green-800 mt-1 text-sm">
                    {cat.careInstructions.exercise}
                  </p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-green-900">
                    Litière
                  </span>
                  <p className="text-green-800 mt-1 text-sm">
                    {cat.careInstructions.litterBox}
                  </p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-green-900">
                    Visites vétérinaires
                  </span>
                  <p className="text-green-800 mt-1 text-sm">
                    {cat.careInstructions.vetVisits}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Medical History */}
          {cat.medicalHistory && (
            <div className="card bg-blue-50 border-2 border-blue-200">
              <h3 className="text-xl font-bold mb-4">Historique médical</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-semibold text-blue-900">
                    Chirurgies
                  </span>
                  <ul className="list-disc list-inside text-blue-800 text-sm mt-1">
                    {cat.medicalHistory.surgeries?.map((surgery, idx) => (
                      <li key={idx}>{surgery}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="text-sm font-semibold text-blue-900">
                    Traitements récents
                  </span>
                  <ul className="list-disc list-inside text-blue-800 text-sm mt-1">
                    {cat.medicalHistory.treatments?.map((treatment, idx) => (
                      <li key={idx}>{treatment}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="text-sm font-semibold text-blue-900">
                    Allergies
                  </span>
                  <p className="text-blue-800 text-sm mt-1">
                    {cat.medicalHistory.allergies}
                  </p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-blue-900">
                    Médicaments actuels
                  </span>
                  <p className="text-blue-800 text-sm mt-1">
                    {cat.medicalHistory.medications}
                  </p>
                </div>
                {cat.medicalHistory.chronicConditions && (
                  <div>
                    <span className="text-sm font-semibold text-blue-900">
                      Conditions chroniques
                    </span>
                    <p className="text-blue-800 text-sm mt-1">
                      {cat.medicalHistory.chronicConditions}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Daily Routine */}
          {cat.dailyRoutine && (
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Routine quotidienne</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="text-sm font-semibold text-gray-700">
                    Matin
                  </span>
                  <p className="text-gray-600 text-sm mt-1">
                    {cat.dailyRoutine.morning}
                  </p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-700">
                    Après-midi
                  </span>
                  <p className="text-gray-600 text-sm mt-1">
                    {cat.dailyRoutine.afternoon}
                  </p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-700">
                    Soir
                  </span>
                  <p className="text-gray-600 text-sm mt-1">
                    {cat.dailyRoutine.evening}
                  </p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-700">
                    Nuit
                  </span>
                  <p className="text-gray-600 text-sm mt-1">
                    {cat.dailyRoutine.night}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Training */}
          {cat.training && (
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Éducation et dressage</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="text-sm text-gray-600">
                    Éduqué à la litière
                  </span>
                  <p className="font-semibold">
                    {cat.training.litterTrained ? "Oui" : "Non"}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">
                    Éduqué en laisse
                  </span>
                  <p className="font-semibold">
                    {cat.training.leashTrained ? "Oui" : "Non"}
                  </p>
                </div>
                <div className="md:col-span-2">
                  <span className="text-sm text-gray-600">
                    Commandes connues
                  </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {cat.training.commands?.map((cmd, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                      >
                        {cmd}
                      </span>
                    ))}
                  </div>
                </div>
                {cat.training.tricks && (
                  <div className="md:col-span-2">
                    <span className="text-sm text-gray-600">Tours appris</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {cat.training.tricks?.map((trick, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm"
                        >
                          {trick}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <div className="md:col-span-2">
                  <span className="text-sm text-gray-600">
                    Notes comportementales
                  </span>
                  <p className="text-gray-700 text-sm mt-1">
                    {cat.training.behavioralNotes}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Environment Needs */}
          {cat.environmentNeeds && (
            <div className="card bg-indigo-50 border-2 border-indigo-200">
              <h3 className="text-xl font-bold mb-4">
                Besoins environnementaux
              </h3>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm font-semibold text-indigo-900">
                      Intérieur/Extérieur
                    </span>
                    <p className="text-indigo-800 mt-1">
                      {cat.environmentNeeds.indoor
                        ? "Intérieur uniquement"
                        : cat.environmentNeeds.outdoor
                        ? "Accès extérieur requis"
                        : "Les deux"}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-indigo-900">
                      Température
                    </span>
                    <p className="text-indigo-800 mt-1 text-sm">
                      {cat.environmentNeeds.temperature}
                    </p>
                  </div>
                </div>
                <div>
                  <span className="text-sm font-semibold text-indigo-900">
                    Espace requis
                  </span>
                  <p className="text-indigo-800 mt-1 text-sm">
                    {cat.environmentNeeds.space}
                  </p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-indigo-900">
                    Accessoires nécessaires
                  </span>
                  <ul className="list-disc list-inside text-indigo-800 text-sm mt-1">
                    {cat.environmentNeeds.accessories?.map((acc, idx) => (
                      <li key={idx}>{acc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* CTA Button */}
          <Link
            to={`/adoption?catId=${cat.id}`}
            className="btn-primary w-full text-lg py-4 flex items-center justify-center gap-2"
          >
            <Heart className="w-6 h-6" />
            Adopter {cat.name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CatDetail;
