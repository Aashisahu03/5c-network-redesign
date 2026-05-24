export default function CTASection() {
  return (
    <section className="cta-section" id="contact">
  <div className="cta-inner">
    <div className="cta-left reveal">
      <div className="section-eyebrow">Get started</div>
      <h2>Ready to transform your radiology workflow?</h2>
      <p className="section-sub">Go live in 72 hours. No hardware. No retainer fees. Pay only for what you use.</p>
      <div className="cta-actions">
        <a href="#" className="btn btn-primary btn-lg">Request a Demo →</a>
        <a href="#" className="btn btn-ghost btn-lg">Talk to Sales</a>
      </div>
      <div className="cta-trust">
        <div className="cta-trust-dot"></div>
        <span className="cta-trust-text">No contracts · Setup in 72h · Pay-per-scan</span>
      </div>
    </div>
    <div className="cta-right reveal" style={{ transitionDelay: "0.15s" }}>
      <p className="cta-form-title">Get in touch</p>
      <p className="cta-form-sub">We&apos;ll reach out within 2 hours on business days.</p>
      <div className="form-row">
        <div className="form-field">
          <input className="form-input" type="text" placeholder="Your name" />
        </div>
        <div className="form-field">
          <input className="form-input" type="email" placeholder="Work email" />
        </div>
        <div className="form-field">
          <input className="form-input" type="text" placeholder="Hospital / facility name" />
        </div>
        <div className="form-field">
          <select className="form-input">
            <option value="" disabled>Daily scan volume</option>
            <option>Under 50 scans / day</option>
            <option>50–200 scans / day</option>
            <option>200–500 scans / day</option>
            <option>500+ scans / day</option>
          </select>
        </div>
        <button className="btn btn-primary form-submit">Send Request →</button>
      </div>
    </div>
  </div>
</section>

  );
}
