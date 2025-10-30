import { FaPython, FaReact } from "react-icons/fa";
import {
  SiDjango,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

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
      <div className="flex justify-center items-center h-[80vh] flex-col text-6xl ">
        <h1 className="flex justify-center title ml-6">
          {" "}
          Bienvenue sur mon
          <span className="text-(--color-accent) mx-6 ">portfolio</span>!!
        </h1>
        <h2 className="flex justify-center ">
          Développeur
          <div className="text-(--color-accent) ml-6">Full Stack</div>
        </h2>
      </div>
      <div className="flex  flex-row justify-evenly">
        <ul className="flex flex-row p-2.5 mb-2.5">
          {tech.map((items, index) => (
            <li className="relative flex items-center justify-center text-2xl font-semibold px-6 py-4 rounded overflow-hidden group">
              <span className="z-10 font-tech-700">{items.name}</span>
              <span className="absolute text-[80px] opacity-10 group-hover:opacity-20 transition-all duration-300">
                {items.icon}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
