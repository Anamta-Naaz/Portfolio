import React from 'react';
import './Projects.css';
import FadeInSection from './FadeInSection';

export default function Projects() {
  const projects = [
    { name: "Pre School website:", desc: "We make a pre School website using html css and javascript as frontend and node.js, express.js and mongoDB as backend.", link: "https://github.com/Anamta-Naaz/PreSchool-Website.git" },
    { name: "Task Management App:", desc: "We make a task management web app using react.js as frontend and node.js, express.js and mongoDB as backend .", link: "https://github.com/ayushkahar02/Zidio-Project.git" },
    { name: "User Authentication & Profile UI Development:", desc: "We make a user authentication & profile UI using react.js.", link: "https://github.com/Anamta-Naaz/Login-UI.git" },
    { name: "Image Search Engine:", desc: "we make image search engine where we search an images.we make this website using html, css and javascript.", link: "https://github.com/Anamta-Naaz/Search-Engine.git" },
    { name: "Analysis Of Disease Detection For Crop Yield:", desc: "We make such program that help farmer to easily detect the disease also give some precautions to cure it.", link: "#" },
   
    { name: "Simple Calculator:", desc: "We make a simple calculator using html css and javascript tecnology.", link: "https://github.com/Anamta-Naaz/Calculator.git" },
  ];

  return (
    <FadeInSection>
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <h3>{proj.name}</h3>
            <p>{proj.desc}</p>
            <a href={proj.link} className="btn primary">View Project</a>
          </div>
        ))}
      </div>
    </section>
    </FadeInSection>
  );
}
