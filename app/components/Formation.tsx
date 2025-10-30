export default function Formation() {
  const competence = ["Réactif", "Prise de décision", "capacité d'analyse", ""];
  return (
    <div>
      <div className="competence">
        <h3>Ada Tech School Nantes</h3>
        <h4>Compétence et Appétence</h4>
        <ul>
          {competence.map((items, index) => (
            <li key={index} className="font-tech">
              - {items}
            </li>
          ))}
        </ul>
      </div>
      <div></div>
    </div>
  );
}
