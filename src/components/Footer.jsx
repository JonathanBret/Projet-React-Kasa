import '../style/Footer.scss';
import logo from '../assets/logo-2.png';

const Footer = () => {
    return (
        <footer className="footer">
            <img src={logo} alt="Logo" className="footer-logo" />
            <p className="footer-text">© 2024 Kasa. Tous droits réservés.</p>
        </footer>
    );
};

export default Footer;
