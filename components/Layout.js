import Header from "./header/DefaulHeader";
import React from "react";
import ReactDOM from "react-dom";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div>
        <Header />
        <div className="container">{children}</div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
