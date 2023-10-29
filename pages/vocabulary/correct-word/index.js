import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DefaultHeader from "../../../components/header/DefaultHeader";
import Link from "next/link";

const CorrectWordsMedium = ({}) => {
  return (
    <>
      <DefaultHeader />

      <div className="fancy-feature-twentyOne position-relative mt-50 pt-80 pb-150 lg-mt-130 lg-pt-60 lg-pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 m-auto text-center">
              <div className=" me-auto  md-mt-10">
                <div className="title-style-two">
                  <h2 className="main-title fw-normal tx-dark m0">Choose your level</h2>
                  <div className="row justify-content-center " style={{}}>
              <div
                className={`col-lg-4 col-md-6 col-sm-7 mt-40`}
                style={{ textAlign: "center" }}
              >
                {/* <Link href="/vocabulary/correct-word/intermediate" className="read-btn mt-auto "> */}
                <div
                  className="card-style-ten d-flex flex-column bg-white pe-3 ps-3 pe-xl-5 ps-xl-5 pt-60 pb-45 lg-pt-40 lg-pb-30 p-50"
                  style={{ minWidth: "300px" }}
                >
                  <Link
                    href="/vocabulary/correct-word/intermediate"
                    className="read-btn mt-auto "
                  >
                    <div>
                      <div className="icon d-flex justify-content-center">
                        <img
                          src="/images/icon/vocabulary.png"
                          alt="icon"
                          className="lazy-img "
                        />
                      </div>
                      <h4 className="fw-300 mt-20 mb-50">Intermediate</h4>
                      <p className="btn-eleven fs-15 fw-500  text-center">
                        Start
                      </p>
                    </div>
                  </Link>
              
                </div>
              </div>
              <div
                className={`col-lg-4 col-md-6 col-sm-7 mt-40`}
                style={{ textAlign: "center" }}
              >
                {/* <Link href="/vocabulary/correct-word/advanced" className="read-btn mt-auto "> */}
                <div
                  className="card-style-ten d-flex flex-column bg-white pe-3 ps-3 pe-xl-5 ps-xl-5 pt-60 pb-45 lg-pt-40 lg-pb-30 p-50"
                  style={{ minWidth: "300px" }}
                >
                  <Link
                    href="/vocabulary/correct-word/advanced"
                    className="read-btn mt-auto "
                  >
                    <div>
                      <div className="icon d-flex justify-content-center">
                        <img
                          src="/images/icon/vocabulary.png"
                          alt="icon"
                          className="lazy-img "
                        />
                      </div>
                      <h4 className="fw-300 mt-20 mb-50">Advanced</h4>
                      <p className="btn-eleven fs-15 fw-500  text-center">
                        Start
                      </p>
                    </div>
                  </Link>
              
                </div>
              </div>
           
            </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center"></div>
        </div>
      </div>
    </>
  );
};

export default CorrectWordsMedium;
