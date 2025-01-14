import '../style/Header.scss';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt="logo" className="header-logo" />
            <nav className='header-nav'>
                <a className='header-link' href="/">Acceuil</a>
                <a className='header-link' href="/Propos">À Propos</a>
            </nav>
        </header>
    );
};


export default Header