import React from "react";
import { Button } from "react-bootstrap";

// Props v1
// function ComponentButton(props) {
//   return <Button variant="primary">{props.children}</Button>;
// }

// Props v2
function ComponentButton({ children, variant, size, loading, disabled, action, className }) {
  return (
    <Button className={className} variant={variant} size={size} disabled={disabled} onClick={action}>
      {loading ? "Loading..." : children}
    </Button>
  );
}

export default ComponentButton;
