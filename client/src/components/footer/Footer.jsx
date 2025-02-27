import { CiTwitter } from "react-icons/ci";
import payment from "../../assets/payment.png";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { footerLinks } from "../../data/Data";
import { IoMdMail } from "react-icons/io";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <h1 className="footer-logo">Shopping Hub</h1>
        <p className="footer-desc">
          Shopping Hub is your go-to online store for the latest fashion. We
          offer a wide range of clothing, accessories, and footwear to help you
          look stylish every day.
        </p>
        <div className="social-container">
          <div className="social-icon" style={{ backgroundColor: "#3b5999" }}>
            <FaFacebook className="icon" />
          </div>
          <div className="social-icon" style={{ backgroundColor: "#e44059" }}>
            <FaInstagram className="icon" />
          </div>
          <div className="social-icon" style={{ backgroundColor: "#55acee" }}>
            <CiTwitter className="icon" />
          </div>
          <div className="social-icon" style={{ backgroundColor: "#e60023" }}>
            <FaPinterest className="icon" />
          </div>
        </div>
      </div>

      <div className="footer-center">
        <h3>Useful Links</h3>
        <ul className="footer-list">
          {footerLinks.map((link) => (
            <li key={link.id} className="footer-list-item">
              {link.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-right">
        <h3 className="footer-title">Contact</h3>
        <div className="contact-item">
          <IoLocationSharp style={{ marginRight: "10px" }} />
          Shankhamul-09,Baneswor
        </div>
        <div className="contact-item">
          <FaPhoneAlt style={{ marginRight: "10px" }} /> +977 9106787653
        </div>

        <div className="contact-item">
          <IoMdMail style={{ marginRight: "10px" }} /> shoppingHub@123.com
        </div>
        <img className="payment" alt="" src={payment} />
      </div>
    </div>
  );
}

export default Footer;
