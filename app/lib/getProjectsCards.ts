import fs from "fs";
import path from "path";
// couleur bg donner au tags langage tech
export function getTagColor(tag: string): string {
  const colors: Record<string, string> = {
    "Next.js": "bg-gray-700 text-white",
    Django: "bg-yellow-600 text-white",
    Tailwind: "bg-sky-500 text-white",
    PostgreSQL: "bg-blue-800 text-white",
    "REST framework": "bg-red-500 text-white",
    CORS: "bg-amber-200 text-black",
    ORM: "bg-indigo-500 text-white",
    HTML: "bg-orange-400 text-black",
    CSS: "bg-blue-400 text-white",
    JavaScript: "bg-yellow-400 text-black",
    TypeScript: "bg-blue-500 text-white",
    "Déploiement OVH": "bg-green-600 text-white",
  };

  // valeur par défaut si la techno n’existe pas dans la liste
  return colors[tag] || "bg-gray-500 text-white";
}

export function getProjectImages(folder: string): string[] {
  const dirPath = path.join(process.cwd(), "public", folder);

  // Vérifie si le dossier existe
  if (!fs.existsSync(dirPath)) {
    console.warn(`⚠️ Le dossier ${folder} n'existe pas dans /public`);
    return [];
  }

  // Récupère les fichiers images
  const files = fs.readdirSync(dirPath);

  // Filtre les fichiers valides et renvoie le chemin relatif
  return files
    .filter((file) => /\.(png|jpg|jpeg|gif)$/i.test(file))
    .map((file) => `/${folder}/${file}`);
}
