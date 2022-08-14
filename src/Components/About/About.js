import styles from "./About.module.css";
import AboutImg from "../../Assets/AboutImg";
import Button from "../UI/Button";
import Download from "../UI/Download";
import CV from "../../Assets/Files/Anthony_Ngo_CV.pdf";
import GithubIcon from "../UI/GithubIcon";
import LinkedInIcon from "../UI/LinkedInIcon";
import "../../App.css";

const About = (props) => {
  return (
    <section className={`${styles["about-container"]} container`} id="about">
      <h1 className={`header ${props.darkMode ? "dark-mode" : ""}`}>
        About Me
      </h1>
      <div className={styles["about-content"]}>
        <div className={styles["about-img"]}>
          <AboutImg />
          <div className={styles["pattern"]}></div>
        </div>
        <div className={styles["about-text-container"]}>
          <p className={styles["about-description-1"]}>
            I am curently an undergraduate Software Engineering student at the
            University of Texas at Dallas and have a deep interest in learning
            everything software development has to offer (e.g. web, mobile,
            cloud and machine learning).
          </p>
          <p className={styles["about-description-2"]}>
            I love to apply any new knowledge I gain through projects and strive
            to deliver quality work.
          </p>
          <div className={styles["about-links"]}>
            <a href={CV} target="_blank" download rel="noreferrer">
              <Button>
                Download CV <Download />
              </Button>
            </a>
            <div className={styles["about-git-linkedin"]}>
              <a
                className="about-link"
                href="https://www.linkedin.com/in/anthony-ngo-b93956223/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon className="linkedin-img-about" />
              </a>
              <a
                className="about-link"
                href="https://github.com/Antoneee"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon className="github-img-about" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
