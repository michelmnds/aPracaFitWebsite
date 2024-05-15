/* eslint-disable react-hooks/exhaustive-deps */
import "./style.css";
import { useParams } from "react-router-dom";
import newsData from "../../data/newsData";
import { useEffect, useState, useRef } from "react";
import { Carousel } from "@mantine/carousel";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
import Autoplay from "embla-carousel-autoplay";
import classes from "./Demo.module.css";
import { Image } from "@mantine/core";

// eslint-disable-next-line react/prop-types
export const SingleNewPage = ({ menu }) => {
  const autoplay = useRef(Autoplay({ delay: 3500 }));
  const { currentNewId } = useParams();
  const [currentNew, setCurrentNew] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setCurrentNew(newsData.find((currentNew) => currentNew.id == currentNewId));
  }, []);

  const imageUrls1 = [
    "https://i.imgur.com/zsZ788l.jpg",
    "https://i.imgur.com/8DBEX4S.jpg",
    "https://i.imgur.com/wXakdm4.jpg",
    "https://i.imgur.com/mt0Qd0K.jpg",
    "https://i.imgur.com/MXWsOOA.jpg",
    "https://i.imgur.com/x1nLxZM.jpg",
    "https://i.imgur.com/zlZ9ld9.jpg",
    "https://i.imgur.com/zrO6P4x.jpg",
    "https://i.imgur.com/pgFLiog.jpg",
    "https://i.imgur.com/jGGlO0z.jpg",
  ];

  function CarouselComponent() {
    const slides =
      currentNewId == 1 &&
      imageUrls1.map((image) => (
        <Carousel.Slide
          key={image}
          autoPlay={true}
          autoplaytimeout={3000}
          autoplaycontrols={"false"}
        >
          <Image style={{ height: `${100}%` }} src={image} />
        </Carousel.Slide>
      ));

    return (
      <Carousel
        value={currentSlide}
        onChange={setCurrentSlide}
        classNames={classes}
        className={`${menu ? "move" : ""}`}
        withIndicators
        loop
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        nextControlIcon={
          <IconArrowRight
            style={{
              width: `rem(${16})`,
              height: `rem(${16})`,
              backgroundColor: "white",
              borderRadius: 12,
            }}
          />
        }
        previousControlIcon={
          <IconArrowLeft
            style={{
              width: `rem(${16})`,
              height: `rem(${16})`,
              backgroundColor: "white",
              borderRadius: 12,
            }}
          />
        }
      >
        {slides}
      </Carousel>
    );
  }

  if (currentNew.id) {
    const formattedDescription = currentNew.description.replace(
      // eslint-disable-next-line no-useless-escape
      /[\.\!\*\$\|]/g,
      (match) => {
        if (match === ".") {
          return ".<br />";
        } else if (match === "!") {
          return "!<br />";
        } else if (match === "*") {
          return ".";
        } else if (match === "$") {
          return "<br />";
        } else if (match === "|") {
          return "!";
        }
      }
    );

    return (
      <div className={`singleNewContainer ${menu ? "move" : ""}`}>
        <div
          className="singleNewImg"
          style={{ backgroundImage: `url(${currentNew.image})` }}
        />

        <div className="singleNewInfos">
          <span className="singleNewText">{currentNew.data} </span>

          <h2 className="singleNewName">{currentNew.title}</h2>

          <span
            className="singleNewDesc"
            dangerouslySetInnerHTML={{ __html: formattedDescription }}
          ></span>

          {currentNewId == 1 && <CarouselComponent />}

          <a href="#" className="singleNewBtn">
            CONTACTE-NOS
          </a>
        </div>
      </div>
    );
  }
};
