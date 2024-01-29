/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./style.css";

export const ClientModal = ({ clientModal, setClientModal, setClientShow }) => {
  const handleClick = () => {
    setClientModal(false);
    setClientShow(false);
  };

  return (
    <div className={`clientModal ${clientModal ? "move" : ""}`}>
      <span className="clientModalTxt">Deseja fazer sua adesão?</span>

      <a
        className="clientModalBtn"
        target="_blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLSdv89X3ie1CnHvcXuUuCNSU4pPZOMLrPYZws6ueJbuh-1Vlag/viewform"
        rel="noreferrer"
      >
        Carrega aqui!
      </a>

      <span onClick={handleClick} className="clientModalClose">
        Não, obrigado!
      </span>
    </div>
  );
};
