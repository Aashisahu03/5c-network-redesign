const stats = [
  ["1,500+", "Healthcare facilities"],
  ["10K+", "Daily scans reported"],
  ["30 min", "Avg. turnaround"],
  ["400+", "Expert radiologists"]
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-[calc(var(--nav-h)+72px)]">
      <div className="hero-bg" />
      <div className="hero-grid-lines" />
      <div className="section-inner relative grid items-center gap-12 pb-20 lg:grid-cols-[1fr_480px]">
        <div className="fade-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink-10 bg-white/80 px-4 py-2 font-mono text-xs font-medium uppercase text-blue5c shadow-card">
            <span className="h-2 w-2 rounded-full bg-green5c" />
            India&apos;s #1 AI Radiology Platform
          </div>
          <h1 className="max-w-4xl font-syne text-[clamp(3.5rem,7vw,6.7rem)] font-extrabold leading-[0.95] tracking-normal text-ink">
            Where <em className="not-italic text-blue5c">AI</em> and radiologists work as one.
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-ink-60">
            From scan to signed report in 30 minutes. Bionic AI runs the workflow. 400+ subspecialist
            radiologists own the diagnosis. 10,000+ reads daily across 1,500+ facilities.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex rounded-uiSm bg-blue5c px-7 py-4 font-medium text-white shadow-blue transition hover:-translate-y-1 hover:bg-blue5c-dark"
            >
              Request a Demo -&gt;
            </a>
            <a
              href="#how-it-works"
              className="inline-flex rounded-uiSm border border-ink-10 bg-white/80 px-7 py-4 font-medium text-ink transition hover:-translate-y-1 hover:border-blue5c/30 hover:shadow-card"
            >
              See How It Works
            </a>
          </div>
          <div className="mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-ui border border-ink-10 bg-ink-10 shadow-card sm:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label} className="bg-white/90 p-5">
                <span className="block font-mono text-2xl font-medium text-ink">{value}</span>
                <span className="mt-1 block text-sm text-ink-60">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-up relative mx-auto w-full max-w-[480px] lg:mx-0" style={{ transitionDelay: "0.15s" }}>
          <div className="rounded-[28px] border border-white/15 bg-[#07101e] p-5 text-white shadow-[0_28px_90px_rgba(10,15,30,0.3)]">
            <div className="flex items-center justify-between font-mono text-xs text-white/60">
              <span>CT - CHEST - AXIAL</span>
              <span className="rounded-full bg-green5c/15 px-3 py-1 text-green5c">AI Active</span>
            </div>
            <div className="scan-image relative my-5 h-[320px] overflow-hidden rounded-[22px]">
              <div className="ct-ring" />
              <div className="ct-ring" />
              <div className="ct-ring" />
              <div className="ct-ring" />
              <div className="absolute bottom-4 left-4 font-mono text-xs text-white/60">WL: 40 WW: 400</div>
              <div className="absolute right-4 top-4 rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-xs">
                28.4 mm
              </div>
            </div>
            <div className="space-y-3 rounded-ui bg-white/[0.06] p-4">
              {[
                ["Lung parenchyma", "Normal", "text-green5c"],
                ["Mediastinum", "Review", "text-amber5c"],
                ["AI Confidence", "97.4%", "text-white"]
              ].map(([label, value, color]) => (
                <div key={label} className="flex items-center justify-between text-sm">
                  <span className="text-white/62">{label}</span>
                  <span className={`font-mono ${color}`}>{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between text-sm">
              <span>
                TAT: <strong>18 min</strong>
              </span>
              <span className="rounded-full bg-blue5c/20 px-3 py-1 font-mono text-xs text-blue-200">
                Bionic Vision
              </span>
            </div>
          </div>
          <div className="absolute -left-6 top-20 hidden rounded-full border border-ink-10 bg-white px-4 py-3 text-sm shadow-card md:block">
            Dr. Priya R. signed report
          </div>
          <div className="absolute -bottom-5 right-4 hidden rounded-full border border-ink-10 bg-white px-4 py-3 text-sm shadow-card md:block">
            DICOM received - 3s ago
          </div>
        </div>
      </div>
    </section>
  );
}
