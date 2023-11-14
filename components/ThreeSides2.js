import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { isAuth } from "../actions/auth";
import { getCookie } from "../actions/auth";
import { getUserScores } from "../actions/userInfo";
import ScoresRightNav from "./sideBars/ScoresRightNav";
import { getRanking } from "../actions/rank";
import RankingList from "./sideBars/RankingRightNav";

const ThreeSides = ({ children }) => {
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = useState();
  const [authStatus, setAuthStatus] = useState(false);
  const [scoreData, setScoreData] = useState();
  const [userId, setUserId] = useState();
  const [loading, setLoading] = useState(true);
  const [rankingData, setRankingData] = useState();
  const [rankLoading, setRankLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const authenticated = isAuth();
    if (authenticated) {
      setAuthStatus(true);
      loadUserInfo(authenticated._id);
    }

    setCurrentUrl(router.asPath);

    // const fetchRankingData = async () => {
    //   if (!router.asPath) {
    //     return; //If slug value is undefined/null returns before getting updated value. use the dependency array for the updated value
    //   }

    //   try {
    //     let toSendSlug;
    //     const slug = router.asPath;
    //     const requiredSlug = slug.split("/");
    //     const neededSlug = requiredSlug.slice(0, 4).join("/");
    //     switch (neededSlug) {
    //       case "/vocabulary/correct-word/intermediate":
    //         toSendSlug = "ranking-correct-word-intermediate";
    //         break;
    //       case "/vocabulary/correct-word/advanced":
    //         toSendSlug = "ranking-correct-word-advanced";
    //         break;
    //       default:
    //         toSendSlug = "ranking-correct-word-intermediate";
    //     }

    //     setCurrentUrl(slug);

    //     getRanking(toSendSlug)
    //       .then((res) => {
    //         console.log("resp", res);
    //         setRankingData(res);
    //         setRankLoading(false);
    //       })
    //       .catch((error) => {
    //         console.log("err");
    //       });

    //     // Set error message in case of an error
    //   } finally {
    //     setRankLoading(false); // Set loading to false regardless of success or failure
    //   }
    // };
    // // Call the fetchData function

    fetchRankingData(router.asPath);
  }, [loading, router.query, router.asPath, currentUrl, rankLoading]);

  const fetchRankingData = async (thisUrl) => {
    // if (!router.asPath) {
    //   return; //If slug value is undefined/null returns before getting updated value. use the dependency array for the updated value
    // }
    // let toSendSlug;
    // const slug = router.asPath;
    let toSendSlug;
    let requiredSlug = thisUrl.split("/");
    const neededSlug = requiredSlug.slice(0, 4).join("/");
    switch (neededSlug) {
      case "/vocabulary/correct-word/intermediate":
        toSendSlug = "ranking-correct-word-intermediate";
        break;
      case "/vocabulary/correct-word/advanced":
        toSendSlug = "ranking-correct-word-advanced";
        break;
      default:
        toSendSlug = "ranking-correct-word-intermediate";
    }
    const response = await getRanking(toSendSlug)
      .then((res) => {
        setRankingData(res);
        setRankLoading(false);
      })
      .catch((error) => {
        console.log("err");
        return;
      });
  };

  const loadUserInfo = async (authenticatedId) => {
    const token = getCookie("token");

    // setUserId(authenticatedId);
    const response = await getUserScores(authenticatedId, token)
      .then((res) => {
        setScoreData(res);
        setLoading(false);
        // setInterMediateScore(res[0].correctWordIntermediate.score);
        // console.log("Score", res[0].correctWordIntermediate.score);
        // setInterMediateRank(res[0].correctWordIntermediate.rank);
      })
      .catch((err) => {
        console.log("err", err);
        return;
      });
  };

  return (
    <div className=" position-relative  pb-150 lg-mt-130 lg-pt-60 lg-pb-60">
      <div className="row ">
        <div className="col-md-3 pt-40 " style={{height:"100vh"}}>
          <Box sx={{ display: "flex", height: '100vh', }}>
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
              <Paper elevation={0} sx={{ maxWidth: 256 }}>
                <FireNav component="nav" disablePadding>
                  <ListItemButton component="a" href="#customized-list">
                    <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon>
                    <ListItemText
                      sx={{ my: 0 }}
                      primary="Firebash"
                      primaryTypographyProps={{
                        fontSize: 20,
                        fontWeight: "medium",
                        letterSpacing: 0,
                      }}
                    />
                  </ListItemButton>
                  <Divider />
                  <ListItem component="div" disablePadding>
                    <ListItemButton sx={{ height: 56 }}>
                      <ListItemIcon>
                        <Home color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Project Overview"
                        primaryTypographyProps={{
                          color: "primary",
                          fontWeight: "medium",
                          variant: "body2",
                        }}
                      />
                    </ListItemButton>
                    <Tooltip title="Project Settings">
                      <IconButton
                        size="large"
                        sx={{
                          "& svg": {
                            color: "rgba(255,255,255,0.8)",
                            transition: "0.2s",
                            transform: "translateX(0) rotate(0)",
                          },
                          "&:hover, &:focus": {
                            bgcolor: "unset",
                            "& svg:first-of-type": {
                              transform: "translateX(-4px) rotate(-20deg)",
                            },
                            "& svg:last-of-type": {
                              right: 0,
                              opacity: 1,
                            },
                          },
                          "&:after": {
                            content: '""',
                            position: "absolute",
                            height: "80%",
                            display: "block",
                            left: 0,
                            width: "1px",
                            bgcolor: "divider",
                          },
                        }}
                      >
                        <Settings />
                        <ArrowRight
                          sx={{ position: "absolute", right: 4, opacity: 0 }}
                        />
                      </IconButton>
                    </Tooltip>
                  </ListItem>
                  <Divider />
                  <Box
                    sx={{
                      bgcolor: open ? "rgba(71, 98, 130, 0.2)" : null,
                      pb: open ? 2 : 0,
                    }}
                  >
                    <ListItemButton
                      alignItems="flex-start"
                      onClick={() => setOpen(!open)}
                      sx={{
                        px: 3,
                        pt: 2.5,
                        pb: open ? 0 : 2.5,
                        "&:hover, &:focus": {
                          "& svg": { opacity: open ? 1 : 0 },
                        },
                      }}
                    >
                      <ListItemText
                        primary="Build"
                        primaryTypographyProps={{
                          fontSize: 15,
                          fontWeight: "medium",
                          lineHeight: "20px",
                          mb: "2px",
                        }}
                        secondary="Authentication, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning"
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
                    {open &&
                      data.map((item) => (
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
                      ))}
                  </Box>
                </FireNav>
              </Paper>
            </ThemeProvider>
          </Box>
        </div>
        <div className="col-md-6 pt-40">
          <div className="container">{children}</div>
        </div>
        <div className="col-md-3 pt-40">
          {authStatus ? (
            <ScoresRightNav
              data={scoreData}
              user={userId}
              authStatus={authStatus}
              loading={loading}
            />
          ) : (
            <div>Log In</div>
          )}
          {!rankLoading ? (
            <RankingList rankTop10={rankingData} loading={rankLoading} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ThreeSides;
