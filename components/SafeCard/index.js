import React from "react";
import styles from "./index.module.css";

export default function SafeCard({ header, description, image }) {
  return (
    <div className={styles.safecardMainContainer}>
      <div>
        <img src={image} className={styles.safecardImageContainer} />
      </div>
      <div>
        <h4 className={styles.safeCardHeaderText}>{header}</h4>
        <p className={styles.safeCardDescriptionText}>{description} </p>
      </div>
    </div>
  );
}
