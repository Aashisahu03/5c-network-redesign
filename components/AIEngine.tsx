export default function AIEngine() {
  return (
    <section className="ai-section" id="ai">
      <div className="ai-section-bg"></div>
      <div className="ai-grid-overlay"></div>
      <div className="section-inner ai-inner">
        <div className="ai-header reveal">
          <div>
            <div className="section-eyebrow">Bionic AI Engine</div>
            <h2>Meet your AI radiologist.</h2>
            <p className="section-sub">Trained on 3 billion+ medical images. Reads CT, MRI, X-ray, PET-CT, and more. Validates every report. Always on, always learning.</p>
          </div>
          <a href="#" className="btn btn-outline">Explore Bionic →</a>
        </div>
        <div className="ai-features">
          <div className="ai-card reveal">
            <div className="ai-card-icon">👁️</div>
            <h3>Bionic Vision</h3>
            <p>Analyzes CT, MRI, X-ray, PET-CT, and ultrasound. Segments anatomy, measures lesions, and flags critical findings automatically.</p>
            <div className="ai-metric">
              <span className="ai-metric-num">10–20s</span>
              <span className="ai-metric-label">per scan analysis</span>
            </div>
          </div>
          <div className="ai-card reveal" style={{ transitionDelay: "0.1s" }}>
            <div className="ai-card-icon">🎙️</div>
            <h3>Bionic Flow</h3>
            <p>Voice-to-report dictation system. Radiologists dictate naturally and get structured, formatted reports instantly — no manual typing.</p>
            <div className="ai-metric">
              <span className="ai-metric-num">3B+</span>
              <span className="ai-metric-label">training images</span>
            </div>
          </div>
          <div className="ai-card reveal" style={{ transitionDelay: "0.2s" }}>
            <div className="ai-card-icon">🛡️</div>
            <h3>AI Quality Control</h3>
            <p>Specialized QC agents review every report before sign-off. Catches contradictions, ensures clinical completeness, and validates accuracy.</p>
            <div className="ai-metric">
              <span className="ai-metric-num">100%</span>
              <span className="ai-metric-label">reports quality-checked</span>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
