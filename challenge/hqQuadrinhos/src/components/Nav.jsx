import {} from 'react';
import { Link } from 'react-router-dom';
import '../css/estilo.css';
import logo from '../assets/LOGO.svg';
import logoHDQ from '../assets/LogoHDQ.svg';

function Nav() {
  return (
    <>
      
      <nav className="nav-menu">
        
        <Link to="/">
          <div id='logo'>
            <img src={logo} alt="logo" />
            <img src={logoHDQ} alt="logo" />
          </div>
        </Link>{' '}
        {''}

        <ul>
          <Link to="/AdicionarHq" className="tlink">
            Adicionar HQ
          </Link>

          <Link to="/HQs" className="HQs">
            HQs
          </Link>          

          <Link to="/apresentacao" className="tlink">
            Apresentacao
          </Link>

          <Link to="/contato" className="tlink">
            Contato
          </Link>
        </ul>
      </nav>
      
    </>
  );
}
export default Nav;