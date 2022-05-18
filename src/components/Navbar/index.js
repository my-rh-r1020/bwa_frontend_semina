import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavLink from "../NavLink";

function ComponentNavbar({ bg, variant }) {
  const navigate = useNavigate(),
    isSignin = false;

  return (
    <Navbar bg={bg} variant={variant}>
      <Container>
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink action={() => navigate("/categories")}>Categories</NavLink>
          <NavLink action={() => navigate("/speakers")}>Speakers</NavLink>
          <NavLink action={() => navigate("/events")}>Event</NavLink>
          <NavLink action={() => navigate("/participant")}>Participant</NavLink>
          <NavLink action={() => navigate("/transactions")}>Transactions</NavLink>
        </Nav>
        <Nav>{!isSignin && <NavLink action={() => navigate("/signin")}>Sign In</NavLink>}</Nav>
        <Nav>{isSignin && <NavLink href="#">Username</NavLink>}</Nav>
      </Container>
    </Navbar>
  );
}

export default ComponentNavbar;
