# 🌍 Afrobuilders

**Open-source platform for African innovation projects**

Afrobuilders is a platform that showcases innovative projects developed across Africa. Inspired by the Play Store concept, it allows you to discover, explore, and contribute to the African technological ecosystem.

## ✨ Features

- 🔍 **Discovery**: Explore innovative projects organized by country
- 🌙 **Dark/Light Theme**: Adaptive interface with theme toggle
- 🔎 **Search & Filters**: Easily find projects that interest you
- 📱 **Responsive**: Interface optimized for all devices
- 🎨 **Modern Design**: Polished UI/UX with TailwindCSS
- 🔧 **Open Source**: Easy contribution via JSON files
- 🎨 **Designer Friendly**: Complete design system for contributors

## 🚀 Technologies

- **Next.js 15** (App Router)
- **TypeScript**
- **TailwindCSS**
- **next-themes** (dark/light theme)
- **Lucide React** (icons)

## 📁 Project Structure

```
afrobuilders/
├── app/                    # Next.js pages
│   ├── page.tsx           # Homepage
│   ├── projects/          # Projects page
│   ├── contribute/        # Contribution page
│   └── layout.tsx         # Main layout
├── components/            # React components
│   ├── navbar.tsx         # Navigation bar
│   ├── project-card-modern.tsx # Modern project card
│   ├── project-side-panel.tsx  # Project details panel
│   └── theme-*.tsx        # Theme components
├── data/                  # JSON data by country
│   ├── tg.json           # Togo projects
│   └── gh.json           # Ghana projects
├── lib/                   # Utilities
│   └── data.ts           # Data reading functions
├── public/logo/          # Project logos
└── types/                # TypeScript types
    └── project.ts        # Project interface
```

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Hyver-organization/afrobuilders.git
   cd afrobuilders
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📝 How to Contribute

### Adding a New Project

1. **Choose the country JSON file**
   - Open the corresponding file in `/data/`
   - Example: `tg.json` for Togo, `gh.json` for Ghana

2. **Add the project to the `projects` array**

   ```json
   {
     "id": "unique-project-id",
     "name": "Project Name",
     "description": "Short project description",
     "details": "# Title\n\nDetailed description in Markdown...",
     "url": "https://project-website.com",
     "logo": "logo-name.png",
     "category": "Fintech",
     "tags": ["React", "Node.js", "MongoDB"],
     "founder": "Founder Name",
     "organization": "Organization Name",
     "year": 2024,
     "status": "active",
     "teamSize": 5,
     "github": "https://github.com/project",
     "demo": "https://demo.project.com",
     "documentation": "https://docs.project.com"
   }
   ```

3. **Add the logo**
   - Place the image in `/public/logo/`
   - Recommended format: PNG, 300x300px
   - File name: `logo-name.png`

4. **Propose your changes**
   - Create a Pull Request
   - Describe the added project

### Adding a New Country

1. **Create a new JSON file**

   ```bash
   # Example for Senegal
   touch data/sn.json
   ```

2. **File structure**

   ```json
   {
     "country": "Senegal",
     "projects": [
       {
         "id": "project-1",
         "name": "First Project",
         "description": "Description...",
         "details": "Details in Markdown...",
         "url": "https://example.com",
         "logo": "logo1.png",
         "category": "Edutech",
         "tags": ["React", "Python"],
         "founder": "Founder Name",
         "year": 2024,
         "status": "active",
         "teamSize": 3
       }
     ]
   }
   ```

3. **Add corresponding logos**

## 🎨 Design Contributions

### For Designers & Graphic Artists

We welcome design contributions from the community! Here's how you can contribute:

#### Platform Branding

- **Logo Design**: Propose new logos for the Afrobuilders platform
- **Brand Guidelines**: Help establish consistent visual identity
- **Color Schemes**: Suggest new color palettes and themes

#### UI/UX Improvements

- **Component Design**: Create new UI components and layouts
- **User Experience**: Improve user flows and interactions
- **Accessibility**: Enhance accessibility and usability

#### Visual Assets

- **Icons**: Design custom icons for the platform
- **Illustrations**: Create illustrations and graphics
- **Templates**: Design templates for project cards and layouts

#### How to Submit Design Work

1. Create your design in your preferred tool (Figma, Adobe XD, Sketch, etc.)
2. Export in high resolution (PNG, SVG, or PDF)
3. Create a Pull Request with:
   - Design files
   - Description of your contribution
   - Usage guidelines
   - Preview images

### Design System

We follow a consistent design system:

- **Colors**: Primary, secondary, accent colors
- **Typography**: Inter (sans-serif), JetBrains Mono (monospace)
- **Spacing**: 4px base unit
- **Border Radius**: 8px, 12px, 16px, 24px
- **Shadows**: Subtle elevation system

## 🎨 Customization

### Modifying Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%; /* Primary color */
  --secondary: 210 40% 96%; /* Secondary color */
  /* ... */
}
```

### Adding New Fields

1. Modify the `Project` interface in `types/project.ts`
2. Update components that use this interface
3. Adapt existing JSON files

## 📊 Data Format

### Project Structure

```typescript
interface Project {
  id: string; // Unique project identifier
  name: string; // Project name
  description: string; // Short description
  details: string; // Details in Markdown
  url: string; // Website URL
  logo: string; // Logo filename
  category: string; // Project category
  tags: string[]; // Technology tags
  founder: string; // Founder name
  organization?: string; // Organization name
  year: number; // Launch year
  status: 'active' | 'beta' | 'coming-soon' | 'inactive';
  teamSize: number; // Team size
  country: string; // Country (added automatically)
  github?: string; // GitHub repository
  demo?: string; // Demo URL
  documentation?: string; // Documentation URL
}
```

### Country File Structure

```json
{
  "country": "Country Name",
  "projects": [
    {
      "id": "project-1",
      "name": "Project 1",
      "description": "Description...",
      "details": "Details...",
      "url": "https://...",
      "logo": "logo1.png",
      "category": "Fintech",
      "tags": ["React", "Node.js"],
      "founder": "Founder Name",
      "year": 2024,
      "status": "active",
      "teamSize": 5
    }
  ]
}
```

## 🤝 Contribution Guidelines

We welcome contributions from everyone! Here's how to contribute:

### For Developers

1. **Fork** the project
2. **Create** a branch for your feature (`git checkout -b feature/new-feature`)
3. **Commit** your changes (`git commit -m 'Add new feature'`)
4. **Push** to the branch (`git push origin feature/new-feature`)
5. **Open** a Pull Request

### For Designers & Graphic Artists

1. **Fork** the project
2. **Create** your design work
3. **Export** in appropriate formats
4. **Create** a Pull Request with design files and descriptions

### For Content Creators

1. **Fork** the project
2. **Add** new projects to JSON files
3. **Write** clear descriptions and details
4. **Create** a Pull Request

### For Community Managers

1. **Fork** the project
2. **Improve** documentation
3. **Help** with community guidelines
4. **Create** a Pull Request

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [Lucide](https://lucide.dev/) - Icons
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management

## 🌍 Community

- **GitHub**: [Hyver-organization/afrobuilders](https://github.com/Hyver-organization/afrobuilders)
- **Twitter**: [@HyverOrg](https://x.com/HyverOrg)
- **LinkedIn**: [Hyver Organization](https://www.linkedin.com/company/hyver-organization)

---

**Made with ❤️ for Africa** 🇹🇬🇬🇭🇳🇬🇰🇪🇿🇦🇪🇬🇲🇦🇹🇳🇩🇿🇨🇮
