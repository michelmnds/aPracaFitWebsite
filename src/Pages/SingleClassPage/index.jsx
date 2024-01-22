/* eslint-disable react-hooks/exhaustive-deps */
import "./style.css";
import { useParams } from "react-router-dom";
import classesData from "../../data/classesData";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export const SingleClassPage = ({ menu }) => {
  const { classId } = useParams();
  const [currentClass, setCurrentClass] = useState({});
  useEffect(() => {
    setCurrentClass(
      classesData.find((currentClass) => currentClass.id == classId)
    );
  }, []);

  if (currentClass.id) {
    return (
      <div className={`singleClassContainer ${menu ? "move" : ""}`}>
        <div
          className="singleClassImg"
          style={{ backgroundImage: `url(${currentClass.image})` }}
        />

        <div className="singleClassInfos">
          <h2 className="singleClassName">{currentClass.name}</h2>

          <h3 className="singleClassModality">{currentClass.modality}</h3>

          <span className="singleClassDesc">{currentClass.description}</span>

          <span className="singleClassText">Agenda: </span>

          <section className="schedule">
            {currentClass.schedule.map((day) => {
              return (
                <div key={day.day} className="dayContainer">
                  <span className="dayDay">{day.day}</span>
                  <span className="dayTime">{day.time}</span>
                  <span className="dayTeacher">{day.teacher}</span>
                </div>
              );
            })}
          </section>

          <a href="#" className="singleClassBtn">
            CONTACTE-NOS
          </a>
        </div>
      </div>
    );
  }
};
