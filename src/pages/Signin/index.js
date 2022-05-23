// Import Libraries
import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Import Component
import Alert from "../../components/Alerts";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput/index";
import Form from "./form";

// Import Redux
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/auth/actions";

// Import Fetch Data
import { postData } from "../../utils/fetchData";
import AlertMessage from "../../components/Alerts";

// function PageSignin() {
//   // UseState v1
//   // const [name, setName] = useState("");
//   // const [age, setAge] = useState("");

//   // UseState v2
//   // const users = [{ name: "Rifaldi", age: 24 }];

//   // State boolean
//   const [isBoolean, setisBoolean] = useState(false),
//     // State loading
//     [isloading, setisLoading] = useState(false),
//     // State error
//     [error, setError] = useState({
//       status: false,
//       message: "",
//     }),
//     // State form
//     [form, setForm] = useState({
//       name: "",
//       age: "",
//       id: 0,
//     }),
//     // State user
//     [users, setUsers] = useState([{ id: 1, name: "Rifaldi", age: 24 }]),
//     // State type submit
//     [type, setType] = useState("login");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleEdit = (data) => {
//     setForm({ name: data.name, age: data.age, id: data.id });
//     setType("Update");
//   };

//   const handleUpdate = (data) => {
//     const _temp = [...users];

//     _temp.forEach((user) => {
//       if (user.id === data.id) {
//         user.name = data.name;
//         user.age = data.age;
//       }
//     });

//     setUsers(_temp);
//     setType("login");
//   };

//   const validate = () => {
//     let error = false;

//     if (form.name === "") {
//       error = true;
//       setError({ status: true, message: "Name is required!" });
//     } else if (form.age === "") {
//       error = true;
//       setError({ status: true, message: "Age is required!" });
//     }

//     return error;
//   };

//   const onSubmit = () => {
//     setisLoading(true);

//     // API succesful check
//     if (!validate()) {
//       let _temp = [...users];
//       // Add data to array
//       _temp.push({ id: _temp[_temp.length - 1].id + 1, name: form.name, age: form.age });

//       setUsers(_temp);
//       setForm({ id: 0, name: "", age: "" });
//       setisLoading(false);
//     } else {
//       setisLoading(false);
//     }
//   };

//   return (
//     <div>
//       {error.status && <Alert message={error.message} type="error" />}
//       <h1>Form Signin</h1>
//       <TextInput placeholder="Your Name" type="text" value={form.name} name="name" onChange={(e) => handleChange(e)} />
//       <br />
//       <TextInput placeholder="Your Age" type="number" value={form.age} name="age" onChange={(e) => handleChange(e)} />
//       <br />
//       <br />
//       <Button
//         name={`${type === "login" ? "Login" : "Update"}`}
//         onClick={() => {
//           type === "login" ? onSubmit() : handleUpdate(form);
//         }}
//         loading={isloading}
//       />

//       <table style={{ border: "1px solid", width: "100%", textAlign: "center" }}>
//         <thead>
//           <th>Id</th>
//           <th>Name</th>
//           <th>Age</th>
//           <th>Action</th>
//         </thead>
//         <tbody>
//           {users.map((user) => {
//             return (
//               <tr>
//                 <td>{user.id}</td>
//                 <td>{user.name}</td>
//                 <td>{user.age}</td>
//                 <td>
//                   <Button name="Edit" onClick={() => handleEdit(user)} loading={isloading} />
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>

//       {/* {isBoolean ? (
//         <ul>
//           <li>Nama : {form.name}</li>
//           <li>Usia : {form.age}</li>
//         </ul>
//       ) : (
//         ""
//       )} */}
//     </div>
//   );
// }

function PageSignin() {
  const dispatch = useDispatch(),
    navigate = useNavigate();
  // Use State
  const [form, setForm] = useState({
      email: "",
      password: "",
    }),
    [isLoading, setIsLoading] = useState(false),
    [alert, setAlert] = useState({ status: false, type: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await postData(`api/v1/auth/signin`, form);

      dispatch(userLogin(res.data.data.token, "role", "username"));
      setIsLoading(false);

      setAlert({ status: true, type: "success", message: "Login Success. Please wait.." });

      navigate("/categories");
    } catch (err) {
      setAlert({
        ...alert,
        status: true,
        type: "danger",
        message: err.response.data.msg,
      });
      setIsLoading(false);
    }
  };

  return (
    <Container md={12} className="vh-100">
      <Card style={{ width: "50%" }} className="m-auto mt-5">
        <Card.Body>
          {/* Alerts */}
          {alert.status && <AlertMessage variant={alert.type} message={alert.message} />}
          <Card.Title className="text-center mt-3 mb-3">Form Signin</Card.Title>
          {/* Form */}
          <Form form={form} handleChange={handleChange} handleSubmit={handleSubmit} isLoading={isLoading} alert={alert} />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PageSignin;
