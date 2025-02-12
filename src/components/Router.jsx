import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/accueil";
import Propos from "../pages/propos";
import Logement from "../pages/Logement"; // Importe la nouvelle page

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propos" element={<Propos />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<div>Page non trouvée</div>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
