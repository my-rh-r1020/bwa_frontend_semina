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
          <NavLink action={() => navigate("/categories")}>Kategori</NavLink>
          <NavLink action={() => navigate("/speakers")}>Pembicara</NavLink>
          <NavLink action={() => navigate("/events")}>Event</NavLink>
          <NavLink action={() => navigate("/participants")}>Peserta</NavLink>
          <NavLink action={() => navigate("/transactions")}>Transaksi</NavLink>
        </Nav>
        <Nav>{!isSignin && <NavLink action={() => navigate("/signin")}>Sign In</NavLink>}</Nav>
        <Nav>{isSignin && <NavLink href="#">Username</NavLink>}</Nav>
      </Container>
    </Navbar>
  );
}

export default ComponentNavbar;
