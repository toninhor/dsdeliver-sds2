import './styles.css';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as LogoMail } from './logo-mail.svg';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="main-navbar">
            <Logo />
            <Link to="/" className="logo-text">DS Devivery</Link>
            <LogoMail />
            <Link to="/webmail" className="logo-text">E-mail</Link>
        </nav>
    )
}

export default Navbar
