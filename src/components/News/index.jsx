import { Link } from "react-router-dom";
import "./style.css";

export const News = () => {
  return (
    <Link to="/news" className="newsContainer">
      <span className="newsButton">VER NOTÍCIAS</span>
    </Link>
  );
};
