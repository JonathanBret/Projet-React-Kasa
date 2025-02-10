import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/accueil';
import Propos from '../pages/propos';
import ErrorPage from '../pages/errorPage'; // Import de la page d'erreur

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Propos' element={<Propos />} />
        <Route path='*' element={<ErrorPage />} /> {/* Page 404 */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
