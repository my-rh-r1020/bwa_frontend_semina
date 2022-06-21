import React from "react";
import { Form } from "react-bootstrap";

function ComponentSearchInput({ handleChange, query, className, disabled }) {
  return (
    <Form.Group className={className}>
      <Form.Control type="text" placeholder="Search here" value={query} name={query} onChange={handleChange} disabled={disabled} />
    </Form.Group>
  );
}

export default ComponentSearchInput;
