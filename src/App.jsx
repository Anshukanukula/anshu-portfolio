import React, { useEffect, useState } from 'react';
import Starfield from './components/Starfield';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Scroll reveal observer
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((r) => observer.observe(r));

    return () => {
      reveals.forEach((r) => observer.unobserve(r));
    };
  }, []);

  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>

      {/* Canvas background starfield */}
      <Starfield />

      {/* Structured sections */}
      <Navbar />
      <Hero />
      
      <div className="reveal">
        <About />
      </div>
      
      <div className="reveal">
        <Skills />
      </div>
      
      <div className="reveal">
        <Experience />
      </div>
      
      <div className="reveal">
        <Projects />
      </div>
      
      <div className="reveal">
        <Certifications />
      </div>
      
      <div className="reveal">
        <Achievements />
      </div>
      
      <div className="reveal">
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
}
