// Import Libraries
import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

// Import Components
import Alerts from "../../components/Alerts";
import Breadcrumbs from "../../components/Breadcrumbs";
import SearchInput from "../../components/SearchInput";
import Table from "../../components/TableWithAction";

// Import Redux
import { fetchParticipants, setKeyword } from "../../redux/participants/actions";
import { deleteData } from "../../utils/fetchData";

export default function Participants() {
  const navigate = useNavigate(),
    dispatch = useDispatch();

  // Redux
  const user = useSelector((state) => state.auth),
    participants = useSelector((state) => state.participants),
    notif = useSelector((state) => state.notif);

  // Fetch Participants
  useEffect(() => {
    dispatch(fetchParticipants());
  }, [dispatch, participants.keyword]);

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
        dispatch(fetchParticipants());
      }
    });
  };

  return (
    <Container>
      {/* Breadcrumbs */}
      <Breadcrumbs text2nd="Participants" />

      {/* Notifications */}
      {notif.status && <Alerts variant={notif.variant} message={notif.message} />}

      {/* Search */}
      {/* <SearchInput name="keyword" /> */}

      {/* Table */}
      <Table status={participants.status} thead={["First Name", "Last Name", "Email", "Aksi"]} data={participants.data} tbody={["firstName", "lastName", "email"]} editUrl={"/participants/edit"} deleteAction={(id) => handleDelete(id)} />
    </Container>
  );
}
