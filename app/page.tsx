'use client';

import { ClientOnly } from '@/components/client-only';
import { Footer } from '@/components/footer';
import { ProjectCardModern } from '@/components/project-card-modern';
import { ProjectSidePanel } from '@/components/project-side-panel';
import ghData from '@/data/gh.json';
import tgData from '@/data/tg.json';
import { Project } from '@/types/project';
import { ArrowRight, Award, ChevronRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  // Get all projects
  const allProjects = useMemo(() => {
    const tgProjects = tgData.projects.map(
      (project: Record<string, unknown>) => ({
        ...project,
        country: tgData.country,
      })
    );

    const ghProjects = ghData.projects.map(
      (project: Record<string, unknown>) => ({
        ...project,
        country: ghData.country,
      })
    );

    return [...tgProjects, ...ghProjects] as Project[];
  }, []);

  // Extract unique categories
  const availableCategories = useMemo(() => {
    const categories = new Set(allProjects.map((project) => project.category));
    return Array.from(categories).sort();
  }, [allProjects]);

  // Group projects by category
  const projectsByCategory = useMemo(() => {
    const grouped: { [key: string]: Project[] } = {};
    allProjects.forEach((project) => {
      if (!grouped[project.category]) {
        grouped[project.category] = [];
      }
      grouped[project.category].push(project);
    });
    return grouped;
  }, [allProjects]);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsPanelOpen(true);
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div
        className={`bg-background transition-all duration-300 ${isPanelOpen ? 'brightness-50 blur-sm scale-95' : ''}`}
      >
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                African <span className="text-primary">Innovation</span>
                <br />
                <span className="text-2xl md:text-3xl font-normal text-muted-foreground">
                  Discovery • Exploration • Contribution
                </span>
              </h1>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Link
                  href="/projects"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Explore Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/contribute"
                  className="inline-flex items-center px-6 py-3 border border-input bg-background text-foreground rounded-lg hover:bg-muted transition-colors font-medium"
                >
                  Contribute
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {allProjects.length}+
                  </div>
                  <div className="text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {availableCategories.length}
                  </div>
                  <div className="text-muted-foreground">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2</div>
                  <div className="text-muted-foreground">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-muted-foreground">Open Source</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8">
          <ClientOnly
            fallback={
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-muted-foreground">Loading projects...</p>
                </div>
              </div>
            }
          >
            {/* Featured Projects */}
            <div className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <Award className="h-8 w-8 text-primary" />
                  Featured Projects
                </h2>
                <a
                  href="/projects"
                  className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1"
                >
                  View All <ChevronRight className="h-4 w-4" />
                </a>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {allProjects
                  .slice(0, 2)
                  .map((project: Project, index: number) => (
                    <ProjectCardModern
                      key={`${project.id}-${index}`}
                      project={project}
                      onViewDetails={handleViewDetails}
                      variant="featured"
                    />
                  ))}
              </div>
            </div>

            {/* Top Projects Grid */}
            <div className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <TrendingUp className="h-8 w-8 text-primary" />
                  Top Projects
                </h2>
                <a
                  href="/projects"
                  className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1"
                >
                  View All <ChevronRight className="h-4 w-4" />
                </a>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {allProjects
                  .slice(0, 6)
                  .map((project: Project, index: number) => (
                    <ProjectCardModern
                      key={`${project.id}-${index}`}
                      project={project}
                      onViewDetails={handleViewDetails}
                      variant="grid"
                    />
                  ))}
              </div>
            </div>

            {/* Projects by Category */}
            {availableCategories.map((category) => (
              <div key={category} className="mb-16">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">{category}</h2>
                  <a
                    href="/projects"
                    className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1"
                  >
                    View All <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {projectsByCategory[category]
                    .slice(0, 6)
                    .map((project: Project, index: number) => (
                      <ProjectCardModern
                        key={`${project.id}-${index}`}
                        project={project}
                        onViewDetails={handleViewDetails}
                        variant="grid"
                      />
                    ))}
                </div>
              </div>
            ))}

            {/* Recommended Projects */}
            <div className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Recommended for You</h2>
                <a
                  href="/projects"
                  className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1"
                >
                  View All <ChevronRight className="h-4 w-4" />
                </a>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-4">
                {allProjects
                  .slice(0, 8)
                  .map((project: Project, index: number) => (
                    <div
                      key={`${project.id}-${index}`}
                      className="flex-shrink-0 w-48"
                    >
                      <ProjectCardModern
                        project={project}
                        onViewDetails={handleViewDetails}
                        variant="grid"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </ClientOnly>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Project Side Panel */}
      <ProjectSidePanel
        project={selectedProject}
        isOpen={isPanelOpen}
        onClose={handleClosePanel}
      />
    </>
  );
}
