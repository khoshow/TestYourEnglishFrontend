import React, { useEffect, useState } from "react";
import ListComponent from "./ListComponent";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PaginateCompo from "./paginateCompo";
import { useRouter } from "next/router";
import { getTotalTestsNoCorrectWordIntermediate } from "../../../../../actions/publicInfo/totalTests";

const PaginatedList = ({ itemsPerPage, data }) => {
  const [totalTest, setTotalTest] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  //   const currentItems = indexOfLastItem - indexOfFirstItem;
  useEffect(() => {}, []);
  getTotalTestsNoCorrectWordIntermediate()
    .then((res) => {
      // console.log("Total coorect word tests", res);
      setTotalTest(res);
    })
    .catch((err) => {
      console.log("error", err);
    });

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleChange = (event, value) => {
    // Update the route to the selected page
    router.push(`/category/correct-word/intermediate/test-${value}`);
  };

  if (!totalTest) {
    return (
      <div className="text-center">
        Please wait while we load the tests for you...
      </div>
    );
  }

  return (
    <>
      <div className="text-center" style={{}}>
        <div className="heading alt-two">
          <h1>
            Correct Word Intermediate
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

        {/* <ul className="pagination">
          {Array.from({ length: Math.ceil(100 / itemsPerPage) }).map(
            (_, index) => (
              <li
                key={index}
                className={`page-item ${
                  index + 1 === currentPage ? "active" : ""
                }`}
              >
                <button
                  onClick={() => paginate(index + 1)}
                  className="page-link"
                >
                  {index + 1}
                </button>
              </li>
            )
          )}
        </ul> */}
        {/* <ul className="pagination">
          {pageRange.map((pageNumber) => (
            <li
              key={pageNumber}
              className={`page-item ${
                pageNumber === currentPage ? "active" : ""
              }`}
            >
              <button
                onClick={() => paginate(pageNumber)}
                className="page-link"
                style={{
                  backgroundColor: pageNumber === currentPage ? "red" : "",
                }}
              >
                {pageNumber}
              </button>
            </li>
          ))}
        </ul> */}
      </div>
    </>
  );
};

export default PaginatedList;
