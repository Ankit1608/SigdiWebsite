import React from "react";
import styles from "./index.module.css";
import Link from "next/link";

export default function CardTwo({ flag }) {
  return (
    <div
      className={flag ? styles.card2MainContainer : styles.card2MainContainer2}
    >
      {flag && (
        <>
          <div>
            <img
              src={"/illustration1.png"}
              className={styles.card2ImageContainer}
            />
          </div>
          <div
            className={styles.card2TextContainer}
            style={{
              marginLeft: "90px",
            }}
          >
            <div>
              <h1 className={styles.card2TextHeader}>Are you a home cook?</h1>
              <p className={styles.card2DescriptionText}>
                Does everybody around you love your food? Sigdi can help to get
                your food recognised to all of hyderabad. Now register with us
                by clicking the "Join Us" button.{" "}
              </p>
              <Link
                href={{ pathname: "/contact", query: { keyword: "Home Chef" } }}
              >
                <div
                  style={{
                    marginTop: "10px",
                    backgroundColor: "#3c2022",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8px",
                    cursor: "pointer",
                    height: "30px",
                  }}
                >
                  <p className={styles.card2JoinusText}>Join Us</p>
                </div>
              </Link>
            </div>
          </div>
        </>
      )}
      {!flag && (
        <>
          <div
            className={styles.card2TextContainer}
            style={{ marginRight: "90px" }}
          >
            <div>
              <h1 className={styles.card2TextHeader}>Are you a foodie?</h1>
              <p className={styles.card2DescriptionText}>
                Ayyy. We heard you are bored of ordering food from restaurants.
                How about we get you maa ke haath ka khaana while you are away
                from home. Well, check out our app for more.{" "}
              </p>
              <Link
                href={{ pathname: "/contact", query: { keyword: "Foodie" } }}
              >
                <div
                  style={{
                    marginTop: "10px",
                    backgroundColor: "#3c2022",
                    color: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "8px",
                    cursor: "pointer",
                    height: "30px",
                  }}
                >
                  <p className={styles.card2JoinusText}>Join Us</p>
                </div>
              </Link>
            </div>
          </div>
          <div>
            <img
              src={"/illustration2.png"}
              className={styles.card2ImageContainer}
            />
          </div>
        </>
      )}
    </div>
  );
}
