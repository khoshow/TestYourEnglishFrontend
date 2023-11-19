import React, { useState, useEffect } from "react";
import PaginatedList from "../../../../components/categories/correctWord/advanced/testList/PaginatedComponent";
import Layout3 from "../../../../components/Layout3";


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
