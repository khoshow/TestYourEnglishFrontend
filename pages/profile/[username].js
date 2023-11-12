import { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import PublicProfileLeftNavBar from "../../components/sideBars/PublicProfileLeftBar";
import { isAuth, getCookie } from "../../actions/auth";
import { useRouter } from "next/router";
import SigninForm from "../../components/auth/SignInComponent";
import { getPrivateProfile } from "../../actions/profile/privateProfile";
import { getUserScores } from "../../actions/userInfo";
import { updateStatus } from "../../actions/profile/profile-update";

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
    setCurrentUrl(router.query.slug);

    if (!router.query.slug) {
      return; //If slug value is undefined/null returns before getting updated value. use the dependency array for the updated value
    } else {
      loadUserScores(router.query.slug);
    }
  }, []);

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
    return (
      <div className="tiles">
        <article className="tile">
          <div className="">
            <h3>Correct Word</h3>
          </div>
          <div>
            <span>Intermediate</span>
            <div className="d-flex">
              <span className="icon-button bg-primary">
                <i className="bi bi-award "></i>
              </span>

              <span className="ms-1"> Score:</span>
              <span className="icon-button bg-primary ms-4">
                <i className="bi bi-bar-chart-line "></i>
              </span>
              <span className="ms-1"> Rank:</span>
            </div>
          </div>
          <div className="mt-2">
            <span>Advanced</span>
            <div className="d-flex">
              <span className="icon-button bg-primary">
                <i className="bi bi-award "></i>
              </span>

              <span className="ms-1"> Score:</span>
              <span className="icon-button bg-primary ms-4">
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
            <h3>What it Means</h3>
          </div>
          <div>
            <span>Intermediate</span>
            <div className="d-flex">
              <span className="icon-button bg-primary">
                <i className="bi bi-award "></i>
              </span>

              <span className="ms-1"> Score:</span>
              <span className="icon-button bg-primary ms-4">
                <i className="bi bi-bar-chart-line "></i>
              </span>
              <span className="ms-1"> Rank:</span>
            </div>
          </div>
          <div className="mt-2">
            <span>Advanced</span>
            <div className="d-flex">
              <span className="icon-button bg-primary">
                <i className="bi bi-award "></i>
              </span>

              <span className="ms-1"> Score:</span>
              <span className="icon-button bg-primary ms-4">
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
              <span className="icon-button bg-primary">
                <i className="bi bi-award "></i>
              </span>

              <span className="ms-1"> Score:</span>
              <span className="icon-button bg-primary ms-4">
                <i className="bi bi-bar-chart-line "></i>
              </span>
              <span className="ms-1"> Rank:</span>
            </div>
          </div>
          <div className="mt-2">
            <span>Advanced</span>
            <div className="d-flex">
              <span className="icon-button bg-primary">
                <i className="bi bi-award "></i>
              </span>

              <span className="ms-1"> Score:</span>
              <span className="icon-button bg-primary ms-4">
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
  };

  return (
    <>
      <Layout>
        <div className="row">
          <div className="col-3 app-body-navigation">
            <PublicProfileLeftNavBar />
          </div>
          <div className=" col-9">
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
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProfilePage;
