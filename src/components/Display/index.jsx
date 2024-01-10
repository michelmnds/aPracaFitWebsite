import "./style.css";

import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types, no-unused-vars
export const Display = ({ data, img, title, description, backColor }) => {
  return (
    <>
      <div
        className="singleDisplayContainer"
        style={{ backgroundColor: backColor }}
      >
        {/* <span className="displayDate">{data}</span> */}

        <div
          className="displayBackground"
          style={{ backgroundImage: `url(${img})` }}
        />

        <div className="displayInfoContainer">
          <h2 className="displayHead">{title}</h2>

          <hr className="displayLine" />

          <p className="displayP">{description}</p>

          <Link className="classMore">
            <div>Ver mais </div>
            &gt;
          </Link>
        </div>
      </div>
    </>
  );
};
