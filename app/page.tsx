
import { ReactNode } from "react";
import ProfessionalJourney from "./components/ProfessionalJourney";
import ProjectCard from "./components/Cards";
import NavBar from "./components/NavBar";
import Presentation from "./components/Presentation";
import Formation from "./components/Formation";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";
import { getProjectImages, ProjectsData } from "./data/Projects";
import { getGithubStats } from "./data/github";

export default async function Home() {
  const stats = await getGithubStats();
  const adactionImages = getProjectImages("adaction");
  const cleanerTombeImages = getProjectImages("cleanertombe");
  return (
    <div className="container mx-auto ">
      <div>
        <div className="min-h-screen">
          <NavBar />
          {/* SECTION PRESENTATION */}
          <section id="about">
            <Presentation githubFollowers={stats?.followers || 0} />

          </section>
        </div>
        {/* 🚀 SECTION PROJETS  */}
        <section id="projects" className="py-20 px-4 sm:px-6">
          {/* Titre de section */}
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Mes <span className="text-[var(--color-accent)]">Projets</span>
          </h2>

          {/* ═══════════════════════════════════════════
              MASONRY LAYOUT (mur de briques) !!!
              ═══════════════════════════════════════════ */}
          <div className="columns-1 lg:columns-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {ProjectsData.map((project, index) => (
              <ProjectCard
                key={project.id}
                index={index}  // ← Passe l'index pour le délai
                title={project.title}
                description={project.description}
                images={project.images}
                githubUrl={project.githubUrl}
                demoUrl={project.demoUrl}
                tags={project.tags}
              />
            ))}
          </div>

        </section>
        {/* SECTION DIPLOME ET FORMATION */}
        <ProfessionalJourney />
      </div>

      {/* SECTION CONTACT RESEAUX */}
      <section id="contact">
        <ContactForm />
        <Footer />
      </section>
    </div >
  );
}

