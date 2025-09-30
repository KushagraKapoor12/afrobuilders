'use client';

import { Github, Globe, Search } from 'lucide-react';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export function Navbar() {
  return (
    <nav className="sticky top-4 z-50 w-full ">
      <div className=" max-w-6xl backdrop-blur border border-border rounded-2xl px-4 mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Globe className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Afrobuilders</span>
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <Link
            href="/projects"
            className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <Search className="h-4 w-4" />
            <span>Explore</span>
          </Link>

          <a
            href="https://github.com/Hyver-organization/afrobuilders.git"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Github className="h-4 w-4" />
            <span className="text-sm font-medium">Contribute</span>
          </a>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
