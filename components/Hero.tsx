export default function Hero() {
  return (
    <section className="hero">
  <div className="hero-atmosphere"></div>
  <div className="hero-grid"></div>
  <div className="hero-inner">

    <div className="hero-content">
      <div className="hero-eyebrow">
        <span className="eyebrow-dot"></span>
        India&apos;s #1 AI Radiology Platform
      </div>
      <h1>
        Where <span className="accent">AI</span> and<br />
        radiologists<br />work as one.
      </h1>
      <p className="hero-sub">
        From scan to signed report in 30 minutes. Bionic AI runs the workflow. 400+ subspecialist radiologists own the diagnosis. 10,000+ reads daily across 1,500+ facilities.
      </p>
      <div className="hero-actions">
        <a href="#contact" className="btn btn-primary btn-lg">Request a Demo →</a>
        <a href="#how-it-works" className="btn btn-outline btn-lg">See How It Works</a>
      </div>
      <div className="hero-stats">
        <div className="stat-item">
          <span className="stat-num">1,500<span style={{ color: "var(--c-blue-bright)" }}>+</span></span>
          <span className="stat-label">Healthcare Facilities</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">10K<span style={{ color: "var(--c-blue-bright)" }}>+</span></span>
          <span className="stat-label">Daily Scans Reported</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">30<span style={{ fontSize: "0.9em", color: "var(--c-blue-bright)" }}> min</span></span>
          <span className="stat-label">Avg. Turnaround</span>
        </div>
        <div className="stat-item" style={{ borderRight: "none" }}>
          <span className="stat-num">400<span style={{ color: "var(--c-blue-bright)" }}>+</span></span>
          <span className="stat-label">Expert Radiologists</span>
        </div>
      </div>
    </div>

    <div className="hero-visual">
      {/* Floating notifications */}
      <div className="float-notif top">
        <span className="fn-icon">🧑‍⚕️</span>
        <div>
          <div>Dr. Priya R. signed report</div>
          <div className="fn-sub">2 seconds ago · CT Chest</div>
        </div>
      </div>
      <div className="float-notif bottom">
        <span className="fn-icon">📡</span>
        <div>
          <div>DICOM study received</div>
          <div className="fn-sub">Via PACS · 3s ago</div>
        </div>
      </div>

      {/* Main scan card */}
      <div className="scan-card">
        <div className="scan-topbar">
          <span className="scan-type-badge">CT · CHEST · AXIAL</span>
          <span className="scan-live"><span className="scan-live-dot"></span>AI Active</span>
        </div>

        {/* CT Scan Visualization */}
        <div className="ct-viewport">
          <div className="ct-scan-art">
            <div className="ct-body-outline"></div>
            <div className="ct-rib-l"></div>
            <div className="ct-rib-r"></div>
            <div className="ct-spine"></div>
            <div className="ct-heart"></div>
            <div className="ct-aorta"></div>
            <div className="ct-crosshair-h"></div>
            <div className="ct-crosshair-v"></div>
          </div>
          <div className="ct-scanline"></div>
          <div className="ct-corner tl">WL: 40<br />WW: 400</div>
          <div className="ct-corner bl">AXIAL · S12/40</div>
          <div className="ct-measure-box">↔ 28.4 mm</div>
        </div>

        {/* Findings */}
        <div className="scan-findings">
          <div className="finding-row">
            <span className="finding-label">Lung parenchyma</span>
            <span className="badge badge-ok">Normal</span>
          </div>
          <div className="finding-row">
            <span className="finding-label">Mediastinum</span>
            <span className="badge badge-review">Review</span>
          </div>
          <div className="finding-row">
            <span className="finding-label">AI Confidence</span>
            <span className="finding-value">97.4%</span>
          </div>
        </div>

        <div className="scan-footer">
          <div className="tat-chip">
            TAT: <span className="tat-time">18 min</span>
          </div>
          <div className="ai-chip">
            <span className="ai-chip-dot"></span>
            Bionic Vision
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
