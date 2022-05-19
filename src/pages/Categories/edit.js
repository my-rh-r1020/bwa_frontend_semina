import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Import Components
import Breadcrumbs from "../../components/Breadcrumbs";
import CategoriesForm from "./form";
import Alerts from "../../components/Alerts";

function CategoriesEdit() {
  const navigate = useNavigate(),
    [form, setForm] = useState({
      name: "Backend Programmer",
      categories: "Programming",
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
      <Breadcrumbs url2nd="/categories" text2nd="Categories" text3rd="Edit Data" />

      {/* Alerts */}
      <Alerts variant="info" message="Please provide categories name" />

      {/* Form untuk 1 field*/}
      {/* <CategoriesForm name="categories" value={form.value} handleChange={handleChange} handleSubmit={handleSubmit} /> */}

      {/* Form untuk banyak field */}
      <CategoriesForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} />
    </Container>
  );
}

export default CategoriesEdit;
