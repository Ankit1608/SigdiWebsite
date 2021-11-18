import React, { useEffect, useState } from "react";

import Footer from "../../components/Admin/Footer";
import Header from "../../components/Admin/Header";
import Sidebar from "../../components/Admin/Sidebar";
import TableReusable from "../../components/Admin/TableReusable";
// import { useLocation } from "react-router-dom";
// import { API, Auth, graphqlOperation } from "aws-amplify";
// import { listContacts } from "../../graphql/queries";

function AdminContact({ history }) {
  //   const location = useLocation();
  const [coder, setCoder] = useState(true);
  const [contacts, setContact] = useState(null);
  const tablelabels = ["ID", "Name", "Phone", "Email", "Description", "More"];

  //   useEffect(() => {
  //     async function checker() {
  //       try {
  //         await Auth.currentAuthenticatedUser();
  //         const res = await API.graphql(graphqlOperation(listContacts));
  //         setContact(res.data.listContacts);
  //         setCoder(true);
  //       } catch (e) {
  //         console.log(e);
  //         history.push("/");
  //       }
  //     }
  //     checker();
  //   }, []);

  return (
    <>
      {coder && (
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ width: "100%" }}>
            <Header
            // history={history}
            // logout={location.logout}
            />
            <div style={{ minHeight: "100vh", backgroundColor: "#ebedef" }}>
              {contacts && (
                <TableReusable
                  tablelabels={tablelabels}
                  flag="allcontacts"
                  tablelist={contacts.items}
                />
              )}
            </div>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default AdminContact;

// async function fetchContacts() {
//     await API.graphql(graphqlOperation(listContacts))
//       .then((getUserResponse) => {
//         console.log(getUserResponse.data.listContacts);
//         setContact(getUserResponse.data.listContacts);
//         console.log(contacts);
//       })
//       .catch((e) => console.log(e));
//   }
//   fetchContacts();
