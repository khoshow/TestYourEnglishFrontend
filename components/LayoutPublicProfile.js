import { useState } from "react";
import Header from "../components/header/DefaultHeader";
// import Header from "./Header"
import MyHeader from "./header/MyHeader";
import React from "react";
import ReactDOM from "react-dom";

import { ClassNames } from "@emotion/react";
import SideNav from "./SideNav";
import RightSideNavPublicProfile from "./RightSideNavPublicProfile";
import MyFooter from "../components/footer/MyFooter";
import { Hidden, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <>
        <div className="d-flex mobileLayout3" style={{}}>
          <div className="makeItFixed " style={{ zIndex: "1000" }}>
            <SideNav />
          </div>
          <div className="" style={{ flex: "3", zIndex: "900" }}>
            <MyHeader />
            <div className="layoutPublicProfile d-flex">
              <div className="contentPublicProfile" style={{ zIndex: "900" }}>
                {" "}
                {children}
              </div>
              <div
                className="rightPublicProfile"
                style={{ zIndex: "900", backgroundColor: "#f1f1f1" }}
              >
                <RightSideNavPublicProfile />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex desktopLayout3" style={{}}>
          <div className="makeItFixed " style={{ zIndex: "1001" }}>
            <SideNav />
          </div>
          <div
            className=""
            style={{ flex: "3", zIndex: "900", paddingBottom: "50px" }}
          >
            <MyHeader />
            <div className="layoutPublicProfile d-flex ">
              <div
                className=""
                style={{ flex: "3", zIndex: "900" }}
              >
                {" "}
                {children}
              </div>
              <div
                className=""
                style={{
                  flex: "1",
                  zIndex: "900",
                  backgroundColor: "#f1f1f1",
                  paddingLeft: "10px",
                }}
              >
                <RightSideNavPublicProfile />
              </div>
            </div>
          </div>
        </div>
      </>
    </React.Fragment>
  );
};

export default Layout;
