// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <section className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {/* Infosys - System Engineer */}
        <div className="timeline-item" data-aos="fade-right">
          <div className="timeline-dot"></div>
          <div className="timeline-content glassmorphism">
            <h3 className="company-name">Infosys</h3>

            <h4>System Engineer</h4>
            <p className="role-duration">Jul 2024 - Present · 7 mos</p>
            <p className="role-location">Chennai · Bengaluru · Hybrid</p>
          </div>
        </div>

        {/* Infosys - Senior System Associate */}
        <div className="timeline-item" data-aos="fade-left">
          <div className="timeline-dot"></div>
          <div className="timeline-content glassmorphism">
            <h3 className="company-name">Infosys</h3>
            <h4>Senior System Associate</h4>
            <p className="role-duration">Feb 2023 - Jul 2024 · 1 yr 6 mos</p>
            <p className="role-location">Chennai · Bengaluru · Hybrid</p>
          </div>
        </div>

        {/* Infosys - Operations Executive */}
        <div className="timeline-item" data-aos="fade-right">
          <div className="timeline-dot"></div>
          <div className="timeline-content glassmorphism">
            <h3 className="company-name">Infosys</h3>
            <h4>Operations Executive</h4>
            <p className="role-duration">Jul 2021 - Jan 2023 · 1 yr 7 mos</p>
            <p className="role-location">Chennai · Bengaluru · Hybrid</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
