import React from "react";
import styles from  "./index.module.css";

function HomeOne() {
  return (
    <>
      <div className={styles.homeMainContainer} id="home">
        <div className={styles.homeLeftContainer} >
          <div className={styles.homeLeftWrapper}>
            <img src={"/sigdimainlogo.png"} className={styles.homeLogoContainer}/>
            <div className={styles.homeTextContainer}>
              <h1 className={styles.homeTitleText}>Ghar se Ghar tak</h1>

              <p className={styles.homeContentText}>
                At Sigdi, we provide a platform to deliver your favorite and
                delicious food dishes at your doorstep made by our home chefs.
                We promise to maintain hygiene standards and no compromise for
                your Mann-Pasand taste!
              </p>
            </div>
          </div>
        </div>
        <div className={styles.homeTopviewFoodContainer}></div>
      </div>
    </>
  );
}

export default HomeOne;
