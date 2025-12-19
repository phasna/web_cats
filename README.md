# Association des Chats - Application Web

Application web complète et moderne pour la gestion d'une association d'adoption de chats, construite avec React et Tailwind CSS.

## 🌟 Fonctionnalités principales

### 🐱 Gestion complète des chats

- **Catalogue enrichi** : Liste détaillée de tous les chats disponibles avec photos, descriptions complètes
- **Profils détaillés** : Chaque chat possède un profil complet avec :
  - Informations de base (nom, âge, race, sexe, couleur, poids)
  - Historique et histoire personnelle
  - Traits de personnalité
  - État de santé détaillé
  - Galerie de photos multiples
  - Critères d'adoption spécifiques
- **Identification nationale** : Suivi de l'identification (puce/tatouage) obligatoire
- **Suivi médical** : Vaccination, stérilisation, contrôles vétérinaires
- **Gestion spéciale** : Chats handicapés, agressifs, avec besoins spéciaux
- **Enregistrement complet** : Formulaire détaillé pour ajouter de nouveaux chats

### 🔍 Système de recherche et filtres avancés

- **Recherche textuelle** : Recherche par nom, race, localisation, personnalité
- **Filtres multiples** :
  - Par localisation (ville)
  - Par race
  - Par âge (jeune, adulte, senior)
  - Par sexe
  - Compatibilité enfants
  - Besoins spéciaux
  - Prix d'adoption
- **Résultats en temps réel** : Affichage dynamique des résultats filtrés

### 📝 Système d'adoption intelligent

- **Formulaire en 3 étapes** :
  1. Informations personnelles
  2. Critères de compatibilité
  3. Sélection du chat et motivation
- **Matching automatique** : Système qui propose les chats les plus adaptés selon les critères
- **Critères détaillés** :
  - Expérience avec les chats (débutant, intermédiaire, expérimenté)
  - Compatibilité enfants (avec âge minimum)
  - Compatibilité autres animaux
  - Type d'habitat (appartement, maison, etc.)
  - Niveau d'activité recherché
  - Disponibilité de temps
  - Présence d'un jardin
- **Avertissements** : Notifications pour les chats nécessitant une attention particulière

### 💝 Système de dons complet

- **Dons financiers** :
  - Montants prédéfinis (25€, 50€, 100€, 200€, 500€)
  - Montant personnalisé
  - Indicateur d'impact du don
  - Informations sur la déduction fiscale (66% déductible)
  - Option de don anonyme
- **Dons matériels** :
  - Nourriture (croquettes, pâtée)
  - Litière
  - Jouets
  - Accessoires (gamelles, paniers, griffoirs)
  - Médicaments
  - Couvertures et literie
  - Accessoires de transport
- **Transparence** : 100% des dons vont directement aux chats

### 🏠 Visite virtuelle

- **Tours panoramiques 360°** : Exploration virtuelle des refuges
- **Filtrage par localisation** : Visitez les différents refuges
- **Galerie interactive** : Découvrez les chats disponibles
- **Informations pratiques** : Horaires, adresses, modalités de visite

### 🍽️ Distribution de croquettes

- **Système détaillé** : Distribution gratuite tous les vendredis soirs (18h-20h)
- **Portions** : 300g (individuelles) ou 900g (familiales)
- **Information claire** : Horaires et modalités affichées

### 📊 Statistiques et tableaux de bord

- Nombre total de chats
- Chats disponibles
- Chats adoptés
- Taux de vaccination
- Chats avec besoins spéciaux
- Compatibilité enfants

### 📱 Design moderne et responsive

- **Interface responsive** : Optimisée pour mobile, tablette et desktop
- **Animations fluides** : Transitions et animations pour une meilleure UX
- **Accessibilité** : Navigation clavier, contrastes respectés
- **Performance** : Chargement optimisé

## 🚀 Installation

### Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. **Cloner le projet** (ou naviguer dans le dossier)

2. **Installer les dépendances** :

```bash
npm install
```

3. **Lancer le serveur de développement** :

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

4. **Build pour la production** :

```bash
npm run build
```

