import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { PTContextProvider } from "./providers/PersonalTrainer.context.jsx";
import "./reset.css";
import "./globalStyle.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PTContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PTContextProvider>
  </React.StrictMode>
);

