import React from "react";

const Pagination = ({ curentPage, totalPages, onPageChange }) => {
  //   console.log(totalPages);
  return (
    <nav aria-label="...">
      <ul
        className="pagination pagination-sm text-truncate"
        style={{ "max-width": "300px" }}
      >
        {totalPages.map(page => (
          <li
            key={page}
            onClick={onPageChange}
            className="page-link"
            value={page + 1}
          >
            {page + 1}
          </li>
        ))}
        
      </ul>
    </nav>
  );
};

export default Pagination;
