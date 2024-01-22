import "./style.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const NavBar = () => {
  return (
    <nav className="navContainer" id="navContainer">
      <Link to="/sobre" className="navLink" name="SOBRE">
        <span className="navTxt">SOBRE</span>
      </Link>

      <Link to="/aulas" className="navLink" name="AULAS">
        <span className="navTxt">AULAS</span>
      </Link>

      <Link to="/noticias" className="navLink" name="NOTÍCIAS">
        <span className="navTxt">NOTÍCIAS</span>
      </Link>

      <Link to="/equipa" className="navLink" name="EQUIPA">
        <span className="navTxt">EQUIPA</span>
      </Link>
    </nav>
  );
};
