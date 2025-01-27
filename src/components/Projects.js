import React from "react";
import "../Styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "SIEM Solution-React",
      description: "Developed a Security Information and Event Management system using React.js.",
      link: "https://github.com/Tarar123-cpu/react-Siem-project",
    },
    {
      title: "SIEM Solution-Flask",
      description: "Developed a Security Information and Event Management system using Flask.",
      link: "https://github.com/Tarar123-cpu/Siem",
    },
    {
      title: "WhiteBoard-App",
      description: "Created a WhiteBoard-App using C++.",
      link: "https://github.com/kh44key/WhiteBoard-App",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-content">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
