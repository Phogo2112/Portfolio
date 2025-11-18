import { ReactNode } from "react";

export type Project = {
  id: string;
  title: string;
  description: ReactNode;
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
    title: "CleanerTombe (Site vitrine et SEO)",
    description: (
      <>
        <p>
          L'objectif était de réaliser un site vitrine complet. Le défi n'était pas seulement technique, mais aussi commercial :
          assurer une présence en ligne professionnelle et générer de
          la visibilité locale à partir de zéro.
        </p>
        <br />
        <p>
          Né d'un besoin concret pour mon entreprise, j'ai développé ce
          site vitrine de A à Z avec Django après seulement <strong>6 mois
            de développement en autodidacte</strong>.
        </p>
        <br />
        <div>
          <h4 className=""><strong>L'objectif de la création de ce projet :</strong></h4>
          <p>
            allier une solution technique robuste à une
            stratégie SEO locale.
          </p>
        </div>
      </>
    ),

    images: [
      "/cleanertombe/blog-cleanertombe.PNG",
      "/cleanertombe/photo-présentation-cleanertombe.PNG",
      "/cleanertombe/tarif-cleanertombe.PNG",
    ],
    githubUrl: "https://github.com/Phogo2112/CleanerTombe.git",
    demoUrl: "https://www.cleanertombe.fr",
    tags: ["Django", "HTML", "OVH", "CSS", "Nginx", "Gunicorn"],
  },
  {
    id: "QRcode",
    title: "Script QRcode",
    description:
      "Script de création de QRcode simple et fonctionnel grâce à une librairie Python.",
    images: ["/QRcode/codeQRcode.PNG"],
    githubUrl: "https://github.com/Phogo2112/Generateur-QRcode",
    tags: ["Python"],
  },
];
export function getProjectImages(projectId: string): string[] {
  const project = ProjectsData.find((p) => p.id === projectId);
  return project ? project.images : [];
}