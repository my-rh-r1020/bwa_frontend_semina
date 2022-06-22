// Import Libraries
import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Pages
import PageSignin from "./pages/Signin";
import Categories from "./pages/Categories";
import CategoriesCreate from "./pages/Categories/create";
import CategoriesEdit from "./pages/Categories/edit";
import Navbar from "./components/Navbar";
import Speakers from "./pages/Speakers";
import SpeakersCreate from "./pages/Speakers/create";
import SpeakersEdit from "./pages/Speakers/edit";
import Events from "./pages/Events";
import EventsCreate from "./pages/Events/create";
import EventsEdit from "./pages/Events/edit";
import Participants from "./pages/Participants";
import Transactions from "./pages/Transactions";
import PageSignout from "./pages/Signout";

// Import Listener
import { listen } from "./redux/listener";

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
//   );
// }

function App() {
  React.useEffect(() => {
    listen();
  }, []);
  return (
    // Router App
    <BrowserRouter>
      <Navbar bg="dark" variant="dark" />
      <Routes>
        {/* Sign In */}
        <Route path="signin" element={<PageSignin />} />

        {/* Categories */}
        <Route path="categories" element={<Categories />} />
        <Route path="categories/create" element={<CategoriesCreate />} />
        <Route path="categories/edit/:categoryId" element={<CategoriesEdit />} />

        {/* Speakers */}
        <Route path="speakers" element={<Speakers />} />
        <Route path="speakers/create" element={<SpeakersCreate />} />
        <Route path="speakers/edit/:speakersId" element={<SpeakersEdit />} />

        {/* Events */}
        <Route path="events" element={<Events />} />
        <Route path="events/create" element={<EventsCreate />} />
        <Route path="events/edit/:eventsId" element={<EventsEdit />} />

        {/* Participants */}
        <Route path="participants" element={<Participants />} />

        {/* Transactions */}
        <Route path="transactions" element={<Transactions />} />

        {/* Sign Out */}
        <Route path="signout" element={<PageSignout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
