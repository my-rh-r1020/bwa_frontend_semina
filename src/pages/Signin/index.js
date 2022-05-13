import React, { useState } from "react";
import Alert from "../../alerts";
import Button from "../../components/Button";
import TextInput from "../../components/Input/index";

function PageSignin() {
  // UseState v1
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");

  // UseState v2
  const [isBoolean, setisBoolean] = useState(false);
  const [isloading, setisLoading] = useState(false);
  const [error, setError] = useState({
    status: false,
    message: "",
  });
  const [form, setForm] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value }, { ...form, [e.target.age]: e.target.value });
  };

  const validate = () => {
    let error = false;

    if (form.name === "") {
      error = true;
      setError({ status: true, message: "Name is required!" });
    }
    if (form.age === "") {
      error = true;
      setError({ status: true, message: "Age is required!" });
    }

    return error;
  };

  const onSubmit = () => {
    setisLoading(true);

    // API succesful check
    if (!validate) {
      setisBoolean(true);
      setisLoading(false);
    } else {
      error(false);
    }
  };

  return (
    <div>
      {error.status && <Alert message={error.message} type="error" />}
      <h1>Form Signin</h1>
      <TextInput placeholder="Your Name" type="text" value={form.name} name="name" onChange={(e) => handleChange(e)} />
      <br />
      <TextInput placeholder="Your Age" type="number" value={form.age} name="age" onChange={(e) => handleChange(e)} />
      <br />
      <br />
      <Button name="Login" onClick={() => onSubmit()} loading={isloading} />

      {isBoolean ? (
        <ul>
          <li>Nama : {form.name}</li>
          <li>Usia : {form.age}</li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default PageSignin;
