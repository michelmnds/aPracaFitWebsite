import { Header } from "./components/Header";
import { Background } from "./components/Backgroud";
import { NavBar } from "./components/NavBar";
import { NavContent } from "./components/NavContent";
import { Greetings } from "./components/Greetings";

import { useState } from "react";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [nav, setNav] = useState("");

  return (
    <>
      <Header />
      <Background />
      <Greetings setNav={setNav} />
      <NavBar setNav={setNav} />
      <NavContent nav={nav} />
    </>
  );
}

export default App;
