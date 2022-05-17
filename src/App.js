import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageSignin from "./pages/Signin";
import Categories from "./pages/Categories";
import Navbar from "./components/Navbar";

// function App() {
//   // Use State
//   const [categories, setCategories] = useState([]),
//     [speakers, setSpeakers] = useState([]),
//     [keyword, setKeyword] = useState([]);

//   // // Component Did
//   // React.useEffect(() => {
//   //   console.log("This use effect Did 1");
//   // });

//   // React.useEffect(() => {
//   //   console.log("This use effect Did 2");
//   // }, [tombol]);

//   // Get data categories from API
//   const getAllCategories = async () => {
//     const res = await axios.get("http://localhost:4000/api/v1/categories", {
//       headers: {
//         authorization:
//           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmlmYWxkaSBIZXJpa3NvbiIsInVzZXJJZCI6IjYyNGZlZjgxNjMzYjY4ODk5NWYzMGJiMiIsInJvbGUiOiJzdXBlci1hZG1pbiIsImVtYWlsIjoicmhlcmlrc29uLm15QGdtYWlsLmNvbSIsImlhdCI6MTY1Mjc3NTYxM30.4Luu3E-Cjzgd59PIHGWg2Q2TrytlGJ0G4kkKItkfZ-Q",
//       },
//     });
//     setCategories(res.data.data);
//   };

//   // Get data speakers from API
//   const getAllSpeaker = async () => {
//     const res = await axios.get(`http://localhost:4000/api/v1/speakers?keyword=${keyword}`, {
//       headers: {
//         authorization:
//           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmlmYWxkaSBIZXJpa3NvbiIsInVzZXJJZCI6IjYyNGZlZjgxNjMzYjY4ODk5NWYzMGJiMiIsInJvbGUiOiJzdXBlci1hZG1pbiIsImVtYWlsIjoicmhlcmlrc29uLm15QGdtYWlsLmNvbSIsImlhdCI6MTY1Mjc3NTYxM30.4Luu3E-Cjzgd59PIHGWg2Q2TrytlGJ0G4kkKItkfZ-Q",
//       },
//     });
//     setSpeakers(res.data.data);
//   };

//   // Component DidMount
//   React.useEffect(() => {
//     getAllCategories();
//   }, []);

//   React.useEffect(() => {
//     getAllSpeaker();
//   }, [keyword]);

//   return (
//     <div>
//       <h2>Belajar React useEffect</h2>

//       <input type="text" value={keyword} name="keyword" onChange={(e) => setKeyword(e.target.value)} />

//       <h4>Data Categories</h4>
//       <ul>
//         {/* Categories */}
//         {categories.map((category, i) => {
//           return <li key={i}>{category.name}</li>;
//         })}
//       </ul>

//       <h4>Data Speakers</h4>
//       <ul>
//         {/* Speakers */}
//         {speakers.map((speaker, i) => {
//           return <li key={i}>{speaker.name}</li>;
//         })}
//       </ul>
//     </div>

//     // ===================================================

//     // <div>{ <PageSignin /> }</div>

//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PageSignin />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
