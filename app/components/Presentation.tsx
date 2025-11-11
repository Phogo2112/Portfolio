'use client';
import { useEffect, useState } from "react";
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
    { name: "Python", icon: <FaPython className="text-yellow-400" />, url: 'https://developer.mozilla.org/en-US/docs/Glossary/Python' },
    { name: "Django", icon: <SiDjango className="text-green-500" />, url: 'https://developer.mozilla.org/fr/docs/Learn_web_development/Extensions/Server-side/Django' },
    { name: "React", icon: <FaReact className="text-cyan-400" />, url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started' },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-200" />, url: 'https://nextjs.org/docs' },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" />, url: 'https://v2.tailwindcss.com/docshttps://developer.mozilla.org/en-US/docs/Glossary/Python' },
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" />, url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: "CSS", icon: <SiCss3 className="text-blue-500" />, url: 'https://developer.mozilla.org/fr/docs/Web/CSS' },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" />, url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript' },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" />, url: 'https://www.postgresql.org/docs' },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tech.length);
    }, 500);
    return () => clearInterval(interval);
  }, [tech.length]);
  return (
    <div className="">
      <div className="flex xs:text-sm sm:text-xl justify-center  lg:text-4xl items-center h-[80vh] flex-col text-6xl ">
        <h1 className=" flex justify-center title ml-6">
          {" "}
          Bienvenue sur mon
          <span className="text-(--color-accent)  mx-6 ">portfolio</span>!!!
        </h1>
        <h2 className="flex justify-center ">
          Developpeur
          <div className="text-(--color-accent) ml-6">Full Stack</div>
        </h2>
      </div>
      <div className="grid place-items-center gap-6 
                  grid-cols-[repeat(auto-fit,minmax(140px,1fr))]">
        {tech.map((items, index) => (
          <div
            key={items.name}
            className={`relative flex items-center justify-center
        text-sm sm:text-base lg:text-2xl font-semibold
        px-3 py-4 rounded overflow-hidden group
        bg-gray-100/60 dark:bg-transparent border
        dark:border-transparent
        ${activeIndex === index ? "opacity-90" : "opacity-30"}
      `}
          >
            <span className="z-10 font-tech-700">
              <a href={items.url}>{items.name}</a>
            </span>
            <span className="absolute text-[80px] opacity-50 group-hover:opacity-70 dark:opacity-50 dark:group-hover:opacity-50 transition-all duration-300">
              {items.icon}
            </span>
          </div>
        ))}
      </div>
    </div >
  );
}
// `w-1/2 sm:w-1/3 md:w-1/4 relative flex items-center justify-center sm:text-base lg:text-2xl  font-semibold mx-3 px-3 py-4 rounded overflow-hidden group bg-gray-100 /60 dark:bg-transparent border dark:border-transparent dark:${activeIndex === index ? "opacity-30" : "opacity-10"}`}