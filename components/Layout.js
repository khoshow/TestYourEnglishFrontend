import Header from "../components/header/DefaultHeader";
import React from "react";
import ReactDOM from "react-dom";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
    <Header />
      {/* <div className="fancy-feature-twentyOne position-relative mt-50 pt-80 pb-150 lg-mt-130 lg-pt-60 lg-pb-60"></div> */}
   
      <div className="container">{children}</div>
    </React.Fragment>
  );
};

export default Layout;
