import "./App.css";
import Navbar from "./components/Navbar";
import "./index.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "./pages/About"; 
import Portfolio from "./pages/Portfolio"; 
import Resume from "./pages/Resume"; 
import Contact from "./pages/Contact"; 

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
