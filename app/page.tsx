"use client";
import Image from "next/image";
import ProjectCard, { CleanerTombeCard } from "./components/Cards";
import NavBar from "./components/NavBar";
import Presentation from "./components/Presentation";
import Formation from "./components/Formation";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";
import { getProjectImages } from "./data/Projects";
export default function Home() {
  const adactionImages = getProjectImages("adaction");
  const cleanerTombeImages = getProjectImages("cleanertombe");
  return (
    <>
      <div className="container-custom">
        <div className="min-h-screen">
          <NavBar />
          <section id="about">
            <Presentation />
          </section>
        </div>
        <section id="projects">
          <div className="min-h-screen">
            <ProjectCard
              title="Adaction"
              description="Un projet liant le back, le front et la base de données PostgreSQL."
              images={adactionImages}
              githubUrl="https://github.com/Phogo2112/adaction-API.git"
              tags={["Next.js", "Django", "Tailwind", "PostgreSQL", "REST framework", "CORS", "ORM"]}
            />

            <ProjectCard
              title="CleanerTombe"
              description="Projets Réaliser en Autodidact. Création de mon site internet pour mon entreprise personnelle avec un déploiement sur un VPS OVH en https. Utilisation des article dans django Template, mise en place de la stack lien entre les app django."
              images={cleanerTombeImages}
              demoUrl="https://cleanertombe.fr"
              githubUrl="https://github.com/Phogo2112/cleanertombe.git"
              tags={["Django Template", "CSS", "HTML", "Déploiement OVH"]}
            />
            <Formation />
          </div>
        </section>
        <section id="contact">
          <ContactForm />
          <Footer />
        </section>
      </div>
    </>
  );
}

