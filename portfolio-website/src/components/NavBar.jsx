// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css"; // Create a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">My Portfolio</h1>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
