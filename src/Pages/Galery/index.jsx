import "./style.css";
import { galeryData } from "../../data/galeryData";
import { useState } from "react";
import { useEffect } from "react";

export const Galery = () => {
  const [picModal, setPicModal] = useState(false);
  const [picId, setPicId] = useState(null);
  const [pic, setPic] = useState(null);

  useEffect(() => {
    const foundPic = galeryData.find((pic) => pic.id === picId);
    setPic(foundPic);
  }, [picId]);

  return (
    <>
      {picModal && (
        <div className="picModal">
          <div
            className="picModalImage"
            style={{ backgroundImage: `url(${pic?.url})` }}
          >
            <span className="closePicModal" onClick={() => setPicModal(false)}>
              X
            </span>
          </div>
        </div>
      )}
      <div className="galeryContainer">
        <h1>O NOSSO ESPAÇO</h1>

        <hr />

        <main className="galeryMain">
          {galeryData.map((image) => {
            return (
              <div
                key={image.id}
                style={{ backgroundImage: `url(${image.url})` }}
                className="galeryImage"
                onClick={() => {
                  setPicModal(true);
                  setPicId(image.id);
                }}
              />
            );
          })}
        </main>
      </div>
    </>
  );
};
