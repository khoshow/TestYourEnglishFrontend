import React, { useState } from "react";
import TestType from "../../../../../../components/aaComponents/Test";
import DefaultHeader from "../../../../../../components/aaComponents/header/DefaultHeader";
import Link from "next/link";
import { getTestTypes } from "../../../../../../actions/test";
import { useRouter } from "next/router";

const Test = () => {
  const router = useRouter();
  const [currentUrl, setcurrentUrl] = useState(router.asPath);
  const [pageInfo, setPageInfo] = useState([
    {
      url: currentUrl + "/beginner",
      title: "Beginner",
      image: "/images/icon/beginner.png",
    },
    {
      url: currentUrl + "/medium",
      title: "Medium",
      image: "/images/icon/medium.png",
    },
    {
      url: currentUrl + "/advanced",
      title: "Advanced",
      image: "/images/icon/advanced.png",
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
                  <h2 className="main-title fw-normal tx-dark m0"></h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <TestType sendToChild={pageData} />
          </div>
        </div>

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
        <div
          className="col-xxl-2 col-xl-3 col-lg-3 col-sm-5 ms-auto d-flex align-items-center justify-content-center text-center text-sm-start mt-40"
          data-aos="fade-up"
          data-aos-delay="400"
        ></div>
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
