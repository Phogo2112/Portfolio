import Image from "next/image";


export default function ProjectCard() {
  return (
    <div className="card">
      <h3 className="text-4xl font-bold mb-2 flex justify-center">Adaction</h3>
      <div className="flex flex-row justify-center gap-4">
        <img
          src="/adaction/connexion-adaction.png"
          alt="image du projets adaction"
          className="w-[250px] h-[400px] object-cover rounded-md"
        />
        <img
          src="/adaction/collecte-adaction.PNG"
          alt="image de la page des collectes de l'applications Adaction"
          className="w-[250px] h-[400px] object-cover rounded-md"
        />
        <img
          src="/adaction/page-wastes-type-adaction.PNG"
          alt="image de la page des collectes de l'applications Adaction"
          className="w-[250px] h-[400px] object-cover rounded-md"
        />

      </div>

      <p className="text-white mb-4">
        Un projets liant le back le front et l'utilisation des base de donnée avec postgreSQL, manipulation du CRUD avec un ORM. Utilisation du REST framework de django pour faire les requete API entre le front et le back.
      </p>

      <div className="flex gap-2">
        <a href="/projects/adaction" className="btn">Voir plus</a>
        <a href="https://github.com/Phogo2112/adaction-API.git" className="btn btn-accent">Code</a>
      </div>

      <div className="flex gap-2 mt-7">
        <span className="tag">Next.js</span>
        <span className="tag bg-yellow-600">Django</span>
        <span className="tag tag-primary">Tailwind</span>
        <span className="tag bg-blue-800">postgreSQL</span>
        <span className="tag bg-amber-50 text-black">REST framework</span>
        <span className="tag bg-amber-50 text-black">CORS</span>
        <span className="tag bg-amber-50 text-black">ORM</span>

      </div>
    </div>
  );
}

export function CleanerTombeCard() {
  return (
    <div className="card h-[90vh] bg-blue-500">
      <h3 className="text-4xl font-bold mb-2 flex justify-center">Adaction</h3>
      <div className="flex flex-row justify-center gap-4">
        <img
          src="/cleanertombe/photo-présentation-cleanertombe.PNG"
          alt="image du projets adaction"
          className="w-[250px] h-[400px] object-cover rounded-md"
        />
        <img
          src="/cleanertombe/blog-cleanertombe.PNG"
          alt="image de la page des collectes de l'applications Adaction"
          className="w-[250px] h-[400px] object-cover rounded-md"
        />
        <img
          src="/cleanertombe/tarif-cleanertombe.PNG"
          alt="image de la page des collectes de l'applications Adaction"
          className="w-[250px] h-[400px] object-cover rounded-md"
        />

      </div>

      <p className="text-white mb-4">
        Un projets liant le back le front et l'utilisation des base de donnée avec postgreSQL, manipulation du CRUD avec un ORM. Utilisation du REST framework de django pour faire les requete API entre le front et le back.
      </p>

      <div className="flex gap-2">
        <a href="/projects/adaction" className="btn">Voir plus</a>
        <a href="https://github.com/Phogo2112/adaction-API.git" className="btn btn-accent">Code</a>
      </div>

      <div className="flex gap-2 mt-7">
        <span className="tag">Next.js</span>
        <span className="tag bg-yellow-600">Django</span>
        <span className="tag tag-primary">Tailwind</span>
        <span className="tag bg-blue-800">postgreSQL</span>
        <span className="tag bg-amber-50 text-black">REST framework</span>
        <span className="tag bg-amber-50 text-black">CORS</span>
        <span className="tag bg-amber-50 text-black">ORM</span>

      </div>
    </div>
  );
}