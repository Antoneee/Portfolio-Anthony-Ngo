import { useState } from "react";
import styles from "./ProjectItem.module.css";
import Button from "../UI/Button";

const ProjectItem = (props) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className={styles["project-item-container"]}>
      <div
        style={{
          background: `url(${props.image}) center`,
          backgroundSize: "contain",
        }}
        className={styles["project-item-background"]}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <div
          className={`${styles["project-item-menu"]} ${
            isShown ? styles["active"] : ""
          }`}
        >
          <a href={props.preview} target="_blank" rel="noreferrer">
            <Button>Preview</Button>
          </a>
          <a href={props.code} target="_blank" rel="noreferrer">
            <Button outline={true}>Code</Button>
          </a>
        </div>
      </div>
      <div className={styles["project-item-content"]}>
        <h2 className={styles["project-item-header"]}>{props.name}</h2>
        <p className={styles["project-item-description"]}>
          {props.description}
        </p>
        <h3 className={styles["project-item-skills-header"]}>Skills</h3>
        <ul className={styles["project-item-skills"]}>
          {props.skills.map((skill, index) => (
            <li className={styles["project-item-skill"]} key={index}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectItem;
