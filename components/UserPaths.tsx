const paths = [
  {
    icon: "H",
    title: "I run a hospital or diagnostic centre",
    body: "Signed radiology reports in 30 minutes. 24/7 coverage. Pay-per-scan with no retainers or lock-ins."
  },
  {
    icon: "N",
    title: "I&apos;m starting a new diagnostic centre",
    body: "8-step setup guide covering licences, capex, equipment, PACS, AI, and reporting from day one."
  },
  {
    id: "for-radiologists",
    icon: "R",
    title: "I&apos;m a radiologist",
    body: "Report from home. Premium night rates. Sub-specialty cases daily. AI-assisted workflow to read faster."
  },
  {
    icon: "C",
    title: "I manage a hospital chain",
    body: "Multi-site enterprise coverage. Unified reporting dashboard. Scale from 10 to 10,000 scans per day."
  }
];

export default function UserPaths() {
  return (
    <section className="bg-white py-24" id="for-hospitals">
      <div className="section-inner">
        <div className="fade-up mx-auto max-w-3xl text-center">
          <div className="section-tag">Who we serve</div>
          <h2 className="font-syne text-[clamp(2.4rem,5vw,4.5rem)] font-extrabold leading-none text-ink">
            How can we help you?
          </h2>
          <p className="mt-5 text-lg leading-8 text-ink-60">
            Whether you run a hospital, manage a chain, or practice as a radiologist, 5C has a workflow built for you.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {paths.map((path, index) => (
            <a
              key={path.title}
              id={path.id}
              href="#contact"
              className="fade-up group relative min-h-[310px] rounded-ui border border-ink-10 bg-surface p-7 shadow-card transition hover:-translate-y-2 hover:border-blue5c/30 hover:bg-white hover:shadow-cardHover"
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue5c/10 font-mono text-lg font-medium text-blue5c">
                {path.icon}
              </div>
              <h3
                className="font-syne text-2xl font-bold leading-tight text-ink"
                dangerouslySetInnerHTML={{ __html: path.title }}
              />
              <p className="mt-4 text-ink-60">{path.body}</p>
              <span className="absolute bottom-7 right-7 text-2xl text-blue5c transition group-hover:translate-x-1">-&gt;</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
