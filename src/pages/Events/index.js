// Import Librarys
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Import Components
import Alerts from "../../components/Alerts";
import Breadcrumbs from "../../components/Breadcrumbs";
import Button from "../../components/Button";
import SearchInput from "../../components/SearchInput";
import SelectBox from "../../components/SelectBox";
import Table from "../../components/TableWithAction";

// Import Redux
import { fetchEvents, setKeyword, setCategory, setSpeaker } from "../../redux/events/actions";
import { setNotif } from "../../redux/notif/actions";

export default function Events() {
  const navigate = useNavigate(),
    dispatch = useDispatch(),
    // Use State
    [isLoading, setIsLoading] = useState(false);

  // Redux
  const user = useSelector((state) => state.auth),
    events = useSelector((state) => state.events),
    notif = useSelector((state) => state.notif);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch, events.keyword]);

  // Prevent to signin page after login
  useEffect(() => {
    return () => {
      if (!user.token) return navigate("/signin");
    };
  });

  // Handle Delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to cancel this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // const res = await deleteData(`api/v1/speakers/${id}`);
        Swal.fire({
          position: "center",
          icon: "success",
          //   title: `Speakers ${res.data.data.name} has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });
        // dispatch(fetchEvents());
      }
    });
  };

  return (
    <Container>
      {/* Breadcrumbs */}
      <Breadcrumbs text2nd="Events" />

      {/* Notifications */}
      {notif.status && <Alerts variant={notif.variant} message={notif.message} />}

      <Row>
        {/* Search */}
        <Col>
          <SearchInput name="keyword" value={events.keyword} handleChange={(e) => dispatch(setKeyword(e.target.value))} />
        </Col>
        {/* Filter SelectBox 1 */}
        <Col>
          <SelectBox placeholder="Filter by Category" />
        </Col>
        {/* Filter SelectBox 2 */}
        <Col>
          <SelectBox placeholder="Filter by Speaker" />
        </Col>
      </Row>

      {/* Button Add */}
      <Button variant="outline-primary" size="sm" action={() => navigate("/events/create")}>
        Add Data
      </Button>

      {/* Table */}
      <Table status={events.status} thead={["Title", "Price", "Jadwal", "Cover", "Aksi"]} data={events.data} tbody={["title", "cover", "price", "date"]} editUrl={"/events/edit"} deleteAction={(id) => handleDelete(id)} />
    </Container>
  );
}
