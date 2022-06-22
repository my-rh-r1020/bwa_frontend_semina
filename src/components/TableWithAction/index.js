import React from "react";
import { Table } from "react-bootstrap";

// Import Component
import Tbody from "../TbodyWithAction";
import Thead from "../Thead";
import Pagination from "../Pagination";

function TableWithAction({ withoutPagination, actionNotDisplay, handlePageClick, data, thead, tbody, editUrl, deleteAction, pages, customAction, status }) {
  return (
    <>
      <Table striped bordered hover style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
        <Thead text={thead} />
        <Tbody status={status} data={data} display={tbody} editUrl={editUrl} deleteAction={deleteAction} actionNotDisplay={actionNotDisplay} customAction={customAction} />
      </Table>
      {!withoutPagination && data.length ? <Pagination pages={pages} handlePageClick={handlePageClick} /> : ""}
    </>
  );
}

export default TableWithAction;
