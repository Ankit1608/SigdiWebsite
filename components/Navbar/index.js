import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
//import logo from "../images/sigdimainlogo.png";
// import { Link } from "react-router-dom";
import Link from "next/link";
import styles from "./index.module.css";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className={styles.navbar}>
          <div className={`${styles.navbarContainer} ${styles.container}`}>
            <Link
              href="/"
              //   offset={0}
              //   spy={true}
              //   smooth={true}
              //   duration={500}
              className={styles.navbarLogo}
              onClick={closeMobileMenu}
            >
              <img
                style={{ height: "30px", cursor: "pointer" }}
                src={"/sigdimainlogo.png"}
              />
            </Link>
            <div className={styles.menuIcon} onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul
              className={
                click ? `${styles.navMenu} active` : `${styles.navMenu}`
              }
            >
              <li className={styles.navItems}>
                <Link
                  //   activeClass="active"
                  href="/contact"

                  //   offset={0}
                  //   spy={true}
                  //   smooth={true}
                  //   duration={500}
                >
                  <span onClick={closeMobileMenu} className={styles.navLinks}>
                    Join Us
                  </span>
                </Link>
              </li>

              <li className={styles.navItems}>
                <Link
                  //   activeClass="active"
                  href="/faq"
                  //   spy={true}
                  //   smooth={true}
                  // duration={500}
                >
                  <span onClick={closeMobileMenu} className={styles.navLinks}>
                    FAQ
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
