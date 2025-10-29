import { FaPython, FaReact } from "react-icons/fa";
import { SiDjango, SiNextdotjs, SiPostgresql, SiTailwindcss, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";



export default function Presentation() {
 
  const tech = [
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { name: "Django", icon: <SiDjango className="text-green-500" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-200" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
  ];

  

  return (
    <div className="">
      <div className="flex justify-center items-center h-[80vh] flex-col text-6xl "><h1 className="flex justify-center title"> Bienvenue sur mon portfolio !!</h1>  
      <h2 className="flex justify-center ">Développeur Full Stack </h2></div>
      <div className="flex  flex-row justify-evenly">

        <ul className="flex flex-row p-2.5">
          {tech.map((items,index)=> (<li key={index} className="text-xl font-medium bg-[var(--color-secondary)] text-[var(--color-primary)] px-4 py-2 rounded hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-all duration-300">{items.icon} <span>{items.name}</span></li>))}
          
        </ul>
      </div>
    </div>
  )
}