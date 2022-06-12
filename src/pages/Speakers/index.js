// Import Libraries
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Import Components
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import Breadcrumbs from "../../components/Breadcrumbs";
import SearchInput from "../../components/SearchInput";
import Table from "../../components/TableWithAction";
import Alerts from "../../components/Alerts";

// Import Redux
import { fetchSpeakers } from "../../redux/speakers/actions";
import { setNotif } from "../../redux/notif/actions";

function Speakers() {
  const dispatch = useDispatch(),
    navigate = useNavigate(),
    [isLoading, setIsLoading] = useState(false);

  // Redux
  const user = useSelector((state) => state.auth),
    speakers = useSelector((state) => state.speakers),
    notif = useSelector((state) => state.notif);

  useEffect(() => {
    dispatch(fetchSpeakers());
  }, []);

  // Prevent to signin page after login
  useEffect(() => {
    return () => {
      if (!user.token) return navigate("/signin");
    };
  });

  // Delete Data
  const handleDelete = (id) => {
    console.log(id);
  };

  return (
    <Container>
      {/* Breadcrumbs */}
      <Breadcrumbs text2nd="Speakers" />

      {/* Notification */}
      {notif.status && <Alerts variant={notif.variant} message={notif.message} />}

      {/* Search */}
      {/* <SearchInput /> */}

      {/* Button Add */}
      <Button variant="outline-primary" size="sm" action={() => navigate("/speakers/create")}>
        Add Data
      </Button>

      {/* Table */}
      <Table thead={["Nama", "Role", "Aksi"]} data={speakers.data} tbody={["name", "role"]} editUrl={"/speakers/edit"} deleteAction={(id) => handleDelete(id)} />
    </Container>
  );
}

export default Speakers;
