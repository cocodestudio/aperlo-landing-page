"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Adeel Mirza",
    role: "Android developer, solo",
    avatar: "AM",
    color: "#1A6B4A",
    quote: "I used to spend hours fiddling in Canva to get Play Store screenshots right. Aperlo handles the dimensions, the layout, the export. I don't think about it anymore.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Solo founder, 3 apps",
    avatar: "SC",
    color: "#1A3A5C",
    quote: "The editor is the first one I've used that doesn't feel like a dumbed-down Photoshop. The canvas respects your work. The export is exactly right.",
    rating: 5,
  },
  {
    name: "Marcus Johansson",
    role: "Flutter developer",
    avatar: "MJ",
    color: "#3A1A12",
    quote: "I tried Canva, AppLaunchpad, StoreMaven — all too bloated or too limited. Aperlo does exactly what I need. Collections alone made me switch.",
    rating: 5,
  },
  {
    name: "Priya Kapoor",
    role: "Designer & Android developer",
    avatar: "PK",
    color: "#2A3D2E",
    quote: "The attention to detail in the UI tells you the people who built this care about craft. It shows in the exported screenshots too.",
    rating: 5,
  },
  {
    name: "Tom Bradfield",
    role: "Indie game developer",
    avatar: "TB",
    color: "#1C2026",
    quote: "I manage 6 apps. Batch export saves me real time every release. That's not a feature you appreciate until you've done it the old way.",
    rating: 5,
  },
];

import SectionBadge from "@/components/section-badge";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section style={{ padding: "120px 0", background: "var(--bg)", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <SectionBadge
            tag="From devs who ship"
            icon={
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
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
            From devs who ship
          </h2>
        </motion.div>

        {/* Main testimonial */}
        <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: "var(--surface)",
                borderRadius: 20,
                padding: "clamp(28px, 6vw, 52px)",
                boxShadow: "0 16px 64px rgba(20,26,20,0.10)",
                border: "1px solid var(--border-subtle)",
                textAlign: "center",
                marginBottom: 40,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Accent blob */}
              <div style={{
                position: "absolute",
                top: -40,
                right: -40,
                width: 160,
                height: 160,
                borderRadius: "50%",
                background: `${testimonials[active].color}12`,
                filter: "blur(40px)",
                pointerEvents: "none",
              }} />

              {/* Quote mark */}
              <div style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: 72,
                color: "var(--accent)",
                lineHeight: 0.6,
                marginBottom: 32,
                opacity: 0.25,
                userSelect: "none",
              }}>
                "
              </div>

              {/* Stars */}
              <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 24 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--accent)">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <p style={{
                fontFamily: "var(--font-dm)",
                fontSize: 18,
                lineHeight: 1.7,
                color: "var(--ink-primary)",
                fontWeight: 400,
                marginBottom: 36,
                fontStyle: "italic",
              }}>
                "{testimonials[active].quote}"
              </p>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: testimonials[active].color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <span style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 14, color: "white" }}>
                    {testimonials[active].avatar}
                  </span>
                </div>
                <div style={{ textAlign: "left" }}>
                  <p style={{ fontFamily: "var(--font-dm)", fontWeight: 600, fontSize: 15, color: "var(--ink-primary)" }}>
                    {testimonials[active].name}
                  </p>
                  <p style={{ fontFamily: "var(--font-dm)", fontSize: 13, color: "var(--ink-muted)" }}>
                    {testimonials[active].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 32 }}>
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  width: i === active ? 28 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === active ? "var(--accent)" : "var(--border-default)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                  padding: 0,
                }}
              />
            ))}
          </div>

          {/* Prev / Next */}
          <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
            {[
              { dir: -1, label: "←" },
              { dir: 1, label: "→" },
            ].map(({ dir, label }) => (
              <motion.button
                key={dir}
                onClick={() => setActive((p) => (p + dir + testimonials.length) % testimonials.length)}
                whileHover={{ scale: 1.08, background: "var(--accent-tint)", borderColor: "var(--accent)" }}
                whileTap={{ scale: 0.94 }}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  border: "1.5px solid var(--border-default)",
                  background: "var(--surface)",
                  cursor: "pointer",
                  fontFamily: "var(--font-dm)",
                  fontSize: 18,
                  color: "var(--ink-secondary)",
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
