import React, { useState } from "react";
import { Link } from "react-router-dom";

import Alert from "../../components/alerts";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput/index";

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
  return (
    <>
      <main>
        <h2>Halaman Signin</h2>
        <p>Please login with your account</p>
      </main>
      <nav>
        <Link to="/categories">Categories</Link>
      </nav>
    </>
  );
}

export default PageSignin;
