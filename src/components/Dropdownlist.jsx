import { useState } from "react";
import "../style/DropdownList.scss";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 

const data = [
  { title: "Fiabilité", content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." },
  { title: "Respect", content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
  { title: "Service", content: "La qualité des services est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance." },
  { title: "Sécurité", content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." }
];

const DropdownList = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleItem = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index)); 
    } else {
      setOpenIndexes([...openIndexes, index]); 
    }
  };

  return (
    <div className="dropdown-list">
      {data.map((item, index) => (
        <div key={index} className={`dropdown-item ${openIndexes.includes(index) ? "open" : ""}`}>
          <div className="dropdown-header" onClick={() => toggleItem(index)}>
            <span>{item.title}</span>
            {openIndexes.includes(index) ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openIndexes.includes(index) && (
            <div className="dropdown-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropdownList;
