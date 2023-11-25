import React, { useState, useEffect } from "react";
import PaginatedList from "../../../../components/categories/correctWord/advanced/testList/PaginatedComponent";

import Layout3 from "../../../../components/Layout3";

const App = () => {
 
  const [data, setData] = useState(30);
  

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
