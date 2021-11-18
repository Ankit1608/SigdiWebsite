import React from "react";
import CardTwo from "../../components/CardTwo";
import styles from "./index.module.css";

function HomeThree() {
  return (
    <>
      <div className={styles.home3MainContainer}>
        <div>
          <CardTwo flag={true} />

          <CardTwo flag={false} />
        </div>
      </div>
    </>
  );
}

export default HomeThree;
