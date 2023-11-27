import { useEffect, useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import React from "react";
import ReactDOM from "react-dom";
import { APP_NAME } from "../config";
import { signout, isAuth } from "../actions/auth";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import ".././node_modules/nprogress/nprogress.css";

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [firstName, setFirstName] = useState("user");
  const [mounted, setMounted] = useState(false);

  const getFirstName = () => {
    if (isAuth()) {
      let fullName = isAuth().name;
      let displayName = fullName.split(" ")[0];
      setFirstName(displayName);
    } else return;
  };

  useEffect(() => {
    setMounted(true);
    // getFirstName()
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // const loadSignout = async () => {
  //   try {
  //     const res = await signout();
  //     console.log("Hee", res);
  //     router.push("/login");
  //   } catch (error) {
  //     console.error("Error during signout:", error);
  //     // Handle errors if needed
  //   }
  // };

  const loadSignout = async () => {
    try {
      console.log("Before signout call"); // Add this line for debugging
      const res = await signout();
      console.log("After signout call"); // Add this line for debugging
      if (res) {
        console.log("Hee", res);
        router.push("/login");
      } else {
        console.log("No response from signout");
      }
    } catch (error) {
      console.error("Error during signout:", error);
      // Handle errors if needed
    }
  };

  return (
    mounted && (
      <div className="my-navbar">
        <div className="nav-top container">
          <Navbar light expand="md">
            <div className="container-fluid">
              <Link href="/" className="font-weight-bold navbar-brand">
                {APP_NAME}
              </Link>
              <NavbarToggler onClick={() => toggle()} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  {isAuth() ? (
                    <NavItem>
                      <Link href="/user/crud/blog" className="btn btn-info">
                        Write
                      </Link>
                    </NavItem>
                  ) : (
                    <div className="text-center">
                      <div
                        className="BUTTON_WRAPPER_STYLES"
                        onClick={() => console.log("")}
                      >
                        <NavItem>
                          <a
                            className="btn btn-info"
                            style={{ color: "white", padding: "0.3rem 1rem" }}
                            onClick={() => setIsOpenLogin(true)}
                          >
                            Write
                          </a>
                        </NavItem>
                        {/* <Modal
                          open={isOpenLogin}
                          onClose={() => setIsOpenLogin(false)}
                        >
                          <div>
                            <h4>Please log in to start writing!</h4>
                            <Link href={`/signin`}>
                              <a className=" btn btn-primary">Sign In</a>
                            </Link>
                          </div>
                        </Modal> */}
                      </div>
                      <div className="OTHER_CONTENT_STYLES"></div>
                    </div>
                  )}
                  <NavItem>
                    <Link href="/discover" className="nav-link">
                      Discover
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link href="/blogs" className="nav-link">
                      Blogs
                    </Link>
                  </NavItem>
                  {!isAuth() ? (
                    <React.Fragment>
                      <NavItem className="nav-item">
                        <Link href="/signin">
                          <Link className="nav-link">Sign In</Link>
                        </Link>
                      </NavItem>
                      <NavItem className="nav-item">
                        <Link href="/signup">
                          <Link className="nav-link">Sign Up</Link>
                        </Link>
                      </NavItem>
                    </React.Fragment>
                  ) : (
                    ""
                  )}

                  {isAuth() && isAuth().role === 0 ? (
                    <NavItem>
                      <Link href="/user" className="nav-link">
                        {firstName}
                      </Link>
                    </NavItem>
                  ) : (
                    ""
                  )}

                  {isAuth() && isAuth().role === 1 ? (
                    <NavItem>
                      <Link href="/admin" className="nav-link">
                        {firstName}
                      </Link>
                    </NavItem>
                  ) : (
                    ""
                  )}

                  {isAuth() && (
                    <NavItem>
                      <a
                        className="nav-link thisone"
                        style={{ cursor: "pointer" }}
                        onClick={loadSignout}
                      >
                        <i
                          class="fas fa-lightbulb fa-lightbulb-hover"
                          title="Sign Out"
                        ></i>
                      </a>
                    </NavItem>
                  )}
                </Nav>
              </Collapse>
            </div>
          </Navbar>
        </div>
      </div>
    )
  );
};

export default Header;
