import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DefaultHeader from "../../../../components/aaComponents/header/DefaultHeader";
import Link from "next/link";
import { getCorrectWordsMedium } from "../../../../actions/correct-word/medium";
import Words from "../../../../components/words";

const CorrectWordsMedium = ({ incomingData }) => {
  const router = useRouter();
  const [currentUrl, setcurrentUrl] = useState(router.asPath);

  const fetchedData = [];
  let j = 0;

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

  while (j < incomingData.length) {
    let i = 0;
    let array = [
      incomingData[j].correctOption,
      incomingData[j].wrongOption1,
      incomingData[j].wrongOption2,
      incomingData[j].wrongOption3,
    ];
    let options1 = shuffleArray(array);

    const insideData = {
      question: incomingData[j].question,

      options: options1,
      correctAnswer: incomingData[j].correctOption,
    };
    fetchedData.push(insideData);
    j++;
  }

  const pageData = () => {
    return {
      data: fetchedData,
      section: "choose-correct-word",
      level: "medium",
      path: currentUrl,
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
            <Words sendToChild={pageData} />
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
        <div
          className="col-xxl-2 col-xl-3 col-lg-3 col-sm-5 ms-auto d-flex align-items-center justify-content-center text-center text-sm-start mt-40"
          data-aos="fade-up"
          data-aos-delay="400"
        ></div>
      </div>
    </>
  );
};

CorrectWordsMedium.getInitialProps = async function () {
  return getCorrectWordsMedium().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      // console.log("Data", data);
      return {
        incomingData: data,
      };
    }
  });
};

export default CorrectWordsMedium;
