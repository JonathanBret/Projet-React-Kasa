// src/components/DropdownListLogement.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";  // Import des icônes

const DropdownListLogement = ({ description, equipements }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipementsOpen, setIsEquipementsOpen] = useState(false);

  const toggleDescription = () => setIsDescriptionOpen(!isDescriptionOpen);
  const toggleEquipements = () => setIsEquipementsOpen(!isEquipementsOpen);

  return (
    <div className="dropdowns-container">
      {/* Section Description */}
      <div className="dropdown">
        <div className="dropdown-header" onClick={toggleDescription}>
          <span>Description</span>
          <span className={`arrow ${isDescriptionOpen ? "open" : ""}`}>
            {isDescriptionOpen ? <FaChevronDown /> : <FaChevronUp />}
          </span>
        </div>
        {isDescriptionOpen && (
          <div className="dropdown-content">
            <p>{description}</p>
          </div>
        )}
      </div>

      {/* Section Equipements */}
      <div className="dropdown">
        <div className="dropdown-header" onClick={toggleEquipements}>
          <span>Équipements</span>
          <span className={`arrow ${isEquipementsOpen ? "open" : ""}`}>
            {isEquipementsOpen ? <FaChevronDown /> : <FaChevronUp />}
          </span>
        </div>
        {isEquipementsOpen && (
          <div className="dropdown-content">
            <ul>
              {equipements.map((equipement, index) => (
                <li key={index}>{equipement}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

// Validation des props
DropdownListLogement.propTypes = {
  description: PropTypes.string.isRequired,
  equipements: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DropdownListLogement;
