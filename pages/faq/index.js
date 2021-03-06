import React from "react";
import Navbar from "../../components/Navbar";
import Smallfooter from "../../components/SmallFooter";
import styles from "./index.module.css";

const questionaries = [
  {
    question: "What is Sigdi?",
    answer:
      "At Sigdi, we provide a platform to deliver your favourite and delicious food dishes at your doorstep made by our home chefs. We promise to maintain hygiene standards and no compromise for your Mann-Pasand taste!",
  },
  {
    question: "How can I register as a home chef at Sigdi?",
    answer:
      "Because the application is in the beta testing phase, you can click the “Join Us” button on our website and fill in your details in the form given there. We will get in touch with you for further process.",
  },
  {
    question: "Is FSSAI registration mandatory for home chefs?",
    answer:
      "Yes, you need a food license from FSSAI to sell homemade food but if it is a small scale, only registration is required. We will help you with the process of FSSAI registration if you are not already registered.",
  },
  {
    question: "As a home chef, do I need to pay any registration fee?",
    answer:
      "No, you don’t need to pay any registration fee to get yourself registered as a home chef at Sigdi.",
  },
  {
    question: "How do I download the App?",
    answer:
      "Currently, we are in the beta testing phase. Our app will be launched soon on Google Play Store and App Store.",
  },
];

function Boiler() {
  return (
    <>
      <Navbar />
      <div className={styles.voilerMain}>
        <div className={styles.boilerTitleBackground}>
          <h1 className={styles.boilerHeader}>FAQ's</h1>
        </div>
        <div style={{ padding: "30px 20px" }}>
          {questionaries.map((ques) => (
            <>
              <h4 className={styles.faqQuestion}>{ques.question}</h4>
              <p className={styles.faqAnswer}>{ques.answer}</p>
            </>
          ))}
        </div>
      </div>
      <Smallfooter />
    </>
  );
}

export default Boiler;
