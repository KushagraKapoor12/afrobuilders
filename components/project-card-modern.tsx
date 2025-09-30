'use client';

import { Project } from '@/types/project';
import { ExternalLink, MapPin } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardModernProps {
  project: Project;
  onViewDetails?: (project: Project) => void;
  variant?: 'grid' | 'list' | 'featured';
}

export function ProjectCardModern({
  project,
  onViewDetails,
  variant = 'grid',
}: ProjectCardModernProps) {
  const handleClick = () => {
    if (onViewDetails) {
      onViewDetails(project);
    }
  };

  if (variant === 'featured') {
    return (
      <div
        className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 cursor-pointer group"
        onClick={handleClick}
      >
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
              <Image
                src={`/logo/${project.logo}`}
                alt={project.name}
                width={48}
                height={48}
                className="rounded-xl"
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {project.description}
            </p>
            <div className="flex items-center space-x-4 mt-3">
              <div className="flex items-center space-x-1 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{project.country}</span>
              </div>
            </div>
            <div className="mt-3">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                {project.category}
              </span>
            </div>
          </div>
          <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
      </div>
    );
  }

  if (variant === 'list') {
    return (
      <div
        className="bg-card rounded-xl p-4 border border-border hover:shadow-md transition-all duration-300 cursor-pointer group"
        onClick={handleClick}
      >
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
              <Image
                src={`/logo/${project.logo}`}
                alt={project.name}
                width={32}
                height={32}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
              {project.description}
            </p>
            <div className="flex items-center space-x-3 mt-2">
              <span className="text-xs text-muted-foreground">
                {project.category}
              </span>
              <span className="text-xs text-muted-foreground">
                {project.country}
              </span>
            </div>
          </div>
          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
      </div>
    );
  }

  // Grid variant (default)
  return (
    <div
      className="bg-card rounded-2xl p-4 border border-border hover:shadow-lg transition-all duration-300 cursor-pointer group"
      onClick={handleClick}
    >
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
          <Image
            src={`/logo/${project.logo}`}
            alt={project.name}
            width={48}
            height={48}
            className="rounded-xl"
          />
        </div>
        <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
          {project.name}
        </h3>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center justify-center">
          <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
            {project.category}
          </span>
        </div>
      </div>
    </div>
  );
}
