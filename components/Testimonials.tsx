const testimonials = [
  {
    quote:
      "The quality of reporting is exceptional, and turnaround times have transformed our workflow. Technical issues are resolved almost immediately.",
    name: "Director of Radiology",
    org: "Jain Diagnostics",
    initials: "JD"
  },
  {
    quote:
      "5C Network delivered exactly what they promised: reliable, rapid, and convenient. AI-assisted reporting helps our specialists focus on complex cases.",
    name: "CEO",
    org: "LN Diagnostics",
    initials: "LN"
  },
  {
    quote:
      "We processed over 12,500 scans last month. Average turnaround: 11 minutes. The same volume used to feel impossible to staff.",
    name: "Hospital Administrator",
    org: "Apollo Diagnostics Network",
    initials: "AH"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24" id="research">
      <div className="section-inner">
        <div className="fade-up max-w-3xl">
          <div className="section-tag">What they say</div>
          <h2 className="font-syne text-[clamp(2.4rem,5vw,4.5rem)] font-extrabold leading-none text-ink">
            Trusted by 1,500+ facilities.
          </h2>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <article
              key={item.initials}
              className="fade-up rounded-[22px] border border-ink-10 bg-surface p-7 shadow-card transition hover:-translate-y-2 hover:border-blue5c/30 hover:bg-white hover:shadow-cardHover"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="font-syne text-6xl leading-none text-blue5c">&quot;</div>
              <p className="mt-3 text-lg leading-8 text-ink-60">{item.quote}</p>
              <div className="mt-9 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue5c font-mono text-sm text-white">
                  {item.initials}
                </div>
                <div>
                  <div className="font-semibold text-ink">{item.name}</div>
                  <div className="text-sm text-ink-60">{item.org}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
