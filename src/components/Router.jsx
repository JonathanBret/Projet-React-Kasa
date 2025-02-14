import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/accueil";
import Propos from "../pages/propos";
import Logement from "../pages/Logement";
import ErrorPage from "../pages/ErrorPage"; 

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
