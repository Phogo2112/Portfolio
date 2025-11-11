
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
      "/adaction/connexion-adaction.PNG",
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
    images: ["/cleanertombe/blog-cleanertombe.PNG", "/cleanertombe/photo-présentation-cleanertombe.PNG", "/cleanertombe/tarif-cleanertombe.PNG"],
    githubUrl: "https://github.com/Phogo2112/cleanertombe.git",

    tags: ["Django", "HTML", "OVH"]
  },
  {
    id: "QRcode",
    title: "Script QRcode",
    description: "Scripts de création de QRcode simple et fonctionnelle grace a une librairie python et un petit scripts.",
    images: ["/QRcode/Scripts.PNG", "create-QRcode.PNG",],
    // ajouts de l'url du repos github.
    tags: ["python"],
  },
];
export function getProjectImages(projectId: string): string[] {
  const project = ProjectsData.find((p) => p.id === projectId);
  return project ? project.images : [];
}