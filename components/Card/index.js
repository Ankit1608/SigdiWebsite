import React from "react";
import MediaQuery from "react-responsive";
import styles from "./index.module.css";

export default function Card({ flag }) {
  return (
    <>
      <MediaQuery minDeviceWidth={700}>
        <div
          className={styles.cardMainContainer}
          style={{ flexDirection: flag ? "row-reverse" : "row" }}
        >
          <div className={styles.cardImageDivcontainer}>
            <img
              src={flag ? "/food.png" : "/charminar.png"}
              className={styles.cardImageContainer}
            />
          </div>
          <div
            style={{
              marginRight: flag === true ? "15px" : "90px",
              marginLeft: flag === true ? "90px" : "15px",
            }}
            className={styles.cardTextContainer}
          >
            <div
              style={{
                position: "absolute",
                bottom: "-40px",
                left: flag ? "-144px" : "",
                right: flag ? "" : "-144px",
              }}
            >
              <img
                src={flag ? "/curryleaves2.png" : "/curryleaves1.png"}
                style={{
                  height: "250px",
                }}
              />
            </div>
            <div>
              {flag === false && (
                <h1 className={styles.cardTitleText1}>Location</h1>
              )}

              {flag === true && (
                <h1 className={styles.cardTitleText1}>FSSAI</h1>
              )}

              {flag === false && (
                <h1 className={styles.cardTitleText2}>We Here in Hyderabad</h1>
              )}

              {flag === true && (
                <h1 className={styles.cardTitleText2}>
                  Hygiene and Safety Standards
                </h1>
              )}

              {flag === false && (
                <p className={styles.cardContentText}>
                  We wish to deliver food made with whole lot of love and that
                  can only be done in indian homes made by some superhumans. We
                  want this love to be spread all across Hyderabad.{" "}
                </p>
              )}
              {flag === true && (
                <p className={styles.cardContentText}>
                  Food Safety and Standards Authority of India is a statutory
                  body established under the Ministry of Health & Family
                  Welfare, Government of India. Every homechef who registers
                  with us needs to have an FSSAI registration. Don't worry if
                  you don't have one, Sigdi will help you do it.{" "}
                </p>
              )}
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={700}>
        <div className={styles.card700MainContainer}>
          <div>
            <img
              src={flag ? "/food.png" : "/charminar.png"}
              className={styles.card700ImageContainer}
            />
          </div>
          <div className={styles.card700TextContainer}>
            <div>
              {flag === false && (
                <h1 className={styles.cardTitleText1}>Location</h1>
              )}

              {flag === true && (
                <h1 className={styles.cardTitleText1}>FSSAI</h1>
              )}

              {flag === false && (
                <h1 className={styles.cardTitleText2}>We Here in Hyderabad</h1>
              )}

              {flag === true && (
                <h1 className={styles.cardTitleText2}>
                  Hygiene and Safety Standards
                </h1>
              )}

              {flag === false && (
                <p className={styles.cardContentText}>
                  We wish to deliver food made with whole lot of love and that
                  can only be done in indian homes made by some superhumans. We
                  want this love to be spread all across Hyderabad.{" "}
                </p>
              )}
              {flag === true && (
                <p
                  style={{ paddingLeft: "70px" }}
                  className={styles.cardContentText}
                >
                  Food Safety and Standards Authority of India is a statutory
                  body established under the Ministry of Health & Family
                  Welfare, Government of India. Every homechef who registers
                  with us needs to have an FSSAI registration. Don't worry if
                  you don't have one, Sigdi will help you do it.{" "}
                </p>
              )}
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                left: flag ? "-0px" : "",
                right: flag ? "" : "0px",
              }}
            >
              <img
                src={flag ? "/curryleaves2.png" : "/curryleaves1.png"}
                style={{
                  height: "150px",
                }}
              />
            </div>
          </div>
        </div>
      </MediaQuery>
    </>
  );
}
