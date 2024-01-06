import "./style.css";
import logo from "../../assets/logo.png";

export const Background = () => {
  return (
    <div className="background">
      <img className="logo" src={logo} alt="logo" />
    </div>
  );
};
