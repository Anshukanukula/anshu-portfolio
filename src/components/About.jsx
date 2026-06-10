import React from 'react';

export default function About() {
  return (
    <section
      id="about"
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
        // 01 · about
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
        Who I Am
      </h2>

      <div
        className="about-grid reveal visible"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div
          className="about-text"
          style={{
            color: 'var(--muted)',
            lineHeight: '1.9',
            fontSize: '1rem',
          }}
        >
          <p style={{ marginBottom: '1.5rem' }}>
            I am <span style={{ color: 'var(--blue)', fontWeight: 500 }}>Kanukula Anshu</span>, a B.Tech Information Technology Graduate from Hyderabad, India (Graduated May 2026). I work at the intersection of Artificial Intelligence research and software engineering, building production-grade solutions that solve real problems.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            My engineering expertise spans <span style={{ color: 'var(--white)', fontWeight: 500 }}>Computer Vision</span>, <span style={{ color: 'var(--white)', fontWeight: 500 }}>Natural Language Processing</span>, <span style={{ color: 'var(--white)', fontWeight: 500 }}>Multimodal AI Fusion</span>, and robust backend engineering. I have published academic papers with both <span style={{ color: 'var(--blue)' }}>IEEE Xplore</span> and <span style={{ color: 'var(--blue)' }}>Springer Nature</span> covering deep-learning dietary tracking systems and cloud-based marketplaces.
          </p>
          <p>
            With a strong foundation in CS fundamentals like DSA, DBMS, System Design, and automated workflows, I build scalable systems. I thrive on continuous learning—whether mastering Salesforce architecture or building custom neural networks in PyTorch.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div
            className="edu-card glass-card"
            style={{
              padding: '1.8rem',
              position: 'relative',
            }}
          >
            <div
              className="edu-inst"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '0.95rem',
                fontWeight: 700,
                color: 'var(--blue)',
                marginBottom: '0.4rem',
              }}
            >
              🎓 Vardhaman College of Engineering
            </div>
            <div
              className="edu-degree"
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--white)',
                marginBottom: '0.4rem',
              }}
            >
              B.Tech — Information Technology
            </div>
            <div
              className="edu-meta"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                color: 'var(--muted)',
                marginBottom: '0.8rem',
              }}
            >
              Hyderabad, India · Nov 2022 – May 2026
            </div>
            <div
              className="edu-score"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, var(--blue2), var(--violet))',
                padding: '0.3rem 0.8rem',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: 700,
                fontFamily: "'JetBrains Mono', monospace",
                color: '#fff',
              }}
            >
              CGPA: 9.36 / 10.0
            </div>
          </div>

          <div
            className="edu-card glass-card violet"
            style={{
              padding: '1.8rem',
              position: 'relative',
            }}
          >
            <div
              className="edu-inst"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '0.95rem',
                fontWeight: 700,
                color: 'var(--violet2)',
                marginBottom: '0.4rem',
              }}
            >
              📚 Narayana Junior College
            </div>
            <div
              className="edu-degree"
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--white)',
                marginBottom: '0.4rem',
              }}
            >
              Intermediate — MPC (Math, Physics, Chemistry)
            </div>
            <div
              className="edu-meta"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                color: 'var(--muted)',
                marginBottom: '0.8rem',
              }}
            >
              Hyderabad, India · Feb 2020 – Apr 2022
            </div>
            <div
              className="edu-score"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, var(--violet), var(--violet2))',
                padding: '0.3rem 0.8rem',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: 700,
                fontFamily: "'JetBrains Mono', monospace",
                color: '#fff',
              }}
            >
              Percentage: 98%
            </div>
          </div>

          <div
            className="edu-card glass-card"
            style={{
              padding: '1.8rem',
              position: 'relative',
            }}
          >
            <div
              className="edu-inst"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '0.95rem',
                fontWeight: 700,
                color: 'var(--blue)',
                marginBottom: '0.4rem',
              }}
            >
              🏫 KB Sainik School
            </div>
            <div
              className="edu-degree"
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--white)',
                marginBottom: '0.4rem',
              }}
            >
              Secondary School Certificate (SSC)
            </div>
            <div
              className="edu-meta"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                color: 'var(--muted)',
                marginBottom: '0.8rem',
              }}
            >
              Hyderabad, India · Completed 2020
            </div>
            <div
              className="edu-score"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, var(--blue2), var(--violet))',
                padding: '0.3rem 0.8rem',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: 700,
                fontFamily: "'JetBrains Mono', monospace",
                color: '#fff',
              }}
            >
              CGPA: 10.00 / 10.0
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
