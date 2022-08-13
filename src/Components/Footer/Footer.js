import styles from "./Footer.module.css";
import { Link } from "react-scroll";
import GithubIcon from "../UI/GithubIcon";
import LinkedInIcon from "../UI/LinkedInIcon";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-top"]}>
        <div className={styles["footer-left"]}>
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            className={`${styles["footer-logo"]}`}
          >
            Anthony
          </Link>
          <p className={styles["footer-slogan"]}>Frontend Developer</p>
        </div>

        <div className={styles["footer-right"]}>
          <ul className={styles["footer-items"]}>
            <li className={styles["footer-item"]}>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                className={styles["footer-links"]}
              >
                Skills
              </Link>
            </li>
            <li className={styles["footer-item"]}>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                className={styles["footer-links"]}
              >
                Portfolio
              </Link>
            </li>
            <li className={styles["footer-item"]}>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className={styles["footer-links"]}
              >
                Contact
              </Link>
            </li>
            <li className={styles["footer-link"]}>
              <a
                href="https://www.linkedin.com/in/anthony-ngo-b93956223/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon className="linkedin-img-footer" />
              </a>
              <a
                href="https://github.com/Antoneee"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon className="github-img-footer" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles["footer-bottom"]}>
        <p>Copyright © 2022 by me. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
