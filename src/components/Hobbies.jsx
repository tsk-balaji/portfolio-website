// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/Hobbies.css";
import { FaMotorcycle, FaMusic, FaFilm, FaBook } from "react-icons/fa";

const Hobbies = () => {
  return (
    <section className="hobbies">
      <div className="hobbies-container">
        <h2 style={{ color: "white" }}>Hobbies</h2>
        <div className="hobbies-icons display-flex">
          <div className="icon">
            <FaMotorcycle color="black" />
            <p style={{ color: "white" }}>Travel</p>
          </div>
          <div className="icon">
            <FaMusic color="#FF4500" />
            <p style={{ color: "white" }}>Music</p>
          </div>
          <div className="icon">
            <FaFilm color="#FFD700" />
            <p style={{ color: "white" }}>Movies</p>
          </div>
          <div className="icon">
            <FaBook color="#32CD32" />
            <p style={{ color: "white" }}>Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
