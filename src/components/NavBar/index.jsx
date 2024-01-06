import "./style.css";

// eslint-disable-next-line react/prop-types
export const NavBar = ({ setNav }) => {
  const handleClick = (e) => {
    setNav(e.target.innerText);
  };

  return (
    <nav className="navContainer" id="navContainer">
      <div className="navLink" name="SOBRE" onClick={handleClick}>
        <span className="navTxt">SOBRE</span>
      </div>

      <div className="navLink" name="AULAS" onClick={handleClick}>
        <span className="navTxt">AULAS</span>
      </div>

      <div className="navLink" name="NOTÍCIAS" onClick={handleClick}>
        <span className="navTxt">NOTÍCIAS</span>
      </div>

      <div className="navLink" name="EQUIPA" onClick={handleClick}>
        <span className="navTxt">EQUIPA</span>
      </div>
    </nav>
  );
};
