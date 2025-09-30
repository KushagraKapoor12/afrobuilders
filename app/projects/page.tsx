'use client';

import { ClientOnly } from '@/components/client-only';
import { Footer } from '@/components/footer';
import { ProjectCardModern } from '@/components/project-card-modern';
import { ProjectSidePanel } from '@/components/project-side-panel';
import ghData from '@/data/gh.json';
import tgData from '@/data/tg.json';
import { Project } from '@/types/project';
import { Filter, Grid, List, Search } from 'lucide-react';
import { useMemo, useState } from 'react';

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
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

  const availableCountries = ['Togo', 'Ghana'];

  // Extract unique categories
  const availableCategories = useMemo(() => {
    const categories = new Set(allProjects.map((project) => project.category));
    return Array.from(categories).sort();
  }, [allProjects]);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project: Project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCountry =
        selectedCountry === '' ||
        project.country.toLowerCase() === selectedCountry.toLowerCase();

      const matchesCategory =
        selectedCategory === '' ||
        project.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCountry && matchesCategory;
    });
  }, [allProjects, searchTerm, selectedCountry, selectedCategory]);

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
        className={`max-w-6xl mx-auto px-4 py-8 transition-all duration-300 ${isPanelOpen ? 'brightness-50 blur-sm scale-95' : ''}`}
      >
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            African Innovation Projects
          </h1>
          <p className="text-muted-foreground">
            Discover {allProjects.length} innovative projects developed across
            Africa
          </p>
        </div>

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
          {/* Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search for a project, technology..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                />
              </div>

              {/* Country Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent appearance-none min-w-[180px]"
                >
                  <option value="">All Countries</option>
                  {availableCountries.map((country) => (
                    <option key={country} value={country}>
                      {country.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-4 pr-8 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent appearance-none min-w-[180px]"
                >
                  <option value="">All Categories</option>
                  {availableCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex border border-input rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 ${viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'bg-background text-foreground hover:bg-muted'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 ${viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'bg-background text-foreground hover:bg-muted'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Results count and clear filters */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                {filteredProjects.length} project
                {filteredProjects.length > 1 ? 's' : ''} found
                {(selectedCountry || selectedCategory) && (
                  <span className="ml-2">
                    {selectedCountry && ` • ${selectedCountry.toUpperCase()}`}
                    {selectedCategory && ` • ${selectedCategory}`}
                  </span>
                )}
              </div>

              {(selectedCountry || selectedCategory || searchTerm) && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCountry('');
                    setSelectedCategory('');
                  }}
                  className="text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Projects Grid/List */}
          {filteredProjects.length > 0 ? (
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
                  : 'space-y-4'
              }
            >
              {filteredProjects.map((project: Project, index: number) => (
                <ProjectCardModern
                  key={`${project.id}-${index}`}
                  project={project}
                  onViewDetails={handleViewDetails}
                  variant={viewMode}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="mx-auto max-w-md">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold mb-2">
                  No Projects Found
                </h3>
                <p className="text-muted-foreground mb-4">
                  Try modifying your search or filter criteria
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCountry('');
                    setSelectedCategory('');
                  }}
                  className="text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </ClientOnly>
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
