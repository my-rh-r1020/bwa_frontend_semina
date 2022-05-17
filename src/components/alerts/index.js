import React from "react";

function Alert({ message, type }) {
  return <div style={{ color: `${type === "error" && "red"}` }}>{message}</div>;
}

export default Alert;
