import React from 'react';

export default function Certifications() {
  const certifications = [
    {
      icon: '☁️',
      name: 'Salesforce Developer — AgentBlazer Champion',
      issuer: 'SmartBridge / Salesforce',
      date: 'July 2025',
    },
    {
      icon: '📊',
      name: 'Data Structures & Algorithms',
      issuer: 'Smart Interviews',
      date: 'April 2025',
    },
    {
      icon: '🌐',
      name: 'CCNAv7: Introduction to Networks',
      issuer: 'Cisco Networking Academy',
      date: 'December 2024',
    },
    {
      icon: '🤖',
      name: 'Robotic Process Automation',
      issuer: 'MassMutual (AIDEA Program)',
      date: 'May – Nov 2024',
    },
    {
      icon: '🧬',
      name: 'AI/ML Internship — Python',
      issuer: 'NIELIT Virtual Academy',
      date: 'Aug – Oct 2024',
    },
    {
      icon: '🐍',
      name: 'Python for Data Science',
      issuer: 'Swayam / NPTEL (IIT Madras)',
      date: 'Jul – Oct 2023',
    },
    {
      icon: '💻',
      name: 'DSA using Python (Self-paced)',
      issuer: 'GeeksforGeeks',
      date: '2024',
    },
    {
      icon: '🔐',
      name: 'Security Expert Level-1 (Cybersecurity)',
      issuer: 'Supraja Technologies',
      date: 'May 2024',
    },
  ];

  return (
    <section
      id="certifications"
      style={{
        padding: '100px 8vw',
        background: 'linear-gradient(180deg, transparent, rgba(12, 19, 35, 0.4), transparent)',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        className="section-label"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: 'var(--blue)',
          fontSize: '0.8rem',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          marginBottom: '0.5rem',
        }}
      >
        // 05 · certifications
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
          marginBottom: '3rem',
          letterSpacing: '-0.5px',
        }}
      >
        Certifications
      </h2>

      <div
        className="cert-grid reveal visible"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1.2rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="cert-card glass-card"
            style={{
              padding: '1.4rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div
              className="cert-icon"
              style={{
                fontSize: '1.6rem',
                flexShrink: 0,
                marginTop: '2px',
              }}
            >
              {cert.icon}
            </div>
            <div>
              <div
                className="cert-name"
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 650,
                  color: 'var(--white)',
                  marginBottom: '0.3rem',
                  fontFamily: "'Outfit', sans-serif",
                  lineHeight: '1.3',
                }}
              >
                {cert.name}
              </div>
              <div
                className="cert-issuer"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.72rem',
                  color: 'var(--blue)',
                  marginBottom: '0.2rem',
                }}
              >
                {cert.issuer}
              </div>
              <div
                className="cert-date"
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--muted)',
                }}
              >
                {cert.date}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
