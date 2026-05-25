"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────
type Role = "hospital" | "radiologist" | "enterprise";

interface RoleConfig {
  id: Role;
  label: string;
  headline: string;
  sub: string;
  cta: string;
  ctaHref: string;
}

// ─── Role-specific content ────────────────────────────────
// UX FIX: Hero now speaks directly to each audience instead
// of one generic line that resonates with no one specifically.
const ROLES: RoleConfig[] = [
  {
    id: "hospital",
    label: "Hospital / Diagnostic Centre",
    headline: "Reports back in 30 min.\nNo hardware. Live in 72 hours.",
    sub: "Your PACS sends the scan. Bionic AI reads it in 15 seconds. A subspecialist signs it. The report lands back — all within 30 minutes. Pay only per scan, no retainers.",
    cta: "See a Live Report",
    ctaHref: "#contact",
  },
  {
    id: "radiologist",
    label: "Radiologist",
    headline: "Read from anywhere.\nEarn subspecialist rates.",
    sub: "AI pre-reads every scan so you spend time on diagnosis, not data entry. Premium rates for night shifts. Subspecialty cases matched to your expertise daily.",
    cta: "See What You'll Earn",
    ctaHref: "#radiologists",
  },
  {
    id: "enterprise",
    label: "Hospital Chain / Enterprise",
    headline: "10 sites or 10,000 scans.\nOne unified platform.",
    sub: "Multi-site reporting dashboard, SLA guarantees per facility, and a single contract. Scale from pilot to full network without adding radiologist headcount.",
    cta: "Talk to Enterprise Sales",
    ctaHref: "#enterprise",
  },
];

// ─── Respect prefers-reduced-motion ──────────────────────
function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

// ─── Animated counter ────────────────────────────────────
// FIX: Counter now only starts when the element is actually
// visible in viewport — not on a fixed delay that fires
// regardless of whether the user has scrolled to it yet.
function useCounter(
  target: number,
  duration = 1600,
  active = false,
  reducedMotion = false
) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!active || startedRef.current) return;
    if (reducedMotion) { setValue(target); return; }

    startedRef.current = true;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafRef.current);
  }, [active, target, duration, reducedMotion]);

  return value;
}

// ─── Stat item ───────────────────────────────────────────
function StatItem({
  value,
  suffix,
  label,
  last = false,
  active,
  reducedMotion,
}: {
  value: number;
  suffix: string;
  label: string;
  last?: boolean;
  active: boolean;
  reducedMotion: boolean;
}) {
  const count = useCounter(value, 1600, active, reducedMotion);
  return (
    <div
      className="stat-item"
      style={last ? { borderRight: "none" } : undefined}
      role="listitem"
    >
      <span className="stat-num">
        {count.toLocaleString()}
        <span style={{ color: "var(--c-blue-bright)" }}>{suffix}</span>
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

// ─── Live feed chip ───────────────────────────────────────
// UX FIX: Chips now cycle through real-feeling live events
// to reinforce "always-on platform" — not static text.
const LIVE_EVENTS = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="var(--c-green)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Dr. Priya R. signed report",
    sub: "2s ago · CT Chest · Mumbai",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="var(--c-green)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Dr. Anand K. signed report",
    sub: "18s ago · MRI Brain · Delhi",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="var(--c-green)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Dr. Meena S. signed report",
    sub: "41s ago · X-Ray · Bangalore",
  },
];

const DICOM_EVENTS = [
  { title: "DICOM study received", sub: "Via PACS · 3s ago · Apollo" },
  { title: "DICOM study received", sub: "Via PACS · 11s ago · Jain" },
  { title: "DICOM study received", sub: "Via PACS · 29s ago · SRL" },
];

function LiveChip({
  position,
  reducedMotion,
}: {
  position: "top" | "bottom";
  reducedMotion: boolean;
}) {
  const events = position === "top" ? LIVE_EVENTS : DICOM_EVENTS;
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIdx((i) => (i + 1) % events.length);
        setFading(false);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, [events.length, reducedMotion]);

  const event = events[idx];
  const dicomIcon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="var(--c-blue-bright)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <circle cx="12" cy="20" r="1" fill="var(--c-blue-bright)" />
    </svg>
  );

  return (
    <div
      className={`float-notif ${position}`}
      style={{ opacity: fading ? 0 : 1, transition: "opacity 0.3s ease" }}
      aria-live="polite"
      aria-label={`Live platform activity: ${event.title}`}
    >
      <span className="fn-icon">
        {position === "top" ? event.icon : dicomIcon}
      </span>
      <div>
        <div>{event.title}</div>
        <div className="fn-sub">{event.sub}</div>
      </div>
    </div>
  );
}

