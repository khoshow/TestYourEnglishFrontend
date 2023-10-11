import React, { useState } from "react";
import TestCategory from "../../components/words/Test";
import DefaultHeader from "../../components/aaComponents/header/DefaultHeader";
import Link from "next/link";
import { getTestTypes } from "../../actions/test";
import { useRouter } from "next/router";

const Test = (props) => {
  const router = useRouter();
  const [currentUrl, setcurrentUrl] = useState(router.asPath);
  const [pageInfo, setPageInfo] = useState([
    {
      url: currentUrl + "/choose-correct-word",
      title: "Correct Word",
      image: "/images/icon/choose.png",
    },
    {
      url: currentUrl + "/synonyms",
      title: "Synonyms",
      image: "/images/icon/synonyms.png",
    },
  ]);
  const pageData = () => {
    return {
      path: currentUrl,
      pageInfo: pageInfo,
    };
  };

  return (
    <>
      <DefaultHeader />

      <div className="fancy-feature-twentyOne position-relative mt-50 pt-80 pb-150 lg-mt-130 lg-pt-60 lg-pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 m-auto text-center">
              <div className=" me-auto  md-mt-10">
                <div className="title-style-two">
                  <h2 className="main-title fw-normal tx-dark m0">
                    {/* Test your English */}
                  </h2>
                </div>
                {/* /.title-style-one */}
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <TestCategory sendToChild={pageData} />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
        <div className="shapes shape-one rounded-circle" />
        <div className="shapes shape-two rounded-circle" />
        <div className="shapes shape-three rounded-circle" />
        <img
          src="/images/shape/shape_88.svg"
          alt="shape"
          className="lazy-img shapes shape-four"
        />
        <img
          src="/images/shape/shape_89.svg"
          alt="shape"
          className="lazy-img shapes shape-five"
        />
      </div>
    </>
  );
};

// Test.getInitialProps = async function () {
//   let skip = 0;
//   let limit = 4;
//   return getTestTypes().then((data) => {
//     if (data.error) {
//       console.log(data.error);
//     } else {
//       return {
//         testName: data.name,
//       };
//     }
//   });
// };

export default Test;
