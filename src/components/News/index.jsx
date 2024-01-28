/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./style.css";
import play from "../../assets/play.png";
import image from "../../assets/espera-background.png";
import topTxt from "../../assets/espera-top-txt.png";
import bottomTxt from "../../assets/espera-bottom-txt.png";

export const News = ({ modal, setModal }) => {
  return (
    <div>
      <section className="topSec">
        <Link onClick={() => setModal(true)}>
          <div
            className="newsContainer"
            style={{ backgroundImage: `url(${image})` }}
          >
            <img src={topTxt} alt="txt" className="topTxt" />
            <img src={bottomTxt} alt="txt" className="bottomTxt" />
          </div>
        </Link>
      </section>

      <section className="bottomSec"></section>
    </div>
  );
};
