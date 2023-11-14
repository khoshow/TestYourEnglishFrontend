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
        <div className="col-md-3 pt-40 ">
          <div className="mt-20">
            <div className="app-body-navigation">
              <nav className="navigation">
                <div className="level-side-category">
                  <a href="#" className="level-side-category">
                    <i className="bi bi-stickies-fill"></i>
                    <span>Correct Word</span>
                  </a>
                  <a href="#" className="level-side-nav">
                    <i className="bi bi-lightbulb-fill"></i>
                    <span>Intermediate</span>
                  </a>
                  <a className="level-side-nav" href="#">
                    <i className="bi bi-lightbulb-fill"></i>
                    <span>Advanced</span>
                  </a>
                </div>

                <div className="level-side-category">
                  <a href="#">
                    <i className="bi bi-stickies-fill"></i>
                    <span>What It Means</span>
                  </a>
                  <a href="#" className="level-side-nav">
                    <i className="bi bi-lightbulb-fill"></i>
                    <span>Intermediate</span>
                  </a>
                  <a className="level-side-nav" href="#">
                    <i className="bi bi-lightbulb-fill"></i>
                    <span>Advanced</span>
                  </a>
                </div>

                <div className="level-side-category">
                  <a href="#">
                    <i className="bi bi-stickies-fill"></i>
                    <span>Synonyms</span>
                  </a>
                  <a href="#" className="level-side-nav">
                    <i className="bi bi-lightbulb-fill"></i>
                    <span>Intermediate</span>
                  </a>
                  <a className="level-side-nav" href="#">
                    <i className="bi bi-lightbulb-fill"></i>
                    <span>Advanced</span>
                  </a>
                </div>
              </nav>
              <footer className="footer">
                <h1>
                  Test My English<small>©</small>
                </h1>
                <div>
                  Test Your English ©<br />
                  All Rights Reserved 2023
                </div>
              </footer>
            </div>
          </div>
        </div>
        <div className="col-md-9 pt-40">
          <div className="container">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ThreeSides;
