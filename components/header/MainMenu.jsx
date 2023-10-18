import Link from "next/link";
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

  const clicksignout = () => {
    const response = signout();
    console.log("response", response);
    router.push("/signin");
  };

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
          {isAuth() && (
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={ clicksignout}
              >
                Sign Out
              </a>
            </li>
          )}
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
          {/* End li (contact) */}
        </ul>
        {/* End ul */}

        {/* Mobile Content */}
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link href="/contact" className="btn-twentyOne fw-500 tran3s">
              Contact us
            </Link>
          </div>
        </div>
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MainMenu;