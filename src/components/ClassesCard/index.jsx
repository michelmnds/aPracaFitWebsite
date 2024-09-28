/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./style.css";

export const ClassesCard = ({ id, image, name, backColor }) => {
  return (
    <div style={{ position: "relative" }}>
      {(id === 13 || id === 14) && <span className="tag">NOVO</span>}
      <div className="classContainer" style={{ backgroundColor: backColor }}>
        <Link
          to={`/aulas/${id}`}
          className="classBackground"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="classInfoContainer">
          <Link to={`/aulas/${id}`} className="classMore">
            <h2 className="classHead">{name}</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};
