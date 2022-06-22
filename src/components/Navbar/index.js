import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavLink from "../NavLink";
import Swal from "sweetalert2";

// Redux
import { userLogout } from "../../redux/auth/actions";

function ComponentNavbar({ bg, variant }) {
  const navigate = useNavigate(),
    dispatch = useDispatch(),
    // Handle Signout
    handleSignout = () => {
      dispatch(userLogout());

      // Alerts v2
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          // toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: "success",
        title: "Successfully Sign out",
      });

      navigate("/signout");
    };

  // Redux
  let user = useSelector((state) => state.auth);

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
        <Nav>{!user.token && <NavLink action={() => navigate("/signin")}></NavLink>}</Nav>
        <Nav>{user.token && <NavLink action={() => handleSignout()}>Sign Out</NavLink>}</Nav>
      </Container>
    </Navbar>
  );
}

export default ComponentNavbar;
