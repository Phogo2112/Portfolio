import Image from "next/image";
import ProjectCard, { CleanerTombeCard } from './components/Cards'
import NavBar from "./components/NavBar";
import Presentation from "./components/Presentation";
import Formation from "./components/Formation"

export default function Home() {
  return (
    <>

      <NavBar />
      <Presentation />
      <ProjectCard />
      <CleanerTombeCard />
      < Formation/>

    </>
  );
}
