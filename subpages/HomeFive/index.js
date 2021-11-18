import React from "react";
import { FaAndroid, FaAppStoreIos } from "react-icons/fa";
import SafeCard from "../../components/SafeCard";
import styles from "./index.module.css";
import { getdata, getdata2 } from "../../components/BulletPoints";

export default function HomeFive() {
  const blogs = getdata();
  const blogs2 = getdata2();
  return (
    <div className={styles.home5MainContainer}>
      <div className={styles.home5BlogContainer}>
        <div>
          <div className={styles.home5BlogMainHeaderText}>
            <h3 className={styles.home5BlogText}> Our 100% Safe Standards</h3>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className={styles.home5TableContainer}>
              <div className={styles.home5LeftTableContainer}>
                <h3 className={styles.home5SubHeaderText}>
                  RIDERS DELIVERY GUIDELINES.
                </h3>
                {blogs.map((b) => (
                  <SafeCard
                    header={b.title}
                    description={b.content}
                    image={b.image}
                  />
                ))}
              </div>
              <div className={styles.home5RightTableContainer}>
                <h3 className={styles.home5SubHeaderText}>
                  HOME CHEFS COOKING GUIDELINES.
                </h3>
                {blogs2.map((b) => (
                  <SafeCard
                    header={b.title}
                    description={b.content}
                    image={b.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.home5MobileContainer}>
        <div style={{ display: "flex" }}>
          <div className={styles.home5ButtonContainer}>
            <FaAndroid size={25} color={"#fff"} />
            <p style={{ marginLeft: "10px" }}>Play Store</p>
          </div>
          <div className={styles.home5ButtonContainer}>
            <FaAppStoreIos size={23} color={"#fff"} />
            <p style={{ marginLeft: "10px" }}>App Store</p>
          </div>
        </div>

        <div>
          <img src={'/Interface.png'} className={styles.home5ImageContainer} />
        </div>
      </div>
    </div>
  );
}
