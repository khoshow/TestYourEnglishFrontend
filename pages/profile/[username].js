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
import { getPublicProfile } from "../../actions/publicInfo/userProfile";

const ProfilePage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("User");
  const [authStatus, setAuthStatus] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [data, setData] = useState();
  const [currentUrl, setCurrentUrl] = useState();
  const [userScores, setUserScores] = useState();
  const [scoresLoading, setScoresLoading] = useState();
  const [publicProfile, setPublicprofile] = useState();

  useEffect(() => {
    setCurrentUrl(router.query.username);
    const { slug } = router.query;
    // const authenticated = isAuth();
    // if (authenticated) {
    //   setAuthStatus(true);
    //   loadUserInfo(authenticated._id);
    // }

    setCurrentUrl(router.asPath);
  
    let path = router.asPath;
    let requiredSlug = path.split("/").pop();
   
    loadUserScores(requiredSlug);
    loadPublicProfile(requiredSlug);

    // const loadUserScores = async (username) => {
    //   try {
    //     const res = await getPublicDisplayUserScores(username);
    //     setUserScores(res);
    //     setCurrentUrl(router.query.username);

    //     // Perform the necessary logic to load user scores
    //     // For example: const userScores = await fetchUserScores(slug);
    //     // Handle the data as needed
    //   } catch (error) {
    //     // Handle errors if any
    //     console.error("Error loading user scores:", error);
    //   }
    // };
    // if (router.query.username) {
    //   loadUserScores(router.query.username);
    // }
    // const handleRouteChange = () => {
    //   // Check if slug is present
    //   if (router.query.username) {
    //     // If slug is present, load user scores
    //     loadUserScores(router.query.username);
    //   }
    // };
    // loadUserScores(router.query.username);
    // // Attach the listener
    // router.events.on("routeChangeComplete", handleRouteChange);

    // // Clean up the listener when the component unmounts
    // return () => {
    //   router.events.off("routeChangeComplete", handleRouteChange);
    // };
  }, [router.query.username, router.asPath, currentUrl]);

  const loadPublicProfile = (username) => {
    getPublicProfile(username)
      .then((res) => {
      
        setPublicprofile(res);
      })
      .catch((error) => {
        return;
      });
  };

  const loadUserScores = async (user) => {
    setScoresLoading(true);
    try {
      const res = await getPublicDisplayUserScores(user);
     
      setUserScores(res);
    } catch (error) {
      setError(true);
      setUserScores(null);
    } finally {
      setScoresLoading(false);
    }
  };

  const displayProfile = () => {
    return (
      <div className="text-center">
        <div className="heading alt-two" style={{ marginTop: "30px" }}>
          <h2>
            <span className="subHeading">
              &quot;Hi there! 👋 Excited to have you visit my profile.&quot;
            </span>
          </h2>
        </div>
        {publicProfile ? (
          <div className=" profileBox1 col-md-4" style={{ margin: "0 auto" }}>
            <div>
              <img src={publicProfile.photo} height="100" width="100" />
              <h4 className="">{publicProfile.name}</h4>
              <p className="">({publicProfile.username})</p>
              {publicProfile.country ? (
                <p className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="red"
                    class="bi bi-pin-map-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
                    />
                  </svg>
                  &nbsp; {publicProfile.country}
                </p>
              ) : (
                ""
              )}
              {publicProfile.status ? (
                <div className="position-relative p-5  mt-4 border border-dashed rounded-5 bg-info">
                  <h3 className="text-body-emphasis position-absolute top-0 start-0 bg-warning">
                    Status
                  </h3>
                  <p className="">{publicProfile.status}</p>
                </div>
              ) : (
                ""
              )}

              {publicProfile.about ? (
                <div className="position-relative p-5  mt-4 border border-dashed rounded-5">
                  <h3 className="text-body-emphasis position-absolute top-0 start-0 bg-warning">
                    About Myself
                  </h3>
                  <p className="">{publicProfile.about}</p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  };

  const displayScores = () => {
    // if (!userScores) {
    //   return (
    //     <div className="container col-xl-10 col-xxl-8 px-4 py-5 bg-warning">
    //       <div
    //         className="row align-items-center g-lg-5 "
    //         style={{ marginTop: "50px" }}
    //       >
    //         <div className="col-lg-7 text-center text-lg-start">
    //           <h2 className="fw-bold lh-1 text-body-emphasis mb-3 text-dark">
    //             Get your English test scores out there!
    //           </h2>
    //           <p className="col-lg-10">
    //             Test your English vocabulary, grammar and more! And see how you
    //             perform.
    //           </p>
    //         </div>
    //         <div className="col-md-10 mx-auto col-lg-5">
    //           <Link
    //             className="w-100 btn btn-lg btn-primary"
    //             href="/category/correct-word/intermediate"
    //           >
    //             {" "}
    //             Take a Test
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // } else {

    return (
      <div className="text-center">
        {userScores ? (
          <div>
            <div className="heading alt-two" style={{ marginTop: "30px" }}>
              <h2 className="heading">My Scoresheet</h2>
            </div>
            <div className="tiles p-4">
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
                      Score:{" "}
                      {userScores.correctWordIntermediate.score
                        ? userScores.correctWordIntermediate.score
                        : ""}
                    </span>
                    <span className="icon-button roundedScoreFrameSmall">
                      <i className="bi bi-bar-chart-line "></i>
                    </span>
                    <span className="ms-1">
                      {" "}
                      Rank:{" "}
                      {userScores.correctWordIntermediate.rank
                        ? userScores.correctWordIntermediate.rank
                        : ""}
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
                    <span className="ms-1">
                      {" "}
                      Rank:{" "}
                      {userScores.correctWordAdvanced.rank
                        ? userScores.correctWordAdvanced.rank
                        : ""}
                    </span>
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

                    <span className="ms-1">
                      Score:{" "}
                      {userScores.correctMeaningIntermediate.score
                        ? userScores.correctMeaningIntermediate.score
                        : ""}
                    </span>
                    <span className="icon-button roundedScoreFrameSmall">
                      <i className="bi bi-bar-chart-line "></i>
                    </span>
                    <span className="ms-1">
                      {" "}
                      Rank:{" "}
                      {userScores.correctMeaningIntermediate.rank
                        ? userScores.correctMeaningIntermediate.rank
                        : ""}
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
                      Score:{" "}
                      {userScores.correctMeaningAdvanced.score
                        ? userScores.correctMeaningAdvanced.score
                        : ""}
                    </span>
                    <span className="icon-button roundedScoreFrameSmall">
                      <i className="bi bi-bar-chart-line "></i>
                    </span>
                    <span className="ms-1">
                      {" "}
                      Rank:{" "}
                      {userScores.correctMeaningAdvanced.rank
                        ? userScores.correctMeaningAdvanced.rank
                        : ""}
                    </span>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <Link
                    className="btn btn-dark"
                    href="/category/correct-meaning/advanced"
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
                    <span className="ms-1">
                      Score:{" "}
                      {userScores.synonymsIntermediate.score
                        ? userScores.synonymsIntermediate.score
                        : ""}
                    </span>
                    <span className="icon-button roundedScoreFrameSmall">
                      <i className="bi bi-bar-chart-line "></i>
                    </span>
                    <span className="ms-1">
                      {" "}
                      Rank:{" "}
                      {userScores.synonymsIntermediate.rank
                        ? userScores.synonymsIntermediate.rank
                        : ""}
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
                      Score:{" "}
                      {userScores.synonymsAdvanced.score
                        ? userScores.synonymsAdvanced.score
                        : ""}
                    </span>
                    <span className="icon-button roundedScoreFrameSmall">
                      <i className="bi bi-bar-chart-line "></i>
                    </span>
                    <span className="ms-1">
                      {" "}
                      Rank:{" "}
                      {userScores.synonymsAdvanced.rank
                        ? userScores.synonymsAdvanced.rank
                        : ""}
                    </span>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <Link
                    className="btn btn-dark"
                    href="/category/synonymsd/intermediate"
                  >
                    Take a Test
                  </Link>
                </div>
              </article>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
    // );
    // }
  };

  return (
    <>
      <Layout>
        <section> {displayProfile()}</section>
        <section className="service-section">{displayScores()}</section>
      </Layout>
    </>
  );
};

export default ProfilePage;
