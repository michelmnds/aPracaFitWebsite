import "./style.css";

// eslint-disable-next-line react/prop-types
export const NavBar = () => {
  return (
    <nav className="navContainer" id="navContainer">
      <div className="navLink" name="SOBRE">
        <span className="navTxt">SOBRE</span>
      </div>

      <div className="navLink" name="AULAS">
        <span className="navTxt">AULAS</span>
      </div>

      <div className="navLink" name="NOTÍCIAS">
        <span className="navTxt">NOTÍCIAS</span>
      </div>

      <div className="navLink" name="EQUIPA">
        <span className="navTxt">EQUIPA</span>
      </div>
    </nav>
  );
};
