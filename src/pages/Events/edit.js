// Import Libraries
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { config } from "../../config";
import { getData, putData } from "../../utils/fetchData";
import EventsForm from "./form";

// Import Components
import Alerts from "../../components/Alerts";
import Breadcrumbs from "../../components/Breadcrumbs";

// Import Redux
import { setNotif } from "../../redux/notif/actions";
import { fetchListCategories, fetchListSpeakers } from "../../redux/lists/actions";

export default function EventsEdit() {
  const navigate = useNavigate(),
    dispatch = useDispatch(),
    { eventsId } = useParams(),
    // Use State
    [isLoading, setIsLoading] = useState(false),
    [alert, setAlert] = useState({ status: false, variant: "", message: "" }),
    [form, setForm] = useState({ title: "", price: "", date: "", file: "", cover: "", about: "", venueName: "", tagline: "", keypoint: "", status: "", stock: "", category: "", speaker: "" }),
    // Redux
    lists = useSelector((state) => state.lists);

  // UseEffect List Categories & Speaker
  useEffect(() => {
    dispatch(fetchListSpeakers());
    dispatch(fetchListCategories());
  }, [dispatch]);

  // UseEffect One Event
  useEffect(() => {
    fetchOneEvent();
  }, []);

  // Fetch One Event Data
  const fetchOneEvent = async () => {
    const res = await getData(`api/v1/events/${eventsId}`);

    setForm({
      ...form,
      title: res.data.data.title,
      price: res.data.data.price,
      date: res.data.data.date,
      cover: `${config.api_image}/cover_event/${res.data.data.cover}`,
      about: res.data.data.about,
      venueName: res.data.data.venueName,
      tagline: res.data.data.tagline,
      keypoint: res.data.data.keypoint,
      status: res.data.data.status,
      stock: res.data.data.stock,
    });
  };

  // Handle Plus Keypoint
  const handlePlusKeypoint = () => {
    let _temp = [...form.keypoint];
    _temp.push("");

    setForm({ ...form, keypoint: _temp });
  };

  // Handle Minus Keypoint
  const handleMinusKeypoint = () => {};

  // Handle Change Keypoint
  const handleChangeKeypoint = (e, i) => {
    let _temp = [...form.keypoint];
    _temp[i] = e.target.value;

    setForm({ ...form, keypoint: _temp });
  };

  // Handle Change
  const handleChange = (e) => {
    // Cek File Image
    if (e.target.name === "cover") {
      if (e?.target?.files[0]?.type === "image/jpg" || e?.target?.files[0]?.type === "image/jpeg" || e?.target?.files[0]?.type === "image/png") {
        var size = parseFloat(e.target.files[0].size / 3145728).toFixed(2);
        // Cek Size Image
        if (size < 2) {
          setForm({ ...form, file: e.target.files[0], [e.target.name]: URL.createObjectURL(e.target.files[0]) });
        } else {
          setAlert({ ...alert, status: true, variant: "danger", message: "Your image size must less than 3 MB" });
          setForm({ ...form, file: "", [e.target.name]: "" });
        }
      } else {
        setAlert({ ...alert, status: true, variant: "danger", message: "Image type only PNG | JPG | JPEG" });
        setForm({ ...form, file: "", [e.target.name]: "" });
      }
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  // Handle Update Data
  const handleSubmit = async () => {
    setIsLoading(false);
    try {
      const res = await putData(`api/v1/events/${eventsId}`);

      dispatch(setNotif(true, "success", `Successfully update event for ${res.data.data.title}`));
      navigate("/events");
      setIsLoading(true);
    } catch (err) {
      setIsLoading(false);
      setAlert({ ...alert, status: true, variant: "danger", message: err.response.data.msg });
    }
  };

  return (
    <Container>
      {/* Breadcrumbs */}
      <Breadcrumbs url2nd="/events" text2nd="Events" text3rd="Edit Data" />

      <h3 style={{ marginBottom: "1.25rem" }}>Edit Data Event</h3>

      {/* Alerts */}
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
