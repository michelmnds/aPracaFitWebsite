/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./style.css";

import { News } from "../../components/News";
import { Team } from "../../components/Team";
import { Greetings } from "../../components/Greetings";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
export const LandingPage = ({
  modal,
  setModal,
  setClientModal,
  setSponsorModal,
  setShow,
}) => {
  useEffect(() => {
    setTimeout(() => {
      setClientModal(true);
      setSponsorModal(true);
    }, 3000);
  }, []);

  return (
    <div className="landingPageContainer">
      <News modal={modal} setModal={setModal} />
      <main className="mainContainer">
        <Greetings />
        <div
          className="greetingBackground"
          style={{
            backgroundImage: `url(https://i.imgur.com/dSMslIY.jpg)`,
          }}
        />
      </main>
      <Team />
    </div>
  );
};
