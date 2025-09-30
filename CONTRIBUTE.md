# Afrobuilders Contribution Guide

We are excited that you want to contribute to Afrobuilders! Your help is valuable in showcasing African innovation. This guide will explain how you can participate.

## Table of Contents

1. [Ways to Contribute](#ways-to-contribute)
2. [Adding a New Project](#adding-a-new-project)
3. [Contributing to Code](#contributing-to-code)
4. [Design Contributions](#design-contributions)
5. [Improving Documentation](#improving-documentation)
6. [Reporting Bugs](#reporting-bugs)
7. [Community Guidelines](#community-guidelines)
8. [Contributor Recognition](#contributor-recognition)

---

## 1. Ways to Contribute

There are several ways to contribute to Afrobuilders, whether you're a developer, designer, content creator, or simply passionate about African innovation:

- **Add Projects**: Highlight new innovative projects developed in Africa.
- **Contribute to Code**: Develop new features, improve existing code, or fix bugs.
- **Design Contributions**: Propose visual improvements, create logos, or enhance UI/UX.
- **Improve Documentation**: Write clear and comprehensive guides.
- **Engage Community**: Participate in discussions, help other contributors.
- **Report Bugs**: Help us identify and resolve issues.

## 2. Adding a New Project

This is the simplest and most direct way to contribute!

### Steps:

1.  **Fork** the `afrobuilders` repository on GitHub.
2.  **Clone** your fork locally:
    ```bash
    git clone https://github.com/your-username/afrobuilders.git
    cd afrobuilders
    ```
3.  **Create** a new branch for your contribution:
    ```bash
    git checkout -b add-project-project-name
    ```
4.  **Add project data**:
    - Go to the `data/` folder.
    - Open the JSON file for the corresponding country (e.g., `tg.json` for Togo, `gh.json` for Ghana). If the country doesn't exist, create a new file `[country-code].json`.
    - Add a new project object to the `projects` list following the existing format.

    **Example JSON format for a project:**

    ```json
    {
      "id": "unique-project-id",
      "name": "Project Name",
      "description": "Short project description.",
      "details": "More detailed project description, its objectives and impact.",
      "url": "https://www.project-website.com",
      "logo": "logo-name.png",
      "category": "Category (e.g., Fintech, Edutech, Healthtech)",
      "tags": ["tag1", "tag2", "tag3"],
      "founder": "Founder Name",
      "organization": "Organization Name (if applicable)",
      "year": 2023,
      "status": "active", // "active", "beta", "coming-soon", "inactive"
      "teamSize": 5,
      "github": "https://github.com/project", // Optional
      "demo": "https://demo.project-website.com", // Optional
      "documentation": "https://docs.project-website.com" // Optional
    }
    ```

    - Make sure the `id` is unique and the `logo` matches the image filename.

5.  **Add the project logo**:
    - Place the logo image file (`.png`, `.jpg`, `.svg` format) in the `public/logo/` folder.
    - The filename must match the `logo` value in your JSON.

6.  **Commit your changes**:
    ```bash
    git add data/[country-code].json public/logo/logo-name.png
    git commit -m "feat: Add new project: Project Name"
    ```
7.  **Push your branch** to your fork on GitHub:
    ```bash
    git push origin add-project-project-name
    ```
8.  **Create a Pull Request (PR)**:
    - Go to your fork's GitHub page.
    - You'll see an option to create a Pull Request from your branch to the original repository's `main` branch.
    - Clearly describe your contribution in the PR.

## 3. Contributing to Code

Want to improve the platform itself? Great!

### Steps:

1.  **Fork and clone** the repository (see section 2).
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Start the development server**:
    ```bash
    npm run dev
    ```
    The site will be accessible at `http://localhost:3000`.
4.  **Create a new branch** for your feature or bug fix:
    ```bash
    git checkout -b feature/feature-name
    # or
    git checkout -b fix/bug-description
    ```
5.  **Make your modifications**.
6.  **Test your changes** locally.
7.  **Commit your changes** with a clear and concise message (see [Commit Conventions](#commit-conventions)).
8.  **Push your branch** and **create a Pull Request**.

### Commit Conventions:

We follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) conventions.
Examples:

- `feat: Add dark mode toggle`
- `fix: Correct typo in footer`
- `docs: Update contribution guide`
- `style: Refactor button styles`

## 4. Design Contributions

Designers and graphic artists are welcome to help make Afrobuilders even more attractive and user-friendly.

### Types of Design Contributions:

#### Platform Branding

- **Logo Design**: Propose new logos for the Afrobuilders platform
- **Brand Guidelines**: Help establish consistent visual identity
- **Color Schemes**: Suggest new color palettes and themes

#### UI/UX Improvements

- **Component Design**: Create new UI components and layouts
- **User Experience**: Improve user flows and interactions
- **Accessibility**: Enhance accessibility and usability
- **Responsive Design**: Optimize for different devices

#### Visual Assets

- **Icons**: Design custom icons for the platform
- **Illustrations**: Create illustrations and graphics
- **Templates**: Design templates for project cards and layouts
- **Project Logos**: Create logos for featured projects

### Design Process:

1.  Open a [GitHub Issue](https://github.com/Hyver-organization/afrobuilders/issues) to discuss your design ideas.
2.  Share mockups, wireframes, or prototypes.
3.  Once the idea is validated, follow the "Contributing to Code" steps to implement your changes.

### Design System:

We follow a consistent design system:

- **Colors**: Primary, secondary, accent colors defined in CSS variables
- **Typography**: Inter (sans-serif), JetBrains Mono (monospace)
- **Spacing**: 4px base unit
- **Border Radius**: 8px, 12px, 16px, 24px
- **Shadows**: Subtle elevation system

### How to Submit Design Work:

1. Create your design in your preferred tool (Figma, Adobe XD, Sketch, etc.)
2. Export in high resolution (PNG, SVG, or PDF)
3. Create a Pull Request with:
   - Design files
   - Description of your contribution
   - Usage guidelines
   - Preview images

## 5. Improving Documentation

Good documentation is essential for an open source project.

### Ideas for contribution:

- Write more detailed guides for adding projects.
- Create tutorials for new features.
- Translate documentation into other languages.
- Improve clarity and conciseness of existing texts.

### Process:

1.  Open a [GitHub Issue](https://github.com/Hyver-organization/afrobuilders/issues) to propose documentation improvements.
2.  Follow the "Contributing to Code" steps to submit your modifications to Markdown or other documentation files.

## 6. Reporting Bugs

If you find a bug, don't hesitate to report it!

### Steps:

1.  Check [existing issues](https://github.com/Hyver-organization/afrobuilders/issues) to see if the bug has already been reported.
2.  If not, open a new Issue.
3.  Describe the bug clearly and precisely:
    - **Steps to reproduce**: How can the bug be reproduced?
    - **Expected behavior**: What should happen.
    - **Current behavior**: What actually happens.
    - **Screenshots/Videos**: If possible, add visuals.
    - **Environment**: Browser, OS, Next.js version, etc.

## 7. Community Guidelines

We are committed to maintaining a welcoming and respectful community. Please consult our [Code of Conduct](CODE_OF_CONDUCT.md) for more details.

### Our Values:

- **Inclusion**: Our community is open to everyone, regardless of experience level or background
- **Respect**: Treat all contributors with respect and kindness
- **Collaboration**: Work together to achieve common goals
- **Excellence**: Strive for high quality in all contributions

## 8. Contributor Recognition

We appreciate all contributions! Contributors will be recognized in the `README.md` file and on the website.

### Types of Recognition:

- **Code Contributors**: Listed in the contributors section
- **Design Contributors**: Featured in the design credits
- **Content Contributors**: Acknowledged in project descriptions
- **Community Contributors**: Recognized for community engagement

## Getting Help

If you need help or have questions:

- **GitHub Discussions**: [Join our discussions](https://github.com/Hyver-organization/afrobuilders/discussions)
- **Issues**: [Open an issue](https://github.com/Hyver-organization/afrobuilders/issues)
- **Twitter**: [@HyverOrg](https://x.com/HyverOrg)
- **LinkedIn**: [Hyver Organization](https://www.linkedin.com/company/hyver-organization)

Thank you for being part of the Afrobuilders community!
