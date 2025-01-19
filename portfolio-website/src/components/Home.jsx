import React from "react";
import Typed from "react-typeme";
import "../styles/Home.css"; // Ensure Home.css includes styles for new elements

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <h1>
          Hello, I&apos;m <span className="highlight">Balaji T</span>
        </h1>
        <Typed
          className="typed-text"
          strings={["  MERN Stack Developer"]}
          typeSpeed={50}
          backSpeed={70}
          showCursor={false}
        />
        <p className="intro">
          Passionate about building user-friendly, scalable, and efficient web
          applications. Experienced in creating dynamic solutions with modern
          technologies like React, Node.js, Express, and MongoDB.
        </p>
        <div className="actions">
          <a href="projects" className="btn primary">
            View Projects
          </a>
          <a href="contact" className="btn secondary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
