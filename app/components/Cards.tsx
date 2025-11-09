
import { FaGithub } from "react-icons/fa";

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
      <p className="text-white mb-4">{description}</p>

      {/* images dynamiques */}
      <div >{/* modifier le contenue pour déplié et replié les photo du projets. */}

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
      </div>



      {/* boutons */}
      <div className="mt-5">
        <div className="flex gap-2">
          {githubUrl && <BtnGit url={githubUrl} />}
          {demoUrl && (
            <a
              href={demoUrl}
              className="btn bg-[var(--color-accent)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visité le site
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
    </div >
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