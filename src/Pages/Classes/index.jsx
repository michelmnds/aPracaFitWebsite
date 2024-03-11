import "./style.css";
import { ClassesCard } from "../../components/ClassesCard";
import classesData from "../../data/classesData";

export const Classes = () => {
  return (
    <div className="classMainContainer">
      <div className="classTopContainer">
        <h1 className="classTitle">As Nossas Aulas</h1>
      </div>

      <main className="mainClassContainer">
        {classesData.map((currentClass) => {
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
        })}
      </main>
    </div>
  );
};
