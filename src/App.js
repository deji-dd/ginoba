import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
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
      <Routes>
        <Route path={"/ginoba"} element={<Home />} />
        <Route path="/ginoba/about-us" element={<About />} />
        <Route path="/ginoba/what-we-do" element={<Do />} />
        <Route path="/ginoba/contact-us" element={<Contact />} />
        <Route path="/ginoba/get-involved" element={<GetInvolved />} />
        <Route path="/ginoba/project" element={<Project />} />
        <Route path="/ginoba/event" element={<Event />} />
        <Route path="/ginoba/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
