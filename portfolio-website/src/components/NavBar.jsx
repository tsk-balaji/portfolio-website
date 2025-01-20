// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-scroll";
import "../styles/NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo ">Balaji T</h1>
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
      </div>
    </nav>
  );
};

export default Navbar;
