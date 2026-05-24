export default function Testimonials() {
  return (
    <section className="testimonials-section">
  <div className="section-inner">
    <div className="testi-header reveal">
      <div className="section-eyebrow">What they say</div>
      <h2>Trusted by 1,500+ facilities.</h2>
    </div>
    <div className="testi-grid">
      <div className="testi-card reveal">
        <div className="testi-stars">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <p className="testi-text">The quality of reporting is exceptional, and turnaround times have transformed our workflow. Technical issues are resolved almost immediately. Having access to top radiologists around the clock is genuinely unparalleled.</p>
        <div className="testi-author">
          <div className="testi-avatar">JD</div>
          <div>
            <div className="testi-name">Director of Radiology</div>
            <div className="testi-org">Jain Diagnostics</div>
          </div>
        </div>
      </div>
      <div className="testi-card reveal" style={{ transitionDelay: "0.1s" }}>
        <div className="testi-stars">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <p className="testi-text">5C Network delivered exactly what they promised — reliable, rapid, and convenient. The AI-assisted reporting means our radiologists can focus on complex cases while routine reads happen automatically.</p>
        <div className="testi-author">
          <div className="testi-avatar">LN</div>
          <div>
            <div className="testi-name">CEO</div>
            <div className="testi-org">LN Diagnostics</div>
          </div>
        </div>
      </div>
      <div className="testi-card reveal" style={{ transitionDelay: "0.2s" }}>
        <div className="testi-stars">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <p className="testi-text">We processed over 12,500 scans last month. Average turnaround: 11 minutes. Three years ago, the same volume would have required 6 additional radiologists we simply couldn&apos;t hire.</p>
        <div className="testi-author">
          <div className="testi-avatar">AH</div>
          <div>
            <div className="testi-name">Hospital Administrator</div>
            <div className="testi-org">Apollo Diagnostics Network</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