// ─── Scan findings cycling ────────────────────────────────
const FINDING_CYCLES = [
  [
    { label: "Lung parenchyma", type: "ok" as const, value: "Normal" },
    { label: "Mediastinum", type: "review" as const, value: "Review" },
    { label: "AI Confidence", type: "value" as const, value: "97.4%" },
  ],
  [
    { label: "Pleural space", type: "ok" as const, value: "Clear" },
    { label: "Pulm. vasculature", type: "ok" as const, value: "Normal" },
    { label: "AI Confidence", type: "value" as const, value: "98.1%" },
  ],
  [
    { label: "Liver", type: "ok" as const, value: "Normal" },
    { label: "Gallbladder", type: "review" as const, value: "Review" },
    { label: "AI Confidence", type: "value" as const, value: "96.8%" },
  ],
];

function ScanFindings({ reducedMotion }: { reducedMotion: boolean }) {
  const [cycleIdx, setCycleIdx] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    const t = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCycleIdx((i) => (i + 1) % FINDING_CYCLES.length);
        setTransitioning(false);
      }, 250);
    }, 3500);
    return () => clearInterval(t);
  }, [reducedMotion]);

  const findings = FINDING_CYCLES[cycleIdx];

  return (
    <div
      className="scan-findings"
      role="list"
      aria-label="AI scan findings"
      style={{ opacity: transitioning ? 0 : 1, transition: "opacity 0.25s ease" }}
    >
      {findings.map((f) => (
        <div className="finding-row" role="listitem" key={f.label}>
          <span className="finding-label">{f.label}</span>
          {f.type === "ok" && <span className="badge badge-ok">{f.value}</span>}
          {f.type === "review" && <span className="badge badge-review">{f.value}</span>}
          {f.type === "value" && <span className="finding-value">{f.value}</span>}
        </div>
      ))}
    </div>
  );
}

// ─── Role selector tab ────────────────────────────────────
function RoleTab({
  role,
  active,
  onClick,
}: {
  role: RoleConfig;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`role-tab${active ? " active" : ""}`}
      onClick={onClick}
      aria-pressed={active}
      aria-label={`View content for ${role.label}`}
    >
      {role.label}
    </button>
  );
}

