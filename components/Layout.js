import { useState } from "react";
import Header from "../components/header/DefaultHeader";
// import Header from "./Header"
import MyHeader from "./header/MyHeader";
import Wrapper from "../layout/wrapper";
import MyFooter from "../components/footer/MyFooter";
import Footer2 from "../components/footer/Footer2";
import React from "react";
import ReactDOM from "react-dom";

import { ClassNames } from "@emotion/react";
import SideNav from "./SideNav";
import { Hidden, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Wrapper>
        <div className=" d-flex" style={{}}>
          <div className="makeItFixed " style={{ zIndex: "1000" }}>
            <SideNav />
          </div>
          <div
            className=""
            style={{ flex: "1", zIndex: "900", paddingBottom: "50px" }}
          >
            <MyHeader />
            {children}
          </div>
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Layout;
