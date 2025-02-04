import logements from "../data/logements.json"

const Card = () => {
    return (
        <main>
            <div className="all-card">
                {logements.map((logement) => (
                    <div className="card" key={logement.id}>
                        <img src={logement.cover} alt={logement.title} className="card-image" />
                        <h2 className="card-title">{logement.title}</h2>
                        </div>
                ))}
            </div>
        </main>
    );
};

export default Card;
