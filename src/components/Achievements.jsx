import React from 'react';

export default function Achievements() {
  const achievements = [
    {
      icon: '📄',
      title: 'IEEE Published Researcher',
      desc: 'Presented "Enhancing Dietary Tracking Through AI: A CNN-Based Food Recognition and Nutrition Estimation System" at IEEE GITCON 2025, Belagavi. Published on IEEE Xplore.',
      link: 'https://ieeexplore.ieee.org/abstract/document/11377830',
      linkLabel: 'View IEEE Publication',
    },
    {
      icon: '📗',
      title: 'Springer Nature Book Chapter',
      desc: 'Co-authored a chapter in "Advances in Data Science and Management" published by Springer Nature (ISBN: 978-981-95-1320-8), available on Springer Nature Link.',
      link: 'https://link.springer.com/chapter/10.1007/978-981-95-1320-8_23',
      linkLabel: 'View Springer Link',
    },
    {
      icon: '🥇',
      title: 'Best Student — Supraja Technologies Hackathon',
      desc: 'Awarded Certificate of Excellence as Best Student of the Level-1 Hackathon at Vardhaman College of Engineering (May 2024).',
      link: '#',
      linkLabel: '',
    },
    {
      icon: '⭐',
      title: 'CGPA 9.36 / 10.0',
      desc: 'Consistently top-performing student in B.Tech IT at Vardhaman College of Engineering, with a Semester-I GPA of 9.8 and strong academic record throughout.',
      link: '#',
      linkLabel: '',
    },
  ];

  return (
    <section id="achievements" style={{ padding: '100px 8vw', position: 'relative', zIndex: 1 }}>
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
        // 06 · achievements
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
        Highlights &amp; Awards
      </h2>

      <div
        className="ach-grid reveal visible"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {achievements.map((ach, idx) => (
          <div
            key={idx}
            className="ach-card glass-card"
            style={{
              padding: '1.8rem',
              display: 'flex',
              gap: '1.2rem',
              alignItems: 'flex-start',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div
              className="ach-icon"
              style={{
                fontSize: '2rem',
                flexShrink: 0,
              }}
            >
              {ach.icon}
            </div>
            <div>
              <h3
                className="ach-title"
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--white)',
                  marginBottom: '0.4rem',
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                {ach.title}
              </h3>
              <p
                className="ach-desc"
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--muted)',
                  lineHeight: '1.6',
                  marginBottom: ach.linkLabel ? '1rem' : '0',
                }}
              >
                {ach.desc}
              </p>
              {ach.linkLabel && (
                <a
                  href={ach.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: 'var(--blue)',
                    textDecoration: 'none',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    fontFamily: "'JetBrains Mono', monospace",
                    borderBottom: '1px dashed var(--blue)',
                    paddingBottom: '2px',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--white)';
                    e.currentTarget.style.borderColor = 'var(--white)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--blue)';
                    e.currentTarget.style.borderColor = 'var(--blue)';
                  }}
                >
                  {ach.linkLabel} <span>↗</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
