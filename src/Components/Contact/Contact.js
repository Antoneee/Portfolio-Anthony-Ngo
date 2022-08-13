import styles from "./Contact.module.css";
import ContactForm from "./ContactForm";
import ContactImg1 from "../../Assets/ContactImg1";
import ContactImg2 from "../../Assets/ContactImg2";
import CheckIcon from "../UI/CheckIcon";
import "../../App.css";
import { useState } from "react";
import ExitIcon from "../UI/ExitIcon";

const Contact = (props) => {
  const [successModal, setSucessModal] = useState(false);

  const successModalHandler = (isSuccess) => {
    setSucessModal(isSuccess);
  };

  const closeModalHandler = () => {
    setSucessModal(false);
  };

  return (
    <section
      className={`${styles["contact-container"]} container`}
      id="contact"
    >
      {successModal && (
        <div
          className={styles["success-modal-backdrop"]}
          onClick={closeModalHandler}
        >
          <div className={styles["success-modal-content"]}>
            <ExitIcon onClick={closeModalHandler} />
            <CheckIcon />
            <h3 className={styles["success-modal-header"]}>
              Thank you for reaching out to me!
            </h3>
            <p className={styles["success-modal-text"]}>
              I will try my best to respond to you as soon as possible.
            </p>
          </div>
        </div>
      )}

      <h1 className={`header ${props.darkMode ? "dark-mode" : ""}`}>
        Contact Me
      </h1>
      <p className={styles["contact-subheading"]}>Get in touch.</p>
      <div className={styles["contact-content"]}>
        <div className={styles["pattern"]}></div>

        <ContactImg2 />
        <ContactForm darkMode={props.darkMode} success={successModalHandler} />
        <ContactImg1 />
      </div>
    </section>
  );
};

export default Contact;
