import logements from "../data/logements.json"
import "../style/Card.scss"

const Card = () => {
    return (
        <main>
            <div className="card-container">
            <div className="all-card">
                {logements.map((logement) => (
                    <div className="card" key={logement.id}>
                        <a href="https://www.google.com/?client=safari">
                        <img src={logement.cover} alt={logement.title} className="card-image" />
                        <h2 className="card-title">{logement.title}</h2>
                        </a>
                        </div>
                ))}
            </div>
            </div>
        </main>
    );
};

export default Card;
