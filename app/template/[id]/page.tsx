"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Helper to get formatted name from templateId
function formatTemplateName(id: string): { name: string; category: string; desc: string; palette: string[] } {
  if (!id) return { name: "Studio Template", category: "Standard", desc: "Clean screenshot layout for store listings.", palette: ["#1A6B4A", "#EDF3EE", "#141A14"] };

  const lower = id.toLowerCase();
  if (lower.includes("minimal") || lower.includes("sage")) {
    return {
      name: "Sage Studio Minimal",
      category: "Editorial",
      desc: "Clean 50/50 split canvas with soft sage tones and prominent central device focus.",
      palette: ["#1A6B4A", "#EDF3EE", "#FFFFFF"],
    };
  } else if (lower.includes("bold")) {
    return {
      name: "Bold Split Contrast",
      category: "High Impact",
      desc: "Dark top block with high-contrast emerald accent line and light feature base.",
      palette: ["#141A14", "#1A6B4A", "#F5F7F5"],
    };
  } else if (lower.includes("dark") || lower.includes("night") || lower.includes("ink")) {
    return {
      name: "Ink Night OLED",
      category: "Dark Mode",
      desc: "Deep OLED dark background with ambient glow backlight and crisp telemetry sparklines.",
      palette: ["#111318", "#1C2026", "#22C55E"],
    };
  } else if (lower.includes("gradient") || lower.includes("flow")) {
    return {
      name: "Emerald Gradient Flow",
      category: "Vibrant",
      desc: "Diagonal mesh gradient transitioning from forest green to deep studio navy.",
      palette: ["#1A6B4A", "#0D3B6E", "#FFFFFF"],
    };
  } else if (lower.includes("type") || lower.includes("typography")) {
    return {
      name: "Type First Editorial",
      category: "Typography",
      desc: "Left-rail vertical accent with bold headline hierarchy and asymmetric device placement.",
      palette: ["#FFFFFF", "#1A6B4A", "#141A14"],
    };
  }

  // Generic fallback formatted from ID
  const clean = id.replace(/^tpl_/, "").replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    name: clean || "Studio Template",
    category: "Store Ready",
    desc: "Optimized screenshot template for Google Play & App Store submissions.",
    palette: ["#1A6B4A", "#F5F7F5", "#141A14"],
  };
}

