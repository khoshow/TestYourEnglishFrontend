import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { isAuth } from "../actions/auth";
import { getCookie } from "../actions/auth";
import { getUserScores } from "../actions/userInfo";
import ScoresRightNav from "./sideBars/ScoresRightNav";
import { getRanking } from "../actions/rank";
import RankingList from "./sideBars/RankingRightNav";

const rightSideNav = ({}) => {
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

    fetchRankingData(router.asPath);
  }, [loading, router.query, router.asPath, currentUrl, rankLoading]);

  const fetchRankingData = async (thisUrl) => {
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
      case "/vocabulary/correct-meaning/intermediate":
        toSendSlug = "ranking-correct-meaning-intermediate";
        break;
      case "/vocabulary/correct-meaning/advanced":
        toSendSlug = "ranking-correct-meaning-advanced";
        break;
      case "/vocabulary/synonyms/intermediate":
        toSendSlug = "ranking-correct-synonyms-intermediate";
        break;
      case "/vocabulary/synonyms/advanced":
        toSendSlug = "ranking-correct-synonyms-advanced";
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
        console.log("UserScores", res);
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
    <>
      <div className="">
        {authStatus ? (
          <ScoresRightNav
            data={scoreData}
            user={userId}
            authStatus={authStatus}
            loading={loading}
          />
        ) : (
          <Card className="signUpLoginCard text-center ">
            <i className="bi bi-door-open cardIcon " style={{}}></i>

            <CardContent>
              <p>There is so much more you can do here.</p>
            </CardContent>

            <CardActions className="">
              <Link href="/signin">
                <Button
                  size="small"
                  className="btn "
                  style={{ margin: "auto auto" }}
                >
                  Sign In
                </Button>
              </Link>
            </CardActions>
            <CardContent>
              <span style={{ fontSize: "0.8em" }}>
                Don't have an account? Create one.
              </span>
              <Link href="/signup">
                <Button
                  size="small"
                  className=" btn-primary"
                  style={{ margin: "auto auto" }}
                >
                  Sign Up
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
        {!rankLoading ? (
          <RankingList rankTop10={rankingData} loading={rankLoading} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default rightSideNav;
