// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/Skills.css";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiBootstrap } from "react-icons/si";

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills-container">
        <h2 style={{ color: "white" }}>Skills</h2>
        <div className="skills-icons display-flex">
          <div className="icon">
            <SiMongodb color="#4DB33D" />
            <p style={{ color: "white" }}>MongoDB</p>
          </div>
          <div className="icon">
            <SiExpress color="#000000" />
            <p style={{ color: "white" }}>Express.js</p>
          </div>
          <div className="icon">
            <FaNodeJs color="#83CD29" />
            <p style={{ color: "white" }}>Node.js</p>
          </div>
          <div className="icon">
            <FaReact color="#61DAFB" />
            <p style={{ color: "white" }}>React.js</p>
          </div>
          <div className="icon">
            <SiBootstrap color="#7952B3" />
            <p style={{ color: "white" }}>Bootstrap</p>
          </div>
          <div className="icon">
            <FaHtml5 color="#E34F26" />
            <p style={{ color: "white" }}>HTML</p>
          </div>
          <div className="icon">
            <FaCss3Alt color="#1572B6" />
            <p style={{ color: "white" }}>CSS</p>
          </div>
          {/* <div className="icon">
            <FaGitAlt color="#F05032" />
            <p style={{ color: "white" }}>Git</p>
          </div> */}
          <div className="icon">
            <FaGithub color="#181717" />
            <p style={{ color: "white" }}>GitHub</p>
          </div>
          <div className="icon">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
              alt="Python"
              style={{
                width: "52.8px",
                height: "52.8px",
                marginRight: "10px",
              }}
            />
            <p style={{ color: "white" }}>Python</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
