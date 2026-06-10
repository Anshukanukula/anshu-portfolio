import React, { useState } from 'react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      role: 'Robotic Process Automation Developer',
      company: 'MassMutual India (AIDEA Program)',
      period: 'May 2024 – Nov 2024',
      points: [
        'Developed and deployed end-to-end Robotic Process Automation (RPA) bots to automate high-volume business transactions and report generation.',
        'Conducted a comprehensive <strong>RPA case study</strong> on optimizing data extraction and validation processes, reducing manual processing time.',
        'Integrated automated scripts with legacy applications and relational databases using Python and automation workflows.',
        'Collaborated with engineering mentors to map business workflows and ensure security compliance during automated data execution.',
      ],
      color: 'var(--blue2)',
    },
    {
      role: 'Salesforce Developer Intern',
      company: 'SmartBridge',
      period: 'May 2025 – July 2025',
      points: [
        'Built the <strong>HandsMen Threads Project</strong>: designed a robust data model, implemented UI-based data integrity, and integrated automated workflows for customer service and operational efficiency.',
        'Completed modules on Organizational Setup, Data & Security Management, Developer Fundamentals, Process Automation, and User Interface.',
        'Earned the <strong>AgentBlazer Champion certification</strong> — demonstrating proficiency in Salesforce fundamentals, Apex Specialist, Object Relationships Superbadge, Lightning Web Components, and more.',
      ],
      color: 'var(--blue)',
    },
    {
      role: 'AI/ML using Python Intern',
      company: 'NIELIT Virtual Academy',
      period: 'Aug 2024 – Oct 2024',
      points: [
        'Worked on a real-world predictive analytics project — transformed raw datasets into ML features through data cleaning and feature engineering.',
        'Built and optimized ML models using <strong>TensorFlow and scikit-learn</strong>, improving prediction accuracy through systematic tuning and evaluation.',
        'Developed <strong>automated pipelines</strong> for data processing and model validation, enhancing workflow efficiency.',
      ],
      color: 'var(--violet-rgb)',
    },
  ];

  return (
    <section
      id="experience"
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
        // 03 · experience
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
        Work Experience
      </h2>

      <div
        className="exp-container reveal visible"
        style={{
          display: 'grid',
          gridTemplateColumns: '250px 1fr',
          gap: '3rem',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {/* Tab Selection List */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            borderLeft: '2px solid rgba(255, 255, 255, 0.05)',
            position: 'relative',
          }}
        >
          {experiences.map((exp, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              style={{
                background: 'transparent',
                border: 'none',
                color: activeTab === idx ? 'var(--blue)' : 'var(--muted)',
                padding: '1rem 1.5rem',
                textAlign: 'left',
                fontFamily: "'Outfit', sans-serif",
                fontSize: '1rem',
                fontWeight: activeTab === idx ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                width: '100%',
                outline: 'none',
              }}
              onMouseEnter={(e) => {
                if (activeTab !== idx) e.currentTarget.style.color = 'var(--white)';
              }}
              onMouseLeave={(e) => {
                if (activeTab !== idx) e.currentTarget.style.color = 'var(--muted)';
              }}
            >
              {exp.company.split(' ')[0]}
            </button>
          ))}

          {/* Sliding indicator border */}
          <div
            style={{
              position: 'absolute',
              left: '-2px',
              top: `${activeTab * 56}px`,
              height: '56px',
              width: '2px',
              background: 'linear-gradient(180deg, var(--blue), var(--violet))',
              transition: 'top 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: 'var(--glow)',
            }}
          ></div>
        </div>

        {/* Sliding Card Content Display */}
        <div style={{ overflow: 'hidden', position: 'relative', minHeight: '300px' }}>
          {experiences.map((exp, idx) => {
            const isCurrent = idx === activeTab;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  position: isCurrent ? 'relative' : 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  opacity: isCurrent ? 1 : 0,
                  transform: isCurrent ? 'translateX(0)' : 'translateX(100px)',
                  transition: 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  pointerEvents: isCurrent ? 'auto' : 'none',
                  padding: '2rem',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--white)',
                    marginBottom: '0.3rem',
                  }}
                >
                  {exp.role} <span style={{ color: 'var(--blue)' }}>@ {exp.company}</span>
                </h3>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.78rem',
                    color: 'var(--muted)',
                    marginBottom: '1.5rem',
                  }}
                >
                  {exp.period}
                </div>
                <ul style={{ listStyle: 'none' }}>
                  {exp.points.map((pt, pIdx) => (
                    <li
                      key={pIdx}
                      style={{
                        color: 'var(--muted)',
                        fontSize: '0.9rem',
                        lineHeight: '1.7',
                        paddingLeft: '1.5rem',
                        position: 'relative',
                        marginBottom: '0.8rem',
                      }}
                    >
                      {/* Custom dot icon */}
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: '0.45rem',
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: 'var(--blue)',
                          boxShadow: '0 0 8px var(--blue)',
                        }}
                      ></span>
                      <span dangerouslySetInnerHTML={{ __html: pt }} />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
