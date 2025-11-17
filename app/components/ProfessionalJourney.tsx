// app/components/ProfessionalJourney.tsx
'use client'

import { motion } from "framer-motion";
import {
  Code,
  Wrench,
  Zap,
  GraduationCap,
  ChefHat,
  Coffee,
  BookOpen,
  CheckCircle,
  Sparkles
} from "lucide-react";

// Types
type Skill = string;
type Motivation = string;

type Experience = {
  id: string;
  title: string;
  type: 'past' | 'current' | 'future';
  icon: React.ReactNode;
  period?: string;
  skills: Skill[];
  motivations: Motivation[];
  description: string;
  color: string;
};

const experiences: Experience[] = [
  // ══════════════════════════════════════
  // FORMATIONS ACTUELLES (Mise en avant)
  // ══════════════════════════════════════
  {
    id: "adaTechSchool",
    title: "Ada Tech School Nantes",
    type: "current",
    icon: <GraduationCap className="w-8 h-8" />,
    period: " septembre 2025 à Février 2026",
    description: "Formation intensive en développement full-stack avec pédagogie par projets",
    skills: [
      "Programmation (Python, JavaScript, TypeScript)",
      "Frameworks modernes (React, Next.js, Django)",
      "Travail en équipe agile",
      "Architecture logicielle",
      "Base de données (PostgreSQL)",
      "DevOps & déploiement"
    ],
    motivations: [
      "Innovation technologique",
      "Apprentissage continu",
      "Résolution de problèmes complexes",
      "Collaboration en équipe",
      "Réalisation de projets concrets"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "developpeurAutodidacte",
    title: "Développeur Autodidacte",
    type: "current",
    icon: <BookOpen className="w-8 h-8" />,
    period: "2024 - Présent",
    description: "Apprentissage autonome et veille technologique permanente",
    skills: [
      "Auto-formation continue",
      "Documentation technique",
      "Debugging avancé",
      "Open source contribution",
      "Adaptabilité technologique"
    ],
    motivations: [
      "Curiosité intellectuelle",
      "Passion pour la tech",
      "Autonomie dans l'apprentissage",
      "Partage de connaissances"
    ],
    color: "from-purple-500 to-pink-500"
  },

  // ══════════════════════════════════════
  // EXPÉRIENCES PASSÉES (Compétences transférables)
  // ══════════════════════════════════════
  {
    id: "electricien",
    title: "Électricien",
    type: "past",
    icon: <Zap className="w-6 h-6" />,
    period: "2023 - 2024",
    description: "Installation électrique et maintenance industrielle",
    skills: [
      "Lecture de schémas techniques",
      "Diagnostic de pannes",
      "Écoute du client",
      "Respect des normes de sécurité"
    ],
    motivations: [
      "Précision et rigueur",
      "Résolution de problèmes",
      "Sécurité avant tout"
    ],
    color: "from-yellow-500 to-orange-500"
  },
  {
    id: "plombier",
    title: "Plombier",
    type: "past",
    icon: <Wrench className="w-6 h-6" />,
    period: "2022 - 2024",
    description: "Installation sanitaire et chauffage",
    skills: [
      "Lecture de plans",
      "Installation de tuyauterie",
      "Cintrage de tuyaux",
      "Brasure et soudure"
    ],
    motivations: [
      "Travail manuel minutieux",
      "Résolution de problèmes pratiques"
    ],
    color: "from-blue-600 to-indigo-600"
  },
  {
    id: "serveur",
    title: "Serveur",
    type: "past",
    period: "2019 à 2020",
    icon: <Coffee className="w-6 h-6" />,
    description: "Service en salle et relation client",
    skills: [
      "Communication interpersonnelle",
      "Gestion du stress",
      "Adaptabilité"
    ],
    motivations: [
      "Contact humain",
      "Réactivité"
    ],
    color: "from-green-500 to-teal-500"
  },
  {
    id: "cuisinier",
    title: "Cuisinier",
    type: "past",
    period: "2017 à 2019",
    icon: <ChefHat className="w-6 h-6" />,
    description: "Restauration et préparation culinaire",
    skills: [
      "Organisation et gestion du temps",
      "Travail sous pression",
      "Créativité"
    ],
    motivations: [
      "Précision dans l'exécution",
      "Satisfaction du client"
    ],
    color: "from-red-500 to-pink-500"
  },
];

// Compétences globales recherchées
const globalSkills = [
  { name: "Anglais technique", icon: "🌐", level: 70 },
  { name: "Architecture logicielle", icon: "🏗️", level: 75 },
  { name: "Cybersécurité", icon: "🔒", level: 60 },
  { name: "DevOps & CI/CD", icon: "⚙️", level: 65 },
  { name: "UI/UX Design", icon: "🎨", level: 80 },
  { name: "Cloud Computing", icon: "☁️", level: 55 }
];

export default function ProfessionalJourney() {
  const currentExperiences = experiences.filter(e => e.type === 'current');
  const pastExperiences = experiences.filter(e => e.type === 'past');

  return (
    <section className="py-20 px-4 sm:px-6  from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">

        {/* ═══════════════════════════════════════════
            HEADER
            ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Mon <span className="text-[var(--color-accent)]">Parcours</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            De l'artisanat au développement web : un parcours riche en compétences transférables
          </p>
        </motion.div>

        {/* ═══════════════════════════════════════════
            FORMATIONS ACTUELLES (Highlight)
            ═══════════════════════════════════════════ */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Sparkles className="text-[var(--color-accent)]" />
            Formations & Compétences Actuelles
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {currentExperiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-20 group-hover:opacity-30 rounded-2xl blur-xl transition-opacity"
                  style={{
                    backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  }}
                />

                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border-2 border-[var(--color-accent)] hover:shadow-2xl transition-all">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${exp.color} text-white`}>
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h4>
                      {exp.period && (
                        <span className="text-sm text-[var(--color-accent)] font-semibold">
                          {exp.period}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {exp.description}
                  </p>

                  {/* Compétences */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <Code className="w-4 h-4 text-[var(--color-accent)]" />
                      Compétences acquises
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Motivations */}
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[var(--color-accent)]" />
                      Appétences
                    </h5>
                    <ul className="space-y-2">
                      {exp.motivations.map((motivation) => (
                        <li
                          key={motivation}
                          className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                        >
                          <span className="text-[var(--color-accent)] mt-1">•</span>
                          {motivation}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            PARCOURS ANTÉRIEUR (Timeline compacte)
            ═══════════════════════════════════════════ */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8">
            Mes diplômes et expérience
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {pastExperiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${exp.color} flex items-center justify-center text-white mb-4`}>
                  {exp.icon}
                </div>

                <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                  {exp.title}
                </h4>

                {exp.period && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                    {exp.period}
                  </p>
                )}

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {exp.description}
                </p>

                {/* Compétences clés */}
                <div className="space-y-1">
                  {exp.skills.slice(0, 3).map((skill) => (
                    <div key={skill} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                      <span className="text-[var(--color-accent)]">✓</span>
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            COMPÉTENCES GLOBALES EN DÉVELOPPEMENT
            ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8"
        >
          <h3 className="text-2xl text-white font-bold mb-8 text-center">
            Compétences en Cours de Développement
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{skill.icon}</span>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h4>
                </div>



              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}