import React from "react";
import "../Styles/Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-content">
        <div className="skill">
          <h3>Cybersecurity</h3>
          <ul>
            <li>SIEM Solutions</li>
            <li>Threat Analysis</li>
            <li>Penetration Testing</li>
          </ul>
        </div>
        <div className="skill">
          <h3>Frontend</h3>
          <ul>
            <li>React.js</li>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="skill">
          <h3>Backend</h3>
          <ul>
            <li>Python Flask</li>
            <li>Node.js</li>
            <li>REST APIs</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
