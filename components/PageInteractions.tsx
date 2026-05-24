"use client";

import { useEffect } from "react";

const findings = [
  { label: "Lung parenchyma", badgeClass: "badge badge-ok", text: "Normal" },
  { label: "Mediastinum", badgeClass: "badge badge-review", text: "Review" },
  { label: "Pleural space", badgeClass: "badge badge-ok", text: "Clear" },
];

function animateCounter(el: HTMLElement, end: number, duration = 1800) {
  const startTime = performance.now();
  const isFloat = end !== Math.floor(end);

  function update(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = end * eased;

    el.textContent = isFloat ? current.toFixed(1) : Math.round(current).toLocaleString();

    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

export default function PageInteractions() {
  useEffect(() => {
    const nav = document.getElementById("main-nav");
    const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const revealEls = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const delay = target.style.getPropertyValue("--rd") || "0s";
            target.style.transitionDelay = delay;
            target.classList.add("in");
            revealObserver.unobserve(target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" },
    );
    revealEls.forEach((el) => revealObserver.observe(el));

    document.querySelectorAll<HTMLElement>(".path-card").forEach((card, i) => {
      card.style.setProperty("--rd", `${i * 0.07}s`);
    });

    const steps = Array.from(document.querySelectorAll<HTMLElement>(".step-item"));
    const onStepClick = (step: HTMLElement) => {
      steps.forEach((item) => item.classList.remove("active"));
      step.classList.add("active");
    };
    steps.forEach((step) => step.addEventListener("click", () => onStepClick(step)));

    const statsSection = document.querySelector(".stats-row");
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          document.querySelectorAll<HTMLElement>(".stats-cell-num").forEach((el) => {
            if (el.dataset.counted === "true") return;

            const text = el.textContent?.trim() ?? "";
            const num = Number.parseFloat(text.replace(/[^0-9.]/g, ""));
            const suffix = el.querySelector("span")?.textContent ?? "";

            el.dataset.counted = "true";
            el.textContent = "";

            const counter = document.createElement("span");
            counter.className = "count-num";
            counter.textContent = "0";
            el.appendChild(counter);

            const suffixEl = document.createElement("span");
            suffixEl.textContent = suffix;
            el.appendChild(suffixEl);

            animateCounter(counter, num);
          });
          statsObserver.disconnect();
        });
      },
      { threshold: 0.4 },
    );
    if (statsSection) statsObserver.observe(statsSection);

    let findingIdx = 0;
    const findingTimer = window.setInterval(() => {
      findingIdx = (findingIdx + 1) % findings.length;
      const row = document.querySelector<HTMLElement>(".finding-row");
      if (!row) return;

      row.style.opacity = "0";
      row.style.transition = "opacity 0.3s";
      window.setTimeout(() => {
        const finding = findings[findingIdx];
        const label = row.querySelector<HTMLElement>(".finding-label");
        const badge = row.querySelector<HTMLElement>(".badge");

        if (label) label.textContent = finding.label;
        if (badge) {
          badge.className = finding.badgeClass;
          badge.textContent = finding.text;
        }
        row.style.opacity = "1";
      }, 300);
    }, 4000);

    const wfNodeList = Array.from(document.querySelectorAll<HTMLElement>(".workflow-node"));
    let activeNode = 0;
    const workflowTimer = window.setInterval(() => {
      if (wfNodeList.length === 0) return;

      wfNodeList.forEach((node) => node.classList.remove("active"));
      wfNodeList[activeNode]?.classList.add("active");
      activeNode = (activeNode + 1) % wfNodeList.length;
    }, 1800);

    const submitBtn = document.querySelector<HTMLButtonElement>(".form-submit");
    const onSubmit = () => {
      const inputs = Array.from(document.querySelectorAll<HTMLInputElement | HTMLSelectElement>(".form-input"));
      const filled = inputs.every((input) => input.value);
      if (!filled || !submitBtn) return;

      submitBtn.textContent = "✓ Request Sent";
      submitBtn.style.background = "var(--c-green)";
      submitBtn.style.boxShadow = "0 0 0 1px rgba(0,229,158,0.5), 0 4px 20px rgba(0,229,158,0.3)";

      window.setTimeout(() => {
        submitBtn.textContent = "Send Request →";
        submitBtn.style.background = "";
        submitBtn.style.boxShadow = "";
      }, 3000);
    };
    submitBtn?.addEventListener("click", onSubmit);

    return () => {
      window.removeEventListener("scroll", onScroll);
      revealObserver.disconnect();
      statsObserver.disconnect();
      window.clearInterval(findingTimer);
      window.clearInterval(workflowTimer);
      submitBtn?.removeEventListener("click", onSubmit);
    };
  }, []);

  return null;
}
