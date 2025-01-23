/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-scroll";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import "../styles/NavBar.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <nav className={`navbar ${darkMode ? "navbar-light" : "navbar-dark"}`}>
      <div className="nav-container">
        <h1 className="logo">Balaji T</h1>
        <ul className="nav-links">
          <li>
            <Link to="/" smooth={true} duration={500} offset={-70}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} offset={-70}>
              About
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} offset={-70}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} offset={-70}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} offset={-70}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Dark Mode Toggle with "Switch Mode" text below */}
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
