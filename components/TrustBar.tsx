const logos = ["Apollo Diagnostics", "Jain Diagnostics", "LN Diagnostics", "SRL Diagnostics", "Thyrocare", "Healthspring"];

export default function TrustBar() {
  return (
    <div className="border-y border-ink-10 bg-white">
      <div className="section-inner flex flex-col gap-5 py-6 lg:flex-row lg:items-center lg:justify-between">
        <span className="font-mono text-xs uppercase text-ink-60">Trusted by leading networks</span>
        <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <span
              key={logo}
              className="flex min-h-11 items-center justify-center rounded-uiSm border border-ink-10 bg-surface px-3 text-center text-xs font-semibold text-ink-60"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
