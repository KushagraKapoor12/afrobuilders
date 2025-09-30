import { Project } from '@/types/project';
import {
  Calendar,
  Download,
  ExternalLink,
  Eye,
  MapPin,
  Tag,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'beta':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'coming-soon':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'inactive':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Actif';
      case 'beta':
        return 'Bêta';
      case 'coming-soon':
        return 'Bientôt';
      case 'inactive':
        return 'Inactif';
      default:
        return status;
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg hover:scale-[1.02]">
      {/* Header with logo and status */}
      <div className="relative">
        <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
          <Image
            src={project.logo}
            alt={`Logo de ${project.name}`}
            width={400}
            height={225}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>

        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}
          >
            {getStatusText(project.status)}
          </span>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        {/* Country and year */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {project.country}
            </span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{project.year}</span>
          </div>
        </div>

        {/* Project name and description */}
        <h3 className="text-xl font-bold mb-2 line-clamp-1 group-hover:text-primary transition-colors">
          {project.name}
        </h3>

        <p className="text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            {project.downloads && (
              <div className="flex items-center space-x-1">
                <Download className="h-4 w-4" />
                <span>{project.downloads.toLocaleString()}</span>
              </div>
            )}
            {project.openSource && (
              <div className="flex items-center space-x-1">
                <Tag className="h-4 w-4" />
                <span>Open Source</span>
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <button
            onClick={() => onViewDetails(project)}
            className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <Eye className="h-4 w-4" />
            <span>Voir plus</span>
          </button>

          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-input hover:bg-muted rounded-lg font-medium transition-colors flex items-center justify-center"
          >
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
