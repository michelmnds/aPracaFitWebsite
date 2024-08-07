import "@mantine/carousel/styles.css";
import "@mantine/core/styles.layer.css";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage";
import { About } from "./Pages/About";
import { Classes } from "./Pages/Classes";
import { News } from "./Pages/NewsPage";
import { TeamPage } from "./Pages/TeamPage";
import { Footer } from "./components/Footer";
import { SingleClassPage } from "./Pages/SingleClassPage";
import { SingleNewPage } from "./Pages/SingleNewPage";
import { VideoModal } from "./components/VideoModal";
import { Galery } from "./Pages/Galery";
import { ClientModal } from "./components/ClientModal";
import { SponsorModal } from "./components/SponsorModal";
import { UnderConstructionPage } from "./Pages/UnderConstructionPage";
import { MantineProvider } from "@mantine/core";
import { TimeTableModal } from "./components/TimeTable";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [nav, setNav] = useState(false);
  const [modal, setModal] = useState(false);
  const [clientModal, setClientModal] = useState(false);
  const [sponsorModal, setSponsorModal] = useState(false);
  const [sponsorShow, setSponsorShow] = useState(true);
  const [clientShow, setClientShow] = useState(true);

  const [timeTable, setTimeTable] = useState(false);

  useEffect(() => {
    // setSponsorShow(true);
    setClientShow(true);
  }, []);

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      if (!nav) {
        window.scrollTo(0, 0);
      }
    }, [pathname, nav]);

    return null;
  }

  return (
    <MantineProvider>
      {timeTable && (
        <TimeTableModal timeTable={timeTable} setTimeTable={setTimeTable} />
      )}
      {/* {sponsorShow && sponsorModal && (
        <SponsorModal
          sponsorModal={sponsorModal}
          setSponsorModal={setSponsorModal}
          setSponsorShow={setSponsorShow}
        />
      )} */}
      {clientShow && clientModal && (
        <ClientModal
          clientModal={clientModal}
          setClientModal={setClientModal}
          setClientShow={setClientShow}
        />
      )}
      {modal && <VideoModal modal={modal} setModal={setModal} />}
      <Header nav={nav} setNav={setNav} />
      <NavBar nav={nav} setNav={setNav} />
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              setClientModal={setClientModal}
              setSponsorModal={setSponsorModal}
              modal={modal}
              setModal={setModal}
              timeTable={timeTable}
              setTimeTable={setTimeTable}
            />
          }
        />
        <Route path="/sobre" element={<About />} />
        <Route path="/fotos" element={<Galery />} />
        <Route path="/aulas" element={<Classes />} />
        <Route path="/aulas/:classId" element={<SingleClassPage />} />
        <Route path="/noticias" element={<News />} />
        <Route path="/noticias/:currentNewId" element={<SingleNewPage />} />
        <Route path="/equipa" element={<TeamPage />} />

        <Route path="*" element={<UnderConstructionPage />} />
      </Routes>

      <ScrollToTop />
      <Footer />
    </MantineProvider>
  );
}

export default App;

