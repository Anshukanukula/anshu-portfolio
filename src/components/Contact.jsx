import React from 'react';

export default function Contact() {
  const contacts = [
    {
      icon: '✉️',
      val: 'anshukanukula03@gmail.com',
      url: 'mailto:anshukanukula03@gmail.com',
    },
    {
      icon: '🔗',
      val: 'LinkedIn',
      url: 'https://www.linkedin.com/in/anshu-kanukula-349919257/',
      external: true,
    },
    {
      icon: '💻',
      val: 'GitHub',
      url: 'https://github.com/Anshukanukula',
      external: true,
    },
  ];

  return (
    <section id="contact" style={{ padding: '100px 8vw', textAlign: 'center', position: 'relative', zIndex: 1 }}>
      <div
        className="section-label"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: 'var(--blue)',
          fontSize: '0.8rem',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          marginBottom: '0.5rem',
          textAlign: 'center',
        }}
      >
        // 07 · contact
      </div>
      <h2
        className="section-title"
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 700,
          background: 'linear-gradient(135deg, var(--white) 60%, var(--blue))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '2rem',
          letterSpacing: '-0.5px',
          textAlign: 'center',
        }}
      >
        Let's Connect
      </h2>
      <p
        style={{
          color: 'var(--muted)',
          maxWidth: '520px',
          margin: '0 auto 3rem',
          lineHeight: '1.8',
          fontSize: '1rem',
        }}
      >
        I am actively seeking full-time and internship opportunities in Machine Learning, Deep Learning, and Full Stack software development. Whether you want to discuss research papers, projects, or job opportunities—my inbox is open.
      </p>

      <div
        className="contact-links reveal visible"
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        {contacts.map((c, idx) => (
          <a
            key={idx}
            href={c.url}
            target={c.external ? '_blank' : '_self'}
            rel={c.external ? 'noopener noreferrer' : ''}
            className="glass-card"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              padding: '0.9rem 1.8rem',
              color: 'var(--white)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 500,
              fontFamily: "'JetBrains Mono', monospace",
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--blue)';
              e.currentTarget.style.borderColor = 'var(--blue)';
              e.currentTarget.style.boxShadow = 'var(--glow)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--white)';
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>{c.icon}</span> {c.val}
          </a>
        ))}
      </div>
    </section>
  );
}
