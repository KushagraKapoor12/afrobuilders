'use client';

import {
  ArrowRight,
  CheckCircle,
  Code,
  FileText,
  Github,
  Globe,
  Heart,
  Palette,
  Star,
  Users,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

export default function ContributePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Contribute to <span className="text-primary">Afrobuilder</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join our open-source community and help us showcase African
              technological innovation. Every contribution counts!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/your-username/afrobuilders"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <Github className="mr-2 h-5 w-5" />
                Start on GitHub
              </a>
              <Link
                href="#ways-to-contribute"
                className="inline-flex items-center px-6 py-3 border border-input bg-background text-foreground rounded-lg hover:bg-muted transition-colors font-medium"
              >
                Discover Ways to Contribute
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Ways to Contribute */}
        <section id="ways-to-contribute" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How to Contribute?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              There are several ways to contribute to Afrobuilder. Choose the
              one that suits you best!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add Projects */}
            <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Add Projects</h3>
              <p className="text-muted-foreground mb-4">
                Discover an innovative African project? Add it to our platform
                by modifying JSON files.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Modify JSON files
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Add logos
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Create a Pull Request
                </li>
              </ul>
            </div>

            {/* Improve Design */}
            <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Improve Design</h3>
              <p className="text-muted-foreground mb-4">
                Help us create a more beautiful and intuitive interface to
                showcase African projects.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Improve UI/UX
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Optimize responsive
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Create new components
                </li>
              </ul>
            </div>

            {/* Add Features */}
            <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Develop Features</h3>
              <p className="text-muted-foreground mb-4">
                Propose and develop new features to enrich the user experience.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  New filters and searches
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Favorites system
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  API and integrations
                </li>
              </ul>
            </div>

            {/* Documentation */}
            <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Improve Documentation
              </h3>
              <p className="text-muted-foreground mb-4">
                Help us create clear and comprehensive documentation to
                facilitate future contributions.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Contribution guides
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Technical documentation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Video tutorials
                </li>
              </ul>
            </div>

            {/* Community */}
            <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Engage Community</h3>
              <p className="text-muted-foreground mb-4">
                Join our community and help us create a welcoming and
                collaborative environment.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Answer questions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Moderate discussions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Organize events
                </li>
              </ul>
            </div>

            {/* Bug Reports */}
            <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Report Bugs</h3>
              <p className="text-muted-foreground mb-4">
                Help us improve the platform by reporting bugs and issues you
                encounter.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Test features
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Report errors
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Propose improvements
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quick Start Guide */}
        <section className="mb-16">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Quick Start Guide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  To add a project:
                </h3>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                      1
                    </span>
                    <span>Fork the repository on GitHub</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                      2
                    </span>
                    <span>Open the corresponding country JSON file</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                      3
                    </span>
                    <span>Add project information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                      4
                    </span>
                    <span>Place the logo in /public/logo/</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                      5
                    </span>
                    <span>Create a Pull Request</span>
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  To contribute to code:
                </h3>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                      1
                    </span>
                    <span>Clone the repository locally</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                      2
                    </span>
                    <span>Install dependencies with npm install</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                      3
                    </span>
                    <span>Start the development server</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                      4
                    </span>
                    <span>Create a branch for your feature</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                      5
                    </span>
                    <span>Commit and push your changes</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Community Guidelines */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Community Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Afrobuilders is more than a project, it is a community that
              celebrates African innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Passion</h3>
              <p className="text-muted-foreground text-sm">
                We are passionate about African innovation and we are committed
                to showcasing it.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Inclusion</h3>
              <p className="text-muted-foreground text-sm">
                Our community is open to everyone, regardless of your level of
                experience or background.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground text-sm">
                We strive to maintain high standards in everything we do.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Contribute?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our community and help us build the largest African
              innovation platform!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/your-username/afrobuilders"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <Github className="mr-2 h-5 w-5" />
                Start Now
              </a>
              <a
                href="https://github.com/your-username/afrobuilders/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-input bg-background text-foreground rounded-lg hover:bg-muted transition-colors font-medium"
              >
                Join Discussion
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
