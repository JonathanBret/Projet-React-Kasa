import { useParams, Navigate } from "react-router-dom"; 
import logements from "../data/logements.json";
import "../style/Logement.scss";
import Header from "../components/Header";
import LogementInfo from "../components/LogementInfo";

const Logement = () => {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/error" replace />; 
  }

  const logementWithNumberRating = {
    ...logement,
    rating: Number(logement.rating)  
  };

  return (
    <>
      <Header />
      <LogementInfo logement={logementWithNumberRating} />
    </>
  );
};

export default Logement;
