import "./style.css";

// eslint-disable-next-line react/prop-types
export const NavContent = ({ nav }) => {
  switch (nav) {
    case "SOBRE":
      return (
        <div className="contentContainer">
          <span className="contentTitle">Sobre nós:</span>
        </div>
      );
    case "AULAS":
      return (
        <div className="contentContainer">
          <span className="contentTitle">Nossas aulas:</span>
        </div>
      );
    case "NOTÍCIAS":
      return (
        <div className="contentContainer">
          <span className="contentTitle">Principais notícias:</span>
        </div>
      );
    case "EQUIPA":
      return (
        <div className="contentContainer">
          <span className="contentTitle">Equipa de Personal Trainers:</span>
        </div>
      );
  }
};
