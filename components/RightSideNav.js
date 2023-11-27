import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { isAuth } from "../actions/auth";
import { getCookie } from "../actions/auth";
import { getUserScores } from "../actions/publicInfo/userScore";
import { getCategoryRanking } from "../actions/publicInfo/categoryRank";

import ScoresRightNav from "./sideBars/ScoresRightNav";

import RankingList from "./sideBars/RankingRightNav";

const RightSideNav = ({}) => {
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
    let currentUrl = router.asPath;

    setCurrentUrl(router.asPath);
    let slugForRank;
    let slugForScore;
    let requiredSlug = currentUrl.split("/");
    const neededSlug = requiredSlug.slice(0, 4).join("/");
    switch (neededSlug) {
      case "/category/correct-word/intermediate":
        slugForRank = "ranking-correct-word-intermediate";
        slugForScore = "score-correct-word-intermediate";
        break;
      case "/category/correct-word/advanced":
        slugForRank = "ranking-correct-word-advanced";
        slugForScore = "score-correct-word-advanced";
        break;

      case "/category/correct-meaning/intermediate":
        slugForRank = "ranking-correct-meaning-intermediate";
        slugForScore = "score-correct-meaning-intermediate";
        break;
      case "/category/correct-meaning/advanced":
        slugForRank = "ranking-correct-meaning-advanced";
        slugForScore = "score-correct-meaning-advanced";
        break;
      case "/category/synonyms/intermediate":
        slugForRank = "ranking-synonyms-intermediate";
        slugForScore = "score-synonyms-intermediate";
        break;
      case "/category/synonyms/advanced":
        slugForRank = "ranking-synonyms-advanced";
        slugForScore = "score-synonyms-advanced";
        break;
      default:
        slugForRank = "ranking-correct-word-intermediate";
        slugForScore = "score-correct-word-intermediate";
    }
    if (authenticated) {
      setAuthStatus(true);
      loadUserScoreInfo(authenticated._id, slugForScore);
    }
    fetchRankingData(slugForRank);
  }, [loading, router.query, router.asPath, currentUrl, rankLoading]);

  const fetchRankingData = async (slugForRank) => {
    const response = await getCategoryRanking(slugForRank)
      .then((res) => {
        setRankingData(res);
        setRankLoading(false);
      })
      .catch((error) => {
        console.log("err");
        return;
      });
  };

  const loadUserScoreInfo = async (authenticatedId, slugForScore) => {
    const response = await getUserScores(authenticatedId, slugForScore)
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
                Don&apos;t have an account? Create one.
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

export default RightSideNav;
