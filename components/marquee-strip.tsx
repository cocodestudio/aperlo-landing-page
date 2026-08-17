"use client";

const items = [
  "Screenshot it. Ship it.",
  "No bloat. Just precision.",
  "Built for Android makers.",
  "From canvas to Play Store.",
  "Templates that earn their place.",
  "Screenshot it. Ship it.",
  "No bloat. Just precision.",
  "Built for Android makers.",
  "From canvas to Play Store.",
  "Templates that earn their place.",
];

export default function MarqueeStrip() {
  return (
    <div style={{
      width: "100%",
      overflow: "hidden",
      background: "var(--ink-primary)",
      padding: "18px 0",
      position: "relative",
      zIndex: 3,
    }}>
      <div className="marquee-inner">
        {[...items, ...items].map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 24, paddingRight: 24, flexShrink: 0 }}>
            <span style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 700,
              fontSize: 15,
              color: "var(--accent-on)",
              whiteSpace: "nowrap",
              letterSpacing: 0.3,
            }}>
              {item}
            </span>
            <svg width="6" height="6" viewBox="0 0 6 6">
              <circle cx="3" cy="3" r="3" fill="var(--accent)" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
