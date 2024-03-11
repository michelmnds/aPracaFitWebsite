/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import "./style.css";
import { PTContext } from "../../providers/PersonalTrainer.context";

// eslint-disable-next-line react/prop-types
export const Card = ({ name, image }) => {
  const { setSelectedPt, sendEmail, ptForm, setPtForm } = useContext(PTContext);

  const handleCardClick = () => {
    setSelectedPt(name);
    setPtForm(true);
  };

  return (
    <div onClick={handleCardClick} className="cardContainer">
      <div
        className="cardImage"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${image})`,
          backgroundSize: 175,
          backgroundPosition: "top",
          backgroundColor: "white",
        }}
      />

      <span className="cardName">
        {name.split(" ")[0]} <br /> {name.split(" ")[1]}
      </span>
    </div>
  );
};
