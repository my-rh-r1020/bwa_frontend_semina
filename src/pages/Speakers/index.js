import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Import Components
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import Breadcrumbs from "../../components/Breadcrumbs";
import SearchInput from "../../components/SearchInput";
import Table from "../../components/TableWithAction";

function Speakers() {
  const navigate = useNavigate(),
    [isLoading, setIsLoading] = useState(false),
    data = [{ id: 1, name: "Rifaldi", role: "Backend" }];

  return (
    <Container>
      {/* Breadcrumbs */}
      <Breadcrumbs text2nd="Speakers" />

      {/* Search */}
      <SearchInput />

      {/* Button Add */}
      <Button variant="outline-primary" size="sm" action={() => navigate("/speakers/create")}>
        Add Data
      </Button>

      {/* Table */}
      <Table thead={["Nama", "Role", "Aksi"]} data={data} tbody={["name", "role"]} />
    </Container>
  );
}

export default Speakers;
