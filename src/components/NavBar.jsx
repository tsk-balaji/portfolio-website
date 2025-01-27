/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-scroll";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import "../styles/Navbar.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Track the navbar state

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

  return (
    <nav className={`navbar ${darkMode ? "navbar-light" : "navbar-dark"}`}>
      <div className="nav-container">
        <h1 className="logo">Balaji T</h1>

        {/* Navbar Toggler for small screens */}
        <button className="navbar-toggler" onClick={toggleNavbar}>
          ☰
        </button>

        <ul className={`nav-links ${isOpen ? "show" : ""}`}>
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              style={{ fontSize: "1rem" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              offset={-70}
              style={{ fontSize: "1rem" }}
            >
              Exp
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              style={{ fontSize: "1rem" }}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-70}
              style={{ fontSize: "1rem" }}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="hobbies"
              smooth={true}
              duration={500}
              offset={-70}
              style={{ fontSize: "1rem" }}
            >
              Hobbies
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              style={{ fontSize: "1rem" }}
            >
              Contact
            </Link>
          </li>
        </ul>

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