5. **Prévisualiser la version de production** :

```bash
npm run preview
```

## 📁 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── Header.jsx      # En-tête avec navigation
│   ├── Footer.jsx      # Pied de page détaillé
│   ├── CatCard.jsx     # Carte de présentation d'un chat
│   ├── SearchBar.jsx   # Barre de recherche
│   └── FilterBar.jsx   # Barre de filtres avancés
│
├── pages/              # Pages de l'application
│   ├── Home.jsx        # Page d'accueil avec stats et features
│   ├── CatsList.jsx    # Liste des chats avec filtres
│   ├── CatDetail.jsx   # Détails complets d'un chat
│   ├── AdoptionRequest.jsx  # Formulaire d'adoption en 3 étapes
│   ├── Donations.jsx   # Page des dons (financiers et matériels)
│   ├── VirtualVisit.jsx     # Visite virtuelle des refuges
│   ├── RegisterCat.jsx      # Enregistrement d'un chat
│   └── About.jsx       # Page à propos de l'association
│
├── context/            # Gestion d'état
│   └── CatsContext.jsx # Context React pour les chats
│
├── App.jsx             # Composant principal avec routing
├── main.jsx            # Point d'entrée
└── index.css           # Styles globaux Tailwind
```

## 🛠️ Technologies utilisées

- **React 18** - Bibliothèque UI moderne
- **React Router v6** - Routage et navigation
- **Tailwind CSS 3** - Framework CSS utilitaire
- **Vite** - Build tool ultra-rapide
- **Lucide React** - Icônes modernes
- **date-fns** - Gestion des dates

## ✨ Fonctionnalités détaillées

### Gestion des chats

- ✅ Enregistrement complet avec toutes les informations
- ✅ Identification obligatoire (puce/tatouage)
- ✅ Suivi médical détaillé
- ✅ Photos multiples
- ✅ Traits de personnalité
- ✅ Historique personnel
- ✅ Critères d'adoption personnalisés

### Système d'adoption

- ✅ Formulaire multi-étapes intuitif
- ✅ Matching intelligent basé sur les critères
- ✅ Suggestions de chats compatibles
- ✅ Gestion des avertissements (chats agressifs, handicapés)
- ✅ Informations sur les frais d'adoption
- ✅ Suivi des demandes

### Dons

- ✅ Interface dédiée pour dons financiers et matériels
- ✅ Calcul automatique de l'impact
- ✅ Informations fiscales (66% déductible)
- ✅ Options de paiement multiples
- ✅ Suivi et transparence

### Recherche et filtres

- ✅ Recherche textuelle en temps réel
- ✅ Filtres multiples combinables
- ✅ Compteur de résultats
- ✅ Reset facile des filtres

## 📋 Données des chats

Chaque chat contient :

- Informations de base (nom, âge, race, sexe, couleur, poids)
- Localisation
- Description et histoire
- Photos (galerie)
- État de santé (statut, dernière visite, notes)
- Soins (vaccination, stérilisation, identification)
- Personnalité (traits multiples)
- Critères d'adoption
- Compatibilités (enfants, autres animaux)
- Besoins spéciaux / handicaps
- Informations d'agressivité si applicable
- Frais d'adoption

## 🔒 Bonnes pratiques

- Identification obligatoire dans le territoire national
- Tous les chats vaccinés et stérilisés avant adoption
- Suivi médical régulier
- Critères d'adoption respectés
- Transparence totale sur les finances
- Suivi post-adoption

## 📞 Contact et support

- **Email** : contact@association-chats.fr
- **Téléphone** : 01 23 45 67 89
- **Adresse** : 123 Rue des Chats, 75000 Paris

## 📄 Licence

Ce projet est développé pour l'Association des Chats.

## 🎯 Améliorations futures possibles

- Authentification utilisateur
- Tableau de bord administrateur
- Système de notifications
- Chat en direct
- Calendrier de rendez-vous
- Gestion des familles d'accueil
- Système de parrainage
- Export de données
- API backend

---

**Développé avec ❤️ pour l'Association des Chats**
