/* eslint-disable react/prop-types */
import "./style.css";

export const SponsorModal = ({ setSponsorModal, setSponsorShow }) => {
  const handleClick = () => {
    setSponsorModal(false);
    setSponsorShow(false);
  };

  return (
    <div className="sponsorModalContainer">
      <div className="sponsorModalImageContainer">
        <span className="sponsorModalClose" onClick={handleClick}>
          X
        </span>
        <a
          className="sponsorModalImage"
          href="https://www.fitonline.pt/collections/promocoes"
          style={{ backgroundImage: `url(https://i.imgur.com/oAcN0Ys.png)` }}
        ></a>
      </div>
    </div>
  );
};
