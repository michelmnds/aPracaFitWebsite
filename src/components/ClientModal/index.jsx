/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./style.css";
import { Transition } from "@mantine/core";
import { ClientForm } from "../ClientForm";

export const ClientModal = ({ clientModal, setClientModal, setClientShow }) => {
  const [clientForm, setClientForm] = useState(false);
  const handleClosingClick = () => {
    setClientModal(false);
    setClientShow(false);
  };

  const handleClientFormClick = () => {
    setClientForm(true);
  };

  return (
    <>
      {clientForm && (
        <ClientForm
          setClientModal={setClientModal}
          setClientForm={setClientForm}
        />
      )}
      <div className={`clientModal ${clientForm ? "move" : ""}`}>
        <span className="clientModalTxt">Deseja fazer a sua adesão?</span>

        <button className="clientModalBtn" onClick={handleClientFormClick}>
          Carregue aqui!
        </button>

        <span onClick={handleClosingClick} className="clientModalClose">
          Não, obrigado!
        </span>
      </div>
    </>
  );
};
