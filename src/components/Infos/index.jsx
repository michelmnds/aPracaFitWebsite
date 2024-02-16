import "./style.css";

const Infos = () => {
  return (
    <div className="moreInfosContainer">
      <section className="topSection">
        <span className="moreInfosMainTxt">Mais informações:</span>

        <hr />

        <div className="moreInfosTime">
          <span className="moreInfosTimeTxt" style={{ marginBottom: 10 }}>
            Contacto: 272 085 055
          </span>
          <span className="moreInfosTimeTxt" style={{ marginBottom: 10 }}>
            Email: a.praca.clube.de.fitness@gmail.com
          </span>
          <span className="moreInfosTimeTxt">Horário:</span>
          <span className="moreInfosDay">Seg à Sex: 07:30–21:30</span>
          <span className="moreInfosDay">Sáb: 09:00–13:00</span>
          <span className="moreInfosDay">Dom: Fechado</span>
        </div>
      </section>

      <section className="bottomSection">
        <span className="moreInfosTimeTxt">Morada:</span>
        <div className="mapContainer">
          <div className="mapContainerMarker">
            <span>A Praça Fit</span>
            <a
              target="_blank"
              href="https://www.google.com/maps/place/A+Pra%C3%A7a+Clube+de+Fitness/@39.8218679,-7.4939727,18.29z/data=!4m14!1m7!3m6!1s0xd3d5d20313a9879:0x246356bb9894639a!2sMercado+Municipal+de+Castelo+Branco!8m2!3d39.8222196!4d-7.4935641!16s%2Fg%2F11jwgczjcw!3m5!1s0xd3d5d76c6a5f5cf:0x8b2b0e2853750251!8m2!3d39.8217658!4d-7.4933409!16s%2Fg%2F11gv_bg15p?entry=ttu"
              rel="noreferrer"
            >
              direções
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infos;
