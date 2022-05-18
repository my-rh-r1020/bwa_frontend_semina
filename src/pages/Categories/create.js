import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Import Components
import Button from "../../components/Button";
import Breadcrumbs from "../../components/Breadcrumbs";
import CategoriesForm from "./form";

function CategoriesCreate() {
  const navigate = useNavigate(),
    [form, setForm] = useState({
      name: "",
    });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // TODO: submit form
  };

  return (
    <Container>
      {/* Breadcrumbs */}
      <Breadcrumbs url2nd="/categories" text2nd="Categories" text3rd="Add Data" />

      {/* Form */}
      <CategoriesForm name="categories" value={form.value} handleChange={handleChange} handleSubmit={handleSubmit} />
    </Container>
  );
}

export default CategoriesCreate;