export default function TemplateViewPage() {
  const params = useParams();
  const templateId = (params?.id as string) || "tpl_standard";
  const info = formatTemplateName(templateId);

  const [copied, setCopied] = useState(false);
  const [redirectAttempted, setRedirectAttempted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileCheck = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    setIsMobile(mobileCheck);

    const customSchemeUrl = `aperlo://template/${templateId}`;

    if (mobileCheck) {
      setRedirectAttempted(true);
      window.location.href = customSchemeUrl;
    }
  }, [templateId]);

  const copyShareLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--ink-primary)", display: "flex", flexDirection: "column", position: "relative", overflowX: "hidden" }}>
      {/* Background Dot Texture */}
      <div className="dot-pattern" style={{ position: "absolute", inset: 0, opacity: 0.4, pointerEvents: "none" }} />

      {/* Top Header */}
      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(245, 247, 245, 0.88)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border-subtle)",
        height: 64,
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Image src="/app_icon.png" alt="Aperlo" width={32} height={32} style={{ borderRadius: 8 }} priority />
          <span style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 18, color: "var(--ink-primary)", letterSpacing: -0.3 }}>
            Aperlo
          </span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "var(--surface)",
            border: "1px solid var(--border-subtle)",
            padding: "4px 10px",
            borderRadius: 999,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 6px var(--accent)" }} />
            <span style={{ fontFamily: "var(--font-dm)", fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: 0.8, textTransform: "uppercase" }}>
              Live Template
            </span>
          </div>

          <Link
            href="/"
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: 13,
              fontWeight: 600,
              color: "var(--ink-secondary)",
              textDecoration: "none",
              padding: "6px 14px",
              borderRadius: 8,
              border: "1px solid var(--border-default)",
              background: "var(--surface)",
              transition: "all 0.2s",
            }}
          >
            All templates
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main style={{ flex: 1, maxWidth: 1160, margin: "0 auto", width: "100%", padding: "48px 24px 80px", position: "relative", zIndex: 10 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 48,
          alignItems: "center",
        }}>

          {/* Left Console: Template Metadata & Deep Link Controls */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Category Tag */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "4px 10px 4px 6px",
              background: "var(--surface)",
              border: "1px solid rgba(26, 107, 74, 0.2)",
              borderRadius: 6,
              marginBottom: 16,
            }}>
              <div style={{ width: 16, height: 16, borderRadius: 4, background: "var(--accent-tint)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="9" y1="3" x2="9" y2="21" />
                </svg>
              </div>
              <span style={{ fontFamily: "var(--font-dm)", fontWeight: 700, fontSize: 11, letterSpacing: 1, color: "var(--accent)", textTransform: "uppercase" }}>
                {info.category}
              </span>
            </div>

            {/* Template Headline */}
            <h1 style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "clamp(30px, 4vw, 44px)",
              lineHeight: 1.1,
              letterSpacing: -1,
              color: "var(--ink-primary)",
              marginBottom: 14,
            }}>
              {info.name}
            </h1>

            <p style={{
              fontFamily: "var(--font-dm)",
              fontSize: 16,
              lineHeight: 1.6,
              color: "var(--ink-secondary)",
              marginBottom: 28,
              maxWidth: 460,
            }}>
              {info.desc}
            </p>

            {/* Template Spec Badges */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 32, maxWidth: 440 }}>
              {[
                { label: "Target Stores", value: "Play Store & App Store" },
                { label: "Export Output", value: "Phone & Tablet 4K" },
                { label: "Template ID", value: templateId },
                { label: "Format Support", value: "PNG · JPG High-Res" },
              ].map((spec) => (
                <div
                  key={spec.label}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: 10,
                    padding: "10px 12px",
                  }}
                >
                  <p style={{ fontFamily: "var(--font-dm)", fontSize: 11, color: "var(--ink-muted)", marginBottom: 2 }}>{spec.label}</p>
                  <p style={{ fontFamily: "var(--font-dm)", fontSize: 12.5, fontWeight: 600, color: "var(--ink-primary)", wordBreak: "break-all" }}>{spec.value}</p>
                </div>
              ))}
            </div>

            {/* Action Card */}
            <div style={{
              background: "var(--surface)",
              border: "1px solid var(--border-subtle)",
              borderRadius: 16,
              padding: 24,
              boxShadow: "0 12px 32px rgba(20,26,20,0.06)",
              maxWidth: 440,
            }}>
              {isMobile && redirectAttempted && (
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "var(--accent-tint)",
                  padding: "8px 12px",
                  borderRadius: 8,
                  marginBottom: 16,
                }}>
                  <span style={{ width: 12, height: 12, border: "2px solid var(--accent)", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
                  <span style={{ fontFamily: "var(--font-dm)", fontSize: 12, fontWeight: 600, color: "var(--accent)" }}>
                    Opening in Aperlo app...
                  </span>
                </div>
              )}

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {/* Primary Button: Open in Aperlo */}
                <motion.a
                  href={`aperlo://template/${templateId}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    background: "var(--accent)",
                    color: "white",
                    padding: "14px 20px",
                    borderRadius: 12,
                    textDecoration: "none",
                    fontFamily: "var(--font-dm)",
                    fontWeight: 600,
                    fontSize: 15,
                    boxShadow: "0 4px 16px rgba(26,107,74,0.25)",
                    cursor: "pointer",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Open in Aperlo App
                </motion.a>

                {/* Secondary Button: Share / Copy Link */}
                <div style={{ display: "flex", gap: 10 }}>
                  <motion.button
                    onClick={copyShareLink}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      background: "transparent",
                      color: "var(--ink-primary)",
                      border: "1px solid var(--border-default)",
                      padding: "11px 16px",
                      borderRadius: 10,
                      fontFamily: "var(--font-dm)",
                      fontWeight: 600,
                      fontSize: 13,
                      cursor: "pointer",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    {copied ? "Link Copied! ✓" : "Share template"}
                  </motion.button>

                  <motion.a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      background: "var(--bg)",
                      color: "var(--ink-secondary)",
                      border: "1px solid var(--border-subtle)",
                      padding: "11px 16px",
                      borderRadius: 10,
                      fontFamily: "var(--font-dm)",
                      fontWeight: 600,
                      fontSize: 13,
                      textDecoration: "none",
                    }}
                  >
                    {/* Play store icon */}
                    <svg width="12" height="12" viewBox="0 0 512 512">
                      <path d="M48 432L256 256 48 80v352z" fill="#00C1FF"/>
                      <path d="M48 80l208 118 96-54L144 32 48 80z" fill="#00F076"/>
                      <path d="M48 432l208-118 96 54L144 480 48 432z" fill="#FF3A44"/>
                      <path d="M256 256l96-54 112 54-112 54-96-54z" fill="#FFC107"/>
                    </svg>
                    Get App
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual: High-Fidelity 9:16 Interactive Template Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            {/* Phone Frame Mockup Container */}
            <div style={{
              width: "100%",
              maxWidth: 320,
              aspectRatio: "9/16",
              borderRadius: 28,
              background: info.palette[0] || "#1A6B4A",
              border: "8px solid #1C2026",
              boxShadow: "0 28px 64px rgba(20,26,20,0.22), 0 8px 24px rgba(26,107,74,0.18)",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 20,
            }}>
              {/* Dynamic Island / Speaker notch */}
              <div style={{
                position: "absolute",
                top: 8,
                left: "50%",
                transform: "translateX(-50%)",
                width: 72,
                height: 18,
                borderRadius: 10,
                background: "#111318",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                zIndex: 20,
              }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#1C2420" }} />
                <div style={{ width: 18, height: 3, borderRadius: 2, background: "#1C2420" }} />
              </div>

              {/* Template Screen Header */}
              <div style={{ marginTop: 24, textAlign: "center", zIndex: 10 }}>
                <span style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.75)", letterSpacing: 1.2, textTransform: "uppercase" }}>
                  Aperlo Studio
                </span>
                <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: 18, color: "#FFFFFF", lineHeight: 1.15, marginTop: 4 }}>
                  {info.name}
                </h3>
              </div>

              {/* Inner UI Layer preview */}
              <div style={{
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(12px)",
                borderRadius: 16,
                padding: 14,
                boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
                zIndex: 10,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 9, fontWeight: 800, color: "var(--ink-primary)" }}>OUTPUT PREVIEW</span>
                  <span style={{ fontSize: 8, fontWeight: 700, color: "var(--accent)", background: "var(--accent-tint)", padding: "2px 6px", borderRadius: 4 }}>4K STORE</span>
                </div>
                <div style={{ width: "100%", height: 44, background: "var(--accent-tint)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "var(--font-syne)", fontSize: 11, fontWeight: 800, color: "var(--accent)" }}>1080 × 1920 PX</span>
                </div>
                <div style={{ display: "flex", gap: 6 }}>
                  <div style={{ flex: 1, height: 8, background: "#E5EAE5", borderRadius: 4 }} />
                  <div style={{ flex: 1, height: 8, background: "#E5EAE5", borderRadius: 4 }} />
                </div>
              </div>

              {/* Bottom Chip */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 10 }}>
                <span style={{ fontFamily: "var(--font-dm)", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.9)" }}>9:16 Frame</span>
                <span style={{ fontSize: 9, fontWeight: 800, color: "white", background: "rgba(0,0,0,0.35)", padding: "3px 8px", borderRadius: 999 }}>Ready to edit</span>
              </div>
            </div>

            {/* Spec Footnote */}
            <p style={{ fontFamily: "var(--font-dm)", fontSize: 12, color: "var(--ink-muted)", marginTop: 16 }}>
              Renders natively at full resolution inside the Aperlo app.
            </p>
          </motion.div>

        </div>
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid var(--border-subtle)",
        background: "var(--surface)",
        padding: "24px 24px",
        textAlign: "center",
      }}>
        <p style={{ fontFamily: "var(--font-dm)", fontSize: 13, color: "var(--ink-muted)" }}>
          © {new Date().getFullYear()} Aperlo. Built for solo developers & indie app makers.
        </p>
      </footer>
    </div>
  );
}