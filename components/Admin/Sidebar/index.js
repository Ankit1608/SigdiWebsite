import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
} from "react-pro-sidebar";
import {
  FaTv,
  FaHeart,
  FaBook,
  FaRoute,
  FaRegPaperPlane,
  FaUser,
} from "react-icons/fa";
import "react-pro-sidebar/dist/css/styles.css";
// import { Link } from "react-router-dom";
import Link from "next/link";
// import logo from "../../pages/images/sigdimainlogo.png";
import styles from "./index.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <ProSidebar collapsed={false} width="20vw">
        <SidebarHeader>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{ height: 40, opacity: 0.6 }}
              src={"/sigdimainlogo.png"}
            />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="circle" popperArrow={true}>
            <MenuItem icon={<FaTv />}>
              {" "}
              <Link href="/admindashboard">Dashboard</Link>
            </MenuItem>
            <MenuItem icon={<FaBook />}>
              {" "}
              <Link href="/admincontact">Contact</Link>
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <h5 style={{ display: "flex", justifyContent: "center" }}>
            Sigdi Home Food
          </h5>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
}

export default Sidebar;
