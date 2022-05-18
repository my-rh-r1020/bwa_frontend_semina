import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import TextInput from "../TextInput";

function TextInputWithLabel({ name, value, type, onChange, placeholder, label }) {
  return (
    <FloatingLabel controlId="floatingInput" label={label} className="mb-3">
      <TextInput type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} />
    </FloatingLabel>
  );
}

export default TextInputWithLabel;
