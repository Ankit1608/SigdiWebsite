import React, { useEffect, useState } from "react";

import Footer from "../../components/Admin/Footer";
import Header from "../../components/Admin/Header";
import Sidebar from "../../components/Admin/Sidebar";
import TableReusable from "../../components/Admin/TableReusable";
import { useLocation } from "react-router-dom";
// import { Auth } from "aws-amplify";

function AdminLanding({ history }) {
  //   const location = useLocation();
  const [coder, setCoder] = useState(true);
  const tablelabels = ["ID", "Name", "Phone", "Email", "Description", "More"];
  //   useEffect(() => {
  //     async function checker() {
  //       try {
  //         await Auth.currentAuthenticatedUser();
  //         setCoder(true);
  //       } catch (e) {
  //         console.log(e);
  //         history.push("/");
  //       }
  //     }
  //     checker();
  //   }, []);
  console.log("hh");
  return (
    <>
      {coder && (
        <div style={{ display: "flex" }}>
          {console.log("hel")}
          <Sidebar />
          <div style={{ width: "100%" }}>
            <Header
            // history={history}
            // logout={location.logout}
            />
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
