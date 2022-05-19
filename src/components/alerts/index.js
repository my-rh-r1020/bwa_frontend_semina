import React from "react";
import { Alert } from "react-bootstrap";

function Alerts({ variant, message }) {
  return (
    <Alert style={{ marginBottom: "1.75rem" }} variant={variant}>
      {message}
    </Alert>
  );
}

export default Alerts;
