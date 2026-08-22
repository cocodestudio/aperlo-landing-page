"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionBadge from "@/components/section-badge";

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

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-play timer that smoothly cycles every 5.5 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const paginate = (dir: number) => {
    setActive((p) => (p + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{ padding: "100px 0", background: "var(--bg)", overflow: "hidden" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: 52 }}
        >
          <SectionBadge
            tag="From devs who ship"
            icon={
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            }
          />
          <h2
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 48px)",
              letterSpacing: -1,
              color: "var(--ink-primary)",
              lineHeight: 1.15,
            }}
          >
            From devs who ship
          </h2>
        </motion.div>

        {/* Main testimonial card */}
        <div style={{ maxWidth: 740, margin: "0 auto", position: "relative", perspective: isMobile ? 0 : 1200 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              // Adaptive animation: smooth 3D tilt on desktop, fluid horizontal glide on mobile
              initial={
                isMobile
                  ? { opacity: 0, x: 20, scale: 0.98 }
                  : { opacity: 0, y: 20, rotateY: 5 }
              }
              animate={
                isMobile
                  ? { opacity: 1, x: 0, scale: 1 }
                  : { opacity: 1, y: 0, rotateY: 0 }
              }
              exit={
                isMobile
                  ? { opacity: 0, x: -20, scale: 0.98 }
                  : { opacity: 0, y: -20, rotateY: -5 }
              }
              transition={{ duration: isMobile ? 0.35 : 0.45, ease: [0.16, 1, 0.3, 1] }}
              drag={isMobile ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -40) paginate(1);
                else if (info.offset.x > 40) paginate(-1);
              }}
              style={{
                background: "var(--surface)",
                borderRadius: 22,
                padding: "clamp(24px, 5vw, 52px)",
                boxShadow: "0 16px 52px rgba(20,26,20,0.06)",
                border: "1px solid var(--border-subtle)",
                textAlign: "center",
                marginBottom: 32,
                position: "relative",
                overflow: "hidden",
                touchAction: isMobile ? "pan-y" : "auto",
              }}
            >
              {/* Accent blob */}
              <div
                style={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 160,
                  height: 160,
                  borderRadius: "50%",
                  background: `${testimonials[active].color}12`,
                  filter: "blur(40px)",
                  pointerEvents: "none",
                }}
              />

              {/* Quote mark */}
              <div
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: isMobile ? 54 : 70,
                  color: "var(--accent)",
                  lineHeight: 0.5,
                  marginBottom: isMobile ? 20 : 28,
                  userSelect: "none",
                  opacity: 0.25,
                }}
              >
                &ldquo;
              </div>

              {/* Stars */}
              <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 20 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    width={isMobile ? "16" : "18"}
                    height={isMobile ? "16" : "18"}
                    viewBox="0 0 24 24"
                    fill="var(--accent)"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <p
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: isMobile ? 16 : 18,
                  lineHeight: 1.65,
                  color: "var(--ink-primary)",
                  fontWeight: 400,
                  marginBottom: 28,
                  fontStyle: "italic",
                }}
              >
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: testimonials[active].color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 3px 12px rgba(0,0,0,0.12)",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 14, color: "white" }}>
                    {testimonials[active].avatar}
                  </span>
                </div>
                <div style={{ textAlign: "left" }}>
                  <p style={{ fontFamily: "var(--font-dm)", fontWeight: 700, fontSize: 15, color: "var(--ink-primary)", margin: 0 }}>
                    {testimonials[active].name}
                  </p>
                  <p style={{ fontFamily: "var(--font-dm)", fontSize: 12.5, color: "var(--ink-muted)", margin: 0 }}>
                    {testimonials[active].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots (44px touch target) */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 6, marginBottom: 24 }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                style={{
                  minWidth: 32,
                  height: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                <span
                  style={{
                    display: "block",
                    width: i === active ? 24 : 7,
                    height: 7,
                    borderRadius: 4,
                    background: i === active ? "var(--accent)" : "var(--border-default)",
                    transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                  }}
                />
              </button>
            ))}
          </div>

          {/* Prev / Next Buttons */}
          <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
            {[
              { dir: -1, label: "←", aria: "Previous testimonial" },
              { dir: 1, label: "→", aria: "Next testimonial" },
            ].map(({ dir, label, aria }) => (
              <motion.button
                key={dir}
                onClick={() => paginate(dir)}
                aria-label={aria}
                whileTap={{ scale: 0.92 }}
                whileHover={!isMobile ? { scale: 1.06, background: "var(--accent-tint)", borderColor: "var(--accent)" } : {}}
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
                  boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
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
