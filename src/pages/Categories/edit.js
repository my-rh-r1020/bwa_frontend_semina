import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

// Import Components
import Breadcrumbs from "../../components/Breadcrumbs";
import CategoriesForm from "./form";
import Alerts from "../../components/Alerts";
import { getData, putData } from "../../utils/fetchData";

// Import Redux
import { setNotif } from "../../redux/notif/actions";

function CategoriesEdit() {
  // Declare State
  const navigate = useNavigate(),
    dispatch = useDispatch(),
    { categoryId } = useParams(),
    // UseState
    [isLoading, setIsLoading] = useState(false),
    [alert, setAlert] = useState({ status: false, variant: "", message: "" }),
    [form, setForm] = useState({ name: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Fetch one data from API
  const fetchOneCategories = async () => {
    const res = await getData(`api/v1/categories/${categoryId}`);

    setForm({ ...form, name: res.data.data.name });
  };

  useEffect(() => {
    fetchOneCategories();
  }, []);

  // Handle Update Data
  const handleSubmit = async () => {
    try {
      const res = await putData(`api/v1/categories/${categoryId}`, form);

      dispatch(setNotif(true, "success", `Successfully update category for ${res.data.data.name}`));
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
      <Breadcrumbs url2nd="/categories" text2nd="Categories" text3rd="Edit Category" />

      <h3 style={{ marginBottom: "1.25rem" }}>Edit Data Category</h3>

      {/* Alerts */}
      {alert.status && <Alerts variant={alert.variant} message={alert.message} />}

      {/* Form untuk 1 field*/}
      {/* <CategoriesForm name="categories" value={form.value} handleChange={handleChange} handleSubmit={handleSubmit} /> */}

      {/* Form untuk banyak field */}
      <CategoriesForm edit form={form} isLoading={isLoading} handleChange={handleChange} handleSubmit={handleSubmit} />
    </Container>
  );
}

export default CategoriesEdit;