// ─── Main Hero component ──────────────────────────────────
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const [heroVisible, setHeroVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [activeRole, setActiveRole] = useState<Role>("hospital");
  const [prevRole, setPrevRole] = useState<Role | null>(null);
  const [roleTransitioning, setRoleTransitioning] = useState(false);

  const reducedMotion = useReducedMotion();

  // Hero section visibility (for stagger reveals)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setHeroVisible(true); obs.disconnect(); }
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Stats visibility — counters only fire when stats are in view
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setStatsVisible(true); obs.disconnect(); }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Role switch with cross-fade
  const handleRoleChange = useCallback((id: Role) => {
    if (id === activeRole) return;
    setRoleTransitioning(true);
    setTimeout(() => {
      setPrevRole(activeRole);
      setActiveRole(id);
      setRoleTransitioning(false);
    }, reducedMotion ? 0 : 200);
  }, [activeRole, reducedMotion]);

  const currentRole = ROLES.find((r) => r.id === activeRole)!;

  // Stagger delay helper
  const stagger = (i: number) =>
    reducedMotion ? undefined : { animationDelay: `${i * 120}ms` } as React.CSSProperties;

  return (
    <section
      className="hero"
      ref={sectionRef}
      aria-label="5C Network — AI-native radiology platform"
    >
      {/* Background layers */}
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="hero-inner">

        {/* ══ LEFT COLUMN ══ */}
        <div className="hero-content">

          {/* Eyebrow */}
          <div
            className={`hero-eyebrow${heroVisible ? " animate-in" : ""}`}
            style={stagger(0)}
          >
            <span className="eyebrow-dot" aria-hidden="true" />
            India&apos;s #1 AI Radiology Platform
          </div>

          {/* ── UX IMPROVEMENT: Role selector tabs ──
              Users self-select their context immediately,
              so headline + CTA speak directly to their job.
              No more scrolling to find "Who we serve." */}
          <div
            className={`role-tabs${heroVisible ? " animate-in" : ""}`}
            style={stagger(1)}
            role="group"
            aria-label="Select your role"
          >
            {ROLES.map((r) => (
              <RoleTab
                key={r.id}
                role={r}
                active={activeRole === r.id}
                onClick={() => handleRoleChange(r.id)}
              />
            ))}
          </div>

          {/* ── Dynamic headline — changes per role ── */}
          <h1
            className={`hero-h1${heroVisible ? " animate-in" : ""}${roleTransitioning ? " role-fade-out" : " role-fade-in"}`}
            style={stagger(2)}
            key={activeRole} // forces re-mount animation on role switch
          >
            {currentRole.headline.split("\n").map((line, i) => (
              <span key={i} style={{ display: "block" }}>
                {i === 0
                  ? line.split(" ").map((word, wi) =>
                    word === "AI" || word === "30" || word === "10"
                      ? <span key={wi} className="accent">{word} </span>
                      : `${word} `
                  )
                  : line}
              </span>
            ))}
          </h1>

          {/* ── Dynamic sub-copy ── */}
          <p
            className={`hero-sub${heroVisible ? " animate-in" : ""}`}
            style={stagger(3)}
            key={`sub-${activeRole}`}
          >
            {currentRole.sub}
          </p>

          {/* ── CTAs: primary is role-specific, secondary is universal ── */}
          <div
            className={`hero-actions${heroVisible ? " animate-in" : ""}`}
            style={stagger(4)}
          >
            <a href={currentRole.ctaHref} className="btn btn-primary btn-lg">
              {currentRole.cta} →
            </a>
            <a href="#how-it-works" className="btn btn-outline btn-lg">
              See How It Works
            </a>
          </div>

          {/* ── Trust micro-copy under CTAs ──
              UX FIX: Addresses the main purchase anxiety
              (contracts, setup complexity, cost model) inline,
              right where the user is deciding whether to click. */}
          <p
            className={`hero-trust${heroVisible ? " animate-in" : ""}`}
            style={stagger(5)}
            aria-label="No commitment required"
          >
            <span className="trust-dot" aria-hidden="true" />
            No contracts &nbsp;·&nbsp; Live in 72 hours &nbsp;·&nbsp; Pay per scan
          </p>

          {/* ── Stats ── */}
          <div
            className={`hero-stats${heroVisible ? " animate-in" : ""}`}
            style={stagger(6)}
            role="list"
            aria-label="Platform statistics"
            ref={statsRef}
          >
            <StatItem value={1500} suffix="+" label="Healthcare Facilities"
              active={statsVisible} reducedMotion={reducedMotion} />
            <StatItem value={10000} suffix="+" label="Daily Scans"
              active={statsVisible} reducedMotion={reducedMotion} />
            <div className="stat-item" role="listitem">
              <span className="stat-num">
                30<span style={{ fontSize: "0.9em", color: "var(--c-blue-bright)" }}> min</span>
              </span>
              <span className="stat-label">Avg. Turnaround</span>
            </div>
            <StatItem value={400} suffix="+" label="Radiologists"
              active={statsVisible} reducedMotion={reducedMotion} last />
          </div>
        </div>

        {/* ══ RIGHT COLUMN: Scan card ══ */}
        {/*
          UX NOTE: aria-hidden removed from the entire column.
          The scan card communicates real product value —
          AI findings, TAT, confidence scores. Screen readers
          should be able to access this content.
          Individual decorative sub-elements keep aria-hidden.
        */}
        <div className="hero-visual">

          <LiveChip position="top" reducedMotion={reducedMotion} />
          <LiveChip position="bottom" reducedMotion={reducedMotion} />

          <div
            className="scan-card"
            role="region"
            aria-label="Live AI scan analysis preview"
          >
            <div className="scan-topbar">
              <span className="scan-type-badge">CT · CHEST · AXIAL</span>
              <span className="scan-live" aria-label="AI analysis active">
                <span className="scan-live-dot" aria-hidden="true" />
                AI Active
              </span>
            </div>

            {/* CT Visualization — decorative */}
            <div
              className="ct-viewport"
              aria-hidden="true"
              role="img"
              aria-label="CT scan cross-section visualization"
            >
              <div className="ct-scan-art">
                <div className="ct-body-outline" />
                <div className="ct-rib-l" />
                <div className="ct-rib-r" />
                <div className="ct-spine" />
                <div className="ct-heart" />
                <div className="ct-aorta" />
                <div className="ct-crosshair-h" />
                <div className="ct-crosshair-v" />
              </div>
              <div className="ct-scanline" />
              <div className="ct-corner tl">WL: 40<br />WW: 400</div>
              <div className="ct-corner bl">AXIAL · S12/40</div>
              <div className="ct-measure-box">↔ 28.4 mm</div>
            </div>

            {/* Cycling AI findings */}
            <ScanFindings reducedMotion={reducedMotion} />

            <div className="scan-footer">
              <div className="tat-chip">
                TAT: <span className="tat-time">18 min</span>
              </div>
              <div className="ai-chip" aria-label="Powered by Bionic Vision AI">
                <span className="ai-chip-dot" aria-hidden="true" />
                Bionic Vision
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}