import { Link } from "react-router-dom";
import "./style.css";

// eslint-disable-next-line react/prop-types
export const Team = () => {
  return (
    <div className="teamContainer">
      <h2 className="teamTitle">Temos uma ótima equipa a tua espera!</h2>
      <Link to="/team" className="teamBtn">
        CONHEÇA A EQUIPA
      </Link>
      <Link to="/classes" className="teamBtn red">
        CONHEÇA AS AULAS
      </Link>
    </div>
  );
};
