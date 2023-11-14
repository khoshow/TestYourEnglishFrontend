import { useState } from "react";
import Header from "../components/header/DefaultHeader";
// import Header from "./Header"
import MyHeader from "../components/header/MyHeader";
import React from "react";
import ReactDOM from "react-dom";
import TwoSides2 from "./TwoSides2";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      {/* {/* <Header /> */}
      <MyHeader />
      <TwoSides2>
        {/* <div className="fancy-feature-twentyOne position-relative mt-50 pt-80 pb-150 lg-mt-130 lg-pt-60 lg-pb-60"></div> */}

        <div className="container">{children}</div>
      </TwoSides2>
    </React.Fragment>
  );
};

export default Layout;
