import "./Slider.css";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { sliderItems } from "../../data/Data";

const Slider = () => {
  return (
    <div className="slider-container">
      <div className="arrow left">
        <IoMdArrowDropleft className="icon" />
      </div>

      <div className="slider-wrapper">
        {sliderItems.map((item) => {
          return (
            <div
              key={item.id}
              className="slide"
              style={{ backgroundColor: `#${item.bg}` }}
            >
              <div className="img-container">
                <img src={item.img} alt={item.title} className="img" />
              </div>
              <div className="info-container">
                <h1 className="title">{item.title}</h1>
                <p className="desc">{item.desc}</p>
                <button className="button">Shop Now</button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="arrow right">
        <IoMdArrowDropright className="icon" />
      </div>
    </div>
  );
};

export default Slider;
