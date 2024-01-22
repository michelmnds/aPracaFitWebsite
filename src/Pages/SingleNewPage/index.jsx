/* eslint-disable react-hooks/exhaustive-deps */
import "./style.css";
import { useParams } from "react-router-dom";
import newsData from "../../data/newsData";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export const SingleNewPage = ({ menu }) => {
  const { currentNewId } = useParams();
  const [currentNew, setCurrentNew] = useState({});
  useEffect(() => {
    setCurrentNew(newsData.find((currentNew) => currentNew.id == currentNewId));
  }, []);

  if (currentNew.id) {
    return (
      <div className={`singleNewContainer ${menu ? "move" : ""}`}>
        <div
          className="singleNewImg"
          style={{ backgroundImage: `url(${currentNew.image})` }}
        />

        <div className="singleNewInfos">
          <span className="singleNewText">{currentNew.data} </span>

          <h2 className="singleNewName">{currentNew.title}</h2>

          <span className="singleNewDesc">{currentNew.description}</span>

          <a href="#" className="singleNewBtn">
            CONTACTE-NOS
          </a>
        </div>
      </div>
    );
  }
};
