import Button from "../UI/Button";
import styles from "./Hero.module.css";
import HeroImg from "../../Assets/HeroImg";
import "../../App.css";
import { Link } from "react-scroll";

const Hero = (props) => {
  return (
    <section className={`${styles["hero-container"]} container`} id="hero">
      <div className={styles["hero-content"]}>
        <h1
          className={`${styles["hero-header"]} ${
            props.darkMode ? styles["dark-mode"] : ""
          }`}
        >
          Hi, I'm Anthony,
        </h1>
        <p className={styles["hero-who"]}>
          a{" "}
          <span
            className={`${styles["who-1"]} ${
              props.darkMode ? styles["dark-mode"] : ""
            }`}
          >
            Student
          </span>{" "}
          and{" "}
          <span
            className={`${styles["who-2"]} ${
              props.darkMode ? styles["dark-mode"] : ""
            }`}
          >
            Software Developer.
          </span>
        </p>
        <p className={styles["hero-what"]}>
          I specialize in web development and enjoy bringing my ideas to life in
          the browser.
        </p>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button>Contact me</Button>
        </Link>
      </div>
      <div className={styles["hero-img"]}>
        <HeroImg />
        <div className={styles["pattern"]}></div>
      </div>
    </section>
  );
};

export default Hero;
