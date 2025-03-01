import { IoMdSend } from "react-icons/io";
import styles from "./NewsLetter.module.css"; // Assuming you're using module CSS

function NewsLetter() {
  return (
    <div className={styles.newsletterContainer}>
      <h1 className={styles.newsletterTitle}>NewsLetter</h1>
      <div className={styles.newsletterDesc}>
        Updates for your new fashion ideas!!!!!
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.newsletterInput}
          placeholder="Your Email"
        />
        <button className={styles.newsletterButton}>
          <IoMdSend className={styles.icon} />
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
