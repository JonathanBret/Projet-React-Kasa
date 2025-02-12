import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import "../style/Logement.scss";
import Header from "../components/Header";

const Logement = () => {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <>
    <Header />
    <div className="logement-page">
      <img src={logement.cover} alt={logement.title} className="logement-image" />

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
    </div>
    </>
  );
};

export default Logement;
