import "./style.css";

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const Display = ({ data, img, title, description, backColor }) => {
  return (
    <>
      <div
        className="singleDisplayContainer"
        style={{ backgroundColor: backColor }}
      >
        <span className="displayDate">{data}</span>

        <div
          className="displayBackground"
          style={{ backgroundImage: `url(${img})` }}
        />

        <h2 className="displayHead">{title}</h2>

        <hr className="displayLine" />

        <p className="displayP">{description}</p>

        <Link className="displayMore">Ver mais &gt;</Link>
      </div>
    </>
  );
};
