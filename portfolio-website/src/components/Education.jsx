// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/Education.css";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "XYZ University",
      year: "2016 - 2020",
      description:
        "Focused on full-stack web development, data structures, and algorithms.",
    },
    {
      degree: "Master of Science in Software Engineering",
      institution: "ABC Institute of Technology",
      year: "2020 - 2022",
      description:
        "Specialized in software design, cloud computing, and advanced databases.",
    },
    {
      degree: "High School Diploma",
      institution: "St. John's High School",
      year: "2014 - 2016",
      description:
        "Achieved academic excellence in science with a focus on Mathematics and Physics.",
    },
  ];

  return (
    <section className="education" id="education">
      <div className="education-container">
        <h2 className="section-title animate-fade-in">Education</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card animate-slide-up">
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-year">{edu.year}</p>
              <p className="education-description">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
