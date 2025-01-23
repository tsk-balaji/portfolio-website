// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/Certifications.css";

const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Web Development",
      provider: "Coursera",
      year: "2021",
    },
    {
      title: "AWS Solutions Architect",
      provider: "Amazon Web Services",
      year: "2022",
    },
    {
      title: "React and Redux",
      provider: "Udemy",
      year: "2020",
    },
  ];

  return (
    <section className="certifications" id="certifications">
      <div className="certifications-container">
        <h2 className="section-title animate-fade-in">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card animate-slide-up">
              <h3 className="certification-title">{cert.title}</h3>
              <p className="certification-provider">{cert.provider}</p>
              <p className="certification-year">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
