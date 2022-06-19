// Import Libraries
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getData, putData } from "../../utils/fetchData";
import { config } from "../../config";

// Import Components
import Alerts from "../../components/Alerts";
import Breadcrumbs from "../../components/Breadcrumbs";
import SpeakersForm from "./form";

// Import Redux
import { setNotif } from "../../redux/notif/actions";

export default function SpeakersEdit() {
  const navigate = useNavigate(),
    dispatch = useDispatch(),
    { speakersId } = useParams(),
    // Use State
    [isLoading, setIsLoading] = useState(false),
    [alert, setAlerts] = useState({ status: false, variant: "", message: "" }),
    [form, setForm] = useState({ name: "", role: "", file: "", avatar: "" });

  const handleChange = (e) => {
    if (e.target.name === "avatar") {
      if (e?.target?.files[0]?.type === "image/png" || e?.target?.files[0]?.type === "image/jpg" || e?.target?.files[0]?.type === "image/jpeg") {
        var size = parseFloat(e.target.files[0].size / 3145728).toFixed(2);

        if (size < 2) {
          setForm({ ...form, file: e.target.files[0], [e.target.name]: URL.createObjectURL(e.target.files[0]) });
        } else {
          setAlerts({ ...alert, status: true, variant: "danger", message: "Your image size must less than 3 MB" });
          setForm({ ...form, file: "", [e.target.name]: "" });
        }
      } else {
        setAlerts({ ...alert, status: true, variant: "danger", message: "Image type only PNG | JPG | JPEG" });
        setForm({ ...form, file: "", [e.target.name]: "" });
      }
    } else {
      setForm({ ...form, [e.target.name]: [e.target.value] });
    }
  };

  // Fetch one data from API
  const fetchOneSpeakers = async () => {
    const res = await getData(`api/v1/speakers/${speakersId}`);

    setForm({
      ...form,
      name: res.data.data.name,
      role: res.data.data.role,
      // Get Speaker Avatar API
      avatar: `${config.api_image}/avatar/${res.data.data.avatar}`,
    });
  };

  useEffect(() => {
    fetchOneSpeakers();
  }, []);

  // Handle Update Data
  const handleSubmit = async () => {
    setIsLoading(false);
    try {
      // FormData
      let formData = new FormData();

      formData.append("name", form.name);
      formData.append("role", form.role);
      formData.append("avatar", form.file);

      const res = await putData(`api/v1/speakers/${speakersId}`, formData, true);

      dispatch(setNotif(true, "success", `Successfully update speaker for ${res.data.data.name}`));
      navigate("/speakers");
      setIsLoading(true);
    } catch (err) {
      setAlerts({ ...alert, status: true, variant: "danger", message: err.response.data.msg });
      setIsLoading(false);
    }
  };

  return (
    <Container>
      {/* Breadcrumbs */}
      <Breadcrumbs url2nd="/speakers" text2nd="Speakers" text3rd="Edit Speakers" />

      <h3 style={{ marginBottom: "1.25rem" }}>Edit Data Speakers</h3>

      {/* Alert */}
      {alert.status && <Alerts variant={alert.variant} message={alert.message} />}

      {/* Form */}
      <SpeakersForm edit form={form} isLoading={isLoading} handleChange={handleChange} handleSubmit={handleSubmit} />
    </Container>
  );
}
