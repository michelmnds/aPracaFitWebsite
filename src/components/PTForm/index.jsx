/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useContext, useEffect, useState } from "react";
import "./style.css";
import { PTContext } from "../../providers/PersonalTrainer.context";

export const PTForm = () => {
  const [nome, setNome] = useState("");
  const [telemovel, setTelemovel] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [patologia, setPatologia] = useState("");

  const [sent, setSent] = useState(false);

  const [error, setError] = useState(false);

  useEffect(() => {
    setSent(false);
  }, []);

  const { selectedPt, sendEmail, ptForm, setPtForm } = useContext(PTContext);

  const payload = {
    nome,
    telemovel,
    objetivo,
    patologia,
    pt: selectedPt,
  };

  const handleClose = () => {
    setPtForm(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      payload.nome &&
      payload.objetivo &&
      payload.patologia &&
      payload.telemovel
    ) {
      sendEmail(payload);
      setSent(true);
    } else {
      setError(true);
      console.log("error");
    }
  };

  return (
    <div className="ptFormContainer">
      {sent ? (
        <form className="ptForm" onSubmit={handleSubmit}>
          <span className="ptFormClose" onClick={handleClose}>
            X
          </span>
          <h2 className="ptFormTitle">
            Formulário enviado! <br />
            Entraremos em contacto assim que possível :)
          </h2>
        </form>
      ) : (
        <form className="ptForm" onSubmit={handleSubmit}>
          <span className="ptFormClose" onClick={handleClose}>
            X
          </span>
          <h2 className="ptFormTitle">Preencha o formulário</h2>

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

          <label htmlFor="patology">
            <input
              type="text"
              id="patology"
              value={patologia}
              onChange={(event) => setPatologia(event.target.value)}
              placeholder="Tens alguma patologia?"
            />
          </label>

          <label htmlFor="pt">
            Personal Trainer:
            <input
              type="text"
              id="pt"
              defaultValue={selectedPt || ""}
              readOnly
            />
          </label>

          {error && (
            <span style={{ fontSize: 14, color: "red" }}>
              Preencha antes de enviar!
            </span>
          )}

          <button className="ptFormBtn" type="submit">
            Enviar!
          </button>
        </form>
      )}
    </div>
  );
};
