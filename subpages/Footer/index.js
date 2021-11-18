import React from "react";
import Smallfooter from "../../components/SmallFooter";

import styles from "./index.module.css";

export default function FooterSigdi() {
  return (
    <>
      <div className={styles.footerSection}>
        <div className={styles.footerheading}>Catch Us Candid Here</div>
        <div className={styles.footerelements}>
          <div>
            <a
              className={styles.footerelementText1}
              target="_blank"
              href="https://in.linkedin.com/company/sigdihomefood"
            >
              LinkedIn
            </a>
          </div>

          <div>
            <a
              className={styles.footerelementText2}
              target="_blank"
              href="https://www.instagram.com/sigdi_homefood/"
            >
              Instagram{" "}
            </a>
          </div>

          <div>
            <a
              className={styles.footerelementText3}
              target="_blank"
              href="https://www.facebook.com/sigdihomefood/"
            >
              Facebook
            </a>
          </div>
          <a
            className={styles.footerelementText4}
            target="_blank"
            href="https://www.twitter.com/SigdiHomeFood/"
          >
            Twitter
          </a>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "60px",
          }}
        >
          <img
            src={"/hyderabad.png"}
            style={{ width: "50%", marginBottom: "-30px", marginTop: "50px" }}
          />
        </div>
        <Smallfooter />
      </div>
    </>
  );
}
