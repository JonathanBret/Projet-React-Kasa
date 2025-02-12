import { useNavigate } from "react-router-dom";
import logements from "../data/logements.json";
import "../style/Card.scss";

const Card = () => {
    const navigate = useNavigate();

    return (
        <main>
            <div className="card-container">
                <div className="all-card">
                    {logements.map((logement) => (
                        <div 
                            className="card" 
                            key={logement.id} 
                            onClick={() => navigate(`/logement/${logement.id}`)}
                        >
                            <img src={logement.cover} alt={logement.title} className="card-image" />
                            <h2 className="card-title">{logement.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Card;
