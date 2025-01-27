import React from "react";
import "../Styles/About.css";

function About() {
  return (
    <section id="about" className="about">
      <h2>Muhammad Abdullah Tarar</h2>
      <div className="about-content">
        {/* Ensure the path matches the public folder file name */}
        <img src="/Profile.jpeg" alt="Profile" className="profile-pic" />
        <p>
        I am a Cybersecurity enthusiast with a strong foundation in both Frontend 
        and Backend Development.I specialize in building robust solutions, including 
        SIEM systems, and focus on securing digital environments.With a passion for 
        cybersecurity, I aim to create secure, scalable, and efficient systems that 
        protect against evolving threats.
        </p>
      </div>
    </section>
  );
}

export default About;



