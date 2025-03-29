// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/Experience.css";

const Experience = () => {
  const experiences = [
    {
      companyName: "Infosys",
      role: "System Engineer",
      duration: "Jul 2024 - Present · 7 mos",
      location: "Chennai · Bengaluru · Hybrid",
      animation: "fade-right",
    },
    {
      companyName: "Infosys",
      role: "Senior System Associate",
      duration: "Feb 2023 - Jul 2024 · 1 yr 6 mos",
      location: "Chennai · Bengaluru · Hybrid",
      animation: "fade-left",
    },
    {
      companyName: "Infosys",
      role: "Operations Executive",
      duration: "Jul 2021 - Jan 2023 · 1 yr 7 mos",
      location: "Chennai · Bengaluru · Hybrid",
      animation: "fade-right",
    },
  ];

  return (
    <section className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="timeline-item"
            data-aos={exp.animation}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content glassmorphism">
              <h3 className="company-name">{exp.companyName}</h3>
              <h4>{exp.role}</h4>
              <p className="role-duration">{exp.duration}</p>
              <p className="role-location">{exp.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
