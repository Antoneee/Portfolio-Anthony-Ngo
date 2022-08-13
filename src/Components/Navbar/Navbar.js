import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Button from "../UI/Button";
import { Link } from "react-scroll";
import DarkModeIcon from "../UI/DarkModeIcon";
import MenuIcon from "../UI/MenuIcon";
import ExitIcon from "../UI/ExitIcon";
import NavbarLinks from "./NavbarLinks";
import MobileMenuImg from "../../Assets/MobileMenuImg";
import SunIcon from "../UI/SunIcon";

const Navbar = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(true);
  const [mobileMenuClick, setMobileMenuClick] = useState(false);

  const darmModeHandler = () => {
    setDarkMode(!darkMode);
    props.darkMode(!darkMode);
  };

  const showMobileMenuIcon = () => {
    if (window.innerWidth <= 1024) {
      setMobileMenu(true);
    } else {
      closeMobileMenuClickHandler();
      setMobileMenu(false);
    }
  };

  const mobileMenuClickHandler = () => {
    setMobileMenuClick(!mobileMenuClick);
  };

  const closeMobileMenuClickHandler = () => {
    setMobileMenuClick(false);
  };

  window.addEventListener("resize", showMobileMenuIcon);

  const navbarLinksContent = (
    <>
      <NavbarLinks
        link="hero"
        onClick={mobileMenu ? closeMobileMenuClickHandler : ""}
      >
        Welcome
      </NavbarLinks>
      <NavbarLinks
        link="about"
        onClick={mobileMenu ? closeMobileMenuClickHandler : ""}
      >
        About
      </NavbarLinks>
      <NavbarLinks
        link="skills"
        onClick={mobileMenu ? closeMobileMenuClickHandler : ""}
      >
        Skills
      </NavbarLinks>
      <NavbarLinks
        link="projects"
        onClick={mobileMenu ? closeMobileMenuClickHandler : ""}
      >
        Portfolio
      </NavbarLinks>
      {mobileMenu ? (
        <NavbarLinks
          link="contact"
          onClick={mobileMenu ? closeMobileMenuClickHandler : ""}
          mobileMenu={true}
        >
          Contact
        </NavbarLinks>
      ) : (
        <NavbarLinks
          link="contact"
          onClick={mobileMenu ? closeMobileMenuClickHandler : ""}
        >
          <Button outline={true}>Contact</Button>
        </NavbarLinks>
      )}
    </>
  );

  return (
    <>
      {mobileMenu && (
        <ul
          className={`${
            mobileMenuClick ? styles["mobile-nav-items-active"] : ""
          } ${styles["mobile-nav-items"]} ${
            darkMode ? styles["mobile-dark-mode"] : ""
          }`}
        >
          {navbarLinksContent}
          <MobileMenuImg />
          <div className={styles["pattern"]}></div>
        </ul>
      )}
      <nav className={styles["navbar"]}>
        <div className={styles["navbar-left"]}>
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            className={styles["navbar-logo"]}
          >
            Anthony
          </Link>
          <button
            className={styles["dark-mode-button"]}
            onClick={darmModeHandler}
          >
            {darkMode ? <SunIcon /> : <DarkModeIcon />}
          </button>
        </div>
        <div className={styles["navbar-right"]}>
          {mobileMenu ? (
            <div className={styles["navbar-menu"]}>
              {mobileMenuClick ? (
                <ExitIcon onClick={mobileMenuClickHandler} mobileMenu={true} />
              ) : (
                <MenuIcon onClick={mobileMenuClickHandler} />
              )}
            </div>
          ) : (
            <ul className={`${styles["nav-items"]}`}>{navbarLinksContent}</ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
