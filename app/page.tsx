import Image from "next/image";
import ProjectCard, { CleanerTombeCard } from "./components/Cards";
import NavBar from "./components/NavBar";
import Presentation from "./components/Presentation";
import Formation from "./components/Formation";
import Footers from "./components/Footer";
import ContactForm from "./components/Contact";
import { getProjectImages } from "./lib/getProjectsCards";
export default function Home() {
  const adactionImages = getProjectImages("adaction");
  const cleanerTombeImages = getProjectImages("cleanertombe");
  return (
    <>
      <div className="container-custom">
        <NavBar />
        <Presentation />
        <ProjectCard
          title="Adaction"
          description="Un projet liant le back, le front et la base de données PostgreSQL."
          images={adactionImages}
          githubUrl="https://github.com/Phogo2112/adaction-API.git"
          tags={["Next.js", "Django", "Tailwind", "PostgreSQL", "REST framework", "CORS", "ORM"]}
        />

        <ProjectCard
          title="Cleaner Tombe"
          description="Site Django Templates, CSS et déploiement sur OVH."
          images={cleanerTombeImages}
          demoUrl="https://cleanertombe.fr"
          githubUrl="https://github.com/Phogo2112/cleanertombe.git"
          tags={["Django Template", "CSS", "HTML", "Déploiement OVH"]}
        />
        <Formation />
        <ContactForm />
        <Footers />
      </div>
    </>
  );
}
