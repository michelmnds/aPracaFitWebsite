import "./style.css";

// eslint-disable-next-line react/prop-types
export const Card = ({ name, image, instagram }) => {
  const handleCardClick = () => {
    window.open(instagram, "_blank");
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
