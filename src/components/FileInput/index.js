import React from "react";
import { Form } from "react-bootstrap";

function FileInput({ type, size, name, onChange, value, label }) {
  return (
    <Form.Group controlId="formFileSm" className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} size={size} name={name} onChange={onChange} />
    </Form.Group>
  );
}

export default FileInput;
