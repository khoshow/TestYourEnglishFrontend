import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Second2 from "./Second";

const CorrectWordsMedium = (data) => {
  const router = useRouter();
  const [currentUrl, setcurrentUrl] = useState(router.asPath);
  //   const [data, setData] = useState(null);
  const [dataToSend, setDataToSend] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };
 

  const shuffle = (incomingData) => {
    return new Promise((resolve, reject) => {
      let j = 0;
      let fetchedData = [];
  
      try {
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
  
        resolve(fetchedData); // Resolve the Promise with the processed data
      } catch (error) {
        reject(error); // Reject the Promise if there's an error
      }
    });
  };
  useEffect(() => {
    // Function to fetch data and handle errors
    const fetchData = async () => {
        const incomingData = data.data.questionNo;
        console.log("In Data", incomingData);
      try {
        const response = await shuffle(incomingData);
        if (response.error) {
          throw new Error("Failed to fetch data from the API.");
        }
        console.log("Response", response);
        setDataToSend(response);
      } catch (error) {
        setError(error.message); // Set error message in case of an error
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);



  if (loading) {
    return <div>Loading...</div>;
  }

  // Render error message if there is an error
  if (error) {
    return <div>Error: {error}</div>;
  }


//   const shuffle = async (incomingData) => {
//     let j = 0;
//     let fetchedData = [];
//     try {
//       while (j < incomingData.length) {
//         let i = 0;
//         let array = [
//           incomingData[j].correctOption,
//           incomingData[j].wrongOption1,
//           incomingData[j].wrongOption2,
//           incomingData[j].wrongOption3,
//         ];
//         let options1 = shuffleArray(array);

//         const insideData = {
//           question: incomingData[j].question,

//           options: options1,
//           correctAnswer: incomingData[j].correctOption,
//         };
//         fetchedData.push(insideData);
//         j++;
//       }
//     } catch {}
//     return fetchedData;
//   };

  // const pageData = () => {
  //   console.log("Page Data", data);
  //   return {
  //     data: data,
  //     section: "choose-correct-word",
  //     level: "medium",
  //     path: currentUrl,
  //   };
  // };

  return (
    <>
      {console.log("Data to send", dataToSend)}
      <Second2 data={dataToSend} />
    </>
  );
};

export default CorrectWordsMedium;