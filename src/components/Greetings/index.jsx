import "./style.css";

// eslint-disable-next-line react/prop-types
export const Greetings = ({ setNav }) => {
  const scrollToNav = () => {
    const nav = document.getElementById("navContainer");

    if (nav) {
      nav.scrollIntoView({ behavior: "smooth" });
    }
    setNav("SOBRE");
  };

  return (
    <div className="greetingContainer">
      <h2 className="greetingTitle">
        Sempre a <br />
        pensar no seu bem estar...
      </h2>

      <p className="greetingP">Para mais informações</p>

      <a className="greetingBtn" onClick={scrollToNav}>
        CLIQUE AQUI
      </a>
    </div>
  );
};
