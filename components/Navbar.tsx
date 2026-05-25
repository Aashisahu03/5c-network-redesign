"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────
interface DropdownItem {
  label: string;
  href: string;
  badge?: string;
  sub?: string;
}

interface NavItem {
  label: string;
  href?: string;
  special?: boolean; // Ask 5C red-underline treatment
  dropdown?: DropdownItem[];
}

// ─── Nav structure (mirrors live site) ───────────────────
const NAV_ITEMS: NavItem[] = [
  {
    label: "Ask 5C",
    href: "#",
    special: true,
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Bionic",
    dropdown: [
      { label: "Bionic Vision", href: "/bionic", sub: "The clinical AI engine" },
      { label: "Bionic Flow", href: "/bionicflow", sub: "Voice-to-report dictation" },
      { label: "Bionic Inside", href: "/bionic-inside", sub: "On BPL hardware", badge: "New" },
    ],
  },
  {
    label: "Media",
    href: "/news",
  },
  {
    label: "Research",
    dropdown: [
      { label: "Agentic Knee X-rays", href: "/research/knee-agentic-reasoning", badge: "New" },
      { label: "From Slices to Reports", href: "/research/state-of-ai-cross-sectional-imaging" },
      { label: "Clinical Evidence", href: "/evidence" },
      { label: "Hybrid Intelligence", href: "/hybrid-intelligence" },
      { label: "What is GM AI?", href: "/gm-ai" },
    ],
  },
  {
    label: "Resources",
    dropdown: [
      { label: "Compare 5C", href: "/compare" },
      { label: "Traditional vs AI-Native", href: "/teleradiology-comparison" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Setup Guide", href: "/start-a-diagnostic-centre" },
      { label: "Blog", href: "/blogs" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Careers",
    href: "/careers",
  },
];

// ─── Chevron icon ─────────────────────────────────────────
function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="11" height="11" viewBox="0 0 12 12" fill="none"
      style={{
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.22s cubic-bezier(0.16,1,0.3,1)",
        flexShrink: 0,
        opacity: 0.5,
      }}
    >
      <path d="M2 4.5L6 8L10 4.5" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Dropdown menu ────────────────────────────────────────
function Dropdown({
  items,
  open,
  id,
}: {
  items: DropdownItem[];
  open: boolean;
  id: string;
}) {
  return (
    <div
      id={id}
      className={`nav-dropdown${open ? " open" : ""}`}
      role="menu"
      aria-hidden={!open}
    >
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="nav-dropdown-item"
          role="menuitem"
          tabIndex={open ? 0 : -1}
        >
          <span className="dropdown-item-label">
            {item.label}
            {item.badge && (
              <span className="dropdown-badge">{item.badge}</span>
            )}
          </span>
          {item.sub && (
            <span className="dropdown-item-sub">{item.sub}</span>
          )}
        </a>
      ))}
    </div>
  );
}

