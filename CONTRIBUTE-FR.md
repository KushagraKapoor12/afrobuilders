# Guide de Contribution à Afrobuilders

Nous sommes ravis que vous souhaitiez contribuer à Afrobuilders ! Votre aide est précieuse pour mettre en valeur l'innovation africaine. Ce guide vous expliquera comment vous pouvez participer.

## Table des Matières

1. [Façons de Contribuer](#façons-de-contribuer)
2. [Ajouter un Nouveau Projet](#ajouter-un-nouveau-projet)
3. [Contribuer au Code](#contribuer-au-code)
4. [Contributions Design](#contributions-design)
5. [Améliorer la Documentation](#améliorer-la-documentation)
6. [Signaler des Bugs](#signaler-des-bugs)
7. [Code de Conduite](#code-de-conduite)
8. [Reconnaissance des Contributeurs](#reconnaissance-des-contributeurs)

---

## 1. Façons de Contribuer

Il existe plusieurs façons de contribuer à Afrobuilders, que vous soyez développeur, designer, créateur de contenu ou simplement un passionné de l'innovation africaine :

- **Ajouter des Projets** : Mettez en lumière de nouveaux projets innovants développés en Afrique.
- **Contribuer au Code** : Développez de nouvelles fonctionnalités, améliorez le code existant ou corrigez des bugs.
- **Contributions Design** : Proposez des améliorations visuelles, créez des logos ou améliorez l'UI/UX.
- **Améliorer la Documentation** : Rédigez des guides clairs et complets.
- **Animer la Communauté** : Participez aux discussions, aidez les autres contributeurs.
- **Signaler des Bugs** : Aidez-nous à identifier et résoudre les problèmes.

## 2. Ajouter un Nouveau Projet

C'est la façon la plus simple et la plus directe de contribuer !

### Étapes :

1.  **Forkez** le repository `afrobuilders` sur GitHub.
2.  **Clonez** votre fork localement :
    ```bash
    git clone https://github.com/votre-nom-utilisateur/afrobuilders.git
    cd afrobuilders
    ```
3.  **Créez une nouvelle branche** pour votre contribution :
    ```bash
    git checkout -b add-project-nom-du-projet
    ```
4.  **Ajoutez les données du projet** :
    - Allez dans le dossier `data/`.
    - Ouvrez le fichier JSON du pays correspondant (ex: `tg.json` pour le Togo, `gh.json` pour le Ghana). Si le pays n'existe pas, créez un nouveau fichier `[code_pays].json`.
    - Ajoutez un nouvel objet projet à la liste `projects` en suivant le format existant.

    **Exemple de format JSON pour un projet :**

    ```json
    {
      "id": "id-unique-du-projet",
      "name": "Nom du Projet",
      "description": "Courte description du projet.",
      "details": "Description plus détaillée du projet, ses objectifs et son impact.",
      "url": "https://www.site-du-projet.com",
      "logo": "nom-du-logo.png",
      "category": "Catégorie (ex: Fintech, Edutech, Healthtech)",
      "tags": ["tag1", "tag2", "tag3"],
      "founder": "Nom du Fondateur",
      "organization": "Nom de l'Organisation (si applicable)",
      "year": 2023,
      "status": "active", // "active", "beta", "coming-soon", "inactive"
      "teamSize": 5,
      "github": "https://github.com/projet", // Optionnel
      "demo": "https://demo.site-du-projet.com", // Optionnel
      "documentation": "https://docs.site-du-projet.com" // Optionnel
    }
    ```

    - Assurez-vous que l'`id` est unique et que le `logo` correspond au nom du fichier image.

5.  **Ajoutez le logo du projet** :
    - Placez le fichier image du logo (format `.png`, `.jpg`, `.svg`) dans le dossier `public/logo/`.
    - Le nom du fichier doit correspondre à la valeur `logo` dans votre JSON.

6.  **Commitez vos changements** :
    ```bash
    git add data/[code_pays].json public/logo/nom-du-logo.png
    git commit -m "feat: Add new project: Nom du Projet"
    ```
7.  **Poussez votre branche** vers votre fork sur GitHub :
    ```bash
    git push origin add-project-nom-du-projet
    ```
8.  **Créez une Pull Request (PR)** :
    - Allez sur la page GitHub de votre fork.
    - Vous verrez une option pour créer une Pull Request de votre branche vers la branche `main` du repository original.
    - Décrivez clairement votre contribution dans la PR.

## 3. Contribuer au Code

Vous souhaitez améliorer la plateforme elle-même ? Super !

### Étapes :

1.  **Forkez et clonez** le repository (voir section 2).
2.  **Installez les dépendances** :
    ```bash
    npm install
    ```
3.  **Lancez le serveur de développement** :
    ```bash
    npm run dev
    ```
    Le site sera accessible sur `http://localhost:3000`.
4.  **Créez une nouvelle branche** pour votre fonctionnalité ou correction de bug :
    ```bash
    git checkout -b feature/nom-de-la-fonctionnalite
    # ou
    git checkout -b fix/description-du-bug
    ```
5.  **Effectuez vos modifications**.
6.  **Testez vos changements** localement.
7.  **Commitez vos changements** avec un message clair et concis (voir [Conventions de Commit](#conventions-de-commit)).
8.  **Poussez votre branche** et **créez une Pull Request**.

### Conventions de Commit :

Nous suivons les conventions de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
Exemples :

- `feat: Add dark mode toggle`
- `fix: Correct typo in footer`
- `docs: Update contribution guide`
- `style: Refactor button styles`

## 4. Contributions Design

Les designers et graphistes sont les bienvenus pour rendre Afrobuilders encore plus attrayant et facile à utiliser.

### Types de Contributions Design :

#### Identité de la Plateforme

- **Design de Logo** : Proposez de nouveaux logos pour la plateforme Afrobuilders
- **Charte Graphique** : Aidez à établir une identité visuelle cohérente
- **Palettes de Couleurs** : Suggérez de nouvelles palettes de couleurs et thèmes

#### Améliorations UI/UX

- **Design de Composants** : Créez de nouveaux composants UI et layouts
- **Expérience Utilisateur** : Améliorez les flux utilisateur et interactions
- **Accessibilité** : Améliorez l'accessibilité et l'utilisabilité
- **Design Responsive** : Optimisez pour différents appareils

#### Assets Visuels

- **Icônes** : Concevez des icônes personnalisées pour la plateforme
- **Illustrations** : Créez des illustrations et graphiques
- **Templates** : Concevez des templates pour les cartes de projets et layouts
- **Logos de Projets** : Créez des logos pour les projets mis en vedette

### Processus de Design :

1.  Ouvrez une [Issue GitHub](https://github.com/Hyver-organization/afrobuilders/issues) pour discuter de vos idées de design.
2.  Partagez des maquettes, des wireframes ou des prototypes.
3.  Une fois l'idée validée, suivez les étapes de "Contribuer au Code" pour implémenter vos changements.

### Système de Design :

Nous suivons un système de design cohérent :

- **Couleurs** : Couleurs primaires, secondaires, d'accent définies en variables CSS
- **Typographie** : Inter (sans-serif), JetBrains Mono (monospace)
- **Espacement** : Unité de base de 4px
- **Rayon de Bordure** : 8px, 12px, 16px, 24px
- **Ombres** : Système d'élévation subtil

### Comment Soumettre du Travail de Design :

1. Créez votre design dans votre outil préféré (Figma, Adobe XD, Sketch, etc.)
2. Exportez en haute résolution (PNG, SVG, ou PDF)
3. Créez une Pull Request avec :
   - Fichiers de design
   - Description de votre contribution
   - Guidelines d'utilisation
   - Images de prévisualisation

## 5. Améliorer la Documentation

Une bonne documentation est essentielle pour un projet open source.

### Idées de contribution :

- Rédiger des guides plus détaillés pour l'ajout de projets.
- Créer des tutoriels pour les nouvelles fonctionnalités.
- Traduire la documentation dans d'autres langues.
- Améliorer la clarté et la concision des textes existants.

### Processus :

1.  Ouvrez une [Issue GitHub](https://github.com/Hyver-organization/afrobuilders/issues) pour proposer des améliorations de documentation.
2.  Suivez les étapes de "Contribuer au Code" pour soumettre vos modifications aux fichiers Markdown ou autres fichiers de documentation.

## 6. Signaler des Bugs

Si vous trouvez un bug, n'hésitez pas à le signaler !

### Étapes :

1.  Vérifiez les [Issues existantes](https://github.com/Hyver-organization/afrobuilders/issues) pour voir si le bug a déjà été signalé.
2.  Si ce n'est pas le cas, ouvrez une nouvelle Issue.
3.  Décrivez le bug de manière claire et précise :
    - **Étapes pour reproduire** : Comment le bug peut-il être reproduit ?
    - **Comportement attendu** : Ce qui devrait se passer.
    - **Comportement actuel** : Ce qui se passe réellement.
    - **Captures d'écran/Vidéos** : Si possible, ajoutez des visuels.
    - **Environnement** : Navigateur, OS, version de Next.js, etc.

## 7. Code de Conduite

Nous nous engageons à maintenir une communauté accueillante et respectueuse. Veuillez consulter notre [Code de Conduite](CODE_OF_CONDUCT.md) pour plus de détails.

### Nos Valeurs :

- **Inclusion** : Notre communauté est ouverte à tous, peu importe le niveau d'expérience ou l'origine
- **Respect** : Traitez tous les contributeurs avec respect et bienveillance
- **Collaboration** : Travaillez ensemble pour atteindre des objectifs communs
- **Excellence** : Efforcez-vous de maintenir des standards élevés dans toutes les contributions

## 8. Reconnaissance des Contributeurs

Nous apprécions toutes les contributions ! Les contributeurs seront reconnus dans le fichier `README.md` et sur le site web.

### Types de Reconnaissance :

- **Contributeurs Code** : Listés dans la section contributeurs
- **Contributeurs Design** : Mis en vedette dans les crédits design
- **Contributeurs Contenu** : Reconnus dans les descriptions de projets
- **Contributeurs Communauté** : Reconnus pour l'engagement communautaire

## Obtenir de l'Aide

Si vous avez besoin d'aide ou avez des questions :

- **Discussions GitHub** : [Rejoignez nos discussions](https://github.com/Hyver-organization/afrobuilders/discussions)
- **Issues** : [Ouvrez une issue](https://github.com/Hyver-organization/afrobuilders/issues)
- **Twitter** : [@HyverOrg](https://x.com/HyverOrg)
- **LinkedIn** : [Hyver Organization](https://www.linkedin.com/company/hyver-organization)

Merci de faire partie de la communauté Afrobuilders !
