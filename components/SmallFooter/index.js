import React from "react";
import { FaCopyright } from "react-icons/fa";
import Link from "next/link";
import styles from "./index.module.css";

function Smallfooter() {
  return (
    <div className={styles.smallFooterMainContainer}>
      <Link href="/privacypolicy">
        <div className={styles.bottomSmallFooterElements}>Privacy Policy</div>
      </Link>
      <Link href="/faq">
        <div className={styles.bottomSmallFooterElements}>FAQ</div>
      </Link>
      <Link href="/contact">
        <div className={styles.bottomSmallFooterElements}>Joinus</div>
      </Link>
      <Link href="/termsandcondition">
        <div className={styles.bottomSmallFooterElements}>Terms of Use</div>
      </Link>
      <div
        className={styles.bottomSmallFooterElements}
        style={{ display: "flex" }}
      >
        <div style={{ marginTop: "2px", marginRight: "5px" }}>
          <FaCopyright />
        </div>
        Sigdi Home Food Network
      </div>
    </div>
  );
}

export default Smallfooter;
