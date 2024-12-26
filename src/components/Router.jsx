import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/accueil';
import Propos from '../pages/propos';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Propos' element={<Propos />} />
        {/* Page 404 */}
        <Route path='*' element={<div>Page non trouvée</div>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
