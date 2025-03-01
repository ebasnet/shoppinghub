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
import styles from "./Footer.module.css"; // Import the module CSS

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLeft}>
        <h1 className={styles.footerLogo}>Shopping Hub</h1>
        <p className={styles.footerDesc}>
          Shopping Hub is your go-to online store for the latest fashion. We
          offer a wide range of clothing, accessories, and footwear to help you
          look stylish every day.
        </p>
        <div className={styles.socialContainer}>
          <div
            className={styles.socialIcon}
            style={{ backgroundColor: "#3b5999" }}
          >
            <FaFacebook className={styles.icon} />
          </div>
          <div
            className={styles.socialIcon}
            style={{ backgroundColor: "#e44059" }}
          >
            <FaInstagram className={styles.icon} />
          </div>
          <div
            className={styles.socialIcon}
            style={{ backgroundColor: "#55acee" }}
          >
            <CiTwitter className={styles.icon} />
          </div>
          <div
            className={styles.socialIcon}
            style={{ backgroundColor: "#e60023" }}
          >
            <FaPinterest className={styles.icon} />
          </div>
        </div>
      </div>

      <div className={styles.footerCenter}>
        <h3>Useful Links</h3>
        <ul className={styles.footerList}>
          {footerLinks.map((link) => (
            <li key={link.id} className={styles.footerListItem}>
              {link.title}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.footerRight}>
        <h3 className={styles.footerTitle}>Contact</h3>
        <div className={styles.contactItem}>
          <IoLocationSharp style={{ marginRight: "10px" }} />
          Shankhamul-09,Baneswor
        </div>
        <div className={styles.contactItem}>
          <FaPhoneAlt style={{ marginRight: "10px" }} /> +977 9106787653
        </div>

        <div className={styles.contactItem}>
          <IoMdMail style={{ marginRight: "10px" }} /> shoppingHub@123.com
        </div>
        <img className={styles.payment} alt="Payment methods" src={payment} />
      </div>
    </div>
  );
}

export default Footer;
