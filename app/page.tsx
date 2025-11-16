"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./components/Cards";
import NavBar from "./components/NavBar";
import Presentation from "./components/Presentation";
import Formation from "./components/Formation";
import Footer from "./components/Footer";
import ContactForm from "./components/Contact";
import { getProjectImages, ProjectsData } from "./data/Projects";

export default function Home() {
  const adactionImages = getProjectImages("adaction");
  const cleanerTombeImages = getProjectImages("cleanertombe");
  return (
    <div className="container mx-auto ">
      <div>
        <div className="min-h-screen">
          <NavBar />
          {/* SECTION PRESENTATION */}
          <section id="about">
            <Presentation />
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
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="break-inside-avoid mb-6 lg:mb-8"
              >

                <div
                  key={project.id}
                  className="break-inside-avoid mb-6 lg:mb-8"
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    images={project.images}
                    githubUrl={project.githubUrl}
                    demoUrl={project.demoUrl}
                    tags={project.tags}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        {/* SECTION DIPLOME ET FORMATION */}
      </div>
      <Formation />
      {/* SECTION CONTACT RESEAUX */}
      <section id="contact">
        <ContactForm />
        <Footer />
      </section>
    </div >
  );
}

