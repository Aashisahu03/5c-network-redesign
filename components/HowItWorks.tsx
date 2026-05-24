const steps = [
  {
    num: "01",
    title: "Scan arrives via DICOM",
    body: "Your PACS sends studies to 5C via standard DICOM protocol. No hardware installation required. Go live in 72 hours."
  },
  {
    num: "02",
    title: "Bionic AI reads in 10-20 seconds",
    body: "Bionic Vision detects pathologies, segments structures, takes measurements, and flags critical findings instantly."
  },
  {
    num: "03",
    title: "QC agents validate the report",
    body: "Specialized AI quality-control agents check every report for contradictions, completeness, and clinical accuracy before sign-off."
  },
  {
    num: "04",
    title: "Signed report delivered in 30 min",
    body: "Structured, validated report lands back in your RIS/PACS with a 30-minute average turnaround."
  }
];

const workflow = [
  ["DICOM Study Received", "Via PACS integration", "0s"],
  ["Bionic Vision Analysis", "Detects, segments, measures", "~15s"],
  ["Radiologist Review", "AI-assisted, subspecialist", "~20 min"],
  ["QC Agent Validates", "Completeness and accuracy check", "~2 min"],
  ["Signed Report Delivered", "Back to your RIS/PACS", "<= 30 min"]
];

export default function HowItWorks() {
  return (
    <section className="bg-offwhite py-24" id="how-it-works">
      <div className="section-inner">
        <div className="fade-up section-tag">Process</div>
        <h2 className="fade-up max-w-4xl font-syne text-[clamp(2.35rem,5vw,4.5rem)] font-extrabold leading-none text-ink">
          From scan to signed report
          <br />
          in four steps.
        </h2>
        <p className="fade-up mb-14 mt-5 max-w-2xl text-lg leading-8 text-ink-60">
          AI handles the heavy lifting so your radiologists can focus on what matters: the diagnosis.
        </p>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="grid gap-4">
            {steps.map((step, index) => (
              <button
                key={step.num}
                type="button"
                className={`step-item fade-up group grid w-full grid-cols-[56px_1fr] gap-5 rounded-ui border bg-white p-5 text-left shadow-card transition hover:-translate-y-1 hover:border-blue5c/30 ${
                  index === 0 ? "active border-blue5c/40" : "border-ink-10"
                }`}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue5c text-sm font-semibold text-white">
                  {step.num}
                </span>
                <span>
                  <span className="block font-syne text-xl font-bold text-ink">{step.title}</span>
                  <span className="mt-2 block leading-7 text-ink-60">{step.body}</span>
                </span>
              </button>
            ))}
          </div>
          <div className="fade-up rounded-[28px] border border-ink-10 bg-white p-5 shadow-cardHover" style={{ transitionDelay: "0.1s" }}>
            <div className="rounded-[22px] bg-surface p-5">
              {workflow.map(([title, sub, time], index) => (
                <div key={title}>
                  <div
                    className={`flex items-center gap-4 rounded-ui border p-4 shadow-card ${
                      index === 0 || index === 1 || index === 4
                        ? "border-blue5c/30 bg-white"
                        : "border-ink-10 bg-white/80"
                    }`}
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue5c/10 font-mono text-blue5c">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold text-ink">{title}</span>
                      <span className="block text-sm text-ink-60">{sub}</span>
                    </span>
                    <span className="font-mono text-xs text-blue5c">{time}</span>
                  </div>
                  {index < workflow.length - 1 ? <div className="workflow-connector" /> : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
