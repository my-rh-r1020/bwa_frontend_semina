// Import Libraries
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import EventsForm from "./form";

// Import Components
import Alerts from "../../components/Alerts";
import Breadcrumbs from "../../components/Breadcrumbs";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getData } from "../../utils/fetchData";

// Import Redux

export default function EventsEdit() {
  const navigate = useNavigate(),
    dispatch = useDispatch(),
    { eventsId } = useParams(),
    // Use State
    [isLoading, setIsLoading] = useState(false),
    [alert, setAlert] = useState({ status: false, variant: "", message: "" }),
    [form, setForm] = useState({ title: "", price: "", date: "", cover: "", about: "", venueName: "", tagline: "", keypoint: "", status: "", stock: "", category: "", speaker: "" });

  const handleChange = (e) => {
    if (e.target.name === "cover") {
      if (e?.target?.files[0]?.type === "image/jpg" || e?.target?.files[0]?.type === "image/jpeg" || e?.target?.files[0]?.type === "image/png") {
        var size = parseFloat(e.target.files[0].size / 3145728).toFixed(2);
      } else {
      }
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  // Fetch Event Data
  const fetchOneEvent = async () => {
    const res = await getData(`api/v1/events/${eventsId}`);

    setForm({
      ...form,
      title: res.data.data.title,
      price: res.data.data.price,
      date: res.data.data.date,
      cover: res.data.data.cover,
      about: res.data.data.about,
      venueName: res.data.data.venueName,
      tagline: res.data.data.tagline,
      keypoint: res.data.data.keypoint,
      status: res.data.data.status,
      stock: res.data.data.stock,
    });
  };

  useEffect(() => {
    fetchOneEvent();
  }, []);

  // Handle Update Data
  const handleSubmit = () => {};

  return (
    <Container>
      {/* Breadcrumbs */}
      <Breadcrumbs url2nd="/events" text2nd="Events" text3rd="Edit Data" />

      <h3 style={{ marginBottom: "1.25rem" }}>Edit Data Event</h3>

      {/* Alerts */}
      {alert.status && <Alerts variant={alert.variant} message={alert.message} />}

      {/* Form */}
      <EventsForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} isLoading={isLoading} />
    </Container>
  );
}
