import React from "react";
import { Nav } from "react-bootstrap";

function ComponentNavLink({ action, children }) {
  return <Nav.Link onClick={action}>{children}</Nav.Link>;
}

export default ComponentNavLink;
