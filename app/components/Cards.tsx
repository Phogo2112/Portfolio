'use client'
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { ReactNode, useState, useEffect } from "react";
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: ReactNode;
  images: string[];
  githubUrl?: string;
  demoUrl?: string;
  tags: string[];
  index?: number;
};

function getTagColor(tag: string): string {
  switch (tag.toLowerCase()) {
    case "next.js":
      return "bg-black dark:bg-gray-800 text-white";
    case "django":
      return "bg-green-700 dark:bg-green-600 text-white";
    case "tailwind":
    case "tailwindcss":
      return "bg-blue-400 dark:bg-blue-500 text-white";
    case "postgresql":
      return "bg-blue-800 dark:bg-blue-700 text-white";
    case "html":
      return "bg-orange-500 dark:bg-orange-600 text-white";
    case "css":
      return "bg-blue-500 dark:bg-blue-600 text-white";
    case "orm":
    case "rest framework":
      return "bg-purple-600 dark:bg-purple-700 text-white";
    case "python":
      return "bg-yellow-500 dark:bg-yellow-600 text-white";
    case "gunicorn":
      return "bg-[#3776AB] text-white";
    case "nginx":
      return "bg-blue-800 text-white";
    default:
      return "bg-gray-600 dark:bg-gray-700 text-white";

  }
}

export default function ProjectCard({
  title,
  description,
  images,
  githubUrl,
  demoUrl,
  tags,
  index = 0,
}: ProjectCardProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [showImages, setShowImages] = useState(false);

  const prevImage = () =>
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () =>
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const hasMultipleImages = images.length > 1;

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="w-full break-inside-avoid mb-6 lg:mb-8"
      >
        <div className="card min-h-[250px] flex flex-col relative bg-white/5 dark:bg-gray-800/50 backdrop-blur-sm">

          {/* Bouton toggle */}
          <button
            onClick={() => setShowImages(!showImages)}
            className={`
              absolute top-3 right-3 
              bg-gray-700 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-500 
              text-white p-2 rounded-full 
              transition-all duration-300
              hover:scale-110
              ${showImages ? 'rotate-180' : 'rotate-0'}
              z-10
            `}
            title={showImages ? "Replier les images" : "Déplier les images"}
          >
            <ChevronDown size={18} />
          </button>

          {/* Titre */}
          <h3 className="text-xl sm:text-xl lg:text-2xl font-bold mb-3 text-center text-gray-900 dark:text-white">
            {title}
          </h3>

          {/* Description */}
          <div className="text-gray-700 text-base dark:text-gray-300 mb-4 text-justify flex-grow">
            {description}
          </div>

          <div
            className={`
              overflow-hidden
              transition-all duration-700 ease-in-out
              ${showImages
                ? 'max-h-[800px] opacity-100 mt-4 mb-4'
                : 'max-h-0 opacity-0 mt-0 mb-0'
              }
            `}
          >
            {images.length > 0 && (
              <>
                {/* Carrousel d'images */}
                <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 w-full px-2">

                  {/* Flèche gauche */}
                  {hasMultipleImages && (
                    <button
                      onClick={prevImage}
                      className="
                        flex-shrink-0 
                        bg-white dark:bg-gray-800 
                        hover:bg-gray-100 dark:hover:bg-gray-700 
                        text-gray-800 dark:text-white 
                        p-1.5 sm:p-2 md:p-3 
                        rounded-full 
                        shadow-lg 
                        transition-all duration-300 
                        hover:scale-110 active:scale-95
                      "
                      aria-label="Image précédente"
                    >
                      <ChevronLeft
                        size={16}
                        className="sm:w-5 sm:h-5 md:w-6 md:h-6"
                        strokeWidth={2.5}
                      />
                    </button>
                  )}

                  {/* Image */}
                  <img
                    key={images[currentImage]}
                    src={images[currentImage]}
                    alt={`Aperçu ${currentImage + 1} de ${title}`}
                    className="
                      w-full
                      max-w-[240px]
                      sm:max-w-[320px]
                      md:max-w-sm 
                      lg:max-w-md 
                      h-[280px]
                      sm:h-[360px]
                      md:h-[400px]
                      object-cover 
                      rounded-lg 
                      shadow-lg 
                      transition-opacity 
                      duration-500
                    "
                  />

                  {/* Flèche droite */}
                  {hasMultipleImages && (
                    <button
                      onClick={nextImage}
                      className="
                        flex-shrink-0 
                        bg-white dark:bg-gray-800 
                        hover:bg-gray-100 dark:hover:bg-gray-700 
                        text-gray-800 dark:text-white 
                        p-1.5 sm:p-2 md:p-3 
                        rounded-full 
                        shadow-lg 
                        transition-all duration-300 
                        hover:scale-110 active:scale-95
                      "
                      aria-label="Image suivante"
                    >
                      <ChevronRight
                        size={16}
                        className="sm:w-5 sm:h-5 md:w-6 md:h-6"
                        strokeWidth={2.5}
                      />
                    </button>
                  )}
                </div>

                {/* Indicateurs (seulement si plusieurs images) */}
                {hasMultipleImages && (
                  <div className="mt-4 space-y-2">
                    {/* Points indicateurs */}
                    <div className="flex justify-center gap-2">
                      {images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImage(idx)}
                          className={`
                            rounded-full transition-all duration-300
                            ${idx === currentImage
                              ? "bg-[var(--color-accent)] w-8 h-2"
                              : "bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 w-2 h-2"
                            }
                          `}
                          aria-label={`Aller à l'image ${idx + 1}`}
                        />
                      ))}
                    </div>

                    {/* Compteur */}
                    <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                      {currentImage + 1} / {images.length}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* ═══════════════════════════════════════════
              BOUTONS GITHUB / DÉMO
              ═══════════════════════════════════════════ */}
          <div className="mt-auto flex flex-wrap justify-center gap-3 pt-4">
            {githubUrl && githubUrl.trim() !== "" && (

              <a href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition-all hover:scale-105"
              >
                <FaGithub size={18} />
                Repos GitHub
              </a>
            )}

            {demoUrl && demoUrl.trim() !== "" && (
              <a href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[var(--color-accent)] text-white px-4 py-2 rounded-md hover:opacity-80 transition-all hover:scale-105"
              >
                🌐 Démo
              </a>
            )}
          </div>

          {/* ═══════════════════════════════════════════
              TAGS
              ═══════════════════════════════════════════ */}
          <div className="flex gap-2 mt-6 flex-wrap justify-center">
            {tags.map((tag) => (
              <span key={tag} className={`tag ${getTagColor(tag)}`}>
                {tag}
              </span>
            ))}
          </div>

        </div>
      </motion.div >
    </div >
  );
}