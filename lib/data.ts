import { CountryData, Project } from '@/types/project';
import fs from 'fs';
import path from 'path';

const dataDirectory = path.join(process.cwd(), 'data');

// Fonction pour charger les données côté serveur
export async function getAllProjects(): Promise<Project[]> {
    const fileNames = fs.readdirSync(dataDirectory);
    const allProjects: Project[] = [];

    fileNames.forEach((fileName) => {
        if (fileName.endsWith('.json')) {
            const filePath = path.join(dataDirectory, fileName);
            const fileContents = fs.readFileSync(filePath, 'utf8');
            const countryData: CountryData = JSON.parse(fileContents);

            // Ajouter le pays à chaque projet
            const projectsWithCountry = countryData.projects.map(project => ({
                ...project,
                country: countryData.country
            }));

            allProjects.push(...projectsWithCountry);
        }
    });

    return allProjects;
}

export async function getProjectsByCountry(country: string): Promise<Project[]> {
    const allProjects = await getAllProjects();
    return allProjects.filter(project =>
        project.country.toLowerCase() === country.toLowerCase()
    );
}

export async function getAvailableCountries(): Promise<string[]> {
    const fileNames = fs.readdirSync(dataDirectory);
    return fileNames
        .filter(fileName => fileName.endsWith('.json'))
        .map(fileName => fileName.replace('.json', ''))
        .sort();
}

// Fonctions pour le côté client - données statiques
export function getAllProjectsStatic(): Project[] {
    // Import des données statiques
    const tgData = require('../../data/tg.json');
    const ghData = require('../../data/gh.json');

    const allProjects: Project[] = [];

    // Ajouter les projets du Togo
    const tgProjects = tgData.projects.map((project: Project) => ({
        ...project,
        country: tgData.country
    }));
    allProjects.push(...tgProjects);

    // Ajouter les projets du Ghana
    const ghProjects = ghData.projects.map((project: Project) => ({
        ...project,
        country: ghData.country
    }));
    allProjects.push(...ghProjects);

    return allProjects;
}

export function getAvailableCountriesStatic(): string[] {
    return ['Togo', 'Ghana'];
}
