"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#ai", label: "AI Engine" },
  { href: "#for-hospitals", label: "For Hospitals" },
  { href: "#for-radiologists", label: "For Radiologists" },
  { href: "#research", label: "Research" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex h-[var(--nav-h)] items-center justify-between border-b border-ink-10 bg-white/90 px-4 backdrop-blur-xl transition-shadow sm:px-8 lg:px-12 ${
        scrolled ? "shadow-nav" : ""
      }`}
      aria-label="Primary navigation"
    >
      <a href="#" className="flex items-center gap-2.5 font-syne text-xl font-extrabold text-ink">
        <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-blue5c text-sm font-bold text-white">
          5C
        </span>
        <span>5C Network</span>
      </a>
      <ul className="hidden items-center gap-8 text-sm font-medium text-ink-60 lg:flex">
        {links.map((link) => (
          <li key={link.href}>
            <a className="transition-colors hover:text-ink" href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-3">
        <a
          href="#"
          className="hidden rounded-uiSm px-5 py-2.5 text-sm font-medium text-ink-60 transition-colors hover:text-ink sm:inline-flex"
        >
          Sign In
        </a>
        <a
          href="#contact"
          className="inline-flex items-center rounded-uiSm bg-blue5c px-5 py-2.5 text-sm font-medium text-white shadow-blue transition hover:-translate-y-0.5 hover:bg-blue5c-dark"
        >
          Get Started -&gt;
        </a>
      </div>
    </nav>
  );
}
