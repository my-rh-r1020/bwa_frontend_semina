import React from "react";
import { Table } from "react-bootstrap";

// Import Component
import Tbody from "../TbodyWithAction";
import Thead from "../Thead";

function TableWithAction({ withoutPagination, actionNotDisplay, handlePageClick, data, thead, tbody, editUrl, deleteAction, pages, customAction, status }) {
  return (
    <Table striped bordered hover style={{ marginTop: "1.5rem" }}>
      <Thead text={thead} />
      <Tbody status={status} data={data} display={tbody} editUrl={editUrl} deleteAction={deleteAction} actionNotDisplay={actionNotDisplay} customAction={customAction} />
    </Table>
  );
}

export default TableWithAction;
