import { Link } from "react-router-dom";
import "./style.css";

// eslint-disable-next-line react/prop-types
export const Greetings = () => {
  return (
    <div className="greetingContainer">
      <h2 className="greetingTitle">
        Sempre a <br />
        pensar no seu bem estar...
      </h2>

      <hr />

      <p className="greetingP">Para mais informações</p>

      <Link className="greetingBtn" to="/sobre">
        CLIQUE AQUI
      </Link>
    </div>
  );
};
