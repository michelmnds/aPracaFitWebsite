import "./style.css";
import personalData from "../../data/personalData";

import { Card } from "../../components/Card";
import { PTForm } from "../../components/PTForm";
import { useContext } from "react";
import { PTContext } from "../../providers/PersonalTrainer.context";

export const TeamPage = () => {
  const { ptForm } = useContext(PTContext);

  return (
    <div className="classMainContainer">
      <div className="teamTop">
        <h1 className="teamTopTitle">Personal Trainers</h1>

        <hr />
      </div>
      {ptForm && <PTForm />}
      <main className="teamCards">
        {personalData.map((personal, index) => {
          if (personal.id % 2 == 0) {
            return (
              <Card
                key={index}
                name={personal.name}
                image={personal.image}
                instagram={personal.instagram}
              />
            );
          } else {
            return (
              <Card
                key={index}
                name={personal.name}
                image={personal.image}
                instagram={personal.instagram}
              />
            );
          }
        })}
      </main>
    </div>
  );
};
