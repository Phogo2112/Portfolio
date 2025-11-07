
export type Project = {
  id: string;
  title: string;
  description: string;
  images: string[];
  githubUrl: string;
  demoUrl?: string;
  tags: string[];
};

export const ProjectsData = [
  {
    id: "adaction",
    title: "Adaction",
    description: "Projet fullstack Django + Next.js",
    images: [
      "/adaction/connexion-adaction.png",
      "/adaction/collecte-adaction.PNG",
      "/adaction/page-wastes-type-adaction.PNG",
    ],
    githubUrl: "https://github.com/Phogo2112/adaction-API.git",

    tags: ["Next.js", "Django", "Tailwind", "PostgreSQL"]
  },
  {
    id: "cleanertombe",
    title: "Cleaner Tombe",
    description: "Site Django Templates déployé sur OVH.",
    images: ["/cleanertombe/photo1.png", "/cleanertombe/blog.png"],
    githubUrl: "https://github.com/Phogo2112/cleanertombe.git",

    tags: ["Django", "HTML", "OVH"]
  },
];
export function getProjectImages(projectId: string): string[] {
  const project = ProjectsData.find((p) => p.id === projectId);
  return project ? project.images : [];
}