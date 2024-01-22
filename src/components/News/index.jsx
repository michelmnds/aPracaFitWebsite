import { Link } from "react-router-dom";
import "./style.css";

export const News = () => {
  return (
    <Link to="/noticias" className="newsContainer">
      <h1>PRINCIPAL NOTICIA DA SEMANA</h1>
      <span className="newsButton">VER NOTÍCIAS</span>
    </Link>
  );
};
