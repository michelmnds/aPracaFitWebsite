/* eslint-disable no-unused-vars */
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";

import { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";

import { LandingPage } from "./Pages/LandingPage";
import { About } from "./Pages/About";
import { Classes } from "./Pages/Classes";
import { News } from "./Pages/NewsPage";
import { TeamPage } from "./Pages/TeamPage";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [nav, setNav] = useState(false);

  useEffect(() => {
    setNav(false);
  }, []);

  return (
    <>
      <Header nav={nav} setNav={setNav} />
      <NavBar nav={nav} setNav={setNav} />
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
