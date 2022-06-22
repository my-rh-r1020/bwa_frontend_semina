import React from "react";
import ReactPaginate from "react-paginate";

export default function ComponentPagination({ page = 1, handlePageClick, pages }) {
  return (
    <ReactPaginate
      previousLabel="<"
      nextLabel=">"
      breakLabel={
        <span role="button" className="page-link">
          ...
        </span>
      }
      breakClassName="page-item"
      pageCount={pages}
      marginPagesDisplayed={1}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName="pagination"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      activeClassName="active"
      forcePage={page - 1}
    />
  );
}
