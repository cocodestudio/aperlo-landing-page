"use client";
import { motion } from "framer-motion";

function IconGrid() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}
function IconFolder() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function IconDownload() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 15V3M7 10l5 5 5-5M20 21H4" />
    </svg>
  );
}
function IconZap() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
function IconRotateCcw() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  );
}
function IconUnlock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 9.9-1" />
    </svg>
  );
}

const stats = [
  { value: "80+", label: "Templates included", icon: <IconGrid /> },
  { value: "∞", label: "Screenshots per collection", icon: <IconFolder /> },
  { value: "2", label: "Export formats (PNG, JPG)", icon: <IconDownload /> },
  { value: "1", label: "Tap to export all sizes", icon: <IconZap /> },
  { value: "50", label: "Undo history steps", icon: <IconRotateCcw /> },
  { value: "$0", label: "Cost to get started", icon: <IconUnlock /> },
];

import SectionBadge from "@/components/section-badge";

export default function StatsBar() {
  return (
    <section style={{ background: "var(--surface)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)", padding: "64px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 44 }}
        >
          <SectionBadge
            tag="By the numbers"
            icon={
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
            }
          />
        </motion.div>

        <div className="stats-grid">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ background: "var(--accent-tint)" }}
              style={{
                background: "var(--surface)",
                padding: "36px 28px",
                textAlign: "center",
                transition: "background 0.3s",
                cursor: "default",
              }}
            >
              {/* Icon */}
              <div style={{ display: "flex", justifyContent: "center", color: "var(--ink-muted)", marginBottom: 16, opacity: 0.6 }}>
                {s.icon}
              </div>
              {/* Value */}
              <div style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(32px, 4vw, 52px)",
                color: "var(--accent)",
                lineHeight: 1,
                marginBottom: 8,
                letterSpacing: -1,
              }}>
                {s.value}
              </div>
              {/* Label */}
              <div style={{
                fontFamily: "var(--font-dm)",
                fontSize: 13,
                color: "var(--ink-secondary)",
                fontWeight: 500,
              }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
