import { useState } from "react";
import "../style/DropdownList.scss";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 

const data = [
  { title: "Fiabilité", content: "Nous garantissons des annonces vérifiées pour une confiance totale." },
  { title: "Respect", content: "Le respect de chaque utilisateur est une priorité sur notre plateforme." },
  { title: "Service", content: "Nous offrons un service client réactif et à l'écoute." },
  { title: "Sécurité", content: "La sécurité des transactions et des données est notre engagement." }
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
