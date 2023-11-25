import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import PublicProfileLeftNavBar from "../../components/sideBars/PublicProfileLeftBar";
import { isAuth, getCookie } from "../../actions/auth";
import { useRouter } from "next/router";
import SigninForm from "../../components/auth/SignInComponent";
import { getPrivateProfile } from "../../actions/profile/privateProfile";
import { getPublicDisplayUserScores } from "../../actions/publicInfo/scoresRank";
import { updateStatus } from "../../actions/profile/profile-update";
import LayoutPublicProfile from "../../components/LayoutPublicProfile";

const ProfilePage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("User");
  const [authStatus, setAuthStatus] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [data, setData] = useState();
  const [currentUrl, setCurrentUrl] = useState();
  const [userScores, setUserScores] = useState();

  useEffect(() => {
    setCurrentUrl(router.query.username);

    const loadUserScores = async (username) => {
      try {
        const res = await getPublicDisplayUserScores(username);
        setUserScores(res);
        setCurrentUrl(router.query.username);

        // Perform the necessary logic to load user scores
        // For example: const userScores = await fetchUserScores(slug);
        // Handle the data as needed
      } catch (error) {
        // Handle errors if any
        console.error("Error loading user scores:", error);
      }
    };
    if (router.query.username) {
      loadUserScores(router.query.username);
    }
    const handleRouteChange = () => {
      // Check if slug is present
      if (router.query.username) {
        // If slug is present, load user scores
        loadUserScores(router.query.username);
      }
    };
    loadUserScores(router.query.username);
    // Attach the listener
    router.events.on("routeChangeComplete", handleRouteChange);

    // Clean up the listener when the component unmounts
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.query.username, router.asPath, currentUrl]);

  const loadUserScores = async (user) => {
    setScoresLoading(true);
    try {
      const res = await getPublicDisplayUserScores(user);
      console.log("Scores", res);
      setUserScores(res);
    } catch (error) {
      console.log("An error occured", error);
      setError(true);
      setUserScores(null);
    } finally {
      setScoresLoading(false);
    }
  };

  const displayScores = () => {
    if (!userScores) {
      return (
        <div className="container col-xl-10 col-xxl-8 px-4 py-5 bg-warning">
          <div className="row align-items-center g-lg-5 ">
            <div className="col-lg-7 text-center text-lg-start">
              <h2 className="fw-bold lh-1 text-body-emphasis mb-3 text-dark">
                Get your English test scores out there!
              </h2>
              <p className="col-lg-10">
                Test your English vocabulary, grammar and more! And see how you
                perform.
              </p>
            </div>
            <div className="col-md-10 mx-auto col-lg-5">
              <Link
                className="w-100 btn btn-lg btn-primary"
                href="/category/correct-word/intermediate"
              >
                {" "}
                Take a Test
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
      console.log("USer score", userScores);
      return (
        <div>
          <div className="heading alt-two">
            <h2>
              <span className="subHeading">
                "Hi there! 👋 Excited to have you visit my profile."
              </span>
            </h2>
          </div>
          <div className="text-center profileBox1 col-md-4">
            {/* <img src={data.photoUrl} height="100" width="100" />
            <h4 className="">{data.name}</h4>
            <p className="">@{data.username}</p> */}
          </div>
          <div className="tiles p-2">
            <article className="tile">
              <div className="">
                <h3>Correct Word</h3>
              </div>
              <div>
                <span>Intermediate</span>
                <div className="d-flex">
                  <span className="icon-button roundedScoreFrameSmall">
                    <i className="bi bi-award "></i>
                  </span>

                  <span className="ms-1">
                    Score: {userScores.correctWordIntermediate.score}
                  </span>
                  <span className="icon-button roundedScoreFrameSmall">
                    <i className="bi bi-bar-chart-line "></i>
                  </span>
                  <span className="ms-1">
                    {" "}
                    Rank: {userScores.correctWordIntermediate.rank}
                  </span>
                </div>
              </div>
              <div className="mt-2">
                <span>Advanced</span>
                <div className="d-flex">
                  <span className="icon-button roundedScoreFrameSmall">
                    <i className="bi bi-award "></i>
                  </span>

                  <span className="ms-1">
                    {" "}
                    Score:{" "}
                    {userScores.correctWordAdvanced.score
                      ? userScores.correctWordAdvanced.score
                      : ""}
                  </span>
                  <span className="icon-button roundedScoreFrameSmall">
                    <i className="bi bi-bar-chart-line "></i>
                  </span>
                  <span className="ms-1"> Rank:</span>
                </div>
              </div>
              <div className="text-center mt-4">
                <Link
                  className="btn btn-dark"
                  href="/category/correct-word/intermediate"
                >
                  Take a Test
                </Link>
              </div>
            </article>
            <article className="tile">
              <div className="">
                <h3>Correct Meaning</h3>
              </div>
              <div>
                <span>Intermediate</span>
                <div className="d-flex">
                  <span className="icon-button roundedScoreFrameSmall">
                    <i className="bi bi-award "></i>
                  </span>

                  <span className="ms-1"> Score:</span>
                  <span className="icon-button roundedScoreFrameSmall">
                    <i className="bi bi-bar-chart-line "></i>
                  </span>
                  <span className="ms-1"> Rank:</span>
                </div>
              </div>
              <div className="mt-2">
                <span>Advanced</span>
                <div className="d-flex">
                  <span className="icon-button roundedScoreFrameSmall">
                    <i className="bi bi-award "></i>
                  </span>

                  <span className="ms-1"> Score:</span>
                  <span className="icon-button roundedScoreFrameSmall">
                    <i className="bi bi-bar-chart-line "></i>
                  </span>
                  <span className="ms-1"> Rank:</span>
                </div>
              </div>
              <div className="text-center mt-4">
                <Link
                  className="btn btn-dark"
                  href="/category/correct-word/intermediate"
                >
                  Take a Test
                </Link>
              </div>
            </article>
            <article className="tile">
              <div className="">
                <h3>Synonym</h3>
              </div>
              <div>
                <span>Intermediate</span>
                <div className="d-flex">
                  <span className="icon-button roundedScoreFrameSmall">
                    <i className="bi bi-award "></i>
                  </span>

                  <span className="ms-1"> Score:</span>
                  <span className="icon-button roundedScoreFrameSmall">
                    <i className="bi bi-bar-chart-line "></i>
                  </span>
                  <span className="ms-1"> Rank:</span>
                </div>
              </div>
              <div className="mt-2">
                <span>Advanced</span>
                <div className="d-flex">
                  <span className="icon-button roundedScoreFrameSmall">
                    <i className="bi bi-award "></i>
                  </span>

                  <span className="ms-1"> Score:</span>
                  <span className="icon-button roundedScoreFrameSmall">
                    <i className="bi bi-bar-chart-line "></i>
                  </span>
                  <span className="ms-1"> Rank:</span>
                </div>
              </div>
              <div className="text-center mt-4">
                <Link
                  className="btn btn-dark"
                  href="/category/correct-word/intermediate"
                >
                  Take a Test
                </Link>
              </div>
            </article>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <LayoutPublicProfile>
        {/* <div className="col-3 app-body-navigation">
            <PublicProfileLeftNavBar />
          </div>
          <div className=" col-9"> */}
        <section className="service-section">
          {/* <div>
                <div className=" mt-4 mb-4 p-3 ">
                  <div className="">
                    <div className="text-center d-flex row">
                      <div className="text-center profileBox1 col-md-4">
                        <img src={data.photoUrl} height="100" width="100" />
                        <h4 className="">{data.name}</h4>
                        <p className="">@{data.username}</p>
                      </div>
                      <div className="col-md-8">
                        <div className="position-relative p-5  mt-4 border border-dashed rounded-5">
                          <h3 className="text-body-emphasis position-absolute top-0 start-0">
                            Status
                          </h3>
                          <p className="">{data.status}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                ;
              </div> */}
          {displayScores()}
        </section>
        {/* </div> */}
      </LayoutPublicProfile>
    </>
  );
};

export default ProfilePage;
