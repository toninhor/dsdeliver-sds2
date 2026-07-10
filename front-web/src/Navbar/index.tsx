import './styles.css';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as LogoMail } from './logo-mail.svg';
import { Link } from 'react-router-dom';

function Navbar() {

    // Redirect to hsotinger if url contains jpinto mail URL
    if (document.baseURI.includes('mail.jpinto.com.br/')) {
        window.location.href = 'https://mail.hostinger.com';
    }

    return (
        <nav className="main-navbar">
            <Logo />
            <Link to="/" className="logo-text">DS Devivery &nbsp;</Link>
            <LogoMail />
            <Link to="/webmail" className="logo-text">E-mail</Link>
        </nav>
    )
}

export default Navbar
