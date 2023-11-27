import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import {
  getCorrectWordsAdvanced,
  getTestNo,
} from "../../../../actions/categories/correct-word/advanced";
import TestPage from "../../../../components/categories/correctWord/advanced/testPage/First";
import Fallback from "../../../../components/fallback";
import Layout3 from "../../../../components/Layout3";
import {
  getWhenCorrectMessages,
  getWhenWrongMessages,
} from "../../../../actions/publicInfo/cardMessages";


const CorrectWordsAdvanced = () => {
  const router = useRouter();
  const [currentUrl, setcurrentUrl] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reload, setReload] = useState(false);
  const [prevUrl, setPrevUrl] = useState(null);
  const [correctMessages, setCorrectMessages] = useState();
  const [wrongMessages, setWrongMessages] = useState();
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

    whenCorrectMessages();
    whenWrongMessages();
    fetchData();
  }, [router.query.slug, router.asPath, currentUrl]);

  const whenCorrectMessages = () => {
    getWhenCorrectMessages()
      .then((data) => {
        setCorrectMessages(data);
    
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const whenWrongMessages = () => {
    getWhenWrongMessages()
      .then((data) => {
        setWrongMessages(data);
       
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  // Empty dependency array ensures that the effect runs only once, similar to componentDidMount
  if (reload) {
    setReload(false);
  }
  // Render loading message while data is being fetched
  if (loading) {
    return (
      <Layout3>
        <div
          style={{
            marginTop: "100px",
            PaddingTop: "100px",
            textAlign: "center",
            margin: "auto auto",
          }}
        >
          Loading...
        </div>
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

        {data && (
          <TestPage
            data={data}
            correctMessages={correctMessages}
            wrongMessages={wrongMessages}
          />
        )}
      </Layout3>
    </>
  );
};

export default CorrectWordsAdvanced;
