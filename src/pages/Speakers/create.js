// Import Libraries
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postData } from "../../utils/fetchData";

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
    [isLoading, setIsLoading] = useState(false),
    [alert, setAlert] = useState({ status: false, variant: "", message: "" }),
    [form, setForm] = useState({
      name: "",
      role: "",
      file: "",
      avatar: "",
    });

  const handleChange = (e) => {
    if (e.target.name === "avatar") {
      if (e?.target?.files[0]?.type === "image/png" || e?.target?.files[0]?.type === "image/jpeg" || e?.target?.files[0]?.type === "image/jpg") {
        var size = parseFloat(e.target.files[0].size / 3145728).toFixed(2);

        if (size > 2) {
          setAlert({ ...alert, status: true, variant: "danger", message: "Your image size must less than 3 MB" });

          setForm({ ...form, file: "", [e.target.name]: "" });
        } else {
          setForm({ ...form, file: e.target.files[0], [e.target.name]: URL.createObjectURL(e.target.files[0]) });
        }
      } else {
        setAlert({ ...alert, status: true, variant: "danger", message: "Image type only PNG | JPG | JPEG" });
        setForm({ ...form, file: "", [e.target.name]: "" });
      }
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  // Handle Submit Data
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      // FormData
      let formData = new FormData();

      formData.append("name", form.name);
      formData.append("role", form.role);
      formData.append("avatar", form.file);

      const res = await postData("api/v1/speakers", formData, true);

      dispatch(setNotif(true, "success", `Successfully added speakers data for ${res.data.data.name}`));
      navigate("/speakers");
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setAlert({ ...alert, status: "true", variant: "danger", message: err.response.data.msg });
    }
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
