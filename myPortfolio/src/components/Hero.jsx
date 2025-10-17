
import React, { useState, useEffect } from 'react';
import './Hero.css';
import Particles from './Particles';
import FadeInSection from './FadeInSection';

export default function Hero() {
  const roles = ["Web Developer", "React.js Enthusiast","Frontend Developer", "MERN Stack Developer", "UI Developer"];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIdx(i => (i + 1) % roles.length), 2200);
    return () => clearInterval(interval);
  }, []);

  return (
 
    <section className="hero">
      <Particles />
      <div className="hero-content">
        <p className="hero-intro">Hello, I'm</p>
    
        <h1 className="hero-name">Anamta Naaz Sayyad Ansar</h1>
        <img src="/myimage.jpeg" alt="" className='myimage'/>
        <div className="hero-role">{roles[idx]}</div>
        <p className="hero-desc">I craft performant, accessible web apps with a focus on clean UX and modern technologies.</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
          <a href="/Anamta_Resume1.pdf" download className="btn outline">Download Resume</a>
        </div>
      </div>
    </section>
   
  );
}
