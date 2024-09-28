/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./style.css";
import image from "../../assets/espera-background.png";
import topTxt from "../../assets/trx.png";
import bottomTxt from "../../assets/espera-bottom-txt.png";

export const News = ({ modal, setModal }) => {
  return (
    <div>
      <section className="topSec">
        <div onClick={() => setModal(true)} style={{ cursor: "pointer" }}>
          <div
            className="newsContainer"
            style={{ backgroundImage: `url(${image})` }}
          >
            <img src={topTxt} alt="txt" className="topTxt" />
            <img src={bottomTxt} alt="txt" className="bottomTxt" />
          </div>
        </div>
      </section>

      <section className="bottomSec"></section>
    </div>
  );
};
