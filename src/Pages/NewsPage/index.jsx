import "./style.css";
import { Display } from "../../components/Display";

import newsData from "../../data/newsData";

export const News = () => {
  return (
    <div className="displayContainer">
      <h1 className="displayTitle">Principais Notícias</h1>

      <hr />

      {newsData.map((display) => {
        if (display.id % 2 == 0) {
          return (
            <Display
              key={display.id}
              id={display.id}
              data={display.data}
              img={display.image}
              title={display.title}
              description={display.description}
              backColor="var(--primary-grey)"
            />
          );
        } else {
          return (
            <Display
              key={display.id}
              id={display.id}
              data={display.data}
              img={display.image}
              title={display.title}
              description={display.description}
              backColor="var(--primary-color)"
            />
          );
        }
      })}
    </div>
  );
};
