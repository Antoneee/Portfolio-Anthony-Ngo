import styles from "./ContactForm.module.css";
import emailjs from "emailjs-com";
import { useReducer, useRef, useState } from "react";
import Button from "../UI/Button";

const contactReducer = (state, action) => {
  if (action.type === "name") {
    return {
      name: { value: action.payload, valid: validInputHandler(action.payload) },
      email: { value: state.email.value, valid: state.email.valid },
      subject: { value: state.subject.value, valid: state.subject.valid },
      message: { value: state.message.value, valid: state.message.valid },
    };
  }
  if (action.type === "email") {
    return {
      name: { value: state.name.value, valid: state.name.valid },
      email: {
        value: action.payload,
        valid:
          action.payload.trim().length !== 0 && action.payload.includes("@"),
      },
      subject: { value: state.subject.value, valid: state.subject.valid },
      message: { value: state.message.value, valid: state.message.valid },
    };
  }
  if (action.type === "subject") {
    return {
      name: { value: state.name.value, valid: state.name.valid },
      email: { value: state.email.value, valid: state.email.valid },
      subject: {
        value: action.payload,
        valid: validInputHandler(action.payload),
      },
      message: { value: state.message.value, valid: state.message.valid },
    };
  }
  if (action.type === "message") {
    return {
      name: { value: state.name.value, valid: state.name.valid },
      email: { value: state.email.value, valid: state.email.valid },
      subject: { value: state.subject.value, valid: state.subject.valid },
      message: {
        value: action.payload,
        valid: validInputHandler(action.payload),
      },
    };
  }
  if (action.type === "reset") {
    return {
      name: { value: "", valid: false },
      email: { value: "", valid: false },
      subject: { value: "", valid: false },
      message: {
        value: "",
        valid: false,
      },
    };
  }
  return state;
};

const validInputHandler = (inputValue) => {
  if (inputValue.trim() === "") {
    return false;
  } else {
    return true;
  }
};

const ContactForm = (props) => {
  const form = useRef();

  const [nameIsTouched, setNameIsTouched] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [subjectIsTouched, setSubjectIsTouched] = useState(false);
  const [messageIsTouched, setMessageIsTouched] = useState(false);

  const [inputStates, dispatchInputState] = useReducer(contactReducer, {
    name: { value: "", valid: false },
    email: { value: "", valid: false },
    subject: { value: "", valid: false },
    message: { value: "", valid: false },
  });

  const nameChangeHandler = (e) => {
    dispatchInputState({ type: "name", payload: e.target.value });
  };

  const emailChangeHandler = (e) => {
    dispatchInputState({ type: "email", payload: e.target.value });
  };

  const subjectChangeHandler = (e) => {
    dispatchInputState({ type: "subject", payload: e.target.value });
  };

  const messageChangeHandler = (e) => {
    dispatchInputState({ type: "message", payload: e.target.value });
  };

  const sendEmailHandler = (e) => {
    e.preventDefault();
    if (
      inputStates.name.valid &&
      inputStates.email.valid &&
      inputStates.subject.valid &&
      inputStates.message.valid
    ) {
      emailjs.sendForm(
        "service_makc0om",
        "template_dto66ko",
        form.current,
        "gpAuLhtNpky159jDN"
      );

      dispatchInputState({ type: "reset" });
      setNameIsTouched(false);
      setEmailIsTouched(false);
      setSubjectIsTouched(false);
      setMessageIsTouched(false);
      props.success(true);
    } else {
      setNameIsTouched(true);
      setEmailIsTouched(true);
      setSubjectIsTouched(true);
      setMessageIsTouched(true);
      return;
    }
  };

  const nameIsTouchedHandler = () => {
    setNameIsTouched(true);
  };

  const emailIsTouchedHandler = () => {
    setEmailIsTouched(true);
  };

  const subjectIsTouchedHandler = () => {
    setSubjectIsTouched(true);
  };

  const messageIsTouchedHandler = () => {
    setMessageIsTouched(true);
  };

  return (
    <>
      <div className={styles["contact-form-container"]}>
        <form
          ref={form}
          onSubmit={sendEmailHandler}
          className={`${styles["contact-form"]} ${
            props.darkMode ? styles["dark-mode"] : ""
          }`}
        >
          <div className={styles["contact-form__name-email"]}>
            <div className={styles["contact-form__name"]}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={inputStates.name.value}
                onChange={nameChangeHandler}
                onBlur={nameIsTouchedHandler}
              />
              {!inputStates.name.valid && nameIsTouched ? (
                <p
                  className={`${styles["contact-form__error"]} ${styles["active"]}`}
                >
                  Name field cannot be empty.
                </p>
              ) : (
                <p className={styles["contact-form__error"]}>
                  Name field cannot be empty.
                </p>
              )}
            </div>
            <div className={styles["contact-form__email"]}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={inputStates.email.value}
                onChange={emailChangeHandler}
                onBlur={emailIsTouchedHandler}
              />
              {!inputStates.email.valid && emailIsTouched ? (
                <p
                  className={`${styles["contact-form__error"]} ${styles["active"]}`}
                >
                  Email field cannot be empty and must contain an '@' symbol.
                </p>
              ) : (
                <p className={styles["contact-form__error"]}>
                  Email field cannot be empty and must contain an '@' symbol.
                </p>
              )}
            </div>
          </div>
          <div className={styles["contact-form__subject"]}>
            <label htmlFor="message">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={inputStates.subject.value}
              onChange={subjectChangeHandler}
              onBlur={subjectIsTouchedHandler}
            />
            {!inputStates.subject.valid && subjectIsTouched ? (
              <p
                className={`${styles["contact-form__error"]} ${styles["active"]}`}
              >
                Subject field cannot be empty.
              </p>
            ) : (
              <p className={styles["contact-form__error"]}>
                Subject field cannot be empty.
              </p>
            )}
          </div>
          <div className={styles["contact-form__message"]}>
            <label htmlFor="subject">Message</label>
            <textarea
              name="message"
              id="message"
              value={inputStates.message.value}
              onChange={messageChangeHandler}
              onBlur={messageIsTouchedHandler}
            />
            {!inputStates.message.valid && messageIsTouched ? (
              <p
                className={`${styles["contact-form__error"]} ${styles["active"]}`}
              >
                Message field cannot be empty.
              </p>
            ) : (
              <p className={styles["contact-form__error"]}>
                Message field cannot be empty.
              </p>
            )}
          </div>
          <div className={styles["contact-form__button"]}>
            <Button type="submit">Send</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
