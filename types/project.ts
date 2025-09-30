export interface Project {
    id: string;
    name: string;
    description: string;
    details: string;
    url: string;
    logo: string;
    country: string;
    category: string;
    tags: string[];
    founder: string;
    organization: string;
    year: number;
    status: 'active' | 'inactive' | 'beta' | 'coming-soon';
    openSource: boolean;
    repository: string | null;
    contact: string;
    socials: {
        twitter?: string;
        linkedin?: string;
        facebook?: string;
        instagram?: string;
    };
    downloads?: number;
    demo?: string;
    documentation?: string;
}

export interface CountryData {
    country: string;
    projects: Project[];
}

// Type for JSON data without the country field (since it's added separately)
export interface ProjectFromJSON {
    id: string;
    name: string;
    description: string;
    details: string;
    url: string;
    logo: string;
    category: string;
    tags: string[];
    founder: string;
    organization: string;
    year: number;
    status: 'active' | 'inactive' | 'beta' | 'coming-soon';
    openSource: boolean;
    repository: string | null;
    contact: string;
    socials: {
        twitter?: string;
        linkedin?: string;
        facebook?: string;
        instagram?: string;
    };
    downloads?: number;
    demo?: string;
    documentation?: string;
    teamSize?: number;
    github?: string;
}
