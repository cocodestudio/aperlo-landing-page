"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionBadge from "@/components/section-badge";

const steps = [
  {
    step: "01",
    title: "Pick a template",
    description: "Browse 80+ templates organized by style, device, and platform. Find the layout that matches your app's personality.",
    visual: (
      <div style={{ display: "flex", gap: 10, justifyContent: "center", alignItems: "center" }}>
        {[
          { bg: "linear-gradient(135deg, #1A3A5C, #1A6B4A)", label: "Minimal" },
          { bg: "linear-gradient(135deg, #3A1A12, #A0660A)", label: "Bold" },
          { bg: "linear-gradient(135deg, #1C2026, #2A3D2E)", label: "Dark" },
        ].map((c, i) => (
          <motion.div
            key={c.label}
            animate={i === 1 ? { scale: [1, 1.04, 1], y: [0, -4, 0] } : {}}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: 76,
              height: 128,
              borderRadius: 10,
              background: c.bg,
              border: i === 1 ? "2px solid var(--accent)" : "1px solid rgba(0,0,0,0.06)",
              boxShadow: i === 1 ? "0 8px 24px rgba(26,107,74,0.25)" : "0 2px 10px rgba(0,0,0,0.04)",
              display: "flex",
              alignItems: "flex-end",
              padding: 8,
            }}
          >
            <span style={{ fontFamily: "var(--font-dm)", fontSize: 9.5, fontWeight: 700, color: "rgba(255,255,255,0.9)" }}>
              {c.label}
            </span>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    step: "02",
    title: "Customize your canvas",
    description: "Drop in your app screenshots, edit headings, switch palettes, and adjust every element with native-fast responsiveness.",
    visual: (
      <div
        style={{
          width: "100%",
          maxWidth: 290,
          background: "var(--surface)",
          borderRadius: 14,
          overflow: "hidden",
          boxShadow: "0 12px 36px rgba(20,26,20,0.08)",
          border: "1px solid var(--border-subtle)",
        }}
      >
        <div
          style={{
            height: 32,
            background: "var(--bg)",
            borderBottom: "1px solid var(--border-subtle)",
            display: "flex",
            alignItems: "center",
            padding: "0 12px",
            gap: 5,
          }}
        >
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#E74C3C" }} />
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#F39C12" }} />
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#2ECC71" }} />
        </div>
        <div style={{ background: "var(--bg)", padding: 16, display: "flex", justifyContent: "center", minHeight: 140 }}>
          <div
            style={{
              width: 96,
              height: 132,
              background: "linear-gradient(160deg, #1A3A5C 0%, #1A6B4A 100%)",
              borderRadius: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 5,
              padding: 10,
              position: "relative",
              boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
            }}
          >
            <div style={{ width: "80%", height: 4, borderRadius: 2, background: "rgba(255,255,255,0.6)" }} />
            <div style={{ width: "60%", height: 3, borderRadius: 2, background: "rgba(255,255,255,0.4)" }} />
            <div style={{ width: 28, height: 28, borderRadius: 6, background: "rgba(255,255,255,0.2)", marginTop: 4 }} />
            {[{ top: -3, left: -3 }, { top: -3, right: -3 }, { bottom: -3, left: -3 }, { bottom: -3, right: -3 }].map((p, j) => (
              <div key={j} style={{ position: "absolute", width: 6, height: 6, borderRadius: "50%", background: "white", border: "1px solid var(--accent)", ...p }} />
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--border-subtle)", padding: "8px 12px", display: "flex", gap: 12, justifyContent: "center" }}>
          {["Frame", "Text", "Image", "Palette"].map((label, k) => (
            <div key={k} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, color: k === 1 ? "var(--accent)" : "var(--ink-muted)" }}>
              <div style={{ width: 8, height: 8, borderRadius: 2, background: "currentColor", opacity: 0.8 }} />
              <span style={{ fontFamily: "var(--font-dm)", fontSize: 8.5, color: "inherit", fontWeight: 600 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    step: "03",
    title: "Export every size at once",
    description: "Select App Store, Google Play, or both. Tap export. Aperlo renders every required pixel-perfect variant in seconds.",
    visual: (
      <div
        style={{
          background: "var(--surface)",
          borderRadius: 14,
          padding: 18,
          boxShadow: "0 10px 32px rgba(20,26,20,0.08)",
          border: "1px solid var(--border-subtle)",
          maxWidth: 270,
          width: "100%",
        }}
      >
        {[
          { label: "iPhone 6.9\"", size: "1320×2868" },
          { label: "iPad 13\"", size: "2064×2752" },
          { label: "Google Play", size: "1080×1920" },
        ].map((s, i) => (
          <div
            key={s.label}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px 0",
              borderBottom: i < 2 ? "1px solid var(--border-subtle)" : "none",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  background: "var(--accent-tint)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span style={{ fontFamily: "var(--font-dm)", fontSize: 11.5, fontWeight: 600, color: "var(--ink-primary)" }}>{s.label}</span>
            </div>
            <span style={{ fontFamily: "var(--font-dm)", fontSize: 10.5, color: "var(--ink-muted)" }}>{s.size}</span>
          </div>
        ))}
        <div
          style={{
            width: "100%",
            marginTop: 14,
            background: "var(--accent)",
            borderRadius: 8,
            padding: "9px 0",
            textAlign: "center",
            color: "white",
            fontFamily: "var(--font-dm)",
            fontWeight: 600,
            fontSize: 12,
            boxShadow: "0 4px 14px rgba(26,107,74,0.25)",
          }}
        >
          Export All Sizes
        </div>
      </div>
    ),
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 30%"],
  });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      id="how-it-works"
      style={{
        padding: isMobile ? "70px 0" : "100px 0",
        background: "var(--bg)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 18 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: isMobile ? 0.2 : 0.4 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: isMobile ? 40 : 56 }}
        >
          <SectionBadge
            tag="How it works"
            icon={
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            }
          />
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "clamp(26px, 4vw, 48px)",
              letterSpacing: -1,
              color: "var(--ink-primary)",
              lineHeight: 1.15,
            }}
          >
            Three steps to the store
          </h2>
        </motion.div>

        {/* Progress track (Desktop only) */}
        {!isMobile && (
          <div
            style={{
              position: "relative",
              height: 2,
              background: "var(--border-subtle)",
              borderRadius: 1,
              marginBottom: 56,
              maxWidth: 600,
              margin: "0 auto 56px",
            }}
          >
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                background: "var(--accent)",
                borderRadius: 1,
                width: progressWidth,
              }}
            />
          </div>
        )}

        {/* Steps Grid */}
        <div
          className="how-steps"
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: isMobile ? 24 : 36,
          }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: isMobile ? 18 : 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: isMobile ? 0.15 : 0.25 }}
              transition={{ delay: isMobile ? 0.05 : i * 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              whileHover={!isMobile ? { y: -6, boxShadow: "0 16px 40px rgba(20,26,20,0.08)" } : {}}
              whileTap={{ scale: 0.98 }}
              style={{
                background: "var(--surface)",
                borderRadius: 20,
                border: "1px solid var(--border-subtle)",
                padding: isMobile ? "28px 20px 24px" : "36px 24px 28px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                boxShadow: "0 4px 20px rgba(20,26,20,0.03)",
                transition: "all 0.25s ease",
              }}
            >
              {/* Step number badge */}
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background: "var(--accent-tint)",
                  border: "1.5px solid var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                }}
              >
                <span style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: 13.5, color: "var(--accent)" }}>
                  {step.step}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  fontSize: 19,
                  color: "var(--ink-primary)",
                  letterSpacing: -0.3,
                  marginBottom: 8,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: "var(--ink-secondary)",
                  marginBottom: 24,
                  maxWidth: 320,
                }}
              >
                {step.description}
              </p>

              {/* Visual */}
              <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "auto" }}>
                {step.visual}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
