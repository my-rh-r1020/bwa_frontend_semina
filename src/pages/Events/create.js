// Import Libraries
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// Import Components
import Alerts from "../../components/Alerts";
import Breadcrumbs from "../../components/Breadcrumbs";
import EventsForm from "./form";

// Import Redux

export default function EventsCreate() {
  const navigate = useNavigate(),
    dispatch = useDispatch(),
    // Use State
    [alert, setAlert] = useState({ status: false, variant: "", message: "" }),
    [isLoading, setIsLoading] = useState(false),
    [form, setForm] = useState({ title: "", price: "", date: "", cover: "", about: "", venueName: "", tagline: "", keypoint: "", status: "", stock: "", category: "", speaker: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle Submit Data
  const handleSubmit = () => {};

  return (
    <Container>
      {/* Breadcrumbs */}
      <Breadcrumbs url2nd="/events" text2nd="Events" text3rd="Add Data" />

      <h3 style={{ marginBottom: "1.25rem" }}>Tambah Data Event</h3>

      {/* Alert */}
      {alert.status && <Alerts variant={alert.variant} message={alert.message} />}

      {/* Form */}
      <EventsForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} isLoading={isLoading} />
    </Container>
  );
}
