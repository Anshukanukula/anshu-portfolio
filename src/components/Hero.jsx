import React, { useEffect, useState } from 'react';

function StatCounter({ target, suffix = '', label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const end = parseFloat(target);
    if (isNaN(end)) {
      setCount(target);
      return;
    }
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
        setCount(target);
      }
    }, Math.max(stepTime, 20));

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="stat-item" style={{ textAlign: 'left' }}>
      <div
        className="stat-number"
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '2rem',
          fontWeight: 800,
          background: 'linear-gradient(135deg, var(--blue), var(--violet2))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {count}
        {suffix}
      </div>
      <div
        className="stat-label"
        style={{
          fontSize: '0.75rem',
          color: 'var(--muted)',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          fontFamily: "'JetBrains Mono', monospace",
          marginTop: '0.2rem',
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const words = ['Aspiring AI/ML Engineer', 'Data Analyst'];
  const [wordIdx, setWordIdx] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    if (subIndex === words[wordIdx].length + 1 && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setWordIdx((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setTypedText(words[wordIdx].substring(0, subIndex + (isDeleting ? -1 : 1)));
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 30 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, wordIdx]);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '80px',
        paddingLeft: '8vw',
        paddingRight: '8vw',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        className="hero-inner"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '4rem',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <div className={`reveal reveal-left ${mounted ? 'visible' : ''}`}>
          <div
            className="hero-tag"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: 'var(--blue)',
              fontSize: '0.9rem',
              letterSpacing: '3px',
              marginBottom: '1rem',
            }}
          >
            &lt; {typedText}
            <span className="typewriter-cursor"></span> /&gt;
          </div>
          <h1
            className="hero-name"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(2.5rem, 6vw, 4.8rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              background: 'linear-gradient(135deg, var(--white) 0%, var(--blue) 50%, var(--violet2) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '0.5rem',
              letterSpacing: '-1px',
            }}
          >
            Kanukula<br />Anshu
          </h1>
          <div
            className="hero-role"
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              color: 'var(--muted)',
              fontWeight: 400,
              marginBottom: '1.5rem',
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            Building <span style={{ color: 'var(--blue)', fontWeight: 600 }}>intelligent systems</span> that matter
          </div>
          <p
            className="hero-desc"
            style={{
              maxWidth: '580px',
              lineHeight: 1.8,
              color: 'var(--muted)',
              fontSize: '1rem',
              marginBottom: '2.5rem',
            }}
          >
            B.Tech Information Technology Graduate from Vardhaman College of Engineering with a{' '}
            <strong style={{ color: 'var(--white)' }}>9.36 CGPA</strong>. Specialized in Machine Learning, Deep
            Learning, NLP, and Full Stack application development. Leveraging computer vision and automation to engineer
            high-impact real-world solutions.
          </p>
          <div
            className="hero-btns"
            style={{
              display: 'flex',
              gap: '1.2rem',
              flexWrap: 'wrap',
            }}
          >
            <a href="#projects" className="btn-grad">
              View Publications
            </a>
            <a href="#contact" className="btn-outline-glow">
              Get In Touch
            </a>
          </div>
        </div>

        <div
          className={`hero-avatar reveal reveal-right ${mounted ? 'visible' : ''} floating-element`}
          style={{
            position: 'relative',
            width: '280px',
            height: '280px',
            flexShrink: 0,
          }}
        >
          <div
            className="avatar-ring"
            style={{
              position: 'absolute',
              inset: '-10px',
              borderRadius: '50%',
              border: '2px solid transparent',
              background: 'linear-gradient(135deg, var(--blue), var(--violet2)) border-box',
              WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'destination-out',
              maskComposite: 'exclude',
            }}
          ></div>
          <div
            className="avatar-ring2"
            style={{
              position: 'absolute',
              inset: '-20px',
              borderRadius: '50%',
              border: '1px solid rgba(0, 240, 255, 0.15)',
            }}
          ></div>
          <div
            className="avatar-img"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              border: '4px solid var(--navy)',
              background: 'linear-gradient(135deg, var(--navy2), var(--black))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              boxShadow: 'inset 0 0 20px rgba(0, 240, 255, 0.2)',
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}anshu.jpg`}
              alt="Kanukula Anshu"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
              }}
            />
          </div>
          <div
            className="cgpa-badge"
            style={{
              position: 'absolute',
              bottom: '-5px',
              right: '-5px',
              background: 'linear-gradient(135deg, var(--blue2), var(--violet))',
              borderRadius: '50px',
              padding: '0.45rem 1rem',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.8rem',
              fontWeight: 700,
              boxShadow: 'var(--glow)',
              whiteSpace: 'nowrap',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            ⭐ CGPA 9.36 / 10
          </div>
        </div>
      </div>

      <div
        className="stats-bar reveal visible"
        style={{
          display: 'flex',
          gap: '4rem',
          flexWrap: 'wrap',
          marginTop: '4.5rem',
          paddingTop: '2.2rem',
          borderTop: '1px solid var(--border)',
          maxWidth: '1200px',
          margin: '4.5rem auto 0',
          width: '100%',
        }}
      >
        <StatCounter target="3" suffix="+" label="AI Projects" />
        <StatCounter target="3" label="Internships" />
        <StatCounter target="2" suffix=" Published" label="Research Papers" />
        <StatCounter target="1" suffix=" Forthcoming" label="Springer / IEEE" />
        <StatCounter target="8" suffix="+" label="Certifications" />
        <StatCounter target="98" suffix="%" label="Intermediate Score" />
      </div>
    </section>
  );
}
