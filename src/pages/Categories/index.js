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
// import SearchInput from "../../components/SearchInput";
import Table from "../../components/TableWithAction";
import Alerts from "../../components/Alerts";

// Import Redux
import { fetchCategories, setPage } from "../../redux/categories/actions";
import { setNotif } from "../../redux/notif/actions";
import { deleteData } from "../../utils/fetchData";

function Categories() {
  const dispatch = useDispatch(),
    navigate = useNavigate(),
    [isLoading, setIsLoading] = useState(false);

  // Redux
  const user = useSelector((state) => state.auth),
    categories = useSelector((state) => state.categories),
    notif = useSelector((state) => state.notif);

  // Fetch Categories
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch, categories.page]);

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
      // cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteData(`api/v1/categories/${id}`);
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Category ${res.data.data.name} has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(fetchCategories());
      }
    });
  };

  return (
    <Container>
      {/* Breadcrumbs v1*/}
      {/* <Breadcrumbs children="Categories" /> */}

      {/* Breadcrumbs v2 */}
      <Breadcrumbs text2nd="Categories" />

      {/* Notification */}
      {notif.status && <Alerts variant={notif.variant} message={notif.message} />}

      {/* Search */}
      {/* <SearchInput /> */}

      {/* Button Add */}
      <Button variant="outline-primary" size="sm" action={() => navigate("/categories/create")}>
        Add Data
      </Button>

      {/* Table */}
      <Table
        status={categories.status}
        thead={["Kategori", "Aksi"]}
        data={categories.data}
        tbody={["name"]}
        editUrl={"/categories/edit"}
        deleteAction={(id) => handleDelete(id)}
        pages={categories.page}
        handlePageClick={({ selected }) => dispatch(setPage(selected + 1))}
      />
    </Container>

    // Backup component
    // <Button variant="outline-primary" size="sm" action={() => setIsLoading(true)} loading={isLoading} disabled={isLoading}>
    //   Add Data
    // </Button>
  );
}

export default Categories;
