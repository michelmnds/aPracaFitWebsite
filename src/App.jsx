/* eslint-disable no-unused-vars */
import { Header } from "./components/Header";
import { Background } from "./components/Background";
import { Team } from "./components/Team";
import { NavBar } from "./components/NavBar";
import { Greetings } from "./components/Greetings";

import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import { LandingPage } from "./Pages/LandingPage";
import { About } from "./Pages/About";
import { Classes } from "./Pages/Classes";
import { News } from "./Pages/News";
import { TeamPage } from "./Pages/TeamPage";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [nav, setNav] = useState(false);

  return (
    <>
      <Header nav={nav} setNav={setNav} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/news" element={<News />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </>
  );
}

export default App;
