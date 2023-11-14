import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import Link from "next/link";
import Image from "next/image";
import { isAuth } from "../../actions/auth";

const DefaultHeader = () => {
  const [navbar, setNavbar] = useState(false);
  const [firstName, setFirstName] = useState();
  const [profilePhoto, setProfilePhoto] = useState();

  const getFirstName = () => {
    if (isAuth()) {
      let fullName = isAuth().name;
      let displayName = fullName.split(" ")[0];
      
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
    if (isAuth()) {
      let fullName = isAuth().name;
      let displayName = fullName.split(" ")[0];
      console.log("IsAuth", isAuth());
      setFirstName(displayName);
      setProfilePhoto(isAuth().photoUrl)
    }
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <header
      // className={`theme-main-menu sticky-menu  ${
      //   navbar ? "fixed" : ""
      // }`}
      className="theme-main-menu sticky-menu sticky-top"
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link href="/" className="d-block">
              <Image
                src="/images/logo/logo7.png"
                alt="logo"
                width="250"
                height="60"
              />
            </Link>
          </div>
          <MainMenu />
          {firstName && (
            <div className="right-widget ms-auto d-flex align-items-center ">
              <Link href={`/profile/${firstName}`} className="user-profile">
                <span className="nav-link">{firstName}</span>
                <span>
                  <img src={profilePhoto} />
                </span>
              </Link>
              {/* <Link
                href={`/profile/${firstName}`}
                className="login-btn-three rounded-circle d-flex"
              >
                <p>{firstName}</p> <i className="bi bi-person" />
              </Link> */}
            </div>
          )}

          {/* /.right-widget */}
        </div>
      </div>
      {/* /.inner-content */}
    </header>
  );
};

export default DefaultHeader;
