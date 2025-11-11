
export type Project = {
  id: string;
  title: string;
  description: string;
  images: string[];
  githubUrl: string;
  demoUrl?: string;
  tags: string[];
};

export const ProjectsData: Project[] = [
  {
    id: "adaction",
    title: "Adaction",
    description: "Projet fullstack Django + Next.js",
    images: [
      "/adaction/connexion-adaction.PNG",
      "/adaction/collecte-adaction.PNG",
      "/adaction/page-wastes-type-adaction.PNG",
    ],
    githubUrl: "https://github.com/Phogo2112/adaction-API.git",
    tags: ["Next.js", "Django", "Tailwind", "PostgreSQL", "ORM"],
  },
  {
    id: "cleanertombe",
    title: "Cleaner Tombe",
    description: "Site Django Templates déployé sur OVH.",
    images: [
      "/cleanertombe/blog-cleanertombe.PNG",
      "/cleanertombe/photo-présentation-cleanertombe.PNG",
      "/cleanertombe/tarif-cleanertombe.PNG",
    ],
    githubUrl: "https://github.com/Phogo2112/CleanerTombe.git",
    demoUrl: "https://www.cleanertombe.fr",
    tags: ["Django", "HTML", "OVH", "CSS"],
  },
  {
    id: "QRcode",
    title: "Script QRcode",
    description:
      "Script de création de QRcode simple et fonctionnel grâce à une librairie Python.",
    images: ["/QRcode/Scripts.PNG", "/QRcode/create-QRcode.PNG"],
    githubUrl: "https://github.com/Phogo2112/Generateur-QRcode",
    tags: ["Python"],
  },
];
export function getProjectImages(projectId: string): string[] {
  const project = ProjectsData.find((p) => p.id === projectId);
  return project ? project.images : [];
}