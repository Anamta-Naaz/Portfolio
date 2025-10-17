
import React from 'react';
import './Contact.css';
import FadeInSection from './FadeInSection';


export default function Contact() {
  return (
    <FadeInSection>
    <section className="contact" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit" className="btn primary">Send Message</button>
      </form>
    </section>
    </FadeInSection>
  );
}
