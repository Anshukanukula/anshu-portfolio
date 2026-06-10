import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{
        textAlign: 'center',
        padding: '2.5rem',
        color: 'var(--muted)',
        fontSize: '0.8rem',
        borderTop: '1px solid var(--border)',
        fontFamily: "'JetBrains Mono', monospace",
        position: 'relative',
        zIndex: 1,
      }}
    >
      <p>
        Designed &amp; built by <span style={{ color: 'var(--blue)' }}>Kanukula Anshu</span> · 2026
      </p>
      <p style={{ marginTop: '0.5rem', fontSize: '0.72rem', opacity: 0.6 }}>
        B.Tech IT · Vardhaman College of Engineering · Hyderabad
      </p>
    </footer>
  );
}
