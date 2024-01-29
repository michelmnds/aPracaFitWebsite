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
          target="_blank"
          href="https://www.fitonline.pt/?sca_ref=5329101.0xedHr3tyT"
          style={{ backgroundImage: `url(https://i.imgur.com/6sP8ewG.png)` }}
          rel="noreferrer"
        ></a>
      </div>
    </div>
  );
};
