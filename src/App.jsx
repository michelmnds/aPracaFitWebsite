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
import { Footer } from "./components/Footer";
import { SingleClassPage } from "./Pages/SingleClassPage";
import { SingleNewPage } from "./Pages/SingleNewPage";

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
        <Route path="/sobre" element={<About />} />
        <Route path="/aulas" element={<Classes />} />
        <Route path="/aulas/:classId" element={<SingleClassPage />} />
        <Route path="/noticias" element={<News />} />
        <Route path="/noticias/:currentNewId" element={<SingleNewPage />} />
        <Route path="/equipa" element={<TeamPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
