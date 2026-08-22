"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionBadge from "@/components/section-badge";

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

export default function StoryManifesto() {
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
    offset: ["start 75%", "end 40%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const CIRCLE_SIZE = isMobile ? 34 : 40;
  const LINE_LEFT = CIRCLE_SIZE / 2 - 0.5;

  return (
    <section
      ref={containerRef}
      style={{
        padding: isMobile ? "70px 0" : "110px 0",
        background: "var(--surface)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot pattern */}
      <div className="dot-pattern" style={{ position: "absolute", inset: 0, opacity: 0.25, pointerEvents: "none" }} />

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 18 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: isMobile ? 0.2 : 0.4 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: isMobile ? 48 : 72 }}
        >
          <SectionBadge
            tag="Design manifesto"
            icon={
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
              </svg>
            }
          />
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "clamp(28px, 5vw, 54px)",
              letterSpacing: -1.5,
              color: "var(--ink-primary)",
              lineHeight: 1.1,
            }}
          >
            Built on principles,<br />not preferences.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical Connecting Line */}
          <div
            style={{
              position: "absolute",
              left: LINE_LEFT,
              top: CIRCLE_SIZE / 2,
              bottom: CIRCLE_SIZE / 2,
              width: 2,
              background: "var(--border-subtle)",
              zIndex: 0,
            }}
          >
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: lineHeight,
                background: "linear-gradient(to bottom, var(--accent), rgba(26,107,74,0.3))",
                boxShadow: "0 0 8px rgba(26,107,74,0.4)",
              }}
            />
          </div>

          {manifesto.map((item, i) => (
            <motion.div
              key={item.number}
              className="manifesto-row"
              initial={{ opacity: 0, y: isMobile ? 16 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: isMobile ? 0.15 : 0.35 }}
              transition={{ delay: 0.04, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "grid",
                gridTemplateColumns: `${CIRCLE_SIZE}px 1fr`,
                gap: isMobile ? 18 : 36,
                marginBottom: i < manifesto.length - 1 ? (isMobile ? 36 : 56) : 0,
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Circle Node */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{
                    width: CIRCLE_SIZE,
                    height: CIRCLE_SIZE,
                    borderRadius: "50%",
                    background: "var(--surface)",
                    border: "2px solid var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 0 4px var(--surface), 0 2px 8px rgba(26,107,74,0.15)",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: isMobile ? 11 : 13, color: "var(--accent)" }}>
                    {item.number}
                  </span>
                </div>
              </div>

              {/* Statement Card */}
              <motion.div
                whileHover={!isMobile ? { y: -3, boxShadow: "0 10px 32px rgba(20,26,20,0.06)" } : {}}
                whileTap={{ scale: 0.99 }}
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: 16,
                  padding: isMobile ? "20px 18px" : "28px 32px",
                  boxShadow: "0 2px 12px rgba(20,26,20,0.03)",
                  transition: "all 0.25s ease",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 700,
                    fontSize: "clamp(17px, 2.5vw, 22px)",
                    color: "var(--ink-primary)",
                    letterSpacing: -0.4,
                    lineHeight: 1.25,
                    marginBottom: 8,
                  }}
                >
                  {item.statement}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-dm)",
                    fontSize: isMobile ? 13.5 : 15,
                    lineHeight: 1.6,
                    color: "var(--ink-secondary)",
                    margin: 0,
                  }}
                >
                  {item.detail}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
