import React from "react";
import { Form } from "react-bootstrap";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

// SelectBox v1
export default function SelectBox({ name, options, isClearable, value, placeholder, handleChange, label }) {
  return (
    <Form.Group className="mb-2">
      {label && <Form.Label>{label}</Form.Label>}
      <Select defaultValue={value} name={name} isClearable={isClearable} placeholder={placeholder} options={options} onChange={handleChange} value={value} />
    </Form.Group>
  );
}

// SelectBox v2
// export default function SelectBox({ name, label, options, value, placeholder, isClearable, handleChange }) {
//   return (
//     <Form.Group className="mb-2">
//       {label && <Form.Label>{label}</Form.Label>}
//       <Select closeMenuOnSelect={false} components={animatedComponents} name={name} defaultValue={value} placeholder={placeholder} isMulti options={options} onChange={handleChange} />
//     </Form.Group>
//   );
// }
