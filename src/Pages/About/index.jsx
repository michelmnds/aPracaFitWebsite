import "./style.css";

export const About = () => {
  return (
    <main className="aboutContainer">
      <div className="aboutInfoContainer">
        <h1 className="aboutTitle">
          Nossa
          <br />
          História
        </h1>

        <hr className="aboutLine" />

        <p className="aboutP">
          Abrir um clube de fitness é motivado por uma paixão inabalável pelo
          bem-estar e pela crença fundamental de que a saúde física e mental é a
          chave para uma vida plena. <br /> Este empreendimento é uma resposta à
          necessidade de proporcionar um espaço dedicado à promoção de estilos
          de vida saudáveis, onde a comunidade pode se reunir, se motivar e
          alcançar seus objetivos fitness. A Praça-Clube de Fitness nasce da
          convicção e de um sonho de um casal que com dedicação, empenho e
          trabalho quer proporcionar que todos merecem acesso a instalações de
          qualidade, programas personalizados e um ambiente familiar e
          acolhedor, visando não apenas a transformação física, mas também o
          fortalecimento da mente e do espírito. <br />
          Estamos comprometidos em criar uma comunidade unida em torno da busca
          da saúde e do bem-estar, proporcionando uma experiência única e
          inspiradora para todos os membros.
        </p>
      </div>
      <div className="background" />
    </main>
  );
};
