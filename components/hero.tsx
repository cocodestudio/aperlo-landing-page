"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const exportTargets = [
  { store: "App Store", sizes: ["iPhone 6.9\"  1320×2868", "iPad 13\"  2064×2752"] },
  { store: "Google Play", sizes: ["Phone  1080×1920", "7\" Tablet  1200×1920", "10\" Tablet  1600×2560"] },
];

export default function Hero() {
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
    offset: ["start start", "end start"],
  });

  const rawContentY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  // On mobile: 0 parallax translation to prevent scroll jank
  const contentY = isMobile ? "0%" : rawContentY;

  return (
    <section
      ref={containerRef}
      style={{
        background: "var(--bg)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "clamp(90px, 13vh, 140px)",
        paddingBottom: "clamp(40px, 7vh, 80px)",
      }}
    >
      {/* Background layer 1: Subtle grid */}
      <div
        className="grid-pattern"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.4,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Background layer 2: Emerald Glow */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 480,
          background: "radial-gradient(ellipse, rgba(26,107,74,0.1) 0%, transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
          filter: "blur(24px)",
        }}
      />

      {/* Main Foreground Content */}
      <motion.div
        style={{
          y: contentY,
          zIndex: 2,
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: 920,
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* App icon + title row */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}
          >
            <Image
              src="/app_icon.png"
              alt="Aperlo app icon"
              width={44}
              height={44}
              style={{ borderRadius: 12, boxShadow: "0 4px 18px rgba(26,107,74,0.22)" }}
              priority
            />
            <span
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: 22,
                color: "var(--ink-primary)",
                letterSpacing: -0.5,
              }}
            >
              Aperlo
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 16 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: 18 }}
          >
            <h1
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(38px, 7vw, 76px)",
                lineHeight: 1.04,
                letterSpacing: -2.5,
                color: "var(--ink-primary)",
                margin: 0,
              }}
            >
              Screenshot it.
            </h1>
            <span
              className="gradient-text"
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(38px, 7vw, 76px)",
                lineHeight: 1.04,
                letterSpacing: -2.5,
                display: "block",
              }}
            >
              Ship it.
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.55 }}
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: 1.55,
              color: "var(--ink-secondary)",
              maxWidth: 540,
              marginBottom: 32,
            }}
          >
            The screenshot tool for App developers. Design once, export for App Store and Google Play — every required size, in one tap.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.55 }}
            style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}
          >
            <motion.a
              href="#download"
              id="download"
              whileHover={!isMobile ? { scale: 1.03, boxShadow: "0 12px 36px rgba(26,107,74,0.35)" } : {}}
              whileTap={{ scale: 0.96 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "var(--accent)",
                color: "white",
                fontFamily: "var(--font-dm)",
                fontWeight: 600,
                fontSize: 15,
                padding: "13px 26px",
                borderRadius: 12,
                textDecoration: "none",
                boxShadow: "0 4px 18px rgba(26,107,74,0.25)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.4.22.86.23 1.28.04L16.76 12 4.46.2C4.04.01 3.58.02 3.18.24A2 2 0 0 0 2 2.06v19.88c0 .74.42 1.4 1.18 1.82z" opacity="0.4"/>
                <path d="m16.76 12-3.04-3.04-9.26-9.26 11.56 6.48L16.76 12z" opacity="0.7"/>
                <path d="m16.76 12-.74.74-11.56 6.48 9.26-9.26L16.76 12z" opacity="0.7"/>
                <path d="M22 12c0-.78-.43-1.47-1.13-1.87l-4.11-2.31L13.72 12l3.04 3.04 4.11-2.17A2.1 2.1 0 0 0 22 12z"/>
              </svg>
              Get on Google Play
            </motion.a>

            <motion.a
              href="#how-it-works"
              whileHover={!isMobile ? { scale: 1.02, background: "var(--surface-muted)" } : {}}
              whileTap={{ scale: 0.96 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "var(--surface)",
                color: "var(--ink-primary)",
                fontFamily: "var(--font-dm)",
                fontWeight: 600,
                fontSize: 15,
                padding: "13px 26px",
                borderRadius: 12,
                textDecoration: "none",
                border: "1.5px solid var(--border-default)",
                transition: "all 0.2s",
              }}
            >
              See how it works
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Export target panel */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.55 }}
            className="hero-export-grid"
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: 12,
              width: "100%",
              maxWidth: 580,
            }}
          >
            {exportTargets.map((t, i) => (
              <div
                key={t.store}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: 14,
                  padding: isMobile ? "14px 16px" : "18px 20px",
                  textAlign: "left",
                  boxShadow: "0 2px 12px rgba(20,26,20,0.03)",
                }}
              >
                {/* Store label with logo mark */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  {i === 0 ? (
                    <svg width="13" height="16" viewBox="0 0 170 210" fill="var(--ink-primary)">
                      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.2-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.76 3.35-4.94.21-9.86-1.96-14.75-6.52-3.13-2.73-7.05-7.41-11.76-14.04-5.04-7.08-9.19-15.29-12.44-24.65-3.47-10.11-5.21-19.9-5.21-29.38 0-10.86 2.35-20.22 7.06-28.07 3.7-6.3 8.63-11.27 14.8-14.93 6.18-3.66 12.85-5.53 20.04-5.65 3.93 0 9.09 1.22 15.51 3.61 6.4 2.4 10.51 3.61 12.32 3.61 1.35 0 5.92-1.42 13.68-4.25 7.33-2.64 13.52-3.73 18.6-3.3 13.75 1.11 24.08 6.52 30.95 16.28-12.29 7.45-18.37 17.87-18.25 31.22.11 10.41 3.88 19.07 11.29 25.96 3.36 3.19 7.11 5.66 11.29 7.4-.91 2.63-1.87 5.15-2.9 7.57zM119.11 7.24c0 8.16-2.98 15.78-8.92 22.84-7.17 8.38-15.85 13.22-25.24 12.46-.12-.98-.19-2.01-.19-3.09 0-7.83 3.41-16.2 9.47-23.05 3.03-3.47 6.88-6.35 11.55-8.64 4.66-2.26 9.07-3.51 13.21-3.73.12 1.08.12 2.15.12 3.21z"/>
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 512 512">
                      <path d="M48 432L256 256 48 80v352z" fill="#00C1FF"/>
                      <path d="M48 80l208 118 96-54L144 32 48 80z" fill="#00F076"/>
                      <path d="M48 432l208-118 96 54L144 480 48 432z" fill="#FF3A44"/>
                      <path d="M256 256l96-54 112 54-112 54-96-54z" fill="#FFC107"/>
                    </svg>
                  )}
                  <span
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontWeight: 700,
                      fontSize: 14,
                      color: "var(--ink-primary)",
                      letterSpacing: -0.2,
                    }}
                  >
                    {t.store}
                  </span>
                </div>

                {/* Sizes */}
                <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  {t.sizes.map((s) => (
                    <div key={s} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: i === 0 ? "var(--ink-muted)" : "var(--accent)",
                          flexShrink: 0,
                          opacity: 0.75,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-dm)",
                          fontSize: 11.5,
                          color: "var(--ink-muted)",
                          lineHeight: 1.4,
                        }}
                      >
                        {s}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
