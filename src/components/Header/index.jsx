import "./style.css";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";

export const Header = () => {
  return (
    <header className="headerContainer">
      <span className="title">A PRAÇA</span>

      <div className="iconContainer">
        <a
          className="icon"
          style={{
            backgroundImage: `url(${instagram})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          alt="instagram"
          href="https://www.instagram.com/apracacfit/"
          target="_blank"
          rel="noreferrer"
        />

        <a
          className="icon"
          style={{
            backgroundImage: `url(${facebook})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          alt="facebook"
          href="https://www.facebook.com/people/A-Pra%C3%A7a-Clube-de-Fitness/100061317712253/"
          target="_blank"
          rel="noreferrer"
        />
      </div>
    </header>
  );
};
