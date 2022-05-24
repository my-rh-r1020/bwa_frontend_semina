// Import Libraries
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Import Components
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import Breadcrumbs from "../../components/Breadcrumbs";
// import SearchInput from "../../components/SearchInput";
import Table from "../../components/TableWithAction";
import Alerts from "../../components/Alerts";

// Import Redux
import { fetchCategories } from "../../redux/categories/actions";
import { setNotif } from "../../redux/notif/actions";

function Categories() {
  const dispatch = useDispatch(),
    navigate = useNavigate(),
    [isLoading, setIsLoading] = useState(false);

  // Redux
  const user = useSelector((state) => state.auth),
    categories = useSelector((state) => state.categories),
    notif = useSelector((state) => state.notif);

  useEffect(() => {
    dispatch(fetchCategories());
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
      {/* Breadcrumbs v1*/}
      {/* <Breadcrumbs children="Categories" /> */}

      {/* Breadcrumbs v2 */}
      <Breadcrumbs text2nd="Categories" />

      {/* Notification */}
      {notif.status && <Alerts variant={notif.type} message={notif.message} />}

      {/* Search */}
      {/* <SearchInput /> */}

      {/* Button Add */}
      <Button variant="outline-primary" size="sm" action={() => navigate("/categories/create")}>
        Add Data
      </Button>

      {/* Table */}
      <Table thead={["Kategori", "Aksi"]} data={categories.data} tbody={["name"]} editUrl={"/categories/edit"} deleteAction={(id) => handleDelete(id)} />
    </Container>

    // Backup component
    // <Button variant="outline-primary" size="sm" action={() => setIsLoading(true)} loading={isLoading} disabled={isLoading}>
    //   Add Data
    // </Button>
  );
}

export default Categories;
