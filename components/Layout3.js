import { useState } from "react";
import Header from "../components/header/DefaultHeader";
// import Header from "./Header"
import MyHeader from "./header/MyHeader";
import React from "react";
import ReactDOM from "react-dom";
import { ClassNames } from "@emotion/react";
import SideNav from "./SideNav";
import RightSideNav from "./RightSideNav";
import MyFooter from "../components/footer/MyFooter";
import { Hidden, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <>
        <div className="d-flex mobileLayout3" style={{}}>
          <div className="makeItFixed " style={{ zIndex: "10" }}>
            <SideNav />
          </div>
          <div className="" style={{ zIndex: "9" }}>
            <MyHeader />
            <div className="">
              <div style={{ zIndex: "9", padding: "100px 0 50px 0" }}>
                {children}
              </div>
              <div style={{ zIndex: "9", backgroundColor: "#f1f1f1" }}>
                <RightSideNav />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex desktopLayout3" style={{}}>
          <div className="makeItFixed " style={{ width: "256", zIndex: "10" }}>
            <SideNav />
          </div>
          <div className="" style={{ flex: "1", paddingBottom: "50px" }}>
            <MyHeader />
            <div className=" d-flex">
              <div className="mainContent">
                <div style={{ flex: "1", zIndex: "9" }}> {children}</div>
                <div
                  style={{
                    flex: "0",
                    width: "300px",
                    zIndex: "9",
                    backgroundColor: "#f1f1f1",
                    paddingLeft: "10px",
                  }}
                >
                  <RightSideNav />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </React.Fragment>
  );
};

export default Layout;
