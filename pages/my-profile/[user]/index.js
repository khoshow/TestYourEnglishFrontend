import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../../../components/Layout";
import PrivateProfileLeftNavBar from "../../../components/sideBars/PrivateProfileLeftBar";
import { isAuth, getCookie } from "../../../actions/auth";
import { useRouter } from "next/router";
import SigninForm from "../../../components/auth/SignInComponent";
import { getPrivateProfile } from "../../../actions/profile/privateProfile";
import { getUserScores } from "../../../actions/userInfo";
import { updateStatus } from "../../../actions/profile/profile-update";

const ProfilePage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("User");
  const [authStatus, setAuthStatus] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [data, setData] = useState();
  const [imageBufferData, setImageBufferData] = useState();
  const [statusLoading, setStatusLoading] = useState("");
  const [profileLoading, setProfileLoading] = useState();
  const [scoresLoading, setScoresLoading] = useState();
  const [userScores, setUserScores] = useState();

  const [formData, setFormData] = useState({
    status: "",
  });

  useEffect(() => {
    const checkIsAuth = isAuth();
    console.log("IsAu", checkIsAuth);
    if (checkIsAuth) {
      const token = getCookie("token");
      console.log("Is Auth", isAuth());
      setAuthStatus(true);
      const user = isAuth().username;
      setUsername(user);
      loadUserProfile(checkIsAuth._id);
      loadUserScores(checkIsAuth._id, token);
    } else {
      router.push(`/signin`);
    }
  }, []);

  const loadUserProfile = async (user) => {
    setProfileLoading(true);
    try {
      const res = await getPrivateProfile(user);
      console.log("resdsgf", res);
      setData(res);
    } catch (err) {
      console.log("err", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const loadUserScores = async (user, token) => {
    setScoresLoading(true);
    try {
      const res = await getUserScores(user, token);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitStatus = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusLoading("loading");
    console.log("Status", formData.status);
    let toChange = { newStatus: formData.status };
    try {
      const res = await updateStatus(toChange, token);
      console.log("res", res);
      setData(res);
    } catch (err) {
      console.log("err", err);
    } finally {
      setLoading(false);
      setStatusLoading("loaded");
    }
  };

  const buttonLoadStatus = () => {
    if (statusLoading == "loading") {
      return (
        <div className="btn btn-secondary p-2 mt-3">
          <i className="clock-loader bg-warning"></i> Updating...
        </div>
      );
    } else if (statusLoading == "loaded") {
      return (
        <div className="btn btn-warning p-2 mt-3">
          <i className="bi bi-check-circle-fill bg-warning"></i> Updated!
        </div>
      );
    } else {
      return (
        <button className="btn btn-primary p-2  mt-3">
          <i className="bi bi-check2-circle bg-primary text-white"></i> Update
        </button>
      );
    }
  };

  if (!data) {
    return <div className="text-center">Loading...</div>;
  }

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
                href="/vocabulary/correct-word/intermediate"
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
        <div className="tiles">
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
                  Score: {userScores.correctWordIntermediate.scores}
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
                  {userScores.correctWordAdvanced.scores
                    ? userScores.correctWordAdvanced.scores
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
                href="/vocabulary/correct-word/intermediate"
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
                <span className="icon-button roundedScoreFrameSmall ms-4">
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
                <span className="icon-button roundedScoreFrameSmall ms-4">
                  <i className="bi bi-bar-chart-line "></i>
                </span>
                <span className="ms-1"> Rank:</span>
              </div>
            </div>
            <div className="text-center mt-4">
              <Link
                className="btn btn-dark"
                href="/vocabulary/correct-word/intermediate"
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
                href="/vocabulary/correct-word/intermediate"
              >
                Take a Test
              </Link>
            </div>
          </article>
        </div>
      );
    }
  };

  return (
    <>
      <Layout>
        <div className="row">
          {/* <div className="col-3 app-body-navigation">
            <PrivateProfileLeftNavBar
              username={username}
              authStatus={authStatus}
            />
          </div>
          <div className=" col-9"> */}
          <section className="service-section" style={{ marginTop: "100px" }}>
            <div>
              <div className="">
                <div className="text-center d-flex row">
                  <div className="text-center profileBox1 col-md-4">
                    <img src={data.photoUrl} height="100" width="100" />
                    <h4 className="">{data.name}</h4>
                    <p className="">@{data.username}</p>
                  </div>
                  <div className="col-md-8">
                    <div className="position-relative p-5  mt-4 border border-dashed rounded-5">
                      <h3 className="text-body-emphasis position-absolute top-0 start-0 bg-warning">
                        Status
                      </h3>
                      <p className="">{data.status}</p>
                    </div>

                    <button
                      type="button"
                      className="btn btn-primary mt-4"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Update Status
                    </button>
                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            {/* <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                              >
                                It's good to say your feeling! Update your
                                status.
                              </h1> */}
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <form onSubmit={handleSubmitStatus}>
                            <div className=" p-3">
                              <textarea
                                type="text"
                                className="form-control"
                                placeholder="How you feeling today!"
                                name="status"
                                value={formData.status}
                                onChange={handleInputChange}
                              />

                              {buttonLoadStatus()}
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              ;
            </div>
            <div className="p-2">{displayScores()}</div>
          </section>
        </div>
        {/* </div> */}
      </Layout>
    </>
  );
};

export default ProfilePage;
