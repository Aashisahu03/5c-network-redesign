export default function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="section-inner">
        <div className="section-eyebrow reveal">Process</div>
        <h2 className="reveal">From scan to signed report<br />in three steps.</h2>
        <p className="section-sub reveal" style={{ marginBottom: 0 }}>AI handles the heavy lifting so your radiologists can focus on what matters — the diagnosis.</p>
        <div className="how-layout">
          <div className="how-steps">
            <div className="step-item active reveal">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Scan arrives via DICOM</h3>
                <p>Your PACS sends studies to 5C via standard DICOM protocol. No hardware installation required. Go live in 72 hours.</p>
              </div>
            </div>
            <div className="step-item reveal">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Bionic AI reads in 10–20 seconds</h3>
                <p>Bionic Vision detects pathologies, segments structures, takes measurements, and flags critical findings instantly. An expert radiologist reviews everything.</p>
              </div>
            </div>
            <div className="step-item reveal">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Signed report delivered in 30 min</h3>
                <p>Structured, validated report lands back in your RIS/PACS. Average turnaround: 30 minutes versus the 24–48 hour industry average.</p>
              </div>
            </div>
          </div>

          <div className="how-visual reveal">
            <div className="workflow-diagram">
              <div className="workflow-node active">
                <span className="wf-icon">📡</span>
                <div className="wf-text">
                  <div className="wf-title">DICOM Study Received</div>
                  <div className="wf-sub">Via PACS integration</div>
                </div>
                <span className="wf-time">10-20s</span>
              </div>
              <div className="workflow-connector"></div>
              <div className="workflow-node">
                <span className="wf-icon">🧑‍⚕️</span>
                <div className="wf-text">
                  <div className="wf-title">Radiologist Review</div>
                  <div className="wf-sub">AI-assisted, subspecialist</div>
                </div>
                <span className="wf-time">~20 min</span>
              </div>
              <div className="workflow-connector"></div>
              <div className="workflow-node active">
                <span className="wf-icon">📄</span>
                <div className="wf-text">
                  <div className="wf-title">Signed Report Delivered</div>
                  <div className="wf-sub">Back to your RIS/PACS</div>
                </div>
                <span className="wf-time">≤ 30 min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
