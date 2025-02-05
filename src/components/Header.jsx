import { NavLink } from "react-router-dom";
import '../style/Header.scss';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt="logo" className="header-logo" />
            <nav className='header-nav'>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? 'header-link active' : 'header-link'}
                >
                    Accueil
                </NavLink>
                <NavLink 
                    to="/Propos" 
                    className={({ isActive }) => isActive ? 'header-link active' : 'header-link'}
                >
                    À Propos
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
