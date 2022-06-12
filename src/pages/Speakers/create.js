// Import Libraries
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// Import Components
import Breadcrumbs from "../../components/Breadcrumbs";
import SpeakersForm from "./form";
import Alerts from "../../components/Alerts";

// Import Redux
import { setNotif } from "../../redux/notif/actions";

function SpeakersCreate() {
  const navigate = useNavigate(),
    dispatch = useDispatch(),
    // Use State
    [isLoading, setisLoading] = useState(false),
    [form, setForm] = useState({
      name: "",
      role: "",
      avatar: "",
    });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // TO DO Submit data
  };

  return (
    <Container>
      {/* Breadcrumbs */}
      <Breadcrumbs url2nd="/speakers" text2nd="Speakers" text3rd="Add Data" />

      <h3 style={{ marginBottom: "1.25rem" }}>Tambah Data Speaker</h3>

      {/* Alerts */}
      {alert.status && <Alerts variant={alert.variant} message={alert.message} />}

      {/* Form untuk banyak field */}
      <SpeakersForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} isLoading={isLoading} />
    </Container>
  );
}

export default SpeakersCreate;
