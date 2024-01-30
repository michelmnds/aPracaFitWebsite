import "./style.css";

import logoHeader from "../../assets/logoHeader.png";

import menu from "../../assets/menu.png";
import x from "../../assets/x.png";

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const Header = ({ nav, setNav }) => {
  const handleClick = () => {
    nav == false ? setNav(true) : setNav(false);
    const navContainer = document.getElementById("navContainer");

    navContainer.classList.toggle("drop");
  };

  return (
    <header className="headerContainer">
      <div className="navListContainer left">
        <Link to="/fotos" className="navLink" name="SOBRE">
          <span className="navTxt">FOTOS</span>
        </Link>

        <Link to="/aulas" className="navLink" name="AULAS">
          <span className="navTxt">AULAS</span>
        </Link>

        <Link to="/sobre" className="navLink" name="NOTÍCIAS">
          <span className="navTxt">SOBRE</span>
        </Link>
      </div>

      <Link to="/">
        <img className="logoHeader" src={logoHeader} alt="logo" />
      </Link>

      <div className="navListContainer right">
        <Link to="/equipa" className="navLink" name="EQUIPA">
          <span className="navTxt">PERSONAL TRAINERS</span>
        </Link>
      </div>

      <div className="iconContainer">
        {nav == false ? (
          <img className="icon" src={menu} alt="menu" onClick={handleClick} />
        ) : (
          <img className="icon" src={x} alt="x" onClick={handleClick} />
        )}
      </div>
    </header>
  );
};
