import "./style.css";

// eslint-disable-next-line react/prop-types
export const Card = ({ name, image }) => {
  const handleCardClick = () => {
    window.open("https://wa.me/message/3FGVEKEXWXJDF1", "_blank");
  };

  return (
    <div onClick={handleCardClick} className="cardContainer">
      <div
        className="cardImage"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${image})`,
          backgroundSize: 175,
          backgroundPosition: "top",
          backgroundColor: "white",
        }}
      />

      <span className="cardName">{name}</span>
    </div>
  );
};
