import "./Slider.css";

import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { sliderItems } from "../../data/Data";
import Image from "../Image";
import { useState } from "react";
import { Link } from "react-router";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? setSlideIndex + 1 : 0);
    }
  };
  return (
    <div className="slider-container">
      <div
        className="arrow left"
        direction="left"
        onClick={() => handleClick("left")}
      >
        <IoMdArrowDropleft className="icon" />
      </div>

      <div
        className="slider-wrapper"
        style={{ transform: `translatex(${slideIndex * -100}vw)` }}
      >
        {sliderItems.map((item) => {
          return (
            <div
              key={item.id}
              className="slide"
              style={{ backgroundColor: `#${item.bg}` }}
            >
              <div className="img-container">
                <Image imgSrc={item.img} className="img" alt={item.title} />
              </div>
              <div className="info-container">
                <h1 className="title">{item.title}</h1>
                <p className="desc">{item.desc}</p>
                <Link to="/products">
                  <button className="button">Shop Now</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="arrow right"
        direction="right"
        onClick={() => handleClick("right")}
      >
        <IoMdArrowDropright className="icon" />
      </div>
    </div>
  );
};

export default Slider;
