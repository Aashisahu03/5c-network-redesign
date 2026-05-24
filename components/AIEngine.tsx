const features = [
  {
    icon: "BV",
    title: "Bionic Vision",
    body: "Analyzes CT, MRI, X-ray, PET-CT, and ultrasound. Segments anatomy, measures lesions, and flags critical findings automatically.",
    metric: "10-20s",
    label: "per scan analysis"
  },
  {
    icon: "BF",
    title: "Bionic Flow",
    body: "Voice-to-report dictation and intelligent routing help radiologists create structured reports without manual typing drag.",
    metric: "3B+",
    label: "training images"
  },
  {
    icon: "QC",
    title: "AI Quality Control",
    body: "Specialized QC agents review every report before sign-off, catching contradictions and validating clinical completeness.",
    metric: "100%",
    label: "reports quality-checked"
  }
];

export default function AIEngine() {
  return (
    <section className="relative overflow-hidden py-24 text-white" id="ai">
      <div className="ai-bg" />
      <div className="ai-grid-bg" />
      <div className="section-inner relative">
        <div className="fade-up flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="section-tag text-blue-200 before:bg-green5c">Bionic AI Engine</div>
            <h2 className="font-syne text-[clamp(2.4rem,5vw,4.5rem)] font-extrabold leading-none">
              Meet your AI radiologist.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/65">
              Trained on 3 billion+ medical images. Reads CT, MRI, X-ray, PET-CT, and more. Validates every
              report. Always on, always learning.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex w-fit rounded-uiSm border border-white/20 bg-white/[0.06] px-6 py-3 font-medium text-white/80 transition hover:-translate-y-1 hover:bg-white/10"
          >
            Explore Bionic -&gt;
          </a>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="fade-up rounded-[22px] border border-white/10 bg-white/[0.07] p-7 transition hover:-translate-y-2 hover:border-blue5c/60 hover:bg-white/[0.1]"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 font-mono text-sm text-blue-200">
                {feature.icon}
              </div>
              <h3 className="font-syne text-2xl font-bold">{feature.title}</h3>
              <p className="mt-4 leading-7 text-white/65">{feature.body}</p>
              <div className="mt-8 rounded-ui bg-white/[0.06] p-4">
                <span className="block font-mono text-3xl text-green5c">{feature.metric}</span>
                <span className="text-sm text-white/55">{feature.label}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
