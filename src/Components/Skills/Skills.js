import styles from "./Skills.module.css";
import html from "../../Assets/Images/html.png";
import css from "../../Assets/Images/css.png";
import js from "../../Assets/Images/js.png";
import react from "../../Assets/Images/react.png";
import cpp from "../../Assets/Images/c++.png";
import java from "../../Assets/Images/java.png";
import git from "../../Assets/Images/git.png";
import "../../App.css";

const Skills = (props) => {
  return (
    <section className={`${styles["skills-container"]} container`} id="skills">
      <h1 className={`header ${props.darkMode ? "dark-mode" : ""}`}>Skills</h1>
      <p className={styles["skills-description-1"]}>
        Here are some of the technologies that I am familiar with.
      </p>
      <ul className={styles["skills-list-container"]}>
        <li className={`${styles["skill"]} ${styles["html"]}`}>
          <img src={html} alt="HTML logo." className={styles["skill-img"]} />
        </li>
        <li className={`${styles["skill"]} ${styles["css"]}`}>
          <img src={css} alt="CSS logo." className={styles["skill-img"]} />
        </li>
        <li className={`${styles["skill"]} ${styles["js"]}`}>
          <img src={js} alt="JS logo." className={styles["skill-img"]} />
        </li>
        <li className={`${styles["skill"]} ${styles["react"]}`}>
          <img src={react} alt="React logo." className={styles["skill-img"]} />
        </li>
        <li className={`${styles["skill"]} ${styles["cpp"]}`}>
          <img src={cpp} alt="C++ logo." className={styles["skill-img"]} />
        </li>
        <li className={`${styles["skill"]} ${styles["java"]}`}>
          <img src={java} alt="Java logo." className={styles["skill-img"]} />
        </li>
        <li className={`${styles["skill"]} ${styles["git"]}`}>
          <img src={git} alt="Git logo." className={styles["skill-img"]} />
        </li>
      </ul>
      <p className={styles["skills-description-2"]}>
        This list will continue to grow since{" "}
        <span
          className={`${styles["underline"]} ${
            props.darkMode ? styles["dark-mode"] : ""
          }`}
        >
          learning never stops.
        </span>
      </p>
    </section>
  );
};

export default Skills;
