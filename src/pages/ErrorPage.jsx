import { Link } from "react-router-dom";
import Header from "../components/Header"; 
import "../style/ErrorPage.scss";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <div className="error-page">
        <h1>404</h1>
        <p>Oups ! La page que vous demandez n&apos;existe pas.</p>
        <Link to="/">Retourner sur la page d&apos;accueil</Link>
      </div>
    </>
  );
};

export default ErrorPage;
