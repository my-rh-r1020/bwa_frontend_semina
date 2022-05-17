import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavLink from "../NavLink";

function ComponentNavbar({ bg, variant }) {
  let navigate = useNavigate();

  return (
    <Navbar bg={bg} variant={variant}>
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink onClick={() => navigate("/Categories")}>Categories</NavLink>
          <NavLink onClick={() => navigate("/Speakers")}>Speakers</NavLink>
          <NavLink onClick={() => navigate("/Event")}>Event</NavLink>
          <NavLink onClick={() => navigate("/Participant")}>Participant</NavLink>
          <NavLink onClick={() => navigate("/Transactions")}>Transactions</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default ComponentNavbar;
