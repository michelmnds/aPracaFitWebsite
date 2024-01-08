import "./style.css";

import { News } from "../../components/News";
import { Team } from "../../components/Team";
import { Greetings } from "../../components/Greetings";

import placeHolder from "../../assets/personal-placeholder.png";

// eslint-disable-next-line react/prop-types
export const LandingPage = () => {
  return (
    <>
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
