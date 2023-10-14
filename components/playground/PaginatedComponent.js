import React, { useState } from "react";
import ListComponent from "./ListComponent";

const PaginatedList = ({ itemsPerPage, data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = indexOfLastItem - indexOfFirstItem;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <ListComponent items={currentPage} />
      <ul className="pagination">
        {Array.from({ length: Math.ceil(data / itemsPerPage) }).map(
          (_, index) => (
            <li
              key={index}
              className={`page-item ${
                index + 1 === currentPage ? "active" : ""
              }`}
            >
              <button onClick={() => paginate(index + 1)} className="page-link">
                {index + 1}
              </button>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default PaginatedList;
