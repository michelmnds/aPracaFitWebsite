/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./style.css";
import image from "../../assets/espera-background.png";
import topTxt from "../../assets/espera-top-txt.png";
import bottomTxt from "../../assets/espera-bottom-txt.png";

export const News = ({ modal, setModal }) => {
  return (
    <div>
      <section className="topSec">
        <a
          href="https://www.instagram.com/p/C6a4kpDLcLx/"
          target="_blank"
          rel="noreferrer"
        >
          <div
            className="newsContainer"
            style={{ backgroundImage: `url(${image})` }}
          >
            <img src={topTxt} alt="txt" className="topTxt" />
            <img src={bottomTxt} alt="txt" className="bottomTxt" />
          </div>
        </a>
      </section>

      <section className="bottomSec"></section>
    </div>
  );
};
