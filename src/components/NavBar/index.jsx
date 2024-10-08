import "./style.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const NavBar = () => {
  return (
    <nav className="navContainer" id="navContainer">
      <Link to="/fotos" className="navLink" name="SOBRE">
        <span className="navTxt">FOTOS</span>
      </Link>

      <Link to="/aulas" className="navLink" name="AULAS">
        <span className="navTxt">AULAS</span>
      </Link>

      <Link to="/noticias" className="navLink" name="NOTÍCIAS">
        <span className="navTxt">NOTÍCIAS</span>
      </Link>

      <Link to="/aulas/13" className="navLink" name="EQUIPA">
        <span className="navTxt">CLUBE DE CORRIDA</span>
      </Link>

      <Link to="/equipa" className="navLink" name="EQUIPA">
        <span className="navTxt">PTs</span>
      </Link>

      <Link to="/sobre" className="navLink" name="EQUIPA">
        <span className="navTxt">SOBRE</span>
      </Link>
    </nav>
  );
};
