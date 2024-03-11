/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useContext, useEffect, useState } from "react";
import "./style.css";
import { PTContext } from "../../providers/PersonalTrainer.context";

export const ClassForm = ({ currentClass, setClassForm }) => {
  const [nome, setNome] = useState("");
  const [telemovel, setTelemovel] = useState("");
  const [objetivo, setObjetivo] = useState("");

  const [sent, setSent] = useState(false);

  const [error, setError] = useState(false);

  useEffect(() => {
    setSent(false);
  }, []);

  const { sendEmail } = useContext(PTContext);

  const payload = {
    nome,
    telemovel,
    objetivo,
    class: currentClass.name,
  };

  const handleClose = () => {
    setClassForm(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (payload.nome && payload.objetivo && payload.telemovel) {
      sendEmail(payload);
      setSent(true);
    } else {
      setError(true);
      console.log("error");
    }
  };

  return (
    <div className="classFormContainer">
      {sent ? (
        <form className="classForm" onSubmit={handleSubmit}>
          <span className="classFormClose" onClick={handleClose}>
            X
          </span>
          <h2 className="classFormTitle">
            Formulário enviado! <br />
            Entraremos em contacto assim que possível :)
          </h2>
        </form>
      ) : (
        <form className="classForm" onSubmit={handleSubmit}>
          <span className="classFormClose" onClick={handleClose}>
            X
          </span>
          <h2 className="classFormTitle">Preencha o formulário</h2>

          <label htmlFor="name">
            <input
              type="text"
              id="name"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              placeholder="Nome Completo"
            />
          </label>

          <label htmlFor="telemovel">
            <input
              type="text"
              id="telemovel"
              value={telemovel}
              onChange={(event) => setTelemovel(event.target.value)}
              placeholder="Número de telemóvel"
            />
          </label>

          <label htmlFor="objective">
            <input
              type="text"
              id="objective"
              value={objetivo}
              onChange={(event) => setObjetivo(event.target.value)}
              placeholder="Quais seus objetivos?"
            />
          </label>

          <label htmlFor="pt">
            Aula:
            <input
              type="text"
              id="pt"
              defaultValue={currentClass.name || ""}
              readOnly
            />
          </label>

          {error && (
            <span style={{ fontSize: 14, color: "red" }}>
              Preencha antes de enviar!
            </span>
          )}

          <button className="classFormBtn" type="submit">
            Enviar!
          </button>
        </form>
      )}
    </div>
  );
};
