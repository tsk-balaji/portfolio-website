// eslint-disable-next-line no-unused-vars
import React from "react";
import projectImage from "../assets/jira-clone.png";
import urlShortener from "../assets/url-shortener.png";
import "../styles/Projects.css"; // Ensure you create and update the CSS file

const Projects = () => {
  const projects = [
    {
      title: "Project Management Tool",
      description: "A clone of the popular Jira project management tool.",
      link: "https://project-management-tool-tsk.netlify.app/",
      image: projectImage,
    },
    {
      title: "URL Shortener",
      description: "A web app to shorten and manage URLs.",
      link: "https://url-shortener-tsk.netlify.app/",
      image: urlShortener,
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="project-container">
        <h2 style={{ color: "white" }} className="animate-fade-in">
          My Personal Projects
        </h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link animate-slide-up"
            >
              <div className="project-card">
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={`${project.title} Preview`}
                    className="project-image animate-zoom-in"
                  />
                </div>
                <div className="project-details">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
