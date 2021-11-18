import React, { useState } from "react";

import styles from "./index.module.css";
import { FaUser, FaCog, FaBackward } from "react-icons/fa";
import { useLocation } from "react-router-dom";
// import { Auth } from "aws-amplify";
import Link from "next/link";
const MenuItems = [
  {
    id: "admin-profile",
    title: "Profile",
    path: "/mycourses",
    cName: styles.dropdownLink,
  },

  {
    id: "admin-settings",
    title: "Settings",
    path: "/profilesettings",
    cName: styles.dropdownLink,
  },
  {
    id: "admin-logout",
    title: "Logout",
    path: "/",
    cName: styles.dropdownLink,
  },
];

function Dropdown({ history, logout }) {
  //   const location = useLocation();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const logoutuser = (id) => {};
  return (
    <>
      <ul
        onClick={handleClick}
        className={
          click ? `${styles.dropdownMenu} clicked` : styles.dropdownMenu
        }
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index} className={styles.adminListLiContainer}>
              {item.id === "admin-profile" && (
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "8px",
                    }}
                  >
                    <FaUser size={12} />
                  </div>
                  <p className={styles.dropdownLiItems}>{item.title}</p>
                </>
              )}
              {item.id === "admin-settings" && (
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "8px",
                    }}
                  >
                    <FaCog size={12} />
                  </div>
                  <p className={styles.dropdownLiItems}>{item.title}</p>
                </>
              )}
              {item.id === "admin-logout" && (
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "8px",
                    }}
                  >
                    <Link href={"/"}>
                      <FaBackward size={12} />
                    </Link>
                  </div>

                  <div
                  // onClick={() => {
                  //   Auth.signOut().then(() => {
                  //     history.push("/bleeblue");
                  //   });
                  // }}
                  >
                    <Link href={"/"}>
                      <p className={styles.dropdownLiItems}>{item.title}</p>
                    </Link>
                  </div>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
