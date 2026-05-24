const stats = [
  ["10K", "+", "Scans reported daily", "Across all modalities"],
  ["30", "min", "Average turnaround", "vs. 24-48 hrs industry avg."],
  ["1,500", "+", "Healthcare facilities", "Across India"],
  ["400", "+", "Expert radiologists", "Subspecialists on network"]
];

export default function StatsRow() {
  return (
    <div className="bg-blue5c py-16 text-white">
      <div className="section-inner grid gap-px overflow-hidden rounded-[22px] bg-white/15 md:grid-cols-2 lg:grid-cols-4">
        {stats.map(([num, suffix, label, sub], index) => (
          <div key={label} className="fade-up bg-blue5c p-7" style={{ transitionDelay: `${index * 0.08}s` }}>
            <div className="font-mono text-[clamp(2.4rem,5vw,4.8rem)] font-medium leading-none">
              {num}
              <span className="ml-1 text-2xl">{suffix}</span>
            </div>
            <div className="mt-5 font-semibold">{label}</div>
            <div className="mt-1 text-sm text-white/65">{sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
