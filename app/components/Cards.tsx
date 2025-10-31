
import Image from "next/image";

import { FaGithub } from "react-icons/fa";
import { getTagColor } from "../lib/getProjectsCards";
type ProjectCardProps = {
  title: string;
  description: string;
  images: string[];
  githubUrl?: string;
  demoUrl?: string;
  tags: string[];
};

export default function ProjectCard({
  title,
  description,
  images,
  githubUrl,
  demoUrl,
  tags,
}: ProjectCardProps) {
  function BtnGit({ url }: { url: string }) {
    return (
      <a href={url} className="btn" target="_blank" rel="noopener noreferrer">
        <FaGithub />
        Voir sur Github
      </a>
    );
  }

  return (
    <div className="card">
      {/* titre dynamique */}
      <h3 className="text-4xl font-bold mb-2 flex justify-center">{title}</h3>

      {/* images dynamiques */}
      <div className="flex flex-row justify-center gap-4">
        {images?.map((src) => (
          <img
            key={src}
            src={src}
            alt={`image du projet ${title}`}
            className="w-[250px] h-[400px] object-cover rounded-md"
          />
        ))}
      </div>

      {/* description dynamique */}
      <p className="text-white mb-4">{description}</p>

      {/* boutons */}
      <div className="flex gap-2">
        {githubUrl && <BtnGit url={githubUrl} />}
        {demoUrl && (
          <a
            href={demoUrl}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir plus
          </a>
        )}
      </div>

      {/* tags */}
      <div className="flex gap-2 mt-7 flex-wrap justify-center">
        {tags.map((tag, index) => (
          <span key={tag} className={`tag ${getTagColor(tag)}`}>
            {tag}
          </span>
        ))}
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