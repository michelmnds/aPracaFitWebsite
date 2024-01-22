/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./style.css";

export const ClassesCard = ({ id, image, name, description, backColor }) => {
  return (
    <>
      <div className="classContainer" style={{ backgroundColor: backColor }}>
        <div
          className="classBackground"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="classInfoContainer">
          <h2 className="classHead">{name}</h2>

          <hr className="classLine" />

          <p className="classP">{description}</p>

          <Link to={`/aulas/${id}`} className="classMore">
            <div>Ver mais </div>
            &gt;
          </Link>
        </div>
      </div>
    </>
  );
};
