/* eslint-disable react/prop-types */
import "./style.css";
import video from "../../assets/videos/newGymVideo.mp4";

import { useRef, useState } from "react";
import { useEffect } from "react";

export const VideoModal = ({ setModal }) => {
  const videoRef = useRef(null);
  const [pause, setPause] = useState(false);

  const handleOutsideClick = (e) => {
    if (e.target.className == "modalBackground") {
      setModal(false);
    }
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.volume = 0.05;
    }
  };
  const handlePause = () => {
    if (videoRef.current && !pause) {
      videoRef.current.pause();
      setPause(true);
    } else if (videoRef.current && pause) {
      videoRef.current.play();
      setPause(false);
    }
  };

  const handleClick = () => {
    setModal(false);
  };

  useEffect(() => {
    handlePlay();
  }, []);

  return (
    <div className="modalBackground" onClick={(e) => handleOutsideClick(e)}>
      <section className="videoModal">
        <span className="videoModalClose" onClick={handleClick}>
          X
        </span>
        <video
          onClick={handlePause}
          ref={videoRef}
          src={video}
          className="modalVideo"
        ></video>
      </section>
    </div>
  );
};
