import React from "react";
import propTypes from "prop-types";
import { Form } from "react-bootstrap";

// Props v1
function TextInput({ name, value, type, onChange, placeholder }) {
  return <Form.Control type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} />;
}

// Props v2
// function TextInput(props) {
//   return <input name={props.name} value={props.value} type={props.type} onChange={props.onChange} placeholder={props.placeholder} />;
// }

// TextInput.defaultProps = {
//   type: "text",
// };

// TextInput.propTypes = {
//   name: propTypes.string,
//   type: propTypes.string,
//   placeholder: propTypes.string,
//   onChange: propTypes.func,
//   value: propTypes.oneOfType([propTypes.string, propTypes.number]),
// };

export default TextInput;
