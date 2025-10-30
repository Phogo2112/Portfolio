import Image from "next/image";
import ProjectCard, { CleanerTombeCard } from "./components/Cards";
import NavBar from "./components/NavBar";
import Presentation from "./components/Presentation";
import Formation from "./components/Formation";
import Footers from "./components/Footer";
import ContactForm from "./components/Contact";
export default function Home() {
  return (
    <>
      <div className="container-custom">
        <NavBar />
        <Presentation />
        <ProjectCard />
        <CleanerTombeCard />
        <Formation />
        <ContactForm />
        <Footers />
      </div>
    </>
  );
}
