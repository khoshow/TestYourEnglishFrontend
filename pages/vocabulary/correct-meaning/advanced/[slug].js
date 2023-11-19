import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DefaultHeader from "../../../../components/header/DefaultHeader";
import Link from "next/link";
import PaginatedList from "../../../../components/playground/PaginatedComponent";
import {
  getCorrectWordsMedium,
  getTestNo,
} from "../../../../actions/categories/correct-meaning/intermediate";
import TestPage from "../../../../components/categories/correctMeaning/advanced/testPage/First";
import Fallback from "../../../../components/fallback";
import Layout3 from "../../../../components/Layout3";
import ThreeSides from "../../../../components/ThreeSides";

const CorrectMeaningAdvanced = () => {
  const router = useRouter();
  const [currentUrl, setcurrentUrl] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reload, setReload] = useState(false);
  const [prevUrl, setPrevUrl] = useState(null);
  const itemsPerPage = 4;
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
    return (
      <Layout3>
        <div>Loading...</div>
      </Layout3>
    );
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
      <Layout3>
        {loading && <p>Loading...</p>}

        {data && <TestPage data={data} />}
      </Layout3>
    </>
  );
};

export default CorrectMeaningAdvanced;
