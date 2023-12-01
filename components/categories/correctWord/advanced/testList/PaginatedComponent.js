import React, { useEffect, useState } from "react";
import ListComponent from "./ListComponent";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PaginateCompo from "./paginateCompo";
import { useRouter } from "next/router";
import { getTotalTestsNoCorrectWordAdvanced } from "../../../../../actions/publicInfo/totalTests";

const PaginatedList = ({ itemsPerPage, data }) => {
  const [totalTest, setTotalTest] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  //   const currentItems = indexOfLastItem - indexOfFirstItem;
  useEffect(() => {}, []);
  getTotalTestsNoCorrectWordAdvanced()
    .then((res) => {
  
      setTotalTest(50);
    })
    .catch((err) => {
      console.log("error", err);
    });

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleChange = (event, value) => {
    // Update the route to the selected page
    router.push(`/category/correct-word/advanced/test-${value}`);
  };

  if (!totalTest) {
    return <div className="text-center">Please wait while we load the tests for you...</div>;
  }

  return (
    <>
      <div className="text-center" style={{}}>
        <div className="heading alt-two">
          <h1>
            Correct Word Advanced
            <span className="subHeading">Best of Luck</span>
          </h1>
        </div>
        <Stack spacing={2}>
          <PaginateCompo
            totalTest={totalTest}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            paginate={paginate}
          />
        </Stack>
        <ListComponent items={currentPage} />
        <div style={{ margin: "auto auto" }}>
          <Stack spacing={2}>
            <PaginateCompo
              totalTest={totalTest}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              paginate={paginate}
            />
          </Stack>
        </div>

      
      </div>
    </>
  );
};

export default PaginatedList;
