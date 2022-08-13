import styles from "./Button.module.css";

const Button = (props) => {
  const classes = `${styles["btn"]} ${styles[`${props.className}`]}`;

  return (
    <button
      className={`${classes} ${
        props.outline ? styles["btn-outline"] : styles["btn-fill"]
      }`}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;
