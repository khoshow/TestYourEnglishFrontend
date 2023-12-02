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

    if (checkIsAuth) {
      const token = getCookie("token");

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

      setData(res);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const loadUserScores = async (user, token) => {
    setScoresLoading(true);
    try {
      console.log("User", user);
      const res = await getUserScores(user, token);

      setUserScores(res);
      console.log("user Scores", res);
    } catch (error) {
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

    let toChange = { newStatus: formData.status };
    try {
      const res = await updateStatus(toChange, token);

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
    return (
      <Layout>
        <div className="text-center">Loading...</div>
      </Layout>
    );
  }

  const displayScores = () => {
    if (!userScores) {
      return (
        <div className="container col-xl-10 col-xxl-8 px-4 py-5 bg-warning">
          <div className="row align-items-center g-lg-5 ">
            <div className="col-lg-7 text-center text-lg-start">
              <h2>Oooops! You have not scored anything yet.</h2>
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
                Take a Test
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
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
      );
    }
  };

  return (
    <>
      <Layout>
        <div className="row">
          <div className=" " style={{ marginTop: "50px", padding: "2rem" }}>
            <h2 className="heading">My Score Board</h2>
            <section className="service-section">{displayScores()}</section>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProfilePage;
