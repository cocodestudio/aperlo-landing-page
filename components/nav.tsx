"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [showDownload, setShowDownload] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);
      setShowDownload(scrollY > 450);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 24px",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(245,247,245,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-subtle)" : "1px solid transparent",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {/* Logo — uses real app icon */}
      <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
        <Image
          src="/app_icon.png"
          alt="Aperlo"
          width={32}
          height={32}
          style={{ borderRadius: 8 }}
          priority
        />
        <span style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 700,
          fontSize: 18,
          color: "var(--ink-primary)",
          letterSpacing: -0.3,
        }}>
          Aperlo
        </span>
      </a>

      {/* Desktop links — no Pricing */}
      <div className="nav-links" style={{ gap: 32, alignItems: "center" }}>
        {["Features", "Templates"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              fontFamily: "var(--font-dm)",
              fontWeight: 500,
              fontSize: 14,
              color: "var(--ink-secondary)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-secondary)")}
          >
            {item}
          </a>
        ))}
      </div>

      {/* CTA — only appears when user scrolls past the hero section */}
      <div style={{ minWidth: 130, display: "flex", justifyContent: "flex-end" }}>
        <AnimatePresence>
          {showDownload && (
            <motion.a
              href="#download"
              className="nav-cta"
              initial={{ opacity: 0, scale: 0.85, y: -6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: -6 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                fontFamily: "var(--font-dm)",
                fontWeight: 600,
                fontSize: 14,
                color: "white",
                background: "var(--accent)",
                padding: "10px 20px",
                borderRadius: 10,
                textDecoration: "none",
                transition: "background 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--accent-hover)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--accent)")}
            >
              Download now
            </motion.a>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
