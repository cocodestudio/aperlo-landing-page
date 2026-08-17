"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const manifesto = [
  {
    number: "I",
    statement: "The canvas is the product.",
    detail: "Every UI element outside the editor exists to serve it. Navigation fades back. Panels feel subordinate. The canvas earns visual dominance.",
  },
  {
    number: "II",
    statement: "One thing at a time.",
    detail: "Each screen has exactly one primary action. Secondary actions exist but don't compete for attention. This is not Canva-for-everything.",
  },
  {
    number: "III",
    statement: "Quality signals matter at micro scale.",
    detail: "A 1dp border on a selected element. The 0.2s ease on a panel open. The way a badge aligns optically. These separate a tool that feels right from one that merely works.",
  },
  {
    number: "IV",
    statement: "No decoration that doesn't earn its place.",
    detail: "Icons, dividers, shadows, tints — only when they help you navigate or understand. Nothing added to look designed.",
  },
  {
    number: "V",
    statement: "High-fidelity output demands high-fidelity input.",
    detail: "The tool produces pixel-perfect screenshots. The tool itself must feel pixel-perfect. There is no tolerance for layout jitter or color inconsistency.",
  },
];

import SectionBadge from "@/components/section-badge";

export default function StoryManifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  // The circle diameter is 40px, so the centre is at 20px.
  // The left column is 40px wide → the line must sit at left: 19px (40/2 - 0.5px)
  const CIRCLE_SIZE = 40;
  const LINE_LEFT = CIRCLE_SIZE / 2 - 0.5; // 19.5px → centred under circles

  return (
    <section
      ref={containerRef}
      style={{ padding: "140px 0", background: "var(--surface)", position: "relative" }}
    >
      {/* Dot pattern */}
      <div className="dot-pattern" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: 100 }}
        >
          <SectionBadge
            tag="Design manifesto"
            icon={
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
              </svg>
            }
          />
          <h2 style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "clamp(32px, 5vw, 56px)",
            letterSpacing: -1.5,
            color: "var(--ink-primary)",
            lineHeight: 1.1,
          }}>
            Built on principles,<br />not preferences.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>

          {/* The vertical line — perfectly centred on the 40px circle column */}
          <div style={{
            position: "absolute",
            left: LINE_LEFT,
            top: CIRCLE_SIZE / 2,        // starts at centre of first circle
            bottom: CIRCLE_SIZE / 2,      // ends at centre of last circle
            width: 1,
            background: "var(--border-subtle)",
            zIndex: 0,
          }}>
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: lineHeight,
                background: "linear-gradient(to bottom, var(--accent), rgba(26,107,74,0.15))",
              }}
            />
          </div>

          {manifesto.map((item, i) => (
            <motion.div
              key={item.number}
              className="manifesto-row"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "grid",
                gridTemplateColumns: `${CIRCLE_SIZE}px 1fr`,
                gap: 40,
                marginBottom: i < manifesto.length - 1 ? 72 : 0,
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Circle node — width matches column exactly so line centre aligns */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <motion.div
                  whileInView={{ scale: [0.5, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.1, duration: 0.5 }}
                  style={{
                    width: CIRCLE_SIZE,
                    height: CIRCLE_SIZE,
                    borderRadius: "50%",
                    background: "var(--surface)",
                    border: "2px solid var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 0 5px var(--bg)",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ fontFamily: "var(--font-dm)", fontSize: 12, color: "var(--accent)", fontWeight: 700 }}>
                    {item.number}
                  </span>
                </motion.div>
              </div>

              {/* Content */}
              <div style={{ paddingTop: 8 }}>
                <h3 style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  fontSize: "clamp(18px, 2.2vw, 26px)",
                  color: "var(--ink-primary)",
                  letterSpacing: -0.4,
                  marginBottom: 10,
                  lineHeight: 1.2,
                }}>
                  {item.statement}
                </h3>
                <p style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: "var(--ink-secondary)",
                  maxWidth: 520,
                }}>
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
