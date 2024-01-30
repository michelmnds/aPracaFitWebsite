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
    sendEmail(payload);
    setSent(true);
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
            Entraremos em contato assim que possível :)
          </h2>
        </form>
      ) : (
        <form className="ptForm" onSubmit={handleSubmit}>
          <span className="ptFormClose" onClick={handleClose}>
            X
          </span>
          <h2 className="ptFormTitle">Preencha o formulário abaixo</h2>

          <label htmlFor="name">
            Nome:
            <input
              type="text"
              id="name"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              placeholder="Digite aqui seu nome"
            />
          </label>

          <label htmlFor="telemovel">
            No. Telemóvel:
            <input
              type="text"
              id="telemovel"
              value={telemovel}
              onChange={(event) => setTelemovel(event.target.value)}
              placeholder="Digite aqui seu email"
            />
          </label>

          <label htmlFor="objective">
            Objetivo:
            <input
              type="text"
              id="objective"
              value={objetivo}
              onChange={(event) => setObjetivo(event.target.value)}
              placeholder="Digite aqui seu objetivo"
            />
          </label>

          <label htmlFor="patology">
            Patologias:
            <input
              type="text"
              id="patology"
              value={patologia}
              onChange={(event) => setPatologia(event.target.value)}
              placeholder="Tem alguma patologia?"
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

          <button className="ptFormBtn" type="submit">
            Enviar!
          </button>
        </form>
      )}
    </div>
  );
};
