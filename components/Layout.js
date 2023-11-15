import { useState } from "react";
import Header from "../components/header/DefaultHeader";
// import Header from "./Header"
import MyHeader from "../components/header/MyHeader";
import React from "react";
import ReactDOM from "react-dom";
import TwoSides2 from "./TwoSides2";
import { ClassNames } from "@emotion/react";
import SideNav from "./SideNav";
import { Hidden, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      {/* {/* <Header /> */}
      <div className=" d-flex" style={{}}>
        <div className="makeItFixed " style={{ zIndex: "1000" }}>
          <SideNav />
        </div>
        <div className="" style={{ flex: "1", zIndex: "900" }}>
          <MyHeader />
          {children}
        </div>
      </div>

      {/* <div className="d-flex " style={{ height: "100vh" }}>
        <div style={{ width: "300px" }}>First</div>

        <div className="SecondDiv" style={{ flex: "1" }}>
          <div>Hello</div>
        </div>
      </div> */}

      {/* <TwoSides2>{children}</TwoSides2> */}
    </React.Fragment>
  );
};

export default Layout;
