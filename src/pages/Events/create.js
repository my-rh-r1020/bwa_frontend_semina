// Import Libraries
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postData } from "../../utils/fetchData";

// Import Components
import Alerts from "../../components/Alerts";
import Breadcrumbs from "../../components/Breadcrumbs";
import EventsForm from "./form";

// Import Redux
import { setNotif } from "../../redux/notif/actions";
import { fetchListCategories, fetchListSpeakers } from "../../redux/lists/actions";

export default function EventsCreate() {
  const navigate = useNavigate(),
    dispatch = useDispatch(),
    // Use State
    [alert, setAlert] = useState({ status: false, variant: "", message: "" }),
    [isLoading, setIsLoading] = useState(false),
    [form, setForm] = useState({ title: "", price: "", date: "", file: "", cover: "", about: "", venueName: "", tagline: "", keypoint: [""], status: "", stock: "", category: "", speaker: "" }),
    // Redux
    lists = useSelector((state) => state.lists);

  useEffect(() => {
    dispatch(fetchListSpeakers());
    dispatch(fetchListCategories());
  }, [dispatch]);

  // Handle Add Keypoint
  const handlePlusKeypoint = () => {
    let _temp = [...form.keypoint];
    _temp.push("");

    setForm({ ...form, keypoint: _temp });
  };

  // Handle Minus Keypoint
  const handleMinusKeypoint = (index) => {
    let _temp = [...form.keypoint],
      removeIndex = _temp
        .map((item, i) => {
          return i;
        })
        .indexOf(index);

    // Hapus Index Keypoint
    _temp.splice(removeIndex, 1);

    setForm({ ...form, keypoint: _temp });
  };

  // Handle Change Keypoint
  const handleChangeKeypoint = (e, i) => {
    let _temp = [...form.keypoint];
    _temp[i] = e.target.value;

    setForm({ ...form, keypoint: _temp });
  };

  // Handle Change
  const handleChange = (e) => {
    if (e.target.name === "cover") {
      if (e?.target?.files[0]?.type === "image/jpg" || e?.target?.files[0]?.type === "image/png" || e?.target?.files[0]?.type === "image/jpeg") {
        var size = parseFloat(e.target.files[0].size / 3145728).toFixed(2);
        // Cek Size Image
        if (size < 2) {
          setForm({ ...form, file: e.target.files[0], [e.target.name]: URL.createObjectURL(e.target.files[0]) });
        } else {
          setAlert({ status: true, variant: "danger", message: "Your image size must less than 3 MB" });
          setForm({ ...form, file: "", [e.target.name]: "" });
        }
      } else {
        setAlert({ status: true, variant: "danger", message: "Image type only PNG | JPG | JPEG" });
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
      const res = await postData("api/v1/events");

      dispatch(setNotif(true, "success", `Successfully added event for ${res.data.data.name}`));
      navigate("/events");
      setIsLoading(true);
    } catch (err) {
      setIsLoading(false);
      setAlert({ ...alert, status: true, variant: "danger", message: err.respon.data.msg });
    }
  };

  return (
    <Container>
      {/* Breadcrumbs */}
      <Breadcrumbs url2nd="/events" text2nd="Events" text3rd="Add Data" />

      <h3 style={{ marginBottom: "1.25rem" }}>Tambah Data Event</h3>

      {/* Alert */}
      {alert.status && <Alerts variant={alert.variant} message={alert.message} />}

      {/* Form */}
      <EventsForm
        form={form}
        lists={lists}
        handleChange={handleChange}
        handleChangeKeypoint={handleChangeKeypoint}
        handlePlusKeypoint={handlePlusKeypoint}
        handleMinusKeypoint={handleMinusKeypoint}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </Container>
  );
}
