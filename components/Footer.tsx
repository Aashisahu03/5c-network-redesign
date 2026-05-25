export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <span className="footer-logo-mark">5C</span>
              <span className="footer-logo-text">5C Network</span>
            </a>
            <p className="footer-desc">
              Make radiology accurate, actionable and accessible for everyone
              using multimodal, autonomous imaging and reporting.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn" className="footer-social-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="#" aria-label="Instagram" className="footer-social-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" /></svg>
              </a>
              <a href="#" aria-label="Facebook" className="footer-social-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Company</h4>
            <ul className="footer-links">
              {["Our Name", "About Us", "Platform", "News", "Research", "Clinical Evidence", "Resources", "Buyer's Guide", "Case Studies", "Facts", "Careers", "FAQ", "Explore 5C", "What is GM AI?", "Hybrid Intelligence", "The Clinical Flywheel", "Contact"].map(item => (
                <li key={item}><a href="#">{item}</a></li>
              ))}
            </ul>
            <a href="#" className="footer-whitepaper-btn">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
              Free Whitepaper
            </a>
          </div>

          {/* Locations */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Locations</h4>
            <ul className="footer-links">
              {["Bangalore", "Mumbai", "Delhi NCR", "Chennai", "Hyderabad", "All Locations"].map(item => (
                <li key={item}><a href="#">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* For Radiologists */}
          <div className="footer-col">
            <h4 className="footer-col-heading">For Radiologists</h4>
            <ul className="footer-links">
              {["Super-Specialists", "Overview", "Apply", "Earnings", "Technology", "Subspecialties", "Fresh Graduates", "Return to Radiology", "FAQ", "Open Positions"].map(item => (
                <li key={item}><a href="#">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Services</h4>
            <ul className="footer-links">
              {["Radiology AI", "Bionic AI Suite", "Teleradiology", "MRI Reporting", "CT Scan Reporting", "Nighthawk Radiology", "ROI Calculator", "Enterprise Solutions", "Radiology at Scale", "Scale Case Studies", "Compare 5C", "Traditional vs AI-Native"].map(item => (
                <li key={item}><a href="#">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4 className="footer-col-heading">Contact Info</h4>
            <div className="footer-contact-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              <a href="mailto:helpline@5cnetwork.com">helpline@5cnetwork.com</a>
            </div>
            <div className="footer-contact-item footer-address">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              <span>5C Towers<br />
                #246, 6th Main Rd,<br />
                Mico Layout, BTM 2nd Stage,<br />
                Bengaluru, Karnataka 560076
              </span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© 2026 5C Network (India) Private Limited. All rights reserved.</span>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Compliance &amp; Regulatory</a>
          </div>
        </div>
      </div>
    </footer>
  );
}