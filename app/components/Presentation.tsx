'use client';
import { useEffect, useState } from "react";
import { FaPython, FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import { Code2, Wrench, GraduationCap, Briefcase } from "lucide-react";
import { Highlight } from "./ui/Highlight";
import {
  SiDjango,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

type PresentationProps = {
  githubFollowers: number;
};

export default function Presentation({ githubFollowers }: PresentationProps) {
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
      <div className="flex text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center flex-col justify-center pt-20">

        <h2 className="flex justify-center ">
          Developpeur
          <div className="text-(--color-accent) ml-6">Full Stack</div>
        </h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mt-16 px-6"
      >
        <div className="space-y-8">
          {/* Bloc 1 : Accroche technique */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-4 items-start"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Code2 className="text-white" size={24} />
            </div>
            <p className="text-lg leading-relaxed flex-1">
              Développeur Full-Stack en reconversion, je construis des applications web
              modernes et fonctionnelles avec <Highlight variant="tech" >Django</Highlight>/<Highlight variant="tech" > Next.js</Highlight> et <Highlight variant="tech" >PostgresSQL</Highlight>
            </p>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4 items-start"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-500 rounded-lg flex items-center justify-center">
              <Wrench className="text-white" size={24} />
            </div>
            <div className="flex-1">
              <h4 className="text-xl font-bold mb-2 text-[var(--color-accent)]">
                Apprentissage autodidacte
              </h4>
              <p className="text-lg leading-relaxed">
                Initié au code il y a <strong>un an</strong> via des tutoriels YouTube et la formation
                <Highlight variant="tech"> Beliévemy</Highlight> (SaaS), j'ai rapidement mis en pratique
                mes connaissances en <Highlight variant="tech">Python</Highlight> et
                <Highlight variant="tech">Django</Highlight>. En parallèle, j'ai développé des
                <strong> outils professionnels</strong> : générateur de QR codes et un site web pour mon entreprise. Cette approche
                <Highlight variant="warning"> learning by doing</Highlight> m'a appris à transformer
                des besoins métier en solutions fonctionnelles.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 items-start"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <GraduationCap className="text-white" size={24} />
            </div>
            <p className="text-lg leading-relaxed flex-1">
              Formé à <strong className="text-[var(--color-accent)]">Ada Tech School Nantes</strong>,
              je maîtrise le cycle complet de développement : de la conception d'API REST
              avec Django à la création d'interfaces utilisateur réactives avec Next.js
              et Tailwind CSS.
            </p>
          </motion.div>

          {/* Bloc 4 : Call-to-Action */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 items-start"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Briefcase className="text-white" size={24} />
            </div>
            <p className="text-lg leading-relaxed flex-1">
              Je recherche actuellement une{" "}
              <span className="inline-block px-3 py-1 bg-[var(--color-accent)]/20 text-[var(--color-accent)] rounded-full font-semibold">
                alternance (RNCP 6)
              </span>{" "}
              ou un{" "}
              <span className="inline-block px-3 py-1 bg-[var(--color-accent)]/20 text-[var(--color-accent)] rounded-full font-semibold">
                premier poste
              </span>{" "}
              pour mettre mes compétences au service de projets concrets.
            </p>
          </motion.div>
        </div>

        {/* Stats visuelles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-700 mb-10"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--color-accent)]">3+</div>
            <div className="text-sm text-gray-400 mt-1">Projets réalisés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--color-accent)]">
              {githubFollowers}
            </div>
            <div className="text-sm text-gray-400 mt-1">Followers GitHub</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[var(--color-accent)]">9</div>
            <div className="text-sm text-gray-400 mt-1">Technologies maîtrisées</div>
          </div>
        </motion.div>
      </motion.div>

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
            <span className="absolute text-[45px] md:text-[60px] sm:text-[50px] lg:text-[80px] opacity-50 group-hover:opacity-70 dark:opacity-50 dark:group-hover:opacity-50 transition-all duration-300">
              {items.icon}
            </span>
          </div>
        ))}
      </div>
    </div >
  );
}
