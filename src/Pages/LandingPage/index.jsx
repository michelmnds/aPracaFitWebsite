import "./style.css";

import { News } from "../../components/News";
import { Team } from "../../components/Team";
import { NavBar } from "../../components/NavBar";
import { Greetings } from "../../components/Greetings";

import placeHolder from "../../assets/personal-placeholder.png";

export const LandingPage = () => {
  return (
    <>
      <NavBar />
      <News />
      <Greetings />
      <div
        style={{
          backgroundImage: `url(${placeHolder})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 376,
        }}
      />
      <Team />
    </>
  );
};
