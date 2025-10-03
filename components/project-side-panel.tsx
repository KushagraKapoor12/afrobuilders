'use client';

import { Project } from '@/types/project';
import {
  Calendar,
  Code,
  ExternalLink,
  Globe,
  Heart,
  MapPin,
  Tag,
  X,
} from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';

interface ProjectSidePanelProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectSidePanel({
  project,
  isOpen,
  onClose,
}: ProjectSidePanelProps) {
  // Handle closing with Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when panel is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <>
      {/* Overlay - visible sur tous les écrans */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 transition-all duration-300"
          onClick={onClose}
        />
      )}

      {/* Panel */}
      <div
        className={`
        fixed top-0 right-0 h-full w-full lg:w-1/3 bg-background border-l border-border z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        flex flex-col shadow-2xl
      `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-semibold">Project Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Close panel"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Project Header */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <Image
                  src={`/logo/${project.logo}`}
                  alt={project.name}
                  width={64}
                  height={64}
                  className="rounded-xl"
                />
              </div>
              <h1 className="text-2xl font-bold mb-2">{project.name}</h1>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>

              {/* Action Buttons */}
              <div className="flex gap-3 justify-center">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Globe className="h-4 w-4" />
                  <span>Visit</span>
                </a>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 flex items-center">
                  <Code className="h-4 w-4 mr-2" />
                  Details
                </h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line">
                  {project.details}
                </p>
              </div>

              {/* Metadata */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{project.country}</span>
                </div>

                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  <span>{project.category}</span>
                </div>
              </div>

              {/* Team */}
              <div>
                <h3 className="font-semibold mb-2">Team</h3>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm text-muted-foreground">
                      Founder:{' '}
                    </span>
                    <span className="text-sm font-medium">
                      {project.founder}
                    </span>
                  </div>
                  {project.organization && (
                    <div>
                      <span className="text-sm text-muted-foreground">
                        Organization:{' '}
                      </span>
                      <span className="text-sm font-medium">
                        {project.organization}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="font-semibold mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              {(project.demo || project.documentation) && (
                <div>
                  <h3 className="font-semibold mb-2">Useful Links</h3>
                  <div className="space-y-2">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-sm text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Demo</span>
                      </a>
                    )}
                    {project.documentation && (
                      <a
                        href={project.documentation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-sm text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Documentation</span>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border bg-muted/30">
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Heart className="h-4 w-4 text-red-500" />
            <span>Made with passion in Africa</span>
          </div>
        </div>
      </div>
    </>
  );
}
