export default function Navbar() {
  return (
    <nav id="main-nav">
  <a href="#" className="nav-logo">
    <span className="nav-logo-mark">5C</span>
    5C Network
  </a>
  <ul className="nav-links">
    <li><a href="#how-it-works">How it works</a></li>
    <li><a href="#ai">Bionic AI</a></li>
    <li><a href="#for-hospitals">Who we serve</a></li>
    <li><a href="#research">Research</a></li>
  </ul>
  <div className="nav-ctas">
    <a href="#" className="btn btn-ghost">Sign In</a>
    <a href="#contact" className="btn btn-primary">Get Started →</a>
    <button className="nav-hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

  );
}
