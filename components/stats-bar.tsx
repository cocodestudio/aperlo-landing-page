"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionBadge from "@/components/section-badge";

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

// Lightweight Counter component that interpolates values when visible in view
function CounterItem({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView) return;

    const duration = 900;
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor((progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)) * target);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const stats = [
    { icon: <IconGrid />, value: <CounterItem target={80} suffix="+" />, label: "Templates included" },
    { icon: <IconFolder />, value: <motion.span animate={!isMobile ? { scale: [1, 1.08, 1] } : {}} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>∞</motion.span>, label: "Screenshots per collection" },
    { icon: <IconDownload />, value: <CounterItem target={2} />, label: "Export formats (PNG, JPG)" },
    { icon: <IconZap />, value: <CounterItem target={1} />, label: "Tap to export all sizes" },
    { icon: <IconRotateCcw />, value: <CounterItem target={50} />, label: "Undo history steps" },
    { icon: <IconUnlock />, value: "$0", label: "Cost to get started" },
  ];

  return (
    <section style={{ background: "var(--surface)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)", padding: isMobile ? "48px 0" : "64px 0" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 14 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: isMobile ? 0.2 : 0.4 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: isMobile ? 32 : 44 }}
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
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: isMobile ? 12 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: isMobile ? 0.15 : 0.3 }}
              transition={{ delay: isMobile ? 0.03 : idx * 0.05, duration: 0.45 }}
              whileHover={!isMobile ? { background: "var(--accent-tint)" } : {}}
              whileTap={{ scale: 0.98 }}
              style={{
                background: "var(--surface)",
                padding: isMobile ? "24px 16px" : "36px 28px",
                textAlign: "center",
                transition: "background 0.3s",
                cursor: "default",
              }}
            >
              <div style={{ display: "flex", justifyContent: "center", color: "var(--ink-muted)", marginBottom: 12, opacity: 0.6 }}>
                {item.icon}
              </div>
              <div style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(28px, 3.5vw, 52px)", color: "var(--accent)", lineHeight: 1, marginBottom: 6, letterSpacing: -1 }}>
                {item.value}
              </div>
              <div style={{ fontFamily: "var(--font-dm)", fontSize: isMobile ? 12 : 13, color: "var(--ink-secondary)", fontWeight: 500 }}>
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
