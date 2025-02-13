import PropTypes from "prop-types";
import DropdownListLogement from "./DropdownListLogement";
import ImageCarousel from "./ImageCarousel";


const LogementInfo = ({ logement }) => {
  return (
    <div className="logement-page">
      <ImageCarousel pictures={logement.pictures} title={logement.title} />

      <div className="logement-info">
        <div className="logement-details">
          <h1>{logement.title}</h1>
          <p className="location">{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="logement-host">
          <div className="host-info">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
          </div>
          <div className="rating">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < logement.rating ? "star filled" : "star"}>★</span>
            ))}
          </div>
        </div>
      </div>

      <DropdownListLogement 
        description={logement.description} 
        equipements={logement.equipments} 
      />
    </div>
  );
};

LogementInfo.propTypes = {
  logement: PropTypes.shape({
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired, // ✅ Ajout ici
  }).isRequired,
};

export default LogementInfo;
