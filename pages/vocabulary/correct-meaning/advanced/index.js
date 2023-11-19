import React, { useState, useEffect } from "react";
import PaginatedList from "../../../../components/categories/correctMeaning/advanced/testList/PaginatedComponent";

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
  

  return (
    <Layout3>
      <div className=" row justify-content-center " style={{}}>
        <PaginatedList itemsPerPage={itemsPerPage} data={data} />
      </div>
    </Layout3>
  );
};

export default App;
