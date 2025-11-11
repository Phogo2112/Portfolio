'use client'
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

import { ChevronDown, ChevronUp } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  images: string[];
  githubUrl?: string;
  demoUrl?: string;
  tags: string[];
};
function getTagColor(tag: string): string {
  switch (tag.toLowerCase()) {
    case "next.js":
      return "bg-black text-white";
    case "django":
      return "bg-green-700 text-white";
    case "tailwind":
    case "tailwindcss":
      return "bg-blue-400 text-white";
    case "postgresql":
      return "bg-blue-800 text-white";
    case "html":
      return "bg-orange-500 text-white";
    case "css":
      return "bg-blue-500 text-white";
    case "orm":
    case "rest framework":
      return "bg-purple-600 text-white";
    default:
      return "bg-gray-600 text-white";
  }
}

export default function ProjectCard({
  title,
  description,
  images,
  githubUrl,
  demoUrl,
  tags,
}: ProjectCardProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [showImages, setShowImages] = useState(false);

  const prevImage = () =>
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () =>
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  function BtnGit({ url }: { url: string }) {
    return (
      <a href={url} className="btn" target="_blank" rel="noopener noreferrer">
        <FaGithub />
        Voir sur Github
      </a>
    );
  }

  return (
    <div className="py-4">
      <div className="card">
        <button
          onClick={() => setShowImages(!showImages)}
          className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition"
          title={showImages ? "Replier les images" : "Déplier les images"}
        >
          {showImages ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
        {/* Titre */}
        <h3 className="sm:text-xl text-4xl font-bold mb-2 flex justify-center">
          {title}
        </h3>
        <p className="text-white mb-4 text-center">{description}</p>

        {/* Section images */}
        {showImages && (
          <div className="mt-4">
            {images.length > 0 ? (
              <>
                {/* 📱 Mobile : une image à la fois + flèches */}
                <div className="relative flex justify-center items-center w-full lg:hidden">
                  <img
                    key={images[currentImage]}
                    src={images[currentImage]}
                    alt={`image ${currentImage + 1} du projet ${title}`}
                    className="w-[250px] h-[400px] object-cover rounded-md transition-all duration-500"
                  />

                  {/* Flèche gauche (mobile only) */}
                  <button
                    onClick={prevImage}
                    className="absolute left-2 bg-gray-800/50 hover:bg-gray-800 text-white p-2 rounded-full transition"
                  >
                    ←
                  </button>

                  {/* Flèche droite (mobile only) */}
                  <button
                    onClick={nextImage}
                    className="absolute right-2 bg-gray-800/50 hover:bg-gray-800 text-white p-2 rounded-full transition"
                  >
                    →
                  </button>
                </div>

                {/* 💻 Desktop : toutes les images côte à côte */}
                <div className="hidden lg:flex justify-center gap-4">
                  {images.map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt={`image du projet ${title}`}
                      className="w-[250px] h-[400px] object-cover rounded-md"
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-gray-400 text-center">
                Aucune image disponible
              </div>
            )}
          </div>
        )}
        {/* tags */}
        <div className="flex gap-2 mt-7 flex-wrap justify-center">
          {tags.map((tag, index) => (
            <span key={tag} className={`tag ${getTagColor(tag)}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>


    </div>

  );
}

export function CleanerTombeCard() {
  return (
    <ProjectCard
      title="Cleaner Tombe"
      description="Application de démonstration pour présenter un projet spécifique."
      images={[]}
      tags={[]}
    />
  );
}