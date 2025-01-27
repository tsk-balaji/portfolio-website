/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-scroll";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import "../styles/Navbar.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Track the navbar state
  const [activeIndex, setActiveIndex] = useState(0); // Active slide index

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Carousel Slide Navigation
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 6); // Looping through 6 items
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + 6) % 6 // Looping through 6 items in reverse
    );
  };

  return (
    <nav className={`navbar ${darkMode ? "navbar-light" : "navbar-dark"}`}>
      <div className="nav-container">
        <h1 className="logo">Balaji T</h1>

        {/* Navbar Toggler for small screens */}
        <button className="navbar-toggler" onClick={toggleNavbar}>
          ☰
        </button>

        {/* Carousel for links on small screens */}
        <div className={`carousel-container ${isOpen ? "show" : ""}`}>
          <button className="carousel-btn prev" onClick={prevSlide}>
            ❮
          </button>
          <ul className="carousel">
            <li className={activeIndex === 0 ? "active" : ""}>
              <Link to="home" smooth={true} duration={500} offset={-70}>
                Home
              </Link>
            </li>
            <li className={activeIndex === 1 ? "active" : ""}>
              <Link to="experience" smooth={true} duration={500} offset={-70}>
                Exp
              </Link>
            </li>
            <li className={activeIndex === 2 ? "active" : ""}>
              <Link to="projects" smooth={true} duration={500} offset={-70}>
                Projects
              </Link>
            </li>
            <li className={activeIndex === 3 ? "active" : ""}>
              <Link to="skills" smooth={true} duration={500} offset={-70}>
                Skills
              </Link>
            </li>
            <li className={activeIndex === 4 ? "active" : ""}>
              <Link to="hobbies" smooth={true} duration={500} offset={-70}>
                Hobbies
              </Link>
            </li>
            <li className={activeIndex === 5 ? "active" : ""}>
              <Link to="contact" smooth={true} duration={500} offset={-70}>
                Contact
              </Link>
            </li>
          </ul>
          <button className="carousel-btn next" onClick={nextSlide}>
            ❯
          </button>
        </div>

        {/* Dark Mode Toggle */}
        <div
          className="theme-toggle-container"
          style={{ marginLeft: "40px", marginBottom: "5px" }}
        >
          <DarkModeSwitch checked={darkMode} onChange={toggleTheme} size={40} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
