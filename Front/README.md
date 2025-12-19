# Association des Chats - Application Web

Application web pour la gestion d'une association d'adoption de chats, construite avec React et Tailwind CSS.

## Fonctionnalités

### 🐱 Gestion des chats

- Liste des chats disponibles à l'adoption
- Détails complets de chaque chat (âge, race, description, soins, etc.)
- Enregistrement de nouveaux chats avec toutes les informations nécessaires
- Identification dans le territoire national (obligatoire)
- Gestion des chats vaccinés et stérilisés
- Gestion des chats avec besoins spéciaux/handicap
- Gestion des chats agressifs

### 🔍 Système de critères d'adoption

- Critères de compatibilité pour chaque chat :
  - Expérience requise (débutant, intermédiaire, expérimenté)
  - Compatibilité avec enfants
  - Compatibilité avec autres animaux
  - Espace requis (appartement, maison, etc.)
  - Niveau d'activité
- Système de matching automatique entre adoptants et chats

### 📝 Demandes d'adoption

- Formulaire complet de demande d'adoption
- Collecte d'informations personnelles
- Évaluation des critères de compatibilité
- Suggestions automatiques de chats compatibles
- Gestion des frais d'adoption

### 💝 Dons

- Dons financiers avec montants prédéfinis
- Dons matériels (nourriture, litière, jouets, accessoires, médicaments)
- Informations sur la déductibilité fiscale

### 🏠 Visite virtuelle

- Exploration virtuelle des refuges
- Galerie des chats disponibles
- Filtrage par localisation
- Informations sur les visites sur place

### 🍽️ Distribution de croquettes

- Distribution gratuite tous les vendredis soirs
- Portions de 300g et 900g pour les familles adoptantes

### 📱 Design moderne

- Interface responsive (mobile, tablette, desktop)
- Design moderne avec Tailwind CSS
- Navigation intuitive
- Liens vers les réseaux sociaux

## Installation

1. Installer les dépendances :

```bash
npm install
```

2. Lancer le serveur de développement :

```bash
npm run dev
```

3. Construire pour la production :

```bash
npm run build
```

## Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── Header.jsx      # En-tête avec navigation
│   └── Footer.jsx      # Pied de page avec liens
├── pages/              # Pages de l'application
│   ├── Home.jsx        # Page d'accueil
│   ├── CatsList.jsx    # Liste des chats
│   ├── CatDetail.jsx   # Détails d'un chat
│   ├── AdoptionRequest.jsx  # Formulaire d'adoption
│   ├── Donations.jsx   # Page des dons
│   ├── VirtualVisit.jsx     # Visite virtuelle
│   └── RegisterCat.jsx      # Enregistrement d'un chat
├── context/            # Context React
│   └── CatsContext.jsx # Gestion des chats
├── App.jsx             # Composant principal
└── main.jsx            # Point d'entrée
```

## Technologies utilisées

- **React** - Bibliothèque UI
- **React Router** - Routage
- **Tailwind CSS** - Framework CSS
- **Vite** - Build tool
- **Lucide React** - Icônes

## Notes importantes

- Les chats doivent être identifiés dans le territoire national (puce ou tatouage)
- Tous les chats sont vaccinés et stérilisés avant adoption
- Les frais d'adoption couvrent les soins vétérinaires
- Distribution de croquettes tous les vendredis soirs (300g ou 900g)
- Compatibilité enfants vérifiée pour chaque chat
- Gestion spéciale des chats agressifs et handicapés

## Licence

Ce projet est développé pour l'Association des Chats.
