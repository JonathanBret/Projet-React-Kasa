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
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="dropdown-list">
      {data.map((item, index) => (
        <div key={index} className="dropdown-item">
          <div className="dropdown-header" onClick={() => toggleItem(index)}>
            <span>{item.title}</span>
            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openIndex === index && <div className="dropdown-content">{item.content}</div>}
        </div>
      ))}
    </div>
  );
};

export default DropdownList;
