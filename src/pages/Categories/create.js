// Import Libraries
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { postData } from "../../utils/fetchData";
import { useDispatch } from "react-redux";

// Import Components
import Breadcrumbs from "../../components/Breadcrumbs";
import CategoriesForm from "./form";
import Alerts from "../../components/Alerts";

// Import Redux
import { setNotif } from "../../redux/notif/actions";

function CategoriesCreate() {
  const navigate = useNavigate(),
    dispatch = useDispatch(),
    // Use State
    [form, setForm] = useState({
      name: "",
    }),
    [isLoading, setIsLoading] = useState(false),
    [alert, setAlert] = useState({ status: false, variant: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle Submit Data
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await postData("api/v1/categories", form);

      dispatch(setNotif(true, "success", `Successfully added category name for ${res.data.data.name}`));
      navigate("/categories");
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setAlert({ ...alert, status: "true", variant: "danger", message: err.response.data.msg });
    }
  };

  return (
    <Container>
      {/* Breadcrumbs */}
      <Breadcrumbs url2nd="/categories" text2nd="Categories" text3rd="Add Data" />

      <h3 style={{ marginBottom: "1.25rem" }}>Tambah Data Category</h3>

      {/* Alerts */}
      {alert.status && <Alerts variant={alert.variant} message={alert.message} />}

      {/* Form untuk 1 field*/}
      {/* <CategoriesForm name="categories" value={form.value} handleChange={handleChange} handleSubmit={handleSubmit} /> */}

      {/* Form untuk banyak field */}
      <CategoriesForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} isLoading={isLoading} />
    </Container>
  );
}

export default CategoriesCreate;
