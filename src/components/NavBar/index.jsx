import "./style.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const NavBar = () => {
  return (
    <nav className="navContainer" id="navContainer">
      <Link to="/about" className="navLink" name="SOBRE">
        <span className="navTxt">SOBRE</span>
      </Link>

      <Link to="/classes" className="navLink" name="AULAS">
        <span className="navTxt">AULAS</span>
      </Link>

      <Link to="/news" className="navLink" name="NOTÍCIAS">
        <span className="navTxt">NOTÍCIAS</span>
      </Link>

      <Link to="/team" className="navLink" name="EQUIPA">
        <span className="navTxt">EQUIPA</span>
      </Link>
    </nav>
  );
};
