"use client";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section style={{
      padding: "120px 24px",
      background: "var(--ink-primary)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background texture */}
      <div className="dot-pattern" style={{ position: "absolute", inset: 0, opacity: 0.06 }} />

      {/* Green radial glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600,
        height: 400,
        background: "radial-gradient(ellipse, rgba(26,107,74,0.4) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      {/* Floating spec tags */}
      {[
        { text: "PNG · lossless", top: "18%", left: "7%" },
        { text: "Google Play ready", top: "28%", right: "9%" },
        { text: "1080×1920 px", bottom: "22%", left: "6%" },
        { text: "1600×1200 px", bottom: "16%", right: "7%" },
      ].map((tag) => (
        <motion.div
          key={tag.text}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: tag.top,
            bottom: (tag as any).bottom,
            left: (tag as any).left,
            right: (tag as any).right,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(8px)",
            borderRadius: 8,
            padding: "8px 14px",
          }}
        >
          <span style={{ fontFamily: "var(--font-dm)", fontSize: 11, color: "rgba(255,255,255,0.6)" }}>{tag.text}</span>
        </motion.div>
      ))}

      {/* Content */}
      <div style={{ maxWidth: 580, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(26,107,74,0.2)",
            border: "1px solid rgba(26,107,74,0.4)",
            borderRadius: 999,
            padding: "6px 16px",
            marginBottom: 32,
          }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ADE80" }} />
            <span style={{ fontFamily: "var(--font-dm)", fontWeight: 500, fontSize: 13, color: "#4ADE80" }}>
              Android · Free to download
            </span>
          </div>

          <h2 style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "clamp(36px, 6vw, 68px)",
            letterSpacing: -2,
            color: "white",
            lineHeight: 1.05,
            marginBottom: 20,
          }}>
            Ready to ship?
          </h2>

          <p style={{
            fontFamily: "var(--font-dm)",
            fontSize: 17,
            lineHeight: 1.65,
            color: "rgba(255,255,255,0.6)",
            maxWidth: 440,
            margin: "0 auto 48px",
          }}>
            From blank canvas to App Store and Google Play in minutes. Download Aperlo — it's free.
          </p>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, boxShadow: "0 16px 48px rgba(26,107,74,0.5)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "var(--accent)",
                color: "white",
                fontFamily: "var(--font-dm)",
                fontWeight: 600,
                fontSize: 15,
                padding: "14px 28px",
                borderRadius: 12,
                textDecoration: "none",
                boxShadow: "0 4px 24px rgba(26,107,74,0.4)",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 17V3M7 12l5 5 5-5M20 21H4" />
              </svg>
              Get it on Google Play
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.03, background: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.8)",
                fontFamily: "var(--font-dm)",
                fontWeight: 600,
                fontSize: 15,
                padding: "14px 28px",
                borderRadius: 12,
                textDecoration: "none",
                border: "1.5px solid rgba(255,255,255,0.12)",
                transition: "background 0.2s",
              }}
            >
              View on Play Store
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
