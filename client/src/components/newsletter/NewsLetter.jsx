import { IoMdSend } from "react-icons/io";
import "./newsLetter.css";

function NewsLetter() {
  return (
    <div className="newsletter-container">
      <h1 className="newsletter-title">NewsLetter</h1>
      <div className="newsletter-desc">
        updates for your new fashion ideas!!!!!
      </div>
      <div className="input-container">
        <input
          type="text"
          className="newsletter-input"
          placeholder="Your Email"
        />
        <button className="newsletter-button">
          <IoMdSend className="icon" />
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
