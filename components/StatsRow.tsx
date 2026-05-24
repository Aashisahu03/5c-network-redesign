export default function StatsRow() {
  return (
    <div className="stats-row">
  <div className="stats-inner">
    <div className="stats-cell reveal">
      <div className="stats-cell-num">10K<span>+</span></div>
      <div className="stats-cell-label">Scans reported daily</div>
      <div className="stats-cell-sub">Across all modalities</div>
    </div>
    <div className="stats-cell reveal" style={{ transitionDelay: "0.08s" }}>
      <div className="stats-cell-num">30<span> min</span></div>
      <div className="stats-cell-label">Average turnaround</div>
      <div className="stats-cell-sub">vs. 24–48 hrs industry avg.</div>
    </div>
    <div className="stats-cell reveal" style={{ transitionDelay: "0.16s" }}>
      <div className="stats-cell-num">1,500<span>+</span></div>
      <div className="stats-cell-label">Healthcare facilities</div>
      <div className="stats-cell-sub">Across India</div>
    </div>
    <div className="stats-cell reveal" style={{ transitionDelay: "0.24s" }}>
      <div className="stats-cell-num">400<span>+</span></div>
      <div className="stats-cell-label">Expert radiologists</div>
      <div className="stats-cell-sub">Subspecialists on network</div>
    </div>
  </div>
</div>

  );
}
