import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import Link from "next/link";
import Image from "next/image";
import { isAuth } from "../../actions/auth";

const DefaultHeader = () => {
  const [navbar, setNavbar] = useState(false);
  const [firstName, setFirstName] = useState();

  const getFirstName = () => {
    if (isAuth()) {
      let fullName = isAuth().name;
      let displayName = fullName.split(" ")[0];
      console.log("DName", displayName);
      setFirstName(displayName);
    } else return;
  };
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    getFirstName();
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-eight border-bottom ${
        navbar ? "fixed" : ""
      }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link href="/" className="d-block">
              <Image
                src="/images/logo/logo_01.png"
                alt="logo"
                width={95}
                height={30}
              />
            </Link>
          </div>
          <div className="right-widget ms-auto d-flex align-items-center ">
            <Link
              href={`/profile/${firstName}`}
              className="login-btn-three rounded-circle d-flex"
            >
              <p>{firstName}</p> <i className="bi bi-person" />
            </Link>
            <Link
              href="/contact"
              className="btn-twentyOne fw-500 tran3s d-none d-lg-block"
            >
              Contact us
            </Link>
          </div>{" "}
          {/* /.right-widget */}
          <MainMenu />
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default DefaultHeader;
