// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Home.css";

import Typed from "react-typeme";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import myImage from "../assets/TSK_BG_BLUR_EDIT.jpeg";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="home">
      <div className="container">
        <div className="home-content">
          <h1>
            <span className="highlight">Welcome to my Portfolio</span>
          </h1>
          <div className="typed-wrapper">
            <section id="about" className="section">
              <Typed
                className="typed-text text-secondary"
                strings={[
                  " I'm a passionate MERN Stack Developer with over 4 years of experience in designing and developing user-centric web applications.",
                  "Proficient in modern technologies like React, Node.js, Express, and MongoDB to build scalable and efficient solutions.",
                  "Dedicated to continuous learning and implementing best practices in web development.",
                ]}
                typeSpeed={50}
                backSpeed={70}
                showCursor={false}
              />
            </section>
          </div>
          <section
            className="actions pt-2 pb-2 text-center"
            style={{ margin: "20px", padding: "10px" }}
          >
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            <a href="#contact" className="btn secondary">
              Get in Touch
            </a>
          </section>
        </div>
        <div className="home-image">
          <img src={myImage} alt="My Profile" />
        </div>
      </div>

      <section id="experience" className="section">
        <Experience />
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <Projects />
      </section>

      <section id="skills" className="section">
        <Skills />
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <Contact />
      </section>
    </section>
  );
};

export default Home;
