import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationComponent = ({
  totalTest,
  itemsPerPage,
  currentPage,
  paginate,
}) => {
  const pageCount = Math.ceil(totalTest / itemsPerPage);

  // Calculate the range of page numbers to display (maximum 10)
  const pageRange = Array.from(
    { length: Math.min(10, pageCount) },
    (_, index) => index + 1
  );

  return (
    <Stack spacing={2}>
      <Pagination
        count={pageCount}
        variant="outlined"
        shape="rounded"
        color="secondary"
        onChange={(event, value) => paginate(value)}
        style={{ margin: "auto auto" }}
      />
    </Stack>
  );
};

export default PaginationComponent;
