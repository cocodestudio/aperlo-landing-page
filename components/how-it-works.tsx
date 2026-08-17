"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Pick a template",
    description: "Browse 80+ templates organized by style, device, and platform. Find the one that matches your app's personality.",
    accent: "#1A6B4A",
    visual: (
      <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
        {[
          { bg: "linear-gradient(135deg, #1A3A5C, #1A6B4A)", label: "Minimal" },
          { bg: "linear-gradient(135deg, #3A1A12, #A0660A)", label: "Bold" },
          { bg: "linear-gradient(135deg, #1C2026, #2A3D2E)", label: "Dark" },
        ].map((c, i) => (
          <motion.div
            key={c.label}
            animate={i === 1 ? { scale: [1, 1.04, 1], boxShadow: ["0 4px 16px rgba(20,26,20,0.1)", "0 8px 32px rgba(26,107,74,0.3)", "0 4px 16px rgba(20,26,20,0.1)"] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              width: 72,
              height: 120,
              borderRadius: 10,
              background: c.bg,
              border: i === 1 ? "2px solid var(--accent)" : "1px solid transparent",
              display: "flex",
              alignItems: "flex-end",
              padding: 8,
            }}
          >
            <span style={{ fontFamily: "var(--font-dm)", fontSize: 9, fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>{c.label}</span>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    step: "02",
    title: "Customize your canvas",
    description: "Drop in your app screenshots, add text, swap backgrounds, and adjust every element until it's exactly right.",
    accent: "#1A3A5C",
    visual: (
      <div style={{
        width: "100%",
        maxWidth: 300,
        background: "var(--surface)",
        borderRadius: 12,
        overflow: "hidden",
        boxShadow: "0 12px 40px rgba(20,26,20,0.12)",
        border: "1px solid var(--border-subtle)",
      }}>
        <div style={{ height: 32, background: "var(--bg)", borderBottom: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", padding: "0 12px", gap: 6 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#E74C3C" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#F39C12" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#2ECC71" }} />
        </div>
        <div style={{ background: "var(--bg)", padding: 20, display: "flex", justifyContent: "center", minHeight: 150 }}>
          <div style={{
            width: 100,
            height: 140,
            background: "linear-gradient(160deg, #1A3A5C 0%, #1A6B4A 100%)",
            borderRadius: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            padding: 12,
            position: "relative",
          }}>
            <div style={{ width: "80%", height: 4, borderRadius: 2, background: "rgba(255,255,255,0.5)" }} />
            <div style={{ width: "60%", height: 3, borderRadius: 2, background: "rgba(255,255,255,0.3)" }} />
            <div style={{ width: 30, height: 30, borderRadius: 8, background: "rgba(255,255,255,0.15)", marginTop: 4 }} />
            {/* handles */}
            {[{top:-3,left:-3},{top:-3,right:-3},{bottom:-3,left:-3},{bottom:-3,right:-3}].map((p, j) => (
              <div key={j} style={{ position: "absolute", width: 6, height: 6, borderRadius: "50%", background: "white", border: "1px solid var(--accent)", ...p }} />
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--border-subtle)", padding: "8px 12px", display: "flex", gap: 14, justifyContent: "center" }}>
          {[
            {
              icon: (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                </svg>
              ),
              label: "Frame",
            },
            {
              icon: (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="4 7 4 4 20 4 20 7" /><line x1="12" y1="4" x2="12" y2="20" />
                </svg>
              ),
              label: "Text",
            },
            {
              icon: (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                </svg>
              ),
              label: "Image",
            },
            {
              icon: (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              ),
              label: "Color",
            },
          ].map(({ icon, label }, k) => (
            <div key={k} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, color: "var(--ink-muted)" }}>
              {icon}
              <span style={{ fontFamily: "var(--font-dm)", fontSize: 8, color: "inherit" }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    step: "03",
    title: "Export every size at once",
    description: "Select App Store, Google Play, or both. Tap export. Aperlo generates every required size and saves it to your gallery.",
    accent: "#2A3D2E",
    visual: (
      <div style={{
        background: "var(--surface)",
        borderRadius: 12,
        padding: 20,
        boxShadow: "0 8px 32px rgba(20,26,20,0.1)",
        border: "1px solid var(--border-subtle)",
        maxWidth: 280,
        width: "100%",
      }}>
        {[
          { label: "App Store · iPhone 6.9\"", size: "1320×2868", check: true },
          { label: "App Store · iPad 13\"", size: "2064×2752", check: true },
          { label: "Google Play · Phone", size: "1080×1920", check: true },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: i < 2 ? "1px solid var(--border-subtle)" : "none" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{
                width: 16, height: 16, borderRadius: "50%",
                background: s.check ? "var(--accent-tint)" : "transparent",
                border: s.check ? "none" : "1px solid var(--border-default)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {s.check && <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>}
              </div>
              <span style={{ fontFamily: "var(--font-dm)", fontSize: 12, color: "var(--ink-primary)" }}>{s.label}</span>
            </div>
            <span style={{ fontFamily: "var(--font-dm)", fontSize: 10, color: "var(--ink-muted)" }}>{s.size}</span>
          </motion.div>
        ))}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ width: "100%", marginTop: 14, background: "var(--accent)", border: "none", borderRadius: 8, padding: "10px 0", cursor: "pointer", fontFamily: "var(--font-dm)", fontWeight: 600, fontSize: 13, color: "white" }}
        >
          Export 3 sizes
        </motion.button>
      </div>
    ),
  },
];

import SectionBadge from "@/components/section-badge";

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const progressWidth = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={containerRef} id="how-it-works" style={{ padding: "120px 0", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: 80 }}
        >
          <SectionBadge
            tag="How it works"
            icon={
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            }
          />
          <h2 style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "clamp(28px, 4vw, 48px)",
            letterSpacing: -1,
            color: "var(--ink-primary)",
            lineHeight: 1.15,
          }}>
            Three steps to the store
          </h2>
        </motion.div>

        {/* Progress track */}
        <div style={{ position: "relative", height: 2, background: "var(--border-subtle)", borderRadius: 1, marginBottom: 64, maxWidth: 600, margin: "0 auto 64px" }}>
          <motion.div style={{ position: "absolute", top: 0, left: 0, height: "100%", background: "var(--accent)", borderRadius: 1, width: progressWidth }} />
        </div>

        {/* Steps */}
        <div className="how-steps" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 48 }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
            >
              {/* Step number */}
              <div style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "var(--surface)",
                border: "2px solid var(--accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 28,
                boxShadow: "0 0 0 6px var(--accent-tint)",
              }}>
                <span style={{ fontFamily: "var(--font-dm)", fontWeight: 700, fontSize: 13, color: "var(--accent)" }}>{step.step}</span>
              </div>

              <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 20, color: "var(--ink-primary)", letterSpacing: -0.3, marginBottom: 12 }}>
                {step.title}
              </h3>
              <p style={{ fontFamily: "var(--font-dm)", fontSize: 15, lineHeight: 1.6, color: "var(--ink-secondary)", marginBottom: 32 }}>
                {step.description}
              </p>

              {/* Visual */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                {step.visual}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
