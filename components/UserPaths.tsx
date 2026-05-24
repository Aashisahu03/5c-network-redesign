import type React from 'react';

export default function UserPaths() {
  return (
    <section className="paths-section" id="for-hospitals">
  <div className="section-inner">
    <div className="paths-header reveal">
      <div className="section-eyebrow">Who we serve</div>
      <h2>How can we help you?</h2>
      <p className="section-sub">Whether you run a hospital, manage a chain, or practice as a radiologist — 5C has a workflow built for you.</p>
    </div>
    <div className="paths-grid">
      <a href="#" className="path-card reveal" style={{ "--rd": "0s" } as React.CSSProperties}>
        <div className="path-icon">🏥</div>
        <h3>I run a hospital or diagnostic centre</h3>
        <p>Signed radiology reports in 30 minutes. 24/7 coverage. Pay-per-scan with no retainers or lock-ins.</p>
        <span className="path-arrow">→</span>
      </a>
      <a href="#" className="path-card reveal" style={{ "--rd": "0.07s" } as React.CSSProperties}>
        <div className="path-icon">🔬</div>
        <h3>I&apos;m starting a new diagnostic centre</h3>
        <p>8-step setup guide covering licences, capex, equipment, PACS, AI, and reporting from day one.</p>
        <span className="path-arrow">→</span>
      </a>
      <a href="#" className="path-card reveal" style={{ "--rd": "0.14s" } as React.CSSProperties} id="for-radiologists">
        <div className="path-icon">🧑‍⚕️</div>
        <h3>I&apos;m a radiologist</h3>
        <p>Report from home. Premium night rates. Sub-specialty cases daily. AI-assisted workflow to read faster.</p>
        <span className="path-arrow">→</span>
      </a>
      <a href="#" className="path-card reveal" style={{ "--rd": "0.21s" } as React.CSSProperties}>
        <div className="path-icon">🏢</div>
        <h3>I manage a hospital chain</h3>
        <p>Multi-site enterprise coverage. Unified reporting dashboard. Scale from 10 to 10,000 scans per day.</p>
        <span className="path-arrow">→</span>
      </a>
    </div>
  </div>
</section>

  );
}
