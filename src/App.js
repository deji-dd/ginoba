import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Do from "./pages/Do";
import Contact from "./pages/Contact";
import GetInvolved from "./pages/GetInvolved";
import Project from "./pages/Project";
import Event from "./pages/Event";
import Blog from "./pages/Blog";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/ginoba">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/what-we-do" element={<Do />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/project" element={<Project />} />
          <Route path="/event" element={<Event />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
