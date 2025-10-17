
import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import './Skills.css';
import FadeInSection from './FadeInSection';

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 color="#E34F26" size={40} /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" size={40} /> },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" size={40} /> },
    { name: "React.js", icon: <FaReact color="#61DAFB" size={40} /> },
    { name: "Node.js", icon: <FaNodeJs color="#3C873A" size={40} /> },
    { name: "Express.js", icon: <SiExpress color="#fff" size={40} /> },
    { name: "MongoDB", icon: <SiMongodb color="#4DB33D" size={40} /> },
    { name: "SQL", icon: <FaDatabase color="#00758F" size={40} /> },
  ];

  return (
    <FadeInSection>
    <section className="skills" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
    </FadeInSection>
  );
}
