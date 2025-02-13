// src/pages/Logement.jsx
import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import "../style/Logement.scss";
import Header from "../components/Header";
import LogementInfo from "../components/LogementInfo";

const Logement = () => {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  return (
    <>
      <Header />
      <LogementInfo logement={logement} />
    </>
  );
};

export default Logement;
