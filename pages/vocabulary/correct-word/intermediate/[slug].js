import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DefaultHeader from "../../../../components/header/DefaultHeader";
import Link from "next/link";
import {
  getCorrectWordsMedium,
  getTestNo,
} from "../../../../actions/correct-word/intermediate";
import Words from "../../../../components/correctWord/First";
import Fallback from "../../../../components/fallback";
import Layout from "../../../../components/Layout";
import ThreeSides from "../../../../components/ThreeSides";

const CorrectWordsMedium = () => {
  const router = useRouter();
  const [currentUrl, setcurrentUrl] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reload, setReload] = useState(false);
  const [prevUrl, setPrevUrl] = useState(null);

  const urlChanged = () => {
    setcurrentUrl(router.query.slug);
  };

  let j = 0;

  useEffect(() => {
  
    setcurrentUrl(router.query.slug);
    const fetchData = async () => {
      if (!router.query.slug) {
        return; //If slug value is undefined/null returns before getting updated value. use the dependency array for the updated value
      }

      try {
        const slug = router.query.slug;
        // setcurrentUrl(slug)
        const response = await getTestNo(slug);
        if (response.error) {
          throw new Error(response.error);
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
  }, [router.query.slug, router.asPath, currentUrl]);

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
    return (
      <>
        <Fallback message={error} />
      </>
    );
  }

  return (
    <>
      <Layout>
        <ThreeSides>
          {/* <div className="fancy-feature-twentyOne position-relative mt-50 lg-pb-60"> */}
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
            
                {data && <Words data={data} />}
              </div>
              {/* End .row */}
            </div>
          {/* </div> */}
        </ThreeSides>
      </Layout>
    </>
  );
};

export default CorrectWordsMedium;
