/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState } from "react";

export const PTContext = createContext();

export const PTContextProvider = ({ children }) => {
  const [selectedPt, setSelectedPt] = useState(null);
  const [ptForm, setPtForm] = useState(false);

  const sendEmail = async (payload) => {
    try {
      const response = await axios.post(
        `https://emailsender-vlxe.onrender.com/form-submit`,
        payload
      );

      if (response.status === 200) {
        console.log("email sent");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PTContext.Provider
      value={{ selectedPt, setSelectedPt, sendEmail, ptForm, setPtForm }}
    >
      {children}
    </PTContext.Provider>
  );
};
