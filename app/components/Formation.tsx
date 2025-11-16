

const formation = ["Ada Tech School Nantes", "BTP CFA", "Louis Armand"]
const competencesGenerales = [
  "Réactif",
  "Prise de décision",
  "Capacité d'analyse",
  "Actif",
  "Organisé"
];


const profils: Record<string, { competences: string[]; appetences: string[] }> = {
  plombier: {
    competences: ["Lecture de plans", "Installation de tuyauterie", "cintrage de tuyaux", "brasure",],
    appetences: ["Travail manuel", "Résolution de problèmes"]
  },
  electricien: {
    competences: ["Lecture de schémas électriques", "Diagnostic de panne", "à l'écoute du client", "Démo du travail"],
    appetences: ["Précision", "Sécurité", "Résolution de problème"]
  },
  adaTechSchool: {
    competences: ["Programmation", "Travail en équipe", "Autonomie", "Démo projets",],
    appetences: ["Innovation", "Apprentissage continu", "Réalisation de différents projets",]
  },
  //  Non modifier
  cuisinier: {
    competences: [],
    appetences: []
  },
  serveur: {
    competences: [],
    appetences: []
  },
  developpeurAutotdidact: {
    competences: [],
    appetences: []
  }
};

export default function Formation() {
  return (
    <div>
      <div>
        <div>

        </div>
        <div className="competence">
          <ul >
            {Object.entries(profils).map(([metier, profil]) => (
              <div key={metier}>{metier}</div>
            ))}
          </ul>

        </div>
      </div>
      <div>
        <h3>Les compétence en cours d'évolution et mes motivation </h3>
      </div>
    </div>
  );
}
