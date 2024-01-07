import "./style.css";

import { Background } from "../../components/Background";
import { Team } from "../../components/Team";
import { NavBar } from "../../components/NavBar";
import { Greetings } from "../../components/Greetings";

export const LandingPage = () => {
  return (
    <>
      <NavBar />
      <Greetings />
      <Background />
      <Team />
    </>
  );
};
