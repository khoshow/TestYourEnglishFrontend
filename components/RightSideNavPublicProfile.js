import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { isAuth } from "../actions/auth";
import { getCookie } from "../actions/auth";
import { getUserScores } from "../actions/userInfo";
import ScoresRightNav from "./sideBars/ScoresRightNav";
import { getRanking } from "../actions/rank";
import RankingList from "./sideBars/RankingRightNav";
import { getPublicProfile } from "../actions/publicInfo/userProfile";

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
  const [publicProfile, setPublicprofile] = useState();

  useEffect(() => {
    const { slug } = router.query;
    const authenticated = isAuth();
    if (authenticated) {
      setAuthStatus(true);
      loadUserInfo(authenticated._id);
    }

    setCurrentUrl(router.asPath);

    fetchRankingData(router.asPath);
    loadPublicProfile(router.asPath);
  }, [loading, router.query, router.asPath, currentUrl, rankLoading]);

  const loadPublicProfile = (username) => {
    console.log("Username", username);
    let requiredSlug = username.split("/");
    const usernameToSend = requiredSlug[requiredSlug.length - 1];
    getPublicProfile(usernameToSend)
      .then((res) => {
        console.log("User", res);
        setPublicprofile(res);
      })
      .catch((error) => {
        console.log("err");
        return;
      });
  };

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
        console.log("righ score", res);
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
  const displayPublicProfile = () => {
    if (publicProfile) {
      return (
        <>
          <div className="publicProfile">
            <img src={publicProfile.photo} className="imgCenter"></img>
            <h3 className="subHeading">{publicProfile.name}</h3>
            {publicProfile.profile ? (
              <div>
                <a style={{ color: "#1769aa" }} href={publicProfile.profile}>
                  @{publicProfile.username}
                </a>
              </div>
            ) : (
              ""
            )}{" "}
            {publicProfile.country ? (
              <div>
                <i class="bi bi-geo-alt-fill "> {publicProfile.country}</i>
              </div>
            ) : (
              ""
            )}
            {publicProfile.status ? (
              <div className="position-relative p-5  border border-dashed rounded-5">
                <p className="text-body-emphasis position-absolute top-0 start-0 bg-warning">
                  Status
                </p>
                <p className="">{publicProfile.status}</p>
              </div>
            ) : (
              ""
            )}
            {publicProfile.about ? publicProfile.about : ""}
          </div>
        </>
      );
    } else {
      return "";
    }
  };
  return (
    <>
      <div className="">
        <div className="rightNavPublicProfile">
          {/* <img src={publicProfile.photo}></img> */}
          {publicProfile ? displayPublicProfile() : ""}
        </div>
      </div>
    </>
  );
};

export default rightSideNav;
