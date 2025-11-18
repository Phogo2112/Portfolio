
import ProfessionalJourney from "./components/ProfessionalJourney";
import ProjectCard from "./components/Cards";
import NavBar from "./components/NavBar";
import Presentation from "./components/Presentation";
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
        {/* SECTION PROJETS  */}
        <section id="projects" className="py-20 px-4 sm:px-6">

          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            Mes <span className="text-[var(--color-accent)]">Projets</span>
          </h2>


          {/* étiquette (Cards) */}

          <div className="columns-1 lg:columns-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {ProjectsData.map((project, index) => (
              <ProjectCard
                key={project.id}
                index={index}
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
        {/* Diplômes et formations */}
        <ProfessionalJourney />
      </div>

      {/* Contact*/}
      <section id="contact">
        <ContactForm />
        <Footer />
      </section>
    </div >
  );
}

