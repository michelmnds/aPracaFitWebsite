import "./style.css";
import { ClassesCard } from "../../components/ClassesCard";
import classesData from "../../data/classesData";

export const Classes = () => {
  return (
    <div className="classMainContainer">
      <h1 className="classTitle">As Nossas Aulas</h1>

      <hr />

      {classesData.map((currentClass) => {
        if (currentClass.id % 2 == 0) {
          return (
            <ClassesCard
              key={currentClass.id}
              id={currentClass.id}
              image={currentClass.image}
              name={currentClass.name}
              description={currentClass.description}
              backColor="var(--primary-color)"
            />
          );
        } else {
          return (
            <ClassesCard
              key={currentClass.id}
              id={currentClass.id}
              image={currentClass.image}
              name={currentClass.name}
              description={currentClass.description}
              backColor="var(--primary-grey)"
            />
          );
        }
      })}
    </div>
  );
};
