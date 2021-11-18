import React, { useState } from "react";
import { useRouter } from "next/router";

import Footer from "../../components/Admin/Footer";
import Header from "../../components/Admin/Header";
import Sidebar from "../../components/Admin/Sidebar";
import TableReusable from "../../components/Admin/TableReusable";
// import { useLocation } from "react-router-dom";
// import { Auth } from "aws-amplify";

function AdminLanding({ history }) {
  //   const location = useLocation();
  const router = useRouter();
  const [coder, setCoder] = useState(true);
  const tablelabels = ["ID", "Name", "Phone", "Email", "Description", "More"];
  useEffect(() => {
    async function checker() {
      try {
        await Auth.currentAuthenticatedUser();
        setCoder(true);
      } catch (e) {
        console.log(e);
        router.push("/");
      }
    }
    checker();
  }, []);
  return (
    <>
      {coder && (
        <div style={{ display: "flex" }}>
          {console.log("hel")}
          <Sidebar />
          <div style={{ width: "100%" }}>
            <Header />
            <div style={{ minHeight: "100vh", backgroundColor: "#ebedef" }}>
              erggd
            </div>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default AdminLanding;
