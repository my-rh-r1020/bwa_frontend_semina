// Import Librarys
import React, { useEffect } from "react";
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
import { fetchListCategories } from "../../redux/lists/actions";
import { setNotif } from "../../redux/notif/actions";

export default function Events() {
  const navigate = useNavigate(),
    dispatch = useDispatch();

  // Redux
  const user = useSelector((state) => state.auth),
    events = useSelector((state) => state.events),
    notif = useSelector((state) => state.notif),
    lists = useSelector((state) => state.lists);

  // Fetch Event
  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch, events.keyword, events.category]);

  // Fetch List Category
  useEffect(() => {
    dispatch(fetchListCategories());
  }, [dispatch]);

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
          <SelectBox placeholder="Category Filters" handleChange={(e) => dispatch(setCategory(e))} options={lists.categories} name="category" value={events.categories} isClearable={true} />
        </Col>
        {/* Filter SelectBox 2 */}
        <Col>
          <SelectBox placeholder="Speaker Filters" />
        </Col>
      </Row>

      {/* Button Add */}
      <Button variant="outline-primary" size="sm" action={() => navigate("/events/create")}>
        Add Data
      </Button>

      {/* Table */}
      <Table
        status={events.status}
        thead={["Event", "Harga", "Jadwal", "Banner", "Kategori", "Aksi"]}
        data={events.data}
        tbody={["title", "price", "date", "cover", "categoryName"]}
        editUrl={"/events/edit"}
        deleteAction={(id) => handleDelete(id)}
      />
    </Container>
  );
}
