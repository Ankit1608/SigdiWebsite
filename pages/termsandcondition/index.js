import React from "react";
import Navbar from "../../components/Navbar";
import Smallfooter from "../../components/SmallFooter";
import styles from "../privacypolicy/index.module.css";
function Boiler() {
  return (
    <>
      <Navbar />
      <div className={styles.boilerMain}>
        <div className={styles.boilerTitleBackground}>
          <h1 className={styles.boilerHeader}> Terms and Conditions</h1>
        </div>
      </div>
      <Smallfooter />
    </>
  );
}

export default Boiler;
