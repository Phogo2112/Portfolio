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
    description: (
      <>
        <p>
          Adaction est un projet d'école conçu seule pour mettre en pratique le
          lien complet entre un back-end en Django et un front-end en Next.js.
        </p>
        <p>
          L'objectif de l'application est de simuler un système de bénévolat
          écologique où des utilisateurs peuvent collecter des déchets dans la
          nature et gagner des points en fonction de leurs actions.
        </p>
        <br />
        <p>
          Ces points peuvent ensuite être transférés à des associations
          entièrement fictives, afin de représenter un mécénat écologique
          virtuel.
        </p>
        <br />
        <h4>
          <strong>Ce projet m'a permis de :</strong>
        </h4>
        <ul>
          <li>
            - mettre en place une API Django REST complète (authentification,
            gestion des bénévoles, collecte, points).
          </li>
          <li>
            - développer une interface Next.js moderne, réactive et reliée au
            back-end.
          </li>
          <li>
            - gérer la logique métier : collecte → points → transfert vers
            associations fictives.
          </li>
          <li>
            - travailler sur l'architecture, la sécurité et les échanges API.
          </li>
        </ul>
      </>
    ),
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
          L'objectif était de réaliser un site vitrine complet. Le défi n'était
          pas seulement technique, mais aussi commercial : assurer une présence
          en ligne professionnelle et générer de la visibilité locale à partir
          de zéro.
        </p>
        <br />
        <p>
          Né d'un besoin concret pour mon entreprise, j'ai développé ce site
          vitrine de A à Z avec Django après seulement{" "}
          <strong>6 mois de développement en autodidacte</strong>.
        </p>
        <br />
        <div>
          <h4>
            <strong>L'objectif de la création de ce projet :</strong>
          </h4>
          <p>
            allier une solution technique robuste à une stratégie SEO locale.
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
    description: (
      <>
        <p>
          Ce projet avait pour objectif de créer un QR Code personnalisé
          permettant d’accéder directement à mon site web.
        </p>
        <br />
        <p>
          Plutôt que d’utiliser un générateur en ligne, j’ai choisi de
          développer ma propre solution afin de pratiquer l’automatisation et la
          génération de documents..
        </p>
        <p>
          Pour cela, j’ai utilisé la librairie Python qrcode pour générer
          l’image, puis la bibliothèque ReportLab (canvas) pour intégrer ce QR
          Code dans un fichier A4 prêt à être imprimé.
        </p>
        <br />
        <div>
          <h4>
            <strong>Ce Projets ma permis de :</strong>
          </h4>
          <ul>
            <li>- découvrir et utiliser la librairie qrcode en Python,</li>
            <li>
              - manipuler ReportLab pour mettre en page des éléments dans un
              document PDF,
            </li>
            <li>
              - comprendre le flux complet : génération → mise en forme →
              export,
            </li>
            <li>
              - automatiser une tâche simple mais utile dans un contexte réel.
            </li>
          </ul>
        </div>
      </>
    ),
    images: ["/QRcode/codeQRcode.PNG"],
    githubUrl: "https://github.com/Phogo2112/Qrcode",
    tags: ["Python"],
  },
  {
    id: "Portfolio",
    title: "Portfolio",
    description: (
      <>
        <p>
          Ce projet avait pour objectif de concevoir mon propre portfolio en
          ligne afin de présenter mes compétences, mes projets ainsi que mon
          parcours de manière claire, professionnelle et interactive.
        </p>
        <br />
        <p>
          Plutôt que d’utiliser un template pré-fait, j’ai choisi de développer
          entièrement le site moi-même. Cela m’a permis d’apprendre à structurer
          une application front-end moderne et à soigner l’ergonomie ainsi que
          l’identité visuelle.
        </p>
        <p>
          Pour cela, j’ai utilisé React pour construire l’interface, accompagné
          de TailwindCSS pour le design, puis j’ai organisé mes sections de
          manière modulaire afin de rendre le portfolio facilement maintenable
          et évolutif.
        </p>
        <br />
        <div>
          <h4>
            <strong>Ce projet m’a permis de :</strong>
          </h4>
          <ul>
            <li>
              - renforcer mes bases en React et en structuration de composants,
            </li>
            <li>- améliorer mes compétences en design avec TailwindCSS,</li>
            <li>- intégrer et consommer une API externe (GitHub),</li>
            <li>
              - récupérer automatiquement mes followers via une requête API
              GitHub,
            </li>
            <li>- mettre en place un workflow CI/CD avec GitHub Actions,</li>
            <li>- automatiser le build et le déploiement de mon portfolio,</li>
            <li>
              - comprendre le processus complet : conception → développement →
              automatisation → mise en ligne.
            </li>
          </ul>
        </div>
      </>
    ),
    images: [
      "/portfolio/Presentation-White.png",
      "/portfolio/Presentation-Black.png",
    ],
    githubUrl: "https://github.com/Phogo2112/Portfolio.git",
    tags: ["Next.js", "Tailwind"],
  },
];

export function getProjectImages(projectId: string): string[] {
  const project = ProjectsData.find((p) => p.id === projectId);
  return project ? project.images : [];
}
