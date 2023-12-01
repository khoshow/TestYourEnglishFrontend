import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import AvatarEditor from "react-avatar-editor";
import { getPrivateProfile } from "../../actions/profile/privateProfile";
import { isAuth, getCookie, signout } from "../../actions/auth";
import { useRouter } from "next/router";

const pages = [
  { title: "Home", url: "/" },
  { title: "Guidelines", url: "/guidelines" },
  { title: "Contact", url: "/contact" },
];
const profile = [{ title: "Profile", url: "/profile" }];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [authStatus, setAuthStatus] = useState();
  const [username, setUsername] = useState();
  const [userEmail, setUserEmail] = useState();
  const [statusLoading, setStatusLoading] = useState("");
  const [messageLoading, setMessageLoading] = useState("");
  const [nameLoading, setNameLoading] = useState("");
  const [usernameLoading, setUsernameLoading] = useState("");
  const [sexLoading, setSexLoading] = useState("");
  const [countryLoading, setCountryLoading] = useState("");
  const [stateLoading, setStateLoading] = useState("");
  const [aboutLoading, setAboutLoading] = useState("");
  const [dobLoading, setDobLoading] = useState("");
  const [photoLoading, setPhotoLoading] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const [file, setFile] = useState(null);
  const [error, setError] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [firstName, setFirstName] = useState();
  const [profilePhoto, setProfilePhoto] = useState();
  const [adminStatus, setAdminStatus] = useState(false);
  const router = useRouter();
  const token = getCookie("token");
  useEffect(() => {
    const checkIsAuth = isAuth();

    if (checkIsAuth) {
      setAuthStatus(true);
      let fullName = isAuth().name;
      let displayName = fullName.split(" ")[0];
      const user = isAuth().username;
      if (isAuth().role == 1) {
        setAdminStatus(true);
      }
      setUsername(user);
      setUserEmail(isAuth().email);
      loadUserProfile(checkIsAuth._id);
      setFirstName(displayName);
      setProfilePhoto(isAuth().photoUrl);
    }
  }, [router, token]);
  const loadUserProfile = async (user) => {
    setLoading(true);
    try {
      const res = await getPrivateProfile(user);

      setData(res);
      setImageUrl(res.photoUrl);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const clicksignout = async () => {
    try {
      const res = await signout();

      router.push("/signin");
    } catch (error) {
      console.error("Error during signout:", error);
      // Handle errors if needed
    }
  };
  return (
    <AppBar
      className="sticky-top"
      style={{ padding: "10px", backgroundColor: "#6c757d" }}
    >
      <Toolbar
        disableGutters
        className="d-flex "
        style={{ justifyContent: "space-between" }}
      >
        <Link href="/" className="mobileLogo" style={{}}>
          <img
            src="/images/logo/logo8.png"
            alt="logo"
            style={{ width: "220px" }}
          />
        </Link>

        <Box sx={{ marginRight: "auto", display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Link href={page.url} key={page.url}>
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.title}
              </Button>
            </Link>
          ))}
          {adminStatus ? (
            <Link href={`/admin/${username}`}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Admin
              </Button>
            </Link>
          ) : (
            ""
          )}
        </Box>

        {authStatus ? (
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <span className="noMobileDisplay">{firstName} &nbsp;</span>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Profile Photo" src={profilePhoto} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Link href={`/my-profile/${username}`}>
                  <MenuItem>
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                </Link>
                <Link href={`/my-profile/${username}/scores`}>
                  <MenuItem>
                    <Typography textAlign="center">My Scores</Typography>
                  </MenuItem>
                </Link>
                <Link href={`/my-profile/${username}/edit`}>
                  <MenuItem>
                    <Typography textAlign="center">Profile Edit</Typography>
                  </MenuItem>
                </Link>
                <MenuItem>
                  <Button onClick={() => clicksignout()}>
                    {" "}
                    <Typography textAlign="center"> Signout</Typography>
                  </Button>
                </MenuItem>
                {/* <NavItem>
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
                </NavItem> */}
              </div>
            </Menu>
          </Box>
        ) : (
          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}
            <Link href="/signup" className="noMobileDisplay">
              <MenuItem>
                <Typography textAlign="center" className="btn">
                  Sign Up
                </Typography>
              </MenuItem>
            </Link>
            <Link href="/signin"  style={{}}>
              <MenuItem>
                <Typography textAlign="center" className="btn">Sign In</Typography>
              </MenuItem>
            </Link>
            <Menu
              sx={{ mt: "45px", display: "flex", flexDirection: "row" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Link href="/profile">
                  <MenuItem>
                    <Typography textAlign="center">No Profile</Typography>
                  </MenuItem>
                </Link>
                <Link href="/profile">
                  <MenuItem>
                    <Typography textAlign="center">Profile Edit</Typography>
                  </MenuItem>
                </Link>
              </div>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
