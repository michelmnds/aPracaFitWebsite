import "./style.css";
import personalData from "../../data/personalData";

import { Card } from "../../components/Card";

export const TeamPage = () => {
  return (
    <div className="classMainContainer">
      <div className="teamTop">
        <h1 className="teamTopTitle">Personal Trainers</h1>

        <hr />
      </div>

      <main className="teamCards">
        {personalData.map((personal) => {
          if (personal.id % 2 == 0) {
            return (
              <Card
                key={personal.id}
                name={personal.name}
                image={personal.image}
                instagram={personal.instagram}
              />
            );
          } else {
            return (
              <Card
                key={personal.id}
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
