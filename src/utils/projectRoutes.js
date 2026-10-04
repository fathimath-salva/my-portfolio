import { codsoftCaseStudy, internshipProjects, projects } from '../data/portfolioData';

const slugById = {
  roadguard: 'road-guard',
  'tinyml-health': 'tinyml-machine-health-monitor',
  'daily-dine': 'daily-dine',
  'image-captioning': 'image-captioning',
  'movie-rec': 'movie-recommendation',
  'face-detection': 'face-detection',
};

export function getProjectPath(project) {
  if (project.id === codsoftCaseStudy.id) return '/projects/codsoft';

  const slug = slugById[project.id];
  if (!slug) return '/projects';

  return internshipProjects.some(({ id }) => id === project.id)
    ? `/projects/codsoft/${slug}`
    : `/projects/${slug}`;
}

const routeEntries = [
  ...projects.map((project) => [getProjectPath(project), { project }]),
  ...internshipProjects.map((project) => [getProjectPath(project), { project, parentProject: codsoftCaseStudy }]),
  [getProjectPath(codsoftCaseStudy), { project: codsoftCaseStudy }],
];

const projectRoutes = new Map(routeEntries);

export function resolveProjectRoute(pathname) {
  return projectRoutes.get(pathname.replace(/\/$/, '') || '/') || null;
}

export const projectRoutePaths = routeEntries.map(([path]) => path);
