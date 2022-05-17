import React, { useState } from "react";
// import PageSignin from "./pages/Signin";
import axios from "axios";

function App() {
  const [categories, setCategories] = useState([]);

  // console.log(tombol, tombol2);

  // // Component Did
  // React.useEffect(() => {
  //   console.log("This use effect Did 1");
  // });

  // React.useEffect(() => {
  //   console.log("This use effect Did 2");
  // }, [tombol]);

  const getAllCategories = async () => {
    const res = await axios.get("http://localhost:4000/api/v1/categories", {
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmlmYWxkaSBIZXJpa3NvbiIsInVzZXJJZCI6IjYyNGZlZjgxNjMzYjY4ODk5NWYzMGJiMiIsInJvbGUiOiJzdXBlci1hZG1pbiIsImVtYWlsIjoicmhlcmlrc29uLm15QGdtYWlsLmNvbSIsImlhdCI6MTY1Mjc3NTYxM30.4Luu3E-Cjzgd59PIHGWg2Q2TrytlGJ0G4kkKItkfZ-Q",
      },
    });
    setCategories(res.data.data);
  };

  console.log(categories);

  // Component DidMount
  React.useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div>
      <h2>Belajar React useEffect</h2>

      <ul>
        {categories.map((category) => {
          return categories.name;
        })}
      </ul>

      {/* <button onClick={() => setCategories("Frontend Programmer")}>Change Categories</button> */}
    </div>

    // ===================================================

    // <div>{ <PageSignin /> }</div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
