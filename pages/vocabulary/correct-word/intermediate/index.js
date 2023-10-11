import { useState } from "react";
import TestList from "../../../../components/testList";
import DefaultHeader from "../../../../components/header/DefaultHeader";
import Link from "next/link";
import { getTestTypes } from "../../../../actions/test";
import { useRouter } from "next/router";

const CorrectWordsMedium = () => {
  const router = useRouter();
  const [currentUrl, setcurrentUrl] = useState(router.asPath);
  const [pageInfo, setPageInfo] = useState([
    {
      url: currentUrl + "/test-1",
      title: "Correct Word - Test One",
    },
    {
      url: currentUrl + "/test-2",
      title: "Correct Word - Test Two",
    },
    {
      url: currentUrl + "/test-3",
      title: "Correct Word - Test Three",
    },
    {
      url: currentUrl + "/test-4",
      title: "Correct Word - Test Four",
    },
    {
      url: currentUrl + "/test-5",
      title: "Correct Word - Test Five",
    },
    {
      url: currentUrl + "/test-6",
      title: "Correct Word - Test Six",
    },
    {
      url: currentUrl + "/test-7",
      title: "Correct Word - Test Seven",
    },
    {
      url: currentUrl + "/test-8",
      title: "Correct Word - Test Eight",
    },
    {
      url: currentUrl + "/test-9",
      title: "Correct Word - Test Nine",
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
          <div className="row ">
            <div className="col-md-3">Hello</div>
            <div className="col-md-6">
              <div
                className=" row justify-content-center "
                style={{}}
              >
                <TestList sendToChild={pageData} />
              </div>
              {/* End .row */}
              <div className="text-center">
                <button className="btn btn-success">Load More </button>
              </div>
            </div>
            <div className="col-md-3">Last column </div>
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
          <div
            className="col-xxl-2 col-xl-3 col-lg-3 col-sm-5 ms-auto d-flex align-items-center justify-content-center text-center text-sm-start mt-40"
            data-aos="fade-up"
            data-aos-delay="400"
          ></div>
        </div>
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

export default CorrectWordsMedium;
