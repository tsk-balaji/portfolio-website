// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Home.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Typed from "react-typeme";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import myImage from "../assets/ProfileImage.webp";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="home">
      <h1>
        <span className="highlight">Welcome to my Portfolio</span>
      </h1>
      <div className="container">
        <div className="home-content">
          <div className="typed-wrapper">
            <div>
              <Typed
                className="typed-text text-secondary"
                strings={[
                  "  Dynamic MERN Stack Developer with 4 years at Infosys.",
                  " ",
                  "Proficient in React, Node, Express, MongoDB. Builds scalable web apps, RESTful APIs, and microservices.",
                  " ",
                  "Skilled in testing (Jest), Agile/Scrum, performance optimization, and AWS deployment. Proven track record of efficient delivery and process improvement.",
                ]}
                typeSpeed={60}
                backSpeed={90}
                showCursor={false}
              />
            </div>
          </div>

          <section
            className="actions text-center"
            style={{ margin: "20px", padding: "10px" }}
          >
            <a
              href="https://drive.google.com/file/d/1vQswToGv9vk1OneXIy10E-LfuyAHl6SD/view?usp=sharing"
              className="btn primary"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "1.1rem",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              Download my Resume
            </a>
          </section>

          <section className="connect">
            <h3>Connect with me:</h3>
            <div
              className="social-links"
              style={{ display: "flex", justifyContent: "center", gap: "20px" }}
            >
              <a
                href="https://www.linkedin.com/in/tskbalaji/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{ color: "#0e76a8", fontSize: "2rem" }}
                title="Add Connection"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/tsk-balaji"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{ color: "#171515", fontSize: "2rem" }}
                title="Check my works at GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </section>
        </div>

        <div className="home-image">
          <img
            src={myImage}
            alt="Profile"
            className="home-image animate-zoom-in"
          />
        </div>
      </div>

      <section id="experience" className="section">
        <Experience />
      </section>

      <section id="projects" className="section">
        <Projects />
      </section>

      <section id="skills" className="section">
        <Skills />
      </section>

      <section id="education" className="section">
        <Education />
      </section>

      <section id="contact" className="section">
        <Contact />
      </section>
    </section>
  );
};

export default Home;
