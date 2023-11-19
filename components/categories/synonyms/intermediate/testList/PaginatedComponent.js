import React, { useState } from "react";
import ListComponent from "./ListComponent";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import { getTotalTestNo } from "../../../../../actions/publicInfo/totalTests";

const PaginatedList = ({ itemsPerPage, data }) => {
  const [totalTest, setTotalTest] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  //   const currentItems = indexOfLastItem - indexOfFirstItem;
  getTotalTestNo()
    .then((res) => {
      console.log("res", res);
      setTotalTest(res);
    })
    .catch((err) => {
      console.log("error", err);
    });

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleChange = (event, value) => {
    // Update the route to the selected page
    router.push(`/vocabulary/synonyms/intermediate/test-${value}`);
  };

  if (!totalTest) {
    return;
  }
  return (
    <>
      <div className="text-center">
        <ListComponent items={currentPage} />
        <Stack spacing={2}>
          <Pagination
            count={totalTest%6}
            variant="outlined"
            shape="rounded"
            color="secondary"
            onChange={handleChange}
          />
        </Stack>
        {/* <ul className="pagination">
          {Array.from({ length: Math.ceil(1000 / itemsPerPage) }).map(
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
      </div>
    </>
  );
};

export default PaginatedList;
