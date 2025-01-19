// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/About.css"; // Create a CSS file for styling

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>
        <p>
          I am a passionate full-stack developer with expertise in building
          responsive, user-centric applications using the MERN stack.
        </p>
        <div className="skills">
          <h3>Skills:</h3>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Express</li>
            <li>HTML/CSS</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
