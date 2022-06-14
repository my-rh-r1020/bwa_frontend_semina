import React from "react";
import { Form } from "react-bootstrap";

function ComponentSearchInput({ handleChange, query }) {
  return (
    <Form.Group className="mb-4 col-lg-6">
      <Form.Control type="text" placeholder="Search here" value={query} name={query} onChange={handleChange} />
    </Form.Group>
  );
}

export default ComponentSearchInput;
