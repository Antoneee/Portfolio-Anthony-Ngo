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
    name: "Blogly",
    image: Project1Image,
    description:
      "Fullstack blog website using a React.js frontend, an Express.js RESTful API, and MySQL as the datastore. Authorized users can perform CRUD operations for blog posts, likes, and comments.",
    skills: ["React.js", "Node.js", "Express.js", "MySQL", "REST", "API"],
    preview: "https://blogly-anthony-ngo.netlify.app/",
    code: "https://github.com/Antoneee/Blogly",
  },
  {
    id: 2,
    name: "Cakeful",
    image: Project2Image,
    description:
      "A shopping cart app using ASP.NET Core MVC with MS SQL and Entity Framework Core 6. Provided services for users to signup/login with Identity API, browse items, add items to a shopping cart, submit orders, and more!",
    skills: ["ASP.NET Core", "MVC", "SQLServer", "EF Core", "C#", ".NET"],
    preview: "https://cakeful.azurewebsites.net/",
    code: "https://github.com/Antoneee/Cakeful",
  },
  {
    id: 3,
    name: "Omnifood",
    image: Project3Image,
    description:
      "Fully responsive landing page of an AI-powered food subscription. Applied the principles of both good UI and UX design (e.g. layout, typography, colors, usability, etc.).",
    skills: ["HTML", "CSS", "JS", "UI/UX"],
    preview: "https://omnifood-anthony-ngo.netlify.app/",
    code: "https://github.com/Antoneee/Omnifood",
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
        I have built many projects to apply what I have learned in my software
        development journey. Here is a small selection of my recent works.
      </p>
      <p className={styles["projects-note"]}>
        Hover over the images for the links to the code and live previews for
        each project!
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
