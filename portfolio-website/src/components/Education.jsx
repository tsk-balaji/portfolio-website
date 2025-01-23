// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/Education.css";

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Applications",
      institution: "Chandigarh University",
      year: "2020 - 2022",
    },
    {
      degree: "Bachelor of Science in Physics",
      institution: "PSG College of Arts and Science",
      year: "2020 - 2022",
    },
    {
      degree: "Senior Secondary ",
      institution: "Amrita Vidyalayam Senior Secondary School",
      year: "2014 - 2016",
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
              {index === education.length - 1 && <p className="empty-line"></p>}
              <p className="education-institution">{edu.institution}</p>
              {index !== education.length - 1 && <p className="empty-line1"></p>}
              <p className="education-year">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
