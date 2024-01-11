import "./style.css";
import logo from "../../assets/logo.png";

export const Footer = () => {
  return (
    <div className="footerContainer">
      <img className="footerLogo" src={logo} alt="logo" />

      <hr className="footerLine" />

      <div className="footerIconContainer">
        <a
          className="footerIcon"
          style={{
            backgroundImage: `url(https://i.imgur.com/xncnJht.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          alt="instagram"
          href="https://www.instagram.com/apracacfit/"
          target="_blank"
          rel="noreferrer"
        />

        <a
          className="footerIcon"
          style={{
            backgroundImage: `url(https://i.imgur.com/WBSRQ22.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          alt="facebook"
          href="https://www.facebook.com/people/A-Pra%C3%A7a-Clube-de-Fitness/100061317712253/"
          target="_blank"
          rel="noreferrer"
        />
      </div>
    </div>
  );
};
