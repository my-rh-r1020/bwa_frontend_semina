import React from "react";
import { Table } from "react-bootstrap";

// Import Component
import Tbody from "../TbodyWithAction";
import Thead from "../Thead";

function TableWithAction({ withoutPagination, actionNotDisplay, handlePageClick, data, thead, tbody, editUrl, deleteAction, pages, customAction }) {
  return (
    <Table striped bordered hover>
      <Thead text={thead} />
      <Tbody data={data} display={tbody} editUrl={editUrl} deleteAction={deleteAction} actionNotDisplay={actionNotDisplay} customAction={customAction} />
    </Table>
  );
}

export default TableWithAction;
