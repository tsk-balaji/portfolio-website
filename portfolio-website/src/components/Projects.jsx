// eslint-disable-next-line no-unused-vars
import React from "react";
import "../styles/Projects.css"; // Create a CSS file for styling

const Projects = () => {
  const projects = [
    { title: "Project 1", description: "Description of Project 1", link: "#" },
    { title: "Project 2", description: "Description of Project 2", link: "#" },
    { title: "Project 3", description: "Description of Project 3", link: "#" },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
