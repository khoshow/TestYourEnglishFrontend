import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { isAuth } from "../actions/auth";

// import { useEffect, useState } from "react";
import Link from "next/link";
// import { isAuth, getCookie } from "../../actions/auth";
// import * as React from "react";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ArrowRight from "@mui/icons-material/ArrowRight";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Home from "@mui/icons-material/Home";
import Settings from "@mui/icons-material/Settings";
import People from "@mui/icons-material/People";
import PermMedia from "@mui/icons-material/PermMedia";
import Dns from "@mui/icons-material/Dns";
import Public from "@mui/icons-material/Public";
import { Hidden, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const SideNav = ({ children }) => {
  const router = useRouter();
  const [openCorrectWord, setOpenCorrectWord] = React.useState(true);
  const [openCorrectMeaning, setOpenCorrectMeaning] = React.useState(true);
  const [openSynonym, setOpenSynonym] = React.useState(true);
  const [open, setOpen] = React.useState(true);
  //   const [open5, setOpen] = React.useState(true);
  //   const [open6, setOpen] = React.useState(true);
  const [currentUrl, setCurrentUrl] = useState();
  const [authStatus, setAuthStatus] = useState(false);
  const [scoreData, setScoreData] = useState();
  const [userId, setUserId] = useState();
  const [loading, setLoading] = useState(true);
  const [rankingData, setRankingData] = useState();
  const [rankLoading, setRankLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const handleDrawerToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const authenticated = isAuth();
    if (authenticated) {
      setAuthStatus(true);
      // loadUserInfo(authenticated._id);
    }

    setCurrentUrl(router.asPath);

    // fetchRankingData(router.asPath);
  }, [loading, router.query, router.asPath, currentUrl, rankLoading]);

  const data1 = [
    {
      icon: <i className="bi bi-bookmark-heart-fill sideNavIcon"></i>,
      label: "Intermediate",
      url: "/category/correct-word/intermediate",
    },
    {
      icon: <i className="bi bi-bookmark-star-fill sideNavIcon"></i>,
      label: "Advanced",
      url: "/category/correct-word/advanced",
    },
  ];
  const data2 = [
    {
      icon: <i className="bi bi-bookmark-heart-fill sideNavIcon"></i>,
      label: "Intermediate",
      url: "/category/correct-meaning/intermediate",
    },
    {
      icon: <i className="bi bi-bookmark-star-fill sideNavIcon"></i>,
      label: "Advanced",
      url: "/category/correct-meaning/advanced",
    },
  ];

  const data3 = [
    {
      icon: <i className="bi bi-bookmark-heart-fill sideNavIcon"></i>,
      label: "Intermediate",
      url: "/category/synonyms/intermediate",
    },
    {
      icon: <i className="bi bi-bookmark-star-fill sideNavIcon"></i>,
      label: "Advanced",
      url: "/category/synonyms/advanced",
    },
  ];

  const FireNav = styled(List)({
    "& .MuiListItemButton-root": {
      paddingLeft: 24,
      paddingRight: 24,
    },
    "& .MuiListItemIcon-root": {
      minWidth: 0,
      marginRight: 16,
    },
    "& .MuiSvgIcon-root": {
      fontSize: 20,
    },
  });

  return (
    <div className="sticky-top parentop">
      <IconButton
        onClick={handleDrawerToggle}
        style={{
          // display: "block",
          position: "fixed",
          top: "21px",
          color: "white",
          width: "60px",
          //   border: "1px solid white",
          padding: "5px",
          zIndex: 900,
          borderRadius: 0,

          alignItems: "center" /* Center vertically */,
          justifyContent: "center",
        }}
        className="leftSideNavMenu"
      >
        <MenuIcon style={{}} />
      </IconButton>

      {/* <div
        style={{
          display: "block !important",
          position: "absolute",
          top: "0",
          zIndex: 55555,
          width: "24px",
          height: "50px",
          backgroundColor: "yellow",
          zIndex: "40000",
          border: "2px solid red",
          padding: "20px",
        }}
      >
        <p style={{ color: "white" }}>Hello</p>
      </div> */}

      {/* mOBILE vIEW */}

      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor="left"
          open={isSidebarOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <Box
            sx={{
              display: "flex",
              height: "100vh",
            }}
          >
            <ThemeProvider
              theme={createTheme({
                components: {
                  MuiListItemButton: {
                    defaultProps: {
                      disableTouchRipple: true,
                    },
                  },
                },
                palette: {
                  mode: "dark",
                  primary: { main: "rgb(102, 157, 246)" },
                  background: { paper: "rgb(5, 30, 52)" },
                },
              })}
            >
              <Paper elevation={0} sx={{ width: 256 }}>
                <FireNav component="nav" disablePadding>
                  <ListItemButton component="a" href="#customized-list">
                    {/* <ListItemIcon sx={{ fontSize: 20 }}></ListItemIcon> */}
                  </ListItemButton>
                  <Divider />
                  <ListItem component="div" disablePadding>
                    <ListItemButton sx={{ height: 56 }}></ListItemButton>
                  </ListItem>
                  <Divider />
                  <Box
                    sx={{
                      bgcolor: openCorrectWord
                        ? "rgba(71, 98, 130, 0.2)"
                        : null,
                      pb: openCorrectWord ? 2 : 0,
                    }}
                  >
                    <ListItemButton
                      alignItems=""
                      onClick={() => setOpenCorrectWord(!openCorrectWord)}
                      sx={{
                        px: 3,
                        pt: 2.5,
                        pb: openCorrectWord ? 0 : 2.5,
                        "&:hover, &:focus": {
                          "& svg": { opacity: openCorrectWord ? 1 : 0 },
                        },
                      }}
                    >
                      <ListItemText
                        primary="Correct Word"
                        primaryTypographyProps={{
                          fontSize: 15,
                          fontWeight: "medium",
                          lineHeight: "20px",
                          mb: "2px",
                        }}
                        // secondary="Inter, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning"
                        secondaryTypographyProps={{
                          noWrap: true,
                          fontSize: 12,
                          lineHeight: "16px",
                          color: open
                            ? "rgba(0,0,0,0)"
                            : "rgba(255,255,255,0.5)",
                        }}
                        sx={{ my: 0 }}
                      />
                      <KeyboardArrowDown
                        sx={{
                          mr: -1,
                          opacity: 0,
                          transform: open ? "rotate(-180deg)" : "rotate(0)",
                          transition: "0.2s",
                        }}
                      />
                    </ListItemButton>
                    {openCorrectWord &&
                      data1.map((item) => (
                        <Link href={item.url} key={item.label}>
                          <ListItemButton
                            key={item.label}
                            sx={{
                              py: 0,
                              minHeight: 32,
                              color: "rgba(255,255,255,.8)",
                            }}
                          >
                            <ListItemIcon sx={{ color: "inherit" }}>
                              {item.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={item.label}
                              primaryTypographyProps={{
                                fontSize: 14,
                                fontWeight: "medium",
                              }}
                            />
                          </ListItemButton>
                        </Link>
                      ))}
                  </Box>
                  <Divider />
                  <Box
                    sx={{
                      bgcolor: openCorrectMeaning
                        ? "rgba(71, 98, 130, 0.2)"
                        : null,
                      pb: openCorrectMeaning ? 2 : 0,
                    }}
                  >
                    <ListItemButton
                      alignItems=""
                      onClick={() => setOpenCorrectMeaning(!openCorrectMeaning)}
                      sx={{
                        px: 3,
                        pt: 2.5,
                        pb: openCorrectMeaning ? 0 : 2.5,
                        "&:hover, &:focus": {
                          "& svg": { opacity: openCorrectMeaning ? 1 : 0 },
                        },
                      }}
                    >
                      <ListItemText
                        primary="Correct Meaning"
                        primaryTypographyProps={{
                          fontSize: 15,
                          fontWeight: "medium",
                          lineHeight: "20px",
                          mb: "2px",
                        }}
                        // secondary="Inter, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning"
                        secondaryTypographyProps={{
                          noWrap: true,
                          fontSize: 12,
                          lineHeight: "16px",
                          color: open
                            ? "rgba(0,0,0,0)"
                            : "rgba(255,255,255,0.5)",
                        }}
                        sx={{ my: 0 }}
                      />
                      <KeyboardArrowDown
                        sx={{
                          mr: -1,
                          opacity: 0,
                          transform: openCorrectMeaning
                            ? "rotate(-180deg)"
                            : "rotate(0)",
                          transition: "0.2s",
                        }}
                      />
                    </ListItemButton>
                    {openCorrectMeaning &&
                      data2.map((item) => (
                        <Link href={item.url} key={item.label}>
                          <ListItemButton
                            key={item.label}
                            sx={{
                              py: 0,
                              minHeight: 32,
                              color: "rgba(255,255,255,.8)",
                            }}
                          >
                            <ListItemIcon sx={{ color: "inherit" }}>
                              {item.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={item.label}
                              primaryTypographyProps={{
                                fontSize: 14,
                                fontWeight: "medium",
                              }}
                            />
                          </ListItemButton>
                        </Link>
                      ))}
                  </Box>
                  <Divider />
                  <Box
                    sx={{
                      bgcolor: openSynonym ? "rgba(71, 98, 130, 0.2)" : null,
                      pb: openSynonym ? 2 : 0,
                    }}
                  >
                    <ListItemButton
                      alignItems=""
                      onClick={() => setOpenSynonym(!openSynonym)}
                      sx={{
                        px: 3,
                        pt: 2.5,
                        pb: openSynonym ? 0 : 2.5,
                        "&:hover, &:focus": {
                          "& svg": { opacity: openSynonym ? 1 : 0 },
                        },
                      }}
                    >
                      <ListItemText
                        primary="Synonym"
                        primaryTypographyProps={{
                          fontSize: 15,
                          fontWeight: "medium",
                          lineHeight: "20px",
                          mb: "2px",
                        }}
                        // secondary="Inter, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning"
                        secondaryTypographyProps={{
                          noWrap: true,
                          fontSize: 12,
                          lineHeight: "16px",
                          color: open
                            ? "rgba(0,0,0,0)"
                            : "rgba(255,255,255,0.5)",
                        }}
                        sx={{ my: 0 }}
                      />
                      <KeyboardArrowDown
                        sx={{
                          mr: -1,
                          opacity: 0,
                          transform: openSynonym
                            ? "rotate(-180deg)"
                            : "rotate(0)",
                          transition: "0.2s",
                        }}
                      />
                    </ListItemButton>
                    {openSynonym &&
                      data3.map((item) => (
                        <Link href={item.url} key={item.label}>
                          <ListItemButton
                            key={item.label}
                            sx={{
                              py: 0,
                              minHeight: 32,
                              color: "rgba(255,255,255,.8)",
                            }}
                          >
                            <ListItemIcon sx={{ color: "inherit" }}>
                              {item.icon}
                            </ListItemIcon>
                            <ListItemText
                              primary={item.label}
                              primaryTypographyProps={{
                                fontSize: 14,
                                fontWeight: "medium",
                              }}
                            />
                          </ListItemButton>
                        </Link>
                      ))}
                  </Box>
                </FireNav>
              </Paper>
            </ThemeProvider>
          </Box>
        </Drawer>
      </Hidden>
      {/* Mobile View */}
      {/* Desktop View Start */}

      <Hidden mdDown className="position-fixed" style={{ height: "100vh" }}>
        {/* <Drawer variant="permanent" anchor="left" open /> */}
        {/* Sidebar content */}
        <Box
          className="sticky-top "
          sx={{
            height: "100vh",

            width: "230px",
            zIndex: 2,
            display: "flex",
          }}
        >
          <ThemeProvider
            theme={createTheme({
              components: {
                MuiListItemButton: {
                  defaultProps: {
                    disableTouchRipple: true,
                  },
                },
              },
              palette: {
                mode: "dark",
                primary: { main: "rgb(102, 157, 246)" },
                background: { paper: "rgb(5, 30, 52)" },
              },
            })}
          >
            <Paper className="" elevation={0} sx={{ left: 0, height: "100vh" }}>
              <FireNav component="nav" disablePadding className="" style={{}}>
                {/* <ListItemButton component="a" href="#customized-list">
                  <ListItemIcon sx={{ fontSize: 20, paddingTop: "10px" }}>
                    <Link href="/">
                      <img src="/images/logo/logo5.png" alt="" width={220} />
                    </Link>
                  </ListItemIcon>
                </ListItemButton> */}

                <br></br>

                <Divider />
                <Box
                  className=""
                  sx={{
                    bgcolor: openCorrectWord ? "rgba(71, 98, 130, 0.2)" : null,
                    pb: openCorrectWord ? 2 : 0,
                    marginTop: "65px",
                    display: "block",
                  }}
                >
                  <ListItemButton
                    alignItems=""
                    onClick={() => setOpenCorrectWord(!openCorrectWord)}
                    sx={{
                      px: 3,
                      pt: 2.5,
                      pb: openCorrectWord ? 0 : 2.5,
                      "&:hover, &:focus": {
                        "& svg": { opacity: openCorrectWord ? 1 : 0 },
                      },
                    }}
                  >
                    <ListItemText
                      primary="Correct Word"
                      primaryTypographyProps={{
                        fontSize: 15,
                        fontWeight: "medium",
                        lineHeight: "20px",
                        mb: "2px",
                      }}
                      //   secondary="Authentication, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning"
                      secondaryTypographyProps={{
                        noWrap: true,
                        fontSize: 12,
                        lineHeight: "16px",
                        color: openCorrectWord
                          ? "rgba(0,0,0,0)"
                          : "rgba(255,255,255,0.5)",
                      }}
                      sx={{ my: 0 }}
                    />
                    <KeyboardArrowDown
                      sx={{
                        mr: -1,
                        opacity: 0,
                        transform: open ? "rotate(-180deg)" : "rotate(0)",
                        transition: "0.2s",
                      }}
                    />
                  </ListItemButton>
                  {openCorrectWord &&
                    data1.map((item) => (
                      <Link href={item.url} key={item.label}>
                        <ListItemButton
                          key={item.label}
                          sx={{
                            py: 0,
                            minHeight: 32,
                            color: "rgba(255,255,255,.8)",
                          }}
                        >
                          <ListItemIcon sx={{ color: "inherit" }}>
                            {item.icon}
                          </ListItemIcon>
                          <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{
                              fontSize: 14,
                              fontWeight: "medium",
                            }}
                          />
                        </ListItemButton>
                      </Link>
                    ))}
                </Box>
                <Divider />
                <Box
                  className=""
                  sx={{
                    bgcolor: openCorrectMeaning
                      ? "rgba(71, 98, 130, 0.2)"
                      : null,
                    pb: openCorrectMeaning ? 2 : 0,
                  }}
                >
                  <ListItemButton
                    alignItems=""
                    onClick={() => setOpenCorrectMeaning(!openCorrectMeaning)}
                    sx={{
                      px: 3,
                      pt: 2.5,
                      pb: openCorrectMeaning ? 0 : 2.5,
                      "&:hover, &:focus": {
                        "& svg": { opacity: open ? 1 : 0 },
                      },
                    }}
                  >
                    <ListItemText
                      primary="Correct Meaning"
                      primaryTypographyProps={{
                        fontSize: 15,
                        fontWeight: "medium",
                        // lineHeight: "20px",
                        // mb: "2px",
                      }}
                      //   secondary="Authentication, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning"
                      //   secondaryTypographyProps={{
                      //     noWrap: true,
                      //     fontSize: 12,
                      //     lineHeight: "16px",
                      //     color: open ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.5)",
                      //   }}
                      //   sx={{ my: 0 }}
                    />
                    <KeyboardArrowDown
                      sx={{
                        mr: -1,
                        opacity: 0,
                        transform: open ? "rotate(-180deg)" : "rotate(0)",
                        transition: "0.2s",
                      }}
                    />
                  </ListItemButton>
                  {openCorrectMeaning &&
                    data2.map((item) => (
                      <Link href={item.url} key={item.label}>
                        <ListItemButton
                          key={item.label}
                          sx={{
                            py: 0,
                            minHeight: 32,
                            color: "rgba(255,255,255,.8)",
                          }}
                        >
                          <ListItemIcon sx={{ color: "inherit" }}>
                            {item.icon}
                          </ListItemIcon>
                          <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{
                              fontSize: 14,
                              fontWeight: "medium",
                            }}
                          />
                        </ListItemButton>
                      </Link>
                    ))}
                </Box>
                <Box
                  className=""
                  sx={{
                    bgcolor: openSynonym ? "rgba(71, 98, 130, 0.2)" : null,
                    pb: openSynonym ? 2 : 0,
                  }}
                >
                  <ListItemButton
                    alignItems=""
                    onClick={() => setOpenSynonym(!openSynonym)}
                    sx={{
                      px: 3,
                      pt: 2.5,
                      pb: openSynonym ? 0 : 2.5,
                      "&:hover, &:focus": {
                        "& svg": { opacity: openSynonym ? 1 : 0 },
                      },
                    }}
                  >
                    <ListItemText
                      primary="Synonym"
                      primaryTypographyProps={{
                        fontSize: 15,
                        fontWeight: "medium",
                        lineHeight: "20px",
                        mb: "2px",
                      }}
                      //     secondary="Authentication, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning"
                      //   secondaryTypographyProps={{
                      //     noWrap: true,
                      //     fontSize: 12,
                      //     lineHeight: "16px",
                      //     color: openSynonym ? "rgba(0,0,0,0)" : "rgba(255,255,255,0.5)",
                      //   }}
                      //   sx={{ my: 0 }}
                    />
                    <KeyboardArrowDown
                      sx={{
                        mr: -1,
                        opacity: 0,
                        transform: openSynonym
                          ? "rotate(-180deg)"
                          : "rotate(0)",
                        transition: "0.2s",
                      }}
                    />
                  </ListItemButton>
                  {openSynonym &&
                    data3.map((item) => (
                      <Link href={item.url} key={item.label}>
                        <ListItemButton
                          key={item.label}
                          sx={{
                            py: 0,
                            minHeight: 32,
                            color: "rgba(255,255,255,.8)",
                          }}
                        >
                          <ListItemIcon sx={{ color: "inherit" }}>
                            {item.icon}
                          </ListItemIcon>
                          <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{
                              fontSize: 14,
                              fontWeight: "medium",
                            }}
                          />
                        </ListItemButton>
                      </Link>
                    ))}
                </Box>
              </FireNav>
              <Box
                style={{ position: "absolute", bottom: "0" }}
                sx={{
                  bgcolor: openSynonym ? "rgba(71, 98, 130, 0.2)" : null,
                  pb: openSynonym ? 2 : 0,
                  bottom: "0",
                }}
              >
                <div className=" ">
                  <Link href="/" className="p-2">
                    Home
                  </Link>
                  <Link href="/about" className="p-2">
                    About
                  </Link>
                  <Link href="/contact" className="p-2">
                    Contact
                  </Link>
                  <Link href="/" className="p-2">
                    © {new Date().getFullYear()} Test My English Online
                  </Link>
                </div>
              </Box>
            </Paper>
          </ThemeProvider>
        </Box>
        {/* </Drawer> */}
      </Hidden>
    </div>
  );
};

export default SideNav;
