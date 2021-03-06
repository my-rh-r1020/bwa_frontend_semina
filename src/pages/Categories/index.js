import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Import Components
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import Breadcrumbs from "../../components/Breadcrumbs";
import SearchInput from "../../components/SearchInput";
import Table from "../../components/TableWithAction";

function Categories() {
  const navigate = useNavigate(),
    [isLoading, setIsLoading] = useState(false),
    data = [{ name: "Backend", id: 1, aksi: "Edit | Delete" }];

  return (
    <Container>
      {/* Breadcrumbs v1*/}
      {/* <Breadcrumbs children="Categories" /> */}

      {/* Breadcrumbs v2 */}
      <Breadcrumbs text2nd="Categories" />

      {/* Search */}
      <SearchInput />

      {/* Button Add */}
      <Button variant="outline-primary" size="sm" action={() => navigate("/categories/create")}>
        Add Data
      </Button>

      {/* Table */}
      <Table thead={["Kategori", "Aksi"]} data={data} tbody={["name", "aksi"]} />
    </Container>

    // Backup component
    // <Button variant="outline-primary" size="sm" action={() => setIsLoading(true)} loading={isLoading} disabled={isLoading}>
    //   Add Data
    // </Button>
  );
}

export default Categories;
