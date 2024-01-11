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
      <div className="navListContainer">
        <Link to="/about" className="navLink" name="SOBRE">
          <span className="navTxt">SOBRE</span>
        </Link>

        <Link to="/classes" className="navLink" name="AULAS">
          <span className="navTxt">AULAS</span>
        </Link>
      </div>

      <Link to="/">
        <img className="logoHeader" src={logoHeader} alt="logo" />
      </Link>

      <div className="navListContainer">
        <Link to="/news" className="navLink" name="NOTÍCIAS">
          <span className="navTxt">NOTÍCIAS</span>
        </Link>

        <Link to="/team" className="navLink" name="EQUIPA">
          <span className="navTxt">EQUIPA</span>
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
