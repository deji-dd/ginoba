import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Do from "./pages/Do";
import Contact from "./pages/Contact";
import GetInvolved from "./pages/GetInvolved";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/what-we-do" element={<Do />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/get-involved" element={<GetInvolved />} />
      </Routes>
    </div>
  );
}

export default App;
