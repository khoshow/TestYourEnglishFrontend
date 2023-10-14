import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DefaultHeader from "../../../../components/header/DefaultHeader";
import Link from "next/link";
import {
  getCorrectWordsMedium,
  getTestNo,
} from "../../../../actions/correct-word/intermediate";
import Words from "../../../../components/words/First";

const CorrectWordsMedium = () => {
  const router = useRouter();
  // const [currentUrl, setcurrentUrl] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reload, setReload] = useState(false);
  const [prevUrl, setPrevUrl] = useState(null);

  let j = 0;

  useEffect(() => {
    // const { slug } = router.query;

    const fetchData = async () => {
      if (!router.query.slug) {
        return; //If slug value is undefined/null returns before getting updated value. use the dependency array for the updated value
      }

      try {
        const slug = router.query.slug;
        // setcurrentUrl(slug)
        const response = await getTestNo(slug);
        if (response.error) {
          throw new Error("Failed to fetch data from the API.");
        }

        setData(response);
        setLoading(false);
      } catch (error) {
        setError(error.message); // Set error message in case of an error
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };
    // Call the fetchData function

    fetchData();
  }, [router.query.slug, router.asPath]);

  // Empty dependency array ensures that the effect runs only once, similar to componentDidMount
  if (reload) {
    setReload(false);
  }
  // Render loading message while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render error message if there is an error
  if (error) {
    return <div>Error: {error}</div>;
  }

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
            {loading && <p>Loading...</p>}
            {/* {console.log("From Inside Html", currentUrl)} */}
            {console.log("From Inside Html data", data)}
            {data && <Words data={data} />}
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

export default CorrectWordsMedium;
