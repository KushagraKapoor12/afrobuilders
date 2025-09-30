# 🌍 Afrobuilders

**Plateforme open-source des projets innovants d'Afrique**

[![Retour au Principal](https://img.shields.io/badge/←_Retour_au_Principal-README-blue)](README.md)
[![English](https://img.shields.io/badge/English-🇺🇸-blue)](README-EN.md)

Afrobuilders est une plateforme qui met en valeur les projets innovants développés à travers l'Afrique. Inspirée du concept du Play Store, elle permet de découvrir, explorer et contribuer à l'écosystème technologique africain.

## ✨ Fonctionnalités

- 🔍 **Découverte** : Explorez des projets innovants organisés par pays
- 🌙 **Thème sombre/clair** : Interface adaptative avec toggle de thème
- 🔎 **Recherche et filtres** : Trouvez facilement les projets qui vous intéressent
- 📱 **Responsive** : Interface optimisée pour tous les appareils
- 🎨 **Design moderne** : UI/UX soignée avec TailwindCSS
- 🔧 **Open Source** : Contribution facile via les fichiers JSON
- 🎨 **Designer Friendly** : Système de design complet pour les contributeurs

## 🚀 Technologies

- **Next.js 15** (App Router)
- **TypeScript**
- **TailwindCSS**
- **next-themes** (thème sombre/clair)
- **Lucide React** (icônes)

## 📁 Structure du projet

```
afrobuilders/
├── app/                    # Pages Next.js
│   ├── page.tsx           # Page d'accueil
│   ├── projects/          # Page des projets
│   ├── contribute/        # Page de contribution
│   └── layout.tsx         # Layout principal
├── components/            # Composants React
│   ├── navbar.tsx         # Barre de navigation
│   ├── project-card-modern.tsx # Carte de projet moderne
│   ├── project-side-panel.tsx  # Panneau latéral des détails
│   └── theme-*.tsx        # Composants de thème
├── data/                  # Données JSON par pays
│   ├── tg.json           # Projets du Togo
│   └── gh.json           # Projets du Ghana
├── lib/                   # Utilitaires
│   └── data.ts           # Fonctions de lecture des données
├── public/logo/          # Logos des projets
└── types/                # Types TypeScript
    └── project.ts        # Interface Project
```

## 🛠️ Installation

1. **Cloner le repository**

   ```bash
   git clone https://github.com/Hyver-organization/afrobuilders.git
   cd afrobuilders
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**

   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 📝 Comment contribuer

### Ajouter un nouveau projet

1. **Choisir le fichier JSON du pays**
   - Ouvrir le fichier correspondant dans `/data/`
   - Exemple : `tg.json` pour le Togo, `gh.json` pour le Ghana

2. **Ajouter le projet dans le tableau `projects`**

   ```json
   {
     "id": "id-unique-du-projet",
     "name": "Nom du projet",
     "description": "Description courte du projet",
     "details": "# Titre\n\nDescription détaillée en Markdown...",
     "url": "https://site-web-du-projet.com",
     "logo": "nom-du-logo.png",
     "category": "Fintech",
     "tags": ["React", "Node.js", "MongoDB"],
     "founder": "Nom du fondateur",
     "organization": "Nom de l'organisation",
     "year": 2024,
     "status": "active",
     "teamSize": 5,
     "github": "https://github.com/projet",
     "demo": "https://demo.projet.com",
     "documentation": "https://docs.projet.com"
   }
   ```

3. **Ajouter le logo**
   - Placer l'image dans `/public/logo/`
   - Format recommandé : PNG, 300x300px
   - Nom du fichier : `nom-du-logo.png`

4. **Proposer vos modifications**
   - Créer une Pull Request
   - Décrire le projet ajouté

### Ajouter un nouveau pays

1. **Créer un nouveau fichier JSON**

   ```bash
   # Exemple pour le Sénégal
   touch data/sn.json
   ```

2. **Structure du fichier**

   ```json
   {
     "country": "Sénégal",
     "projects": [
       {
         "id": "projet-1",
         "name": "Premier projet",
         "description": "Description...",
         "details": "Détails en Markdown...",
         "url": "https://exemple.com",
         "logo": "logo1.png",
         "category": "Edutech",
         "tags": ["React", "Python"],
         "founder": "Nom du fondateur",
         "year": 2024,
         "status": "active",
         "teamSize": 3
       }
     ]
   }
   ```

3. **Ajouter les logos correspondants**

## 🎨 Contributions Design

### Pour les Designers & Graphistes

Nous accueillons les contributions design de la communauté ! Voici comment vous pouvez contribuer :

#### Identité de la Plateforme

- **Design de Logo** : Proposez de nouveaux logos pour la plateforme Afrobuilders
- **Charte Graphique** : Aidez à établir une identité visuelle cohérente
- **Palettes de Couleurs** : Suggérez de nouvelles palettes de couleurs et thèmes

#### Améliorations UI/UX

- **Design de Composants** : Créez de nouveaux composants UI et layouts
- **Expérience Utilisateur** : Améliorez les flux utilisateur et interactions
- **Accessibilité** : Améliorez l'accessibilité et l'utilisabilité

#### Assets Visuels

- **Icônes** : Concevez des icônes personnalisées pour la plateforme
- **Illustrations** : Créez des illustrations et graphiques
- **Templates** : Concevez des templates pour les cartes de projets et layouts

#### Comment Soumettre du Travail de Design

1. Créez votre design dans votre outil préféré (Figma, Adobe XD, Sketch, etc.)
2. Exportez en haute résolution (PNG, SVG, ou PDF)
3. Créez une Pull Request avec :
   - Fichiers de design
   - Description de votre contribution
   - Guidelines d'utilisation
   - Images de prévisualisation

### Système de Design

Nous suivons un système de design cohérent :

- **Couleurs** : Couleurs primaires, secondaires, d'accent
- **Typographie** : Inter (sans-serif), JetBrains Mono (monospace)
- **Espacement** : Unité de base de 4px
- **Rayon de Bordure** : 8px, 12px, 16px, 24px
- **Ombres** : Système d'élévation subtil

## 🎨 Personnalisation

### Modifier les couleurs

Éditer les variables CSS dans `app/globals.css` :

```css
:root {
  --primary: 221.2 83.2% 53.3%; /* Couleur principale */
  --secondary: 210 40% 96%; /* Couleur secondaire */
  /* ... */
}
```

### Ajouter de nouveaux champs

1. Modifier l'interface `Project` dans `types/project.ts`
2. Mettre à jour les composants qui utilisent cette interface
3. Adapter les fichiers JSON existants

## 📊 Format des données

### Structure d'un projet

```typescript
interface Project {
  id: string; // Identifiant unique du projet
  name: string; // Nom du projet
  description: string; // Description courte
  details: string; // Détails en Markdown
  url: string; // URL du site web
  logo: string; // Nom du fichier logo
  category: string; // Catégorie du projet
  tags: string[]; // Tags technologiques
  founder: string; // Nom du fondateur
  organization?: string; // Nom de l'organisation
  year: number; // Année de lancement
  status: 'active' | 'beta' | 'coming-soon' | 'inactive';
  teamSize: number; // Taille de l'équipe
  country: string; // Pays (ajouté automatiquement)
  github?: string; // Repository GitHub
  demo?: string; // URL de démo
  documentation?: string; // URL de documentation
}
```

### Structure d'un fichier pays

```json
{
  "country": "Nom du pays",
  "projects": [
    {
      "id": "projet-1",
      "name": "Projet 1",
      "description": "Description...",
      "details": "Détails...",
      "url": "https://...",
      "logo": "logo1.png",
      "category": "Fintech",
      "tags": ["React", "Node.js"],
      "founder": "Nom du fondateur",
      "year": 2024,
      "status": "active",
      "teamSize": 5
    }
  ]
}
```

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment contribuer :

### Pour les Développeurs

1. **Fork** le projet
2. **Créer** une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. **Commit** vos changements (`git commit -m 'Ajouter une nouvelle fonctionnalité'`)
4. **Push** vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. **Ouvrir** une Pull Request

### Pour les Designers & Graphistes

1. **Fork** le projet
2. **Créer** votre travail de design
3. **Exporter** dans les formats appropriés
4. **Créer** une Pull Request avec les fichiers de design et descriptions

### Pour les Créateurs de Contenu

1. **Fork** le projet
2. **Ajouter** de nouveaux projets aux fichiers JSON
3. **Écrire** des descriptions claires et détaillées
4. **Créer** une Pull Request

### Pour les Gestionnaires de Communauté

1. **Fork** le projet
2. **Améliorer** la documentation
3. **Aider** avec les guidelines communautaires
4. **Créer** une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Remerciements

- [Next.js](https://nextjs.org/) - Framework React
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS
- [Lucide](https://lucide.dev/) - Icônes
- [next-themes](https://github.com/pacocoursey/next-themes) - Gestion des thèmes

## 🌍 Communauté

- **GitHub**: [Hyver-organization/afrobuilders](https://github.com/Hyver-organization/afrobuilders)
- **Twitter**: [@HyverOrg](https://x.com/HyverOrg)
- **LinkedIn**: [Hyver Organization](https://www.linkedin.com/company/hyver-organization)

---

**Fait avec ❤️ pour l'Afrique** 🇹🇬🇬🇭🇳🇬🇰🇪🇿🇦🇪🇬🇲🇦🇹🇳🇩🇿🇨🇮
