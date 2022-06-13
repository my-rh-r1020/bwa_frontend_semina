// Import Libraries
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";

// Import Components
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import Breadcrumbs from "../../components/Breadcrumbs";
import SearchInput from "../../components/SearchInput";
import Table from "../../components/TableWithAction";
import Alerts from "../../components/Alerts";

// Import Redux
import { fetchSpeakers, setKeyword } from "../../redux/speakers/actions";
import { setNotif } from "../../redux/notif/actions";
import { deleteData } from "../../utils/fetchData";

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
  }, [dispatch, speakers.keyword]);

  // Prevent to signin page after login
  useEffect(() => {
    return () => {
      if (!user.token) return navigate("/signin");
    };
  });

  // Delete Data
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
        const res = await deleteData(`api/v1/speakers/${id}`);
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Category ${res.data.data.name} has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(fetchSpeakers());
      }
    });
  };

  return (
    <Container>
      {/* Breadcrumbs */}
      <Breadcrumbs text2nd="Speakers" />

      {/* Notification */}
      {notif.status && <Alerts variant={notif.variant} message={notif.message} />}

      {/* Search */}
      <SearchInput name="keyword" value={speakers.keyword} handleChange={(e) => dispatch(setKeyword(e.target.value))} />

      {/* Button Add */}
      <Button variant="outline-primary" size="sm" action={() => navigate("/speakers/create")}>
        Add Data
      </Button>

      {/* Table */}
      <Table status={speakers.status} thead={["Nama", "Avatar", "Role", "Aksi"]} data={speakers.data} tbody={["name", "avatar", "role"]} editUrl={"/speakers/edit"} deleteAction={(id) => handleDelete(id)} />
    </Container>
  );
}

export default Speakers;
