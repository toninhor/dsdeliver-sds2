import './styles.css';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as LogoMail } from './logo-mail.svg';
import { Link } from 'react-router-dom';

function Navbar() {
    // Get the connection origin URL
    const referrerUrl = document.referrer;
    
    // Check if the otigin URL exists
    if (referrerUrl) {
      console.log('A conexão foi direcionada de:', referrerUrl);
    } else {
      console.log('Não foi possível determinar a URL de origem da conexão.');
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
