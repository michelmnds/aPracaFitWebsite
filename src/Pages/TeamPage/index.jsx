import "./style.css";
import personalData from "../../personalData";

import { Card } from "../../components/Card";

export const TeamPage = () => {
  return (
    <div className="classMainContainer">
      <h1 className="classTitle">
        Nossa <br />
        Equipa
      </h1>

      <hr />

      <main>
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
