import React from "react";
import Card from "../../components/Card";
import styles from "./index.module.css";

export default function HomeTwo() {
  return (
    <>
      <div className={styles.home2MainContainer}>
        <div>
          <Card flag={false} />
        </div>
      </div>
    </>
  );
}
