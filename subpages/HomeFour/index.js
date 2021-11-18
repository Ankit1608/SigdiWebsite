import React from "react";
import Card from "../../components/Card";
import styles from "./index.module.css";

export default function HomeFour() {
  return (
    <>
      <div className={styles.home4MainContainer}>
        <div>
          <Card flag={true} />
        </div>
      </div>
      <div className={styles.home2DeliveryContainer}>
        <div
          className={styles.home2DeliveryImage}
          style={{ backgroundImage: `url(/Delivery.png)` }}
        />
      </div>
    </>
  );
}
