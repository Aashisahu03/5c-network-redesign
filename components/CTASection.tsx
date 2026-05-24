export default function CTASection() {
  return (
    <section className="bg-offwhite py-24" id="contact">
      <div className="section-inner grid gap-10 rounded-[30px] bg-ink p-7 text-white shadow-[0_28px_90px_rgba(10,15,30,0.28)] lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
        <div className="fade-up flex flex-col justify-center">
          <div className="section-tag text-blue-200 before:bg-green5c">Get started</div>
          <h2 className="font-syne text-[clamp(2.3rem,5vw,4.2rem)] font-extrabold leading-none">
            Ready to transform your radiology workflow?
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/65">
            Go live in 72 hours. No hardware. No retainer fees. Pay only for what you use.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex rounded-uiSm bg-blue5c px-7 py-4 font-medium text-white shadow-blue transition hover:-translate-y-1 hover:bg-blue5c-dark"
            >
              Request a Demo -&gt;
            </a>
            <a
              href="mailto:hello@5cnetwork.com"
              className="inline-flex rounded-uiSm border border-white/15 bg-white/[0.06] px-7 py-4 font-medium text-white/80 transition hover:-translate-y-1 hover:bg-white/10"
            >
              Talk to Sales
            </a>
          </div>
        </div>
        <form className="fade-up rounded-[22px] border border-white/10 bg-white/[0.07] p-5" style={{ transitionDelay: "0.15s" }}>
          <p className="mb-5 font-syne text-2xl font-bold">Get in touch</p>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              className="min-h-12 rounded-uiSm border border-white/10 bg-white px-4 text-ink outline-none transition focus:border-blue5c"
              type="text"
              placeholder="Your name"
            />
            <input
              className="min-h-12 rounded-uiSm border border-white/10 bg-white px-4 text-ink outline-none transition focus:border-blue5c"
              type="email"
              placeholder="Work email"
            />
            <input
              className="min-h-12 rounded-uiSm border border-white/10 bg-white px-4 text-ink outline-none transition focus:border-blue5c md:col-span-2"
              type="text"
              placeholder="Hospital / facility name"
            />
            <select
              className="min-h-12 rounded-uiSm border border-white/10 bg-white px-4 text-ink outline-none transition focus:border-blue5c md:col-span-2"
              defaultValue=""
            >
              <option value="" disabled>
                Daily scan volume
              </option>
              <option>Under 50 scans / day</option>
              <option>50-200 scans / day</option>
              <option>200-500 scans / day</option>
              <option>500+ scans / day</option>
            </select>
            <button
              className="inline-flex min-h-12 items-center justify-center rounded-uiSm bg-blue5c px-5 font-medium text-white shadow-blue transition hover:-translate-y-1 hover:bg-blue5c-dark md:col-span-2"
              type="submit"
            >
              Send Request -&gt;
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
