import styles from "./NavbarLinks.module.css";
import { Link } from "react-scroll";

const NavbarLinks = (props) => {
  return (
    <li className={styles["nav-item"]}>
      <Link
        to={props.link}
        spy={true}
        smooth={true}
        duration={500}
        className={`${props.link === "contact" ? "" : styles["nav-links"]} ${
          props.mobileMenu && styles["nav-links"]
        }`}
        activeClass={`${props.link === "contact" ? "" : styles["active"]} ${
          props.mobileMenu && styles["active"]
        }`}
        onClick={props.onClick}
      >
        {props.children}
      </Link>
    </li>
  );
};

export default NavbarLinks;
