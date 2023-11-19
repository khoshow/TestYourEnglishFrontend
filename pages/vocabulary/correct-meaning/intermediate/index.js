import React, { useState, useEffect } from "react";
import PaginatedList from "../../../../components/categories/correctMeaning/intermediate/testList/PaginatedComponent";

import Link from "next/link";
import Layout3 from "../../../../components/Layout3";
import ThreeSides from "../../../../components/ThreeSides";
import { isAuth, getCookie } from "../../../../actions/auth";
import { getTestData } from "../../../../actions/correct-word/intermediate";
const data = 30; // Your data array containing 20 components

const App = () => {
  const [authStatus, setAuthStatus] = useState(false);
  const [userId, setUserId] = useState();
  const [data, setData] = useState();
  const [interMediateRank, setInterMediateRank] = useState();
  const [interMediateScore, setInterMediateScore] = useState();

  const itemsPerPage = 4; // Number of items to display per page
  // useEffect(() => {
  //   const checkAuthStatus = async () => {
  //     const authenticated = await isAuth(); // Assuming isAuth returns a promise
  //     console.log("auth", authenticated);
  //     if (!authenticated) {
  //       // User is not authenticated, perform necessary actions (e.g., redirect to signin page)
  //       console.log("User is not authenticated. Redirecting to signin page...");
  //       setAuthStatus(false);
  //     } else {
  //       const token = getCookie("token");
  //       console.log("Auth UserId", authenticated._id);
  //       setUserId(authenticated._id);
  //       const response = await getTestData(authenticated._id, token)
  //         .then((res) => {
  //           console.log("response", res);
  //           setData(res);
  //           setInterMediateScore(res[0].correctWordIntermediate.score);
  //           console.log("Score", res[0].correctWordIntermediate.score);
  //           setInterMediateRank(res[0].correctWordIntermediate.rank);
  //         })
  //         .catch((err) => {
  //           console.log("err", err);
  //         }); // Replace with your API endpoint
  //     }
  //   };

  //   checkAuthStatus(); // Call the function to check user authentication status
  // }, []);
  // const mapTestData = data.correctWordIntermediate.map((obj) => {
  //   console.log("Obj", obj);
  // });

  return (
    <Layout3>
      <div className=" row justify-content-center " style={{}}>
        <PaginatedList itemsPerPage={itemsPerPage} data={data} />
      </div>
    </Layout3>
  );
};

export default App;
