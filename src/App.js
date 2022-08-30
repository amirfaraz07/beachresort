// import React from "react";
// import './App.css';

// import Home from "./pages/Home";
// import Rooms from "./pages/Rooms";
// import SingleRoom from "./pages/SingleRoom";
// import Error from "./pages/Error";

// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";


// function App() {
//   return (
//     <>
//       <Routes exact path="/" element={<Home/>}/>
//       <Routes exact path="/rooms/" element={<Rooms/>}/>
//       <Routes exact path="/single-room" element={<SingleRoom/>}/>
//     </>
//   );
// }

// export default App;

import React from 'react';
import './App.css';


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// IMPORT PAGES
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/room/:slug" element={<SingleRoom />} />
      <Route path="*" element={<Error />} />
    </Routes>
  
    </>
  );
}

export default App;
