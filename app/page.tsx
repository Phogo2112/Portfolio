"use client";
import Image from "next/image";
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
        {/* 🚀 SECTION PROJETS */}
        <section id="projects" className="min-h-screen flex flex-col gap-10">
          {ProjectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              images={project.images}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
              tags={project.tags}
            />
          ))}
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

