/* eslint-disable react-hooks/exhaustive-deps */
import "./style.css";
import { useParams } from "react-router-dom";
import classesData from "../../data/classesData";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { ClassForm } from "../../components/ClassForm";
// eslint-disable-next-line react/prop-types
export const SingleClassPage = ({ menu }) => {
  const { classId } = useParams();
  const [currentClass, setCurrentClass] = useState({});
  const [classForm, setClassForm] = useState(false);
  useEffect(() => {
    setCurrentClass(
      classesData.find((currentClass) => currentClass.id == classId)
    );
  }, []);

  const handleButtonClick = () => {
    setClassForm(true);
  };

  if (currentClass.id) {
    return (
      <>
        {classForm && (
          <ClassForm currentClass={currentClass} setClassForm={setClassForm} />
        )}
        <div className={`singleClassContainer ${menu ? "move" : ""}`}>
          <div
            className="singleClassImg"
            style={{ backgroundImage: `url(${currentClass.image})` }}
          />

          <div className="singleClassInfos">
            <h2 className="singleClassName">{currentClass.name}</h2>

            <h3 className="singleClassModality">{currentClass.modality}</h3>

            <span className="singleClassDesc">{currentClass.description}</span>

            <span className="singleClassText">Professores: </span>

            <section className="classPtContainer">
              {currentClass.teachers.map((teacher) => (
                <Card
                  key={teacher.id}
                  name={teacher.name}
                  image={teacher.image}
                />
              ))}
            </section>

            <button className="singleClassBtn" onClick={handleButtonClick}>
              CONTACTE-NOS
            </button>
          </div>
        </div>
      </>
    );
  }
};
