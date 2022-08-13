import styles from "./Projects.module.css";
import Project1Image from "../../Assets/Images/project1.JPG";
import Project2Image from "../../Assets/Images/project2.JPG";
import Project3Image from "../../Assets/Images/project3.JPG";
import ProjectItem from "./ProjectItem";
import PreviousIcon from "../UI/PreviousIcon";
import NextIcon from "../UI/NextIcon";
import { useState } from "react";
import "../../App.css";

const PROJECT_DATA = [
  {
    id: 1,
    name: "Tip Calculator",
    image: Project1Image,
    description:
      "Scelerisque eu ultrices vitae auctor. Molestie nunc non blandit massa enim nec dui nunc mattis.",
    skills: ["HTML", "CSS", "ReactJS", "Redux", "Redux-Toolkit", "Firebase"],
    preview: "https://tip-calculator-app-58cb2.web.app/",
    code: "https://github.com/Antoneee/react-tip-calculator-app-with-redux",
  },
  {
    id: 2,
    name: "Time Tracking Dashboard",
    image: Project2Image,
    description:
      "Scelerisque eu ultrices vitae auctor. Molestie nunc non blandit massa enim nec dui nunc mattis.",
    skills: ["HTML", "CSS", "ReactJS", "Fetch", "Firebase"],
    preview: "https://time-tracker-dashboard-app.web.app/",
    code: "https://github.com/Antoneee/time-tracker-dashboard-react-app",
  },
  {
    id: 3,
    name: "Advice Generator",
    image: Project3Image,
    description:
      "Scelerisque eu ultrices vitae auctor. Molestie nunc non blandit massa enim nec dui nunc mattis.",
    skills: ["HTML", "CSS", "ReactJS", "Fetch", "Firebase"],
    preview: "https://react-advice-generator-app.web.app/",
    code: "https://github.com/Antoneee/react-advice-generator-app",
  },
];

const Projects = (props) => {
  const [currentProject, setCurrentProject] = useState(0);
  const length = PROJECT_DATA.length;

  const previousProjectHandler = () => {
    setCurrentProject(currentProject === 0 ? length - 1 : currentProject - 1);
  };

  const nextProjectHandler = () => {
    setCurrentProject(currentProject === length - 1 ? 0 : currentProject + 1);
  };

  return (
    <section
      className={`${styles["projects-container"]} container`}
      id="projects"
    >
      <h1 className={`header ${props.darkMode ? "dark-mode" : ""}`}>
        Portfolio
      </h1>
      <p className={styles["projects-description"]}>
        I have built many apps and websites to apply what I have learned in my
        Web Development journey. Here is a small selection of my recent works.
      </p>

      <ul className={styles["projects-list"]}>
        {PROJECT_DATA.map((project, index) => {
          return (
            <li
              className={
                currentProject === index
                  ? `${styles["project"]} ${styles["current"]}`
                  : styles["project"]
              }
              key={index}
            >
              {currentProject === index && (
                <ProjectItem
                  name={project.name}
                  image={project.image}
                  description={project.description}
                  skills={project.skills}
                  preview={project.preview}
                  code={project.code}
                />
              )}
            </li>
          );
        })}
        <div
          className={`${styles["projects-icons"]} ${styles["previous"]}`}
          onClick={previousProjectHandler}
        >
          <PreviousIcon />
        </div>
        <div
          className={`${styles["projects-icons"]} ${styles["next"]}`}
          onClick={nextProjectHandler}
        >
          <NextIcon />
        </div>
      </ul>
      <div className={styles["project-pages"]}>
        {PROJECT_DATA.map((project, index) => {
          return (
            <div
              key={index}
              className={`${styles["project-page"]} ${
                currentProject === index ? styles["page-active"] : ""
              }`}
              onClick={() => setCurrentProject(index)}
            ></div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
