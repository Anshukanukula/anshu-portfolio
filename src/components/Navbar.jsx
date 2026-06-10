import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background styling on scroll
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section highlighting
      const sections = ['about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
      let current = '';
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = sectionId;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'about' },
    { id: 'skills', label: 'skills' },
    { id: 'experience', label: 'experience' },
    { id: 'projects', label: 'projects' },
    { id: 'certifications', label: 'certs' },
    { id: 'contact', label: 'contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 100,
        background: scrolled ? 'rgba(3, 5, 9, 0.85)' : 'rgba(3, 5, 9, 0.4)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid rgba(0, 240, 255, 0.05)',
        padding: '0 8vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'between',
        height: '64px',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease',
      }}
    >
      <a
        href="#"
        className="nav-logo"
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 900,
          fontSize: '1.2rem',
          background: 'linear-gradient(135deg, var(--blue), var(--violet2))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '2px',
          textDecoration: 'none',
        }}
      >
        ANSHU
      </a>
      <ul
        style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
        }}
      >
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              style={{
                color: activeSection === link.id ? 'var(--blue)' : 'var(--muted)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '1px',
                transition: 'color 0.25s',
                fontFamily: "'JetBrains Mono', monospace",
                borderBottom: activeSection === link.id ? '1px solid var(--blue)' : '1px solid transparent',
                paddingBottom: '2px',
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
