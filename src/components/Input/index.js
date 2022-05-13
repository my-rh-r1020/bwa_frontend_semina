import React from "react";

// Props v1
function TextInput({ name, value, type, onChange, placeholder }) {
  return <input name={name} value={value} type={type} onChange={onChange} placeholder={placeholder} />;
}

// Props v2
// function TextInput(props) {
//   return <input name={props.name} value={props.value} type={props.type} onChange={props.onChange} placeholder={props.placeholder} />;
// }

export default TextInput;
