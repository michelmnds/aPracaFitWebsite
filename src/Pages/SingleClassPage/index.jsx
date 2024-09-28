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

            {currentClass.id === 13 && (
              <span className="singleClassDesc" st>
                1. Treino personalizado online: planos de treino e acesso ao seu
                personal trainer pelo WhatsApp (fale conosco para obter mais
                informações); <br />
                {`\n`}
                2. Treino personalizado presencial, no ginásio: treino
                acompanhado, presencialmente, com planeamento de treino
                específico, com reavaliações frequentes (fale conosco para obter
                mais informações); <br /> {`\n`} 3. Acesso à comunidade da
                Praça, com partilha de dicas de treino, alimentação saudável e
                acesso a eventos exclusivos para a comunidade.
                {`\n`}
                {`\n`}
                Todos os sócios podem participar, quer tenham a corrida como
                atividade física de eleição ou que queiram iniciar-se na
                corrida. Para diferentes níveis de preparação, incluindo,
                também, caminhada.
              </span>
            )}

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
