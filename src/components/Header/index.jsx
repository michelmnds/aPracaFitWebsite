import "./style.css";

import logoHeader from "../../assets/logoHeader.png";

import menu from "../../assets/menu.png";
import x from "../../assets/x.png";
import home from "../../assets/home.png";

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
      <div className="iconContainer">
        {nav == false ? (
          <img className="icon" src={menu} alt="menu" onClick={handleClick} />
        ) : (
          <img className="icon" src={x} alt="x" onClick={handleClick} />
        )}
      </div>

      <img className="logoHeader" src={logoHeader} alt="logo" />

      <Link to="/">
        <img className="icon" src={home} alt="home icon" />
      </Link>
    </header>
  );
};
