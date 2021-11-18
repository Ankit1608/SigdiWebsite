import React from "react";
import Navbar from "../../components/Navbar";
import Smallfooter from "../../components/SmallFooter";
import styles from "./index.module.css";
function Boiler() {
  return (
    <>
      <Navbar />
      <div className={styles.boilerMain}>
        <div className={styles.boilerTitleBackground}>
          <h1 className={styles.boilerHeader}> Privacy Policy</h1>
        </div>
      </div>
      <Smallfooter />
    </>
  );
}

export default Boiler;
