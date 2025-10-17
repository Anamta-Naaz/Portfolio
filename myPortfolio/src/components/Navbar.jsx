import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">Anamta Naaz</div>
      <div className={`nav-links ${open ? 'open' : ''}`}>
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="nav-toggle" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}