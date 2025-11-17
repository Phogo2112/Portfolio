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
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" />, url: 'https://v2.tailwindcss.com/docs' },
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
    <div className="px-4 sm:px-6">
      {/* ═══════════════════════════════════════════
          TITRE PRINCIPAL - RESPONSIVE
          ═══════════════════════════════════════════ */}
      <div className="flex text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-2 text-center flex-col justify-center pt-20 sm:pt-22">
        <h2 className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
          <span>Développeur</span>
          <span className="text-[var(--color-accent)]">Full Stack</span>
        </h2>
      </div>

      {/* ═══════════════════════════════════════════
          BLOCS DE PRÉSENTATION - TOUT LE CONTENU RESTE !
          ═══════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mt-6 sm:mt-10 px-4 sm:px-6"
      >
        <div className="space-y-6 sm:space-y-8">

          {/* Bloc 1 : Accroche technique */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start"
          >
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Code2 className="text-white" size={20} />
            </div>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed flex-1">
              Développeur Full-Stack en reconversion, je construis des applications web
              modernes et fonctionnelles avec <Highlight variant="tech">Django</Highlight>/
              <Highlight variant="tech">Next.js</Highlight> et <Highlight variant="tech">PostgreSQL</Highlight>
            </p>
          </motion.div>

          {/* Bloc 2 : Apprentissage autodidacte */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start"
          >
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <Wrench className="text-white" size={20} />
            </div>
            <div className="flex-1">
              <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-2 text-[var(--color-accent)]">
                Apprentissage autodidacte
              </h4>
              <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                Initié au code il y a <strong>un an</strong> via des tutoriels YouTube et la formation
                <Highlight variant="tech"> Believemy</Highlight> (SaaS), j'ai rapidement mis en pratique
                mes connaissances en <Highlight variant="tech">Python</Highlight> et
                <Highlight variant="tech"> Django</Highlight>. En parallèle, j'ai développé des
                <strong> outils professionnels</strong> : générateur de QR codes et un site web pour mon entreprise... Cette approche
                <Highlight variant="warning"> learning by doing !</Highlight> m'a appris à transformer
                des besoins métier en solutions fonctionnelles.
              </p>
            </div>
          </motion.div>

          {/* Bloc 3 : Formation Ada Tech School */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start"
          >
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <GraduationCap className="text-white" size={20} />
            </div>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed flex-1">
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
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start"
          >
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Briefcase className="text-white" size={20} />
            </div>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed flex-1">
              Je recherche actuellement une{" "}
              <span className="inline-block px-2 py-1 sm:px-3 sm:py-1 bg-[var(--color-accent)]/20 text-[var(--color-accent)] rounded-full font-semibold text-xs sm:text-sm">
                alternance (RNCP 6)
              </span>{" "}
              ou un{" "}
              <span className="inline-block px-2 py-1 sm:px-3 sm:py-1 bg-[var(--color-accent)]/20 text-[var(--color-accent)] rounded-full font-semibold text-xs sm:text-sm">
                premier poste
              </span>{" "}
              pour mettre mes compétences au service de projets concrets.
            </p>
          </motion.div>
        </div>


        {/* STATS COMPACTES - CHIFFRES DANS ICÔNES*/}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-evenly items-center gap-6 sm:gap-8 mt-8 mb-10"
        >
          {/* Stat 1 : Projets */}
          <div className="flex flex-col items-center gap-2">
            {/* Icône avec chiffre */}
            <div className="relative group">
              {/* Shadow coloré */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />

              {/* Icône */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex flex-col items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <span className="text-xs sm:text-sm text-white/80 font-semibold">Projets</span>
                <span className="text-2xl sm:text-3xl font-bold text-white">3+</span>
              </div>
            </div>

            {/* Description */}
            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
              Réalisés
            </span>
          </div>

          {/* Stat 2 : Followers GitHub */}
          <div className="flex flex-col items-center gap-2">
            {/* Icône avec chiffre */}
            <div className="relative group">
              {/* Shadow coloré */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />

              {/* Icône */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex flex-col items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <span className="text-xs sm:text-sm text-white/80 font-semibold">GitHub</span>
                <span className="text-2xl sm:text-3xl font-bold text-white">{githubFollowers}</span>
              </div>
            </div>

            {/* Description */}
            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
              Followers
            </span>
          </div>

          {/* Stat 3 : Technologies */}
          <div className="flex flex-col items-center gap-2">
            {/* Icône avec chiffre */}
            <div className="relative group">
              {/* Shadow coloré */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />

              {/* Icône */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex flex-col items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <span className="text-xs sm:text-sm text-white/80 font-semibold">Stack</span>
                <span className="text-2xl sm:text-3xl font-bold text-white">9</span>
              </div>
            </div>

            {/* Description */}
            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
              Technologies
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* ═══════════════════════════════════════════
          GRILLE DES TECHNOLOGIES - RESPONSIVE
          ═══════════════════════════════════════════ */}
      <div className="
  grid 
  grid-cols-2           
  xs:grid-cols-3        
  sm:grid-cols-4        
  md:grid-cols-5        
  lg:grid-cols-9        
  place-items-center 
  gap-3 sm:gap-4 lg:gap-6 
  px-4
">
        {tech.map((items, index) => (
          <div
            key={items.name}
            className={`
        relative flex items-center justify-center
        text-xs sm:text-sm md:text-base lg:text-xl font-semibold
        px-2 py-3 sm:px-3 sm:py-4 rounded overflow-hidden group
        w-full max-w-[160px]
        bg-gray-100/60 dark:bg-transparent border
        dark:border-transparent
        transition-opacity duration-300
        ${activeIndex === index ? "opacity-90" : "opacity-30"}
      `}
          >
            <span className="z-10 font-tech-700">
              <a href={items.url} target="_blank" rel="noopener noreferrer">
                {items.name}
              </a>
            </span>
            <span className="absolute text-[35px] sm:text-[45px] md:text-[60px] lg:text-[80px] opacity-50 group-hover:opacity-70 dark:opacity-50 dark:group-hover:opacity-50 transition-all duration-300">
              {items.icon}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}