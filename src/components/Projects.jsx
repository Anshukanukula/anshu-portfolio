import React, { useState } from 'react';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      icon: '🍱',
      title: 'CNN-Based Food Recognition & Nutrition Estimation',
      subtitle: 'AI-POWERED NUTRITION WEB APP · IEEE PUBLISHED',
      stats: [
        { label: 'Top-1 Accuracy', val: '90.14%' },
        { label: 'Top-5 Accuracy', val: '96.2%' },
        { label: 'Inference Speed', val: '~380ms' },
      ],
      highlights: [
        'Fine-tuned ResNet50 on Food-101 dataset across 101 food categories.',
        'Label Smoothing for +2.1% accuracy gain; AdamW + Mixed Precision training.',
        'Streamlit web app with Spoonacular API for real-time macronutrient visualization.',
        'Adjustable serving sizes with JSON dietary report export.',
      ],
      publicationLabel: '📄 Published on IEEE Xplore (GITCON 2025)',
      publicationUrl: 'https://ieeexplore.ieee.org/abstract/document/11377830',
      tags: ['ResNet50', 'TensorFlow', 'Streamlit', 'Spoonacular API', 'Food-101'],
      glowColor: 'var(--blue)',
    },
    {
      icon: '🏠',
      title: 'Home Services at Door-Step',
      subtitle: 'FULL-STACK DJANGO MARKETPLACE · SPRINGER PUBLISHED',
      stats: [
        { label: 'Status', val: 'Published 2026' },
        { label: 'Relational Models', val: '8 Tables' },
        { label: 'User Roles', val: '3 Roles' },
      ],
      highlights: [
        '3-role platform (User / Worker / Admin) with 8 relational models.',
        'Location-aware appointment requests to worker assignment + real-time status tracking.',
        'Full admin control panel: live dashboard, worker verification, service CRUD with image upload.',
        'Hierarchical Country → State → City location management with DataTables search.',
      ],
      publicationLabel: '📄 Published in Springer Nature Book Chapter',
      publicationUrl: 'https://link.springer.com/chapter/10.1007/978-981-95-1320-8_23',
      tags: ['Django', 'PostgreSQL', 'REST API', 'JavaScript', 'DataTables'],
      glowColor: 'var(--violet-rgb)',
    },
    {
      icon: '🎤',
      title: 'AI-Powered Interview Evaluation System',
      subtitle: 'MULTIMODAL INTERVIEW ASSESSMENT PLATFORM · FORTHCOMING',
      stats: [
        { label: 'Emotion Detection', val: '97%' },
        { label: 'Speech-to-Text', val: '93.2%' },
        { label: 'Content Relevance', val: '92.3%' },
      ],
      highlights: [
        '4-module multimodal AI pipeline: DeepFace (VGG Face) + Whisper/Google Speech API + TextBlob.',
        '97% emotion detection accuracy on FER2013 (35,887 images) across 7 emotions.',
        'Outperforms prior baselines (Wafa et al. 95%, Mostert et al. 80.7%) via multimodal fusion.',
        'Streamlit app with SQLite session logging; aggregates scores into unified 0–100 readiness report.',
      ],
      publicationLabel: '🚀 Forthcoming / Going to be published',
      publicationUrl: '#',
      tags: ['DeepFace', 'Whisper', 'TextBlob', 'FER2013', 'Streamlit', 'SQLite'],
      glowColor: 'var(--blue2)',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" style={{ padding: '100px 8vw', position: 'relative', zIndex: 1 }}>
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
        // 04 · projects
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
        }}
      >
        Featured Projects
      </h2>

      {/* ──────────── CAROUSEL / SLIDER CONTROLS ──────────── */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '1rem',
          marginBottom: '1.5rem',
          maxWidth: '1200px',
          margin: '0 auto 1.5rem',
        }}
      >
        <button
          onClick={handlePrev}
          style={{
            background: 'var(--glass)',
            border: '1px solid var(--border)',
            color: 'var(--white)',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            transition: 'all 0.3s',
            outline: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--blue)';
            e.currentTarget.style.boxShadow = 'var(--glow)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          ←
        </button>
        <button
          onClick={handleNext}
          style={{
            background: 'var(--glass)',
            border: '1px solid var(--border)',
            color: 'var(--white)',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            transition: 'all 0.3s',
            outline: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--blue)';
            e.currentTarget.style.boxShadow = 'var(--glow)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          →
        </button>
      </div>

      {/* ──────────── PROJECTS SLIDER CONTAINER ──────────── */}
      <div className="slider-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="slider-slide"
              style={{
                flex: '0 0 100%',
                maxWidth: '100%',
              }}
            >
              <div
                className="glass-card"
                style={{
                  padding: '2.5rem',
                  height: '100%',
                  border: `1px solid rgba(0, 240, 255, ${idx === currentIndex ? 0.3 : 0.1})`,
                  boxShadow: idx === currentIndex ? 'var(--glow)' : 'none',
                  transform: idx === currentIndex ? 'scale(1.01)' : 'scale(0.99)',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.2rem' }}>
                  <div>
                    <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.5rem' }}>{proj.icon}</span>
                    <h3
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: '1.3rem',
                        fontWeight: 700,
                        color: 'var(--white)',
                        marginBottom: '0.3rem',
                      }}
                    >
                      {proj.title}
                    </h3>
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.75rem',
                        color: 'var(--blue)',
                        letterSpacing: '1px',
                        fontWeight: 600,
                      }}
                    >
                      {proj.subtitle}
                    </div>
                  </div>
                </div>

                {/* Performance stats row */}
                <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                  {proj.stats.map((s, sIdx) => (
                    <div
                      key={sIdx}
                      style={{
                        background: 'rgba(0, 240, 255, 0.06)',
                        border: '1px solid rgba(0, 240, 255, 0.15)',
                        padding: '0.4rem 0.8rem',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      <span style={{ color: 'var(--muted)', marginRight: '4px' }}>{s.label}:</span>
                      <strong style={{ color: '#fff' }}>{s.val}</strong>
                    </div>
                  ))}
                </div>

                {/* Highlights bullet points */}
                <ul style={{ listStyle: 'none', marginBottom: '1.8rem' }}>
                  {proj.highlights.map((high, hIdx) => (
                    <li
                      key={hIdx}
                      style={{
                        fontSize: '0.88rem',
                        color: 'var(--muted)',
                        lineHeight: '1.6',
                        paddingLeft: '1.2rem',
                        position: 'relative',
                        marginBottom: '0.5rem',
                        borderBottom: '1px solid rgba(255,255,255,0.03)',
                        paddingBottom: '0.3rem',
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          color: 'var(--violet2)',
                          fontWeight: 'bold',
                        }}
                      >
                        →
                      </span>
                      {high}
                    </li>
                  ))}
                </ul>

                {/* Paper link section */}
                <div style={{ marginBottom: '1.8rem', display: 'flex', alignItems: 'center' }}>
                  {proj.publicationUrl !== '#' ? (
                    <a
                      href={proj.publicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-grad"
                      style={{
                        padding: '0.5rem 1.2rem',
                        fontSize: '0.75rem',
                        borderRadius: '6px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                      }}
                    >
                      {proj.publicationLabel} <span>↗</span>
                    </a>
                  ) : (
                    <div
                      style={{
                        color: 'var(--violet2)',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        border: '1px dashed rgba(191, 85, 236, 0.4)',
                        padding: '0.4rem 1rem',
                        borderRadius: '6px',
                        background: 'rgba(191, 85, 236, 0.05)',
                      }}
                    >
                      {proj.publicationLabel}
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        padding: '0.25rem 0.6rem',
                        borderRadius: '4px',
                        fontSize: '0.7rem',
                        fontFamily: "'JetBrains Mono', monospace",
                        background: 'rgba(138, 43, 226, 0.12)',
                        border: '1px solid rgba(191, 85, 236, 0.25)',
                        color: 'var(--violet2)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel indicators (dots) */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              style={{
                width: idx === currentIndex ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: idx === currentIndex ? 'var(--blue)' : 'var(--muted)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                outline: 'none',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
