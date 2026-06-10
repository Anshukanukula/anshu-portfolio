import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'Java', 'C', 'JavaScript', 'SQL', 'HTML', 'CSS'],
    },
    {
      title: 'AI / ML',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Deep Learning', 'NLP', 'Computer Vision', 'NumPy', 'Pandas', 'Mediapipe', 'OpenCV'],
    },
    {
      title: 'Backend / Frameworks',
      skills: ['React', 'Django', 'FastAPI', 'Flask', 'REST API', 'Streamlit'],
    },
    {
      title: 'Cloud & Tools',
      skills: ['AWS', 'Docker', 'Git / GitHub', 'Linux', 'Power BI', 'VS Code'],
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'SQLite'],
    },
    {
      title: 'CS Fundamentals',
      skills: ['DSA', 'System Design', 'DBMS', 'OS', 'Computer Networks', 'Design Patterns'],
    },
  ];

  // Flat list of skills for the infinite scrolling marquees
  const row1Skills = ['Python', 'PyTorch', 'TensorFlow', 'React', 'Django', 'PostgreSQL', 'Docker', 'AWS', 'System Design', 'Git'];
  const row2Skills = ['JavaScript', 'FastAPI', 'Flask', 'Mediapipe', 'OpenCV', 'Streamlit', 'Java', 'SQL', 'Linux', 'DSA'];

  return (
    <section id="skills" style={{ padding: '100px 8vw', position: 'relative', zIndex: 1 }}>
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
        // 02 · skills
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
        Tech Stack
      </h2>

      {/* ──────────── CREATIVE INFINITE MARQUEES (LEFT & RIGHT SLIDES) ──────────── */}
      <div style={{ marginBottom: '3.5rem' }}>
        {/* Row 1: Left to Right */}
        <div className="marquee-container" style={{ marginBottom: '1.5rem' }}>
          <div className="marquee-track">
            {/* Duplicate the array twice to ensure seamless infinite looping */}
            {[...row1Skills, ...row1Skills, ...row1Skills].map((skill, index) => (
              <span
                key={`r1-${index}`}
                className="skill-tag"
                style={{
                  fontSize: '1rem',
                  padding: '0.6rem 1.6rem',
                  background: 'rgba(0, 240, 255, 0.04)',
                  border: '1px solid rgba(0, 240, 255, 0.15)',
                  color: 'var(--blue)',
                  boxShadow: '0 0 10px rgba(0, 240, 255, 0.05)',
                  cursor: 'default',
                  borderRadius: '30px',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left (reverse class) */}
        <div className="marquee-container">
          <div className="marquee-track reverse">
            {[...row2Skills, ...row2Skills, ...row2Skills].map((skill, index) => (
              <span
                key={`r2-${index}`}
                className="skill-tag"
                style={{
                  fontSize: '1rem',
                  padding: '0.6rem 1.6rem',
                  background: 'rgba(138, 43, 226, 0.04)',
                  border: '1px solid rgba(138, 43, 226, 0.15)',
                  color: 'var(--violet2)',
                  boxShadow: '0 0 10px rgba(138, 43, 226, 0.05)',
                  cursor: 'default',
                  borderRadius: '30px',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ──────────── SKILL CATEGORY GRID ──────────── */}
      <div
        className="skills-grid reveal visible"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {skillCategories.map((cat, idx) => (
          <div
            key={idx}
            className={`skill-category glass-card ${idx % 2 !== 0 ? 'violet' : ''}`}
            style={{
              padding: '1.8rem',
            }}
          >
            <div
              className="skill-cat-title"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.78rem',
                color: idx % 2 !== 0 ? 'var(--violet2)' : 'var(--blue)',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              {cat.title}
            </div>
            <div
              className="skill-tags"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.55rem',
              }}
            >
              {cat.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="skill-tag"
                  style={{
                    padding: '0.35rem 0.85rem',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '20px',
                    fontSize: '0.78rem',
                    color: 'var(--white)',
                    background: 'rgba(255, 255, 255, 0.02)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    fontFamily: "'JetBrains Mono', monospace",
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = idx % 2 !== 0 ? 'var(--violet2)' : 'var(--blue)';
                    e.currentTarget.style.color = idx % 2 !== 0 ? 'var(--violet2)' : 'var(--blue)';
                    e.currentTarget.style.background = idx % 2 !== 0 ? 'rgba(138, 43, 226, 0.05)' : 'rgba(0, 240, 255, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.color = 'var(--white)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
