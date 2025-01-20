// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import  Footer  from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <section id="Footer" className="section">
          <Footer />
        </section>
      </div>
    </Router>
  );
}

export default App;
