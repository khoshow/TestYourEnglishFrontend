import { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import { isAuth } from "../../../actions/auth";
import { useRouter } from "next/router";
import SigninForm from "../../../components/auth/SignInComponent";

const ProfilePage = () => {
  const [userName, setUserName] = useState("User");
  const [authStatus, setAuthStatus] = useState();
  const router = useRouter();
  useEffect(() => {
    const checkIsAuth = isAuth();
    console.log("IsAu", checkIsAuth);
    if (checkIsAuth) {
      console.log("Is Auth", isAuth());
      setAuthStatus(true);
      const user = isAuth().username;
      setUserName(user);
    } else {
      router.push(`/signin`);
    }
  }, []);

  return (
    <>
      <Layout>
        <div>
          <div className="bodyNoRightNav">
            <div className="app-body-navigation">
              <nav className="navigation">
                <a href="#">
                  <i className="ph-browsers"></i>
                  <span>Dashboard</span>
                </a>
                <a href="#">
                  <i className="ph-check-square"></i>
                  <span>Scheduled</span>
                </a>
                <a href="#">
                  <i className="ph-swap"></i>
                  <span>Transfers</span>
                </a>
                <a href="#">
                  <i className="ph-file-text"></i>
                  <span>Templates</span>
                </a>
                <a href="#">
                  <i className="ph-globe"></i>
                  <span>SWIFT</span>
                </a>
                <a href="#">
                  <i className="ph-clipboard-text"></i>
                  <span>Exchange</span>
                </a>
              </nav>
              <footer className="footer">
                <h1>
                  Almeria<small>©</small>
                </h1>
                <div>
                  Almeria ©<br />
                  All Rights Reserved 2021
                </div>
              </footer>
            </div>
            <div className="">
              <section className="service-section">
                <h2>Service</h2>

                <div>
                  <div class=" mt-4 mb-4 p-3 d-flex justify-content-center">
                    <div class="profileCard p-4">
                      <div class=" profileImage d-flex flex-column justify-content-center align-items-center">
                        <button class="btn btn-secondary">
                          <img
                            src="https://i.imgur.com/wvxPV9S.png"
                            height="100"
                            width="100"
                          />
                        </button>
                        <span class="name mt-3">Eleanor Pena</span>{" "}
                        <span class="idd">@eleanorpena</span>{" "}
                        <div class="d-flex flex-row justify-content-center align-items-center gap-2">
                          <span class="idd1">Oxc4c16a645_b21a</span>{" "}
                          <span>
                            <i class="fa fa-copy"></i>
                          </span>
                        </div>
                        <div class="d-flex flex-row justify-content-center align-items-center mt-3">
                          <span class="number">
                            1069 <span class="follow">Followers</span>
                          </span>
                        </div>
                        <div class=" d-flex mt-2">
                          <button class="btn1 btn-dark">Edit Profile</button>
                        </div>
                        <div class="text mt-3">
                          <span>
                            Eleanor Pena is a creator of minimalistic x bold
                            graphics and digital artwork.
                            <br />
                            <br /> Artist/ Creative Director by Day #NFT
                            minting@ with FND night.{" "}
                          </span>
                        </div>
                        <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                          <span>
                            <i class="fa fa-twitter"></i>
                          </span>
                          <span>
                            <i class="fa fa-facebook-f"></i>
                          </span>
                          <span>
                            <i class="fa fa-instagram"></i>
                          </span>
                          <span>
                            <i class="fa fa-linkedin"></i>
                          </span>
                        </div>
                        <div class=" px-2 rounded mt-4 date ">
                          <span class="join">Joined May,2021</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  ;
                </div>
                <div className="tiles">
                  <article className="tile">
                    <div className="tile-header">
                      <i className="ph-lightning-light"></i>
                      <h3>
                        <span>Electricity</span>
                        <span>UrkEnergo LTD.</span>
                      </h3>
                    </div>
                    <a href="#">
                      <span>Go to service</span>
                      <span className="icon-button">
                        <i className="ph-caret-right-bold"></i>
                      </span>
                    </a>
                  </article>
                  <article className="tile">
                    <div className="tile-header">
                      <i className="ph-fire-simple-light"></i>
                      <h3>
                        <span>Heating Gas</span>
                        <span>Gazprom UA</span>
                      </h3>
                    </div>
                    <a href="#">
                      <span>Go to service</span>
                      <span className="icon-button">
                        <i className="ph-caret-right-bold"></i>
                      </span>
                    </a>
                  </article>
                  <article className="tile">
                    <div className="tile-header">
                      <i className="ph-file-light"></i>
                      <h3>
                        <span>Tax online</span>
                        <span>Kharkov 62 str.</span>
                      </h3>
                    </div>
                    <a href="#">
                      <span>Go to service</span>
                      <span className="icon-button">
                        <i className="ph-caret-right-bold"></i>
                      </span>
                    </a>
                  </article>
                </div>
                <div className="service-section-footer">
                  <p>
                    Services are paid according to the current state of the
                    currency and tariff.
                  </p>
                </div>
              </section>
              <section className="transfer-section">
                <div className="transfer-section-header">
                  <h2>Latest transfers</h2>
                  <div className="filter-options">
                    <p>Filter selected: more than 100 $</p>
                    <button className="icon-button">
                      <i className="ph-funnel"></i>
                    </button>
                    <button className="icon-button">
                      <i className="ph-plus"></i>
                    </button>
                  </div>
                </div>
                <div className="transfers">
                  <div className="transfer">
                    <div className="transfer-logo">
                      <img src="https://assets.codepen.io/285131/apple.svg" />
                    </div>
                    <dl className="transfer-details">
                      <div>
                        <dt>Apple Inc.</dt>
                        <dd>Apple ID Payment</dd>
                      </div>
                      <div>
                        <dt>4012</dt>
                        <dd>Last four digits</dd>
                      </div>
                      <div>
                        <dt>28 Oct. 21</dt>
                        <dd>Date payment</dd>
                      </div>
                    </dl>
                    <div className="transfer-number">- $ 550</div>
                  </div>
                  <div className="transfer">
                    <div className="transfer-logo">
                      <img src="https://assets.codepen.io/285131/pinterest.svg" />
                    </div>
                    <dl className="transfer-details">
                      <div>
                        <dt>Pinterest</dt>
                        <dd>2 year subscription</dd>
                      </div>
                      <div>
                        <dt>5214</dt>
                        <dd>Last four digits</dd>
                      </div>
                      <div>
                        <dt>26 Oct. 21</dt>
                        <dd>Date payment</dd>
                      </div>
                    </dl>
                    <div className="transfer-number">- $ 120</div>
                  </div>
                  <div className="transfer">
                    <div className="transfer-logo">
                      <img src="https://assets.codepen.io/285131/warner-bros.svg" />
                    </div>
                    <dl className="transfer-details">
                      <div>
                        <dt>Warner Bros.</dt>
                        <dd>Cinema</dd>
                      </div>
                      <div>
                        <dt>2228</dt>
                        <dd>Last four digits</dd>
                      </div>
                      <div>
                        <dt>22 Oct. 21</dt>
                        <dd>Date payment</dd>
                      </div>
                    </dl>
                    <div className="transfer-number">- $ 70</div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProfilePage;
