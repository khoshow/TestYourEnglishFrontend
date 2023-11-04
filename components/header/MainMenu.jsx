import Link from "next/link";
import { useState, useEffect } from "react";
import Router from "next/router";
import { NavItem } from "reactstrap";
// import {
//   menuItems,
//   pagesItems,
//   portfolioItems,
//   blogItems,
// } from "../../../data/menu";
// import {
//   isActiveLink,
//   isActiveParent,
//   isActiveParentChaild,
// } from "../../../utils/linkActiveChecker";
import { signout, isAuth } from "../../actions/auth";

import { useRouter } from "next/router";

const MainMenu = () => {
  const router = useRouter();
  const [userAuth, setUserAuth] = useState(false);

  const clicksignout = async () => {
    const response = await signout();
    response;

    // router.push("/signin");
  };

  useEffect(() => {
    if (isAuth()) {
      setUserAuth(true);
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <img src="/images/logo/logo_01.png" alt="" width={95} />
              </Link>
            </div>
          </li>
          {/* End li */}
          <li className="nav-item dropdown mega-dropdown-md active">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Home
            </a>
          </li>
          {/* End li (home mega menu) */}
          <li className="nav-item">
            <Link className="nav-link btn" href="/admin/crud" role="button">
              Admin
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/signin" role="button">
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/signup" role="button">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/my-profile/khos" role="button">
             My Pofile
            </Link>
          </li>
          {userAuth && (
            <NavItem>
              <a
                className="nav-link"
                style={{ cursor: "pointer" }}
                // onClick={() => signout(() => Router.replace(`/signin`))}
                onClick={() => clicksignout()}
              >
                <i
                  className="fas fa-lightbulb fa-lightbulb-hover"
                  title="Sign Out"
                >
                  Signout
                </i>
              </a>
            </NavItem>
          )}
          {/* {isAuth() && (
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={ clicksignout}
              >
                Sign Out
              </a>
            </li>
          )} */}
          {/* <li className="nav-item">
            <Link className="nav-link" href="/signout" role="button">
              Sign Out
            </Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" href="/contact" role="button">
              Contact
            </Link>
          </li>
        </ul>
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link href="/contact" className="btn-twentyOne fw-500 tran3s">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainMenu;