// ─── Single nav item (handles both link + dropdown) ───────
function NavItemEl({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const dropdownId = `dropdown-${item.label.toLowerCase().replace(/\s/g, "-")}`;

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  if (item.dropdown) {
    return (
      <li className="nav-item has-dropdown" ref={ref}>
        <button
          className={`nav-link nav-link-btn${open ? " active" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="true"
          aria-expanded={open}
          aria-controls={dropdownId}
        >
          {item.label}
          <Chevron open={open} />
        </button>
        <Dropdown items={item.dropdown} open={open} id={dropdownId} />
      </li>
    );
  }

  return (
    <li className="nav-item" ref={ref}>
      <a
        href={item.href}
        className={`nav-link${item.special ? " nav-link-special" : ""}`}
      >
        {item.label}
      </a>
    </li>
  );
}

// ─── Mobile drawer ────────────────────────────────────────
function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`drawer-backdrop${open ? " open" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Drawer panel */}
      <div
        className={`drawer${open ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="drawer-header">
          <a href="#" className="nav-logo" onClick={onClose}>
            <span className="nav-logo-mark" aria-hidden="true">
              <LogoIcon />
            </span>
            5C Network
          </a>
          <button
            className="drawer-close"
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="drawer-body">
          {/* Audience CTAs first — highest priority on mobile */}
          <div className="drawer-audience">
            <a href="/for-hospitals" className="drawer-audience-btn hospital" onClick={onClose}>
              <HospitalIcon />
              For Hospitals
            </a>
            <a href="/radiologists" className="drawer-audience-btn radiologist" onClick={onClose}>
              <RadiologistIcon />
              For Radiologists
            </a>
          </div>

          {/* All nav items */}
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="drawer-section">
              {item.dropdown ? (
                <>
                  <span className="drawer-section-label">{item.label}</span>
                  {item.dropdown.map((d) => (
                    <a key={d.href} href={d.href} className="drawer-link" onClick={onClose}>
                      {d.label}
                      {d.badge && <span className="dropdown-badge">{d.badge}</span>}
                    </a>
                  ))}
                </>
              ) : (
                <a
                  href={item.href}
                  className={`drawer-link${item.special ? " special" : ""}`}
                  onClick={onClose}
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="drawer-footer">
          <a href="#" className="btn btn-ghost drawer-signin">Sign In</a>
          <a href="#contact" className="btn btn-primary" onClick={onClose}>Get Started →</a>
        </div>
      </div>
    </>
  );
}

// ─── SVG icons ────────────────────────────────────────────
function LogoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" stroke="white" strokeWidth="1.5" opacity="0.4" />
      <circle cx="16" cy="16" r="6" fill="white" opacity="0.9" />
      <line x1="16" y1="2" x2="16" y2="8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="24" x2="16" y2="30" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="2" y1="16" x2="8" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="24" y1="16" x2="30" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function HospitalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  );
}
function RadiologistIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

// ─── Main Navbar ──────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  return (
    <>
      <nav
        id="main-nav"
        className={`navbar${scrolled ? " scrolled" : ""}`}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="#" className="nav-logo" aria-label="5C Network home">
          <span className="nav-logo-mark" aria-hidden="true">
            <LogoIcon />
          </span>
          <span className="nav-logo-text">5C Network</span>
        </a>

        {/* ── Centre: primary nav links ── */}
        <ul className="nav-links" role="list">
          {NAV_ITEMS.map((item) => (
            <NavItemEl key={item.label} item={item} />
          ))}
        </ul>

        {/* ── Right: audience pills + utils ── */}
        <div className="nav-right">
          {/* For Hospitals pill */}
          <a href="/for-hospitals" className="nav-audience-pill hospital">
            <HospitalIcon />
            <span>For Hospitals</span>
            <Chevron open={false} />
          </a>

          {/* For Radiologists pill */}
          <a href="/radiologists" className="nav-audience-pill radiologist">
            <RadiologistIcon />
            <span>For Radiologists</span>
            <Chevron open={false} />
          </a>

          {/* Divider */}
          <div className="nav-divider" aria-hidden="true" />

          {/* Theme toggle */}
          <button
            className="nav-icon-btn"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            <SunIcon />
          </button>

          {/* Sign In */}
          <a href="#" className="btn btn-ghost nav-signin">Sign In</a>

          {/* Mobile hamburger */}
          <button
            className="nav-hamburger"
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
            onClick={() => setDrawerOpen((v) => !v)}
          >
            <span className={drawerOpen ? "open" : ""} />
            <span className={drawerOpen ? "open" : ""} />
            <span className={drawerOpen ? "open" : ""} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <MobileDrawer open={drawerOpen} onClose={closeDrawer} />

      {/* ── Styles ── */}
      <style>{`
        /* ─── Navbar shell ─── */
        .navbar {
          position: fixed; top: 0; left: 0; right: 0; z-index: 900;
          height: 68px;
          display: flex; align-items: center;
          padding: 0 20px 0 16px;
          gap: 0;
          transition: background 0.35s cubic-bezier(0.16,1,0.3,1),
                      border-color 0.35s, box-shadow 0.35s;
        }
        .navbar.scrolled {
          background: rgba(5, 8, 16, 0.88);
          backdrop-filter: blur(24px) saturate(180%);
          border-bottom: 1px solid rgba(255,255,255,0.07);
          box-shadow: 0 1px 0 rgba(255,255,255,0.03), 0 8px 32px rgba(0,0,0,0.35);
        }

        /* ─── Logo ─── */
        .nav-logo {
          display: flex; align-items: center; gap: 10px;
          font-family: 'Clash Display', sans-serif;
          font-weight: 600; font-size: 1rem;
          color: rgba(255,255,255,0.92);
          text-decoration: none; letter-spacing: -0.02em;
          flex-shrink: 0; margin-right: 8px;
        }
        .nav-logo-mark {
          width: 34px; height: 34px; border-radius: 10px;
          background: linear-gradient(135deg, #2B7FFF 0%, #00D4FF 100%);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 0 16px rgba(43,127,255,0.35);
        }
        .nav-logo-text { white-space: nowrap; }

        /* ─── Centre links ─── */
        .nav-links {
          display: flex; align-items: center;
          list-style: none; margin: 0; padding: 0;
          gap: 2px; flex: 1;
          /* Allow shrinking — items will hide via media queries */
          overflow: hidden;
        }
        .nav-item { position: relative; }

        .nav-link,
        .nav-link-btn {
          display: inline-flex; align-items: center; gap: 4px;
          padding: 6px 9px;
          border-radius: 7px;
          font-size: 0.82rem; font-weight: 500;
          color: rgba(255,255,255,0.55);
          text-decoration: none; white-space: nowrap;
          cursor: pointer; border: none; background: transparent;
          font-family: inherit;
          transition: color 0.18s, background 0.18s;
          letter-spacing: 0.005em;
        }
        .nav-link:hover,
        .nav-link-btn:hover,
        .nav-link-btn.active {
          color: rgba(255,255,255,0.92);
          background: rgba(255,255,255,0.06);
        }

        /* Ask 5C — special red underline */
        .nav-link-special {
          color: rgba(255,255,255,0.85);
          position: relative;
        }
        .nav-link-special::after {
          content: '';
          position: absolute; bottom: 2px; left: 9px; right: 9px;
          height: 2px; border-radius: 1px;
          background: #E8383B;
        }

        /* ─── Dropdown ─── */
        .has-dropdown { position: relative; }

        .nav-dropdown {
          position: absolute; top: calc(100% + 10px); left: 50%;
          transform: translateX(-50%) translateY(-6px);
          min-width: 220px;
          background: #0d1221;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          padding: 6px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.6),
                      0 0 0 1px rgba(255,255,255,0.03);
          opacity: 0; pointer-events: none;
          transition: opacity 0.2s cubic-bezier(0.16,1,0.3,1),
                      transform 0.25s cubic-bezier(0.16,1,0.3,1);
          z-index: 200;
        }
        .nav-dropdown.open {
          opacity: 1; pointer-events: auto;
          transform: translateX(-50%) translateY(0);
        }
        .nav-dropdown-item {
          display: flex; flex-direction: column; gap: 2px;
          padding: 9px 12px; border-radius: 9px;
          text-decoration: none;
          transition: background 0.15s;
        }
        .nav-dropdown-item:hover { background: rgba(255,255,255,0.06); }

        .dropdown-item-label {
          display: flex; align-items: center; gap: 7px;
          font-size: 0.85rem; font-weight: 500;
          color: rgba(255,255,255,0.85);
        }
        .dropdown-item-sub {
          font-size: 0.74rem; color: rgba(255,255,255,0.35);
        }
        .dropdown-badge {
          font-size: 0.62rem; font-weight: 700; letter-spacing: 0.05em;
          background: rgba(43,127,255,0.2); color: #4F97FF;
          border: 1px solid rgba(43,127,255,0.25);
          padding: 1px 6px; border-radius: 100px;
          text-transform: uppercase;
        }

        /* ─── Right section ─── */
        .nav-right {
          display: flex; align-items: center; gap: 6px;
          flex-shrink: 0; margin-left: 8px;
        }

        /* Audience pills */
        .nav-audience-pill {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 6px 12px 6px 9px;
          border-radius: 8px; border: 1px solid transparent;
          font-size: 0.8rem; font-weight: 600;
          text-decoration: none; white-space: nowrap;
          transition: all 0.2s cubic-bezier(0.16,1,0.3,1);
          letter-spacing: 0.01em;
        }
        .nav-audience-pill.hospital {
          background: rgba(43,127,255,0.1);
          border-color: rgba(43,127,255,0.25);
          color: #4F97FF;
        }
        .nav-audience-pill.hospital:hover {
          background: rgba(43,127,255,0.18);
          border-color: rgba(43,127,255,0.45);
          transform: translateY(-1px);
        }
        .nav-audience-pill.radiologist {
          background: rgba(0,229,158,0.08);
          border-color: rgba(0,229,158,0.2);
          color: #00E59E;
        }
        .nav-audience-pill.radiologist:hover {
          background: rgba(0,229,158,0.14);
          border-color: rgba(0,229,158,0.4);
          transform: translateY(-1px);
        }

        /* Divider */
        .nav-divider {
          width: 1px; height: 20px;
          background: rgba(255,255,255,0.1);
          margin: 0 2px;
          flex-shrink: 0;
        }

        /* Icon button (theme toggle) */
        .nav-icon-btn {
          width: 34px; height: 34px; border-radius: 9px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.55);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; flex-shrink: 0;
          transition: all 0.2s;
        }
        .nav-icon-btn:hover {
          background: rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.9);
        }

        /* Sign In */
        .nav-signin {
          font-size: 0.82rem; padding: 7px 14px;
          white-space: nowrap;
        }

        /* Hamburger */
        .nav-hamburger {
          display: none;
          flex-direction: column; justify-content: center; gap: 4.5px;
          width: 36px; height: 36px; padding: 8px;
          border-radius: 9px; border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          cursor: pointer; flex-shrink: 0;
        }
        .nav-hamburger span {
          display: block; width: 100%; height: 1.5px;
          background: rgba(255,255,255,0.6); border-radius: 1px;
          transform-origin: center;
          transition: transform 0.25s cubic-bezier(0.16,1,0.3,1),
                      opacity 0.25s;
        }
        .nav-hamburger span.open:nth-child(1) { transform: translateY(6px) rotate(45deg); }
        .nav-hamburger span.open:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nav-hamburger span.open:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

        /* ─── Mobile drawer ─── */
        .drawer-backdrop {
          position: fixed; inset: 0; z-index: 800;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          opacity: 0; pointer-events: none;
          transition: opacity 0.3s;
        }
        .drawer-backdrop.open { opacity: 1; pointer-events: auto; }

        .drawer {
          position: fixed; top: 0; right: 0; bottom: 0; z-index: 850;
          width: min(320px, 90vw);
          background: #090d1a;
          border-left: 1px solid rgba(255,255,255,0.08);
          display: flex; flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
          box-shadow: -24px 0 60px rgba(0,0,0,0.5);
        }
        .drawer.open { transform: translateX(0); }

        .drawer-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          flex-shrink: 0;
        }
        .drawer-close {
          width: 32px; height: 32px; border-radius: 8px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.6);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .drawer-close:hover { background: rgba(255,255,255,0.1); color: white; }

        .drawer-body {
          flex: 1; overflow-y: auto; padding: 16px 12px;
          display: flex; flex-direction: column; gap: 2px;
        }
        .drawer-audience {
          display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
          padding: 4px 8px 16px; margin-bottom: 8px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .drawer-audience-btn {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          padding: 10px 8px; border-radius: 10px;
          font-size: 0.78rem; font-weight: 600; text-decoration: none;
          transition: all 0.2s;
        }
        .drawer-audience-btn.hospital {
          background: rgba(43,127,255,0.1); color: #4F97FF;
          border: 1px solid rgba(43,127,255,0.2);
        }
        .drawer-audience-btn.radiologist {
          background: rgba(0,229,158,0.08); color: #00E59E;
          border: 1px solid rgba(0,229,158,0.15);
        }

        .drawer-section { padding: 2px 0; }
        .drawer-section-label {
          display: block; padding: 8px 12px 4px;
          font-size: 0.68rem; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: rgba(255,255,255,0.25);
        }
        .drawer-link {
          display: flex; align-items: center; gap: 8px;
          padding: 9px 12px; border-radius: 9px;
          font-size: 0.86rem; font-weight: 500;
          color: rgba(255,255,255,0.65); text-decoration: none;
          transition: background 0.15s, color 0.15s;
        }
        .drawer-link:hover { background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.92); }
        .drawer-link.special { color: rgba(255,255,255,0.85); }
        .drawer-link.special::before {
          content: ''; display: inline-block;
          width: 8px; height: 8px; border-radius: 50%;
          background: #E8383B; flex-shrink: 0;
        }

        .drawer-footer {
          padding: 16px 20px;
          border-top: 1px solid rgba(255,255,255,0.07);
          display: flex; gap: 10px; flex-shrink: 0;
        }
        .drawer-signin { flex: 1; justify-content: center; }

        /* ─── Responsive breakpoints ─── */

        /* Hide audience pills text label at narrower desktop */
        @media (max-width: 1280px) {
          .nav-audience-pill span { display: none; }
          .nav-audience-pill { padding: 6px 8px; }
          .nav-links { gap: 0; }
          .nav-link, .nav-link-btn { padding: 6px 7px; font-size: 0.78rem; }
        }

        /* At tablet — hide centre links, show hamburger */
        @media (max-width: 960px) {
          .nav-links { display: none; }
          .nav-audience-pill { display: none; }
          .nav-divider { display: none; }
          .nav-icon-btn { display: none; }
          .nav-signin { display: none; }
          .nav-hamburger { display: flex; }
          .nav-logo-text { display: none; }
        }

        @media (max-width: 400px) {
          .navbar { padding: 0 14px; }
        }
      `}</style>
    </>
  );
}