import React from "react";
import ReactPaginate from "react-paginate";

export const totalPages = data => {
  return [...Array(data.data.total_pages).keys()].filter(x => x !== 0);
};

const Paginateion = ({ totalPages, handlePageChange, forcePage }) => {
  return (
    <div>
      {totalPages.length > 1 ? (
        <ReactPaginate
          previousLabel={"<-"}
          previousLinkClassName={"previous-pagination-butto"}
          nextLinkClassName={"next-pagination-butto"}
          nextLabel={"->"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={totalPages.length - 1}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeLinkClassName={"active-page-paginate"}
          pageLinkClassName={"each-page-paginate"}
          forcePage={forcePage}
        />
      ) : null}
    </div>
  );
};

export default Paginateion;
