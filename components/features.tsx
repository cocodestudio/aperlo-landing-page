"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionBadge from "@/components/section-badge";

// Lucide-style inline SVG icons — no emoji
function IconShapes() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}
function IconType() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" y1="20" x2="15" y2="20" />
      <line x1="12" y1="4" x2="12" y2="20" />
    </svg>
  );
}
function IconImage() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}
function IconPalette() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12a10 10 0 0 0 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.476-1.125C12.9 18.886 12.726 18.48 12.726 18c0-.93.745-1.688 1.648-1.688H16c3.284 0 6-2.716 6-6C22 6.268 17.523 2 12 2z" />
    </svg>
  );
}
function IconSmartphone() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconRotateCcw() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  );
}
function IconRotateCw() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 1 1-9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const features = [
  {
    number: "01",
    title: "Templates built for both stores",
    body: "Every template ships at the right dimensions for App Store and Google Play. Pick a style, drop in your screenshots, and the layout holds.",
    tags: ["App Store · iOS sizes", "Google Play · Android sizes", "80+ templates"],
  },
  {
    number: "02",
    title: "A canvas that gets out of your way",
    body: "Pan, pinch-zoom, drag elements into place. The editor is built on the app's native rendering engine — there's no lag, no jitter, no translation layer. What you see is what exports.",
    tags: ["50-step undo", "Layers panel", "Align tools", "Element locking"],
    visual: <EditorVisual />,
  },
  {
    number: "03",
    title: "Collections keep your work organized",
    body: "Group screenshots by app, version, or campaign. Drag to reorder. Rename inline. When you need to export an entire release's worth of screenshots, one tap handles it.",
    tags: ["Drag to reorder", "Rename inline", "Batch export"],
    visual: <CollectionVisual />,
  },
  {
    number: "04",
    title: "Export every required size at once",
    body: "Select App Store, Google Play, or both. Aperlo generates every required variant — iPhone 6.9\" to iPad 13\", Android phone to 10\" tablet — and saves them to your gallery.",
    tags: ["App Store sizes", "Google Play sizes", "PNG · JPG", "Batch export"],
    visual: <ExportVisual />,
  },
];

function EditorVisual() {
  return (
    <div style={{
      width: "100%",
      maxWidth: 340,
      background: "var(--surface)",
      borderRadius: 16,
      overflow: "hidden",
      boxShadow: "0 24px 64px rgba(20,26,20,0.14)",
      border: "1px solid var(--border-subtle)",
    }}>
      {/* Editor app bar */}
      <div style={{ height: 44, background: "var(--surface)", borderBottom: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#E74C3C" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#F39C12" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#2ECC71" }} />
        </div>
        <span style={{ fontFamily: "var(--font-dm)", fontSize: 12, color: "var(--ink-muted)" }}>App launch · Hero 1</span>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ display: "flex", gap: 4, color: "var(--ink-muted)" }}>
            <IconRotateCcw />
            <IconRotateCw />
          </div>
          <div style={{ background: "var(--accent)", padding: "4px 10px", borderRadius: 6 }}>
            <span style={{ fontFamily: "var(--font-dm)", fontSize: 11, fontWeight: 600, color: "white" }}>Export</span>
          </div>
        </div>
      </div>
      {/* Canvas area */}
      <div style={{ background: "var(--bg)", padding: 24, display: "flex", alignItems: "center", justifyContent: "center", minHeight: 220 }}>
        <motion.div
          animate={{ boxShadow: ["0 8px 32px rgba(20,26,20,0.15)", "0 16px 48px rgba(26,107,74,0.2)", "0 8px 32px rgba(20,26,20,0.15)"] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{
            width: 130,
            height: 200,
            background: "linear-gradient(160deg, #1A3A5C 0%, #1A6B4A 60%, #0E4830 100%)",
            borderRadius: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            padding: 16,
            position: "relative",
          }}
        >
          <div style={{ width: "80%", height: 6, borderRadius: 3, background: "rgba(255,255,255,0.5)" }} />
          <div style={{ width: "60%", height: 4, borderRadius: 2, background: "rgba(255,255,255,0.3)" }} />
          <div style={{ width: 48, height: 48, borderRadius: 14, background: "rgba(255,255,255,0.15)", marginTop: 8 }} />
          <div style={{ width: "70%", height: 3, borderRadius: 2, background: "rgba(255,255,255,0.2)", marginTop: 4 }} />
          {/* Selection handles */}
          {[{top:-4,left:-4},{top:-4,right:-4},{bottom:-4,left:-4},{bottom:-4,right:-4}].map((pos, i) => (
            <div key={i} style={{ position: "absolute", width: 8, height: 8, borderRadius: "50%", background: "white", border: "1.5px solid var(--accent)", ...pos }} />
          ))}
        </motion.div>
      </div>
      {/* Toolbar */}
      <div style={{ borderTop: "1px solid var(--border-subtle)", padding: "10px 16px", display: "flex", gap: 20, background: "var(--surface)" }}>
        {[
          { icon: <IconShapes />, label: "Elements" },
          { icon: <IconType />, label: "Text" },
          { icon: <IconImage />, label: "Image" },
          { icon: <IconPalette />, label: "Background" },
          { icon: <IconSmartphone />, label: "Device" },
        ].map(({ icon, label }) => (
          <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, color: label === "Elements" ? "var(--accent)" : "var(--ink-muted)" }}>
            {icon}
            <span style={{ fontFamily: "var(--font-dm)", fontSize: 9, color: "inherit" }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CollectionVisual() {
  const collections = [
    { name: "Launch v1.0", count: 6, color: "#1A6B4A" },
    { name: "Dark mode", count: 4, color: "#1C2026" },
    { name: "Onboarding", count: 8, color: "#1A3A5C" },
    { name: "Update 2.1", count: 3, color: "#3A1A12" },
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, width: "100%", maxWidth: 300 }}>
      {collections.map((col, i) => (
        <motion.div
          key={col.name}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(20,26,20,0.18)" }}
          style={{
            aspectRatio: "4/3",
            background: "var(--surface)",
            borderRadius: 12,
            boxShadow: "0 4px 16px rgba(20,26,20,0.08)",
            border: "1px solid var(--border-subtle)",
            overflow: "hidden",
            cursor: "pointer",
            transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <div style={{ height: "60%", background: col.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <div style={{ height: "40%", padding: "8px 10px" }}>
            <p style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 11, color: "var(--ink-primary)", marginBottom: 2 }}>{col.name}</p>
            <p style={{ fontFamily: "var(--font-dm)", fontSize: 9, color: "var(--ink-muted)" }}>{col.count} screenshots</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function ExportVisual() {
  const sizes = [
    { label: "Phone", size: "1080×1920", checked: true },
    { label: "7\" tablet", size: "1200×1920", checked: true },
    { label: "10\" tablet", size: "1600×1200", checked: false },
  ];

  return (
    <div style={{
      width: "100%",
      maxWidth: 300,
      background: "var(--surface)",
      borderRadius: 16,
      padding: 20,
      boxShadow: "0 12px 48px rgba(20,26,20,0.12)",
      border: "1px solid var(--border-subtle)",
    }}>
      <p style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 14, color: "var(--ink-primary)", marginBottom: 4 }}>Export screenshot</p>
      <p style={{ fontFamily: "var(--font-dm)", fontSize: 11, color: "var(--ink-muted)", marginBottom: 16 }}>Google Play</p>

      {/* Format pills */}
      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        {["PNG", "JPG"].map((f, i) => (
          <div key={f} style={{
            padding: "6px 14px",
            borderRadius: 999,
            background: i === 0 ? "var(--accent-tint)" : "transparent",
            border: `1px solid ${i === 0 ? "var(--accent)" : "var(--border-default)"}`,
          }}>
            <span style={{ fontFamily: "var(--font-dm)", fontWeight: 600, fontSize: 12, color: i === 0 ? "var(--accent)" : "var(--ink-muted)" }}>{f}</span>
          </div>
        ))}
      </div>

      {/* Size list */}
      {sizes.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 0",
            borderBottom: i < sizes.length - 1 ? "1px solid var(--border-subtle)" : "none",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 16, height: 16, borderRadius: "50%",
              border: `1.5px solid ${s.checked ? "var(--accent)" : "var(--border-default)"}`,
              background: s.checked ? "var(--accent-tint)" : "transparent",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              {s.checked && <IconCheck />}
            </div>
            <span style={{ fontFamily: "var(--font-dm)", fontSize: 12, color: "var(--ink-primary)" }}>{s.label}</span>
          </div>
          <span style={{ fontFamily: "var(--font-dm)", fontSize: 11, color: "var(--ink-muted)" }}>{s.size}</span>
        </motion.div>
      ))}

      {/* Export button */}
      <motion.button
        whileHover={{ scale: 1.02, boxShadow: "0 8px 28px rgba(26,107,74,0.3)" }}
        whileTap={{ scale: 0.98 }}
        style={{
          width: "100%",
          marginTop: 16,
          background: "var(--accent)",
          border: "none",
          borderRadius: 10,
          padding: "12px 0",
          cursor: "pointer",
          fontFamily: "var(--font-dm)",
          fontWeight: 600,
          fontSize: 14,
          color: "white",
        }}
      >
        Export 2 sizes
      </motion.button>
    </div>
  );
}

{/* ── 6 Authentic Template Architectures from Aperlo's Template Engine ── */}
const templateCards = [
  {
    id: "tpl_sage_studio",
    label: "Sage Studio",
    tag: "Split Canvas",
    render: () => (
      <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        {/* Top sage block (52% height) */}
        <div style={{
          height: "52%",
          background: "#EDF3EE",
          padding: "16px 12px 0",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <span style={{ fontSize: 7, fontWeight: 700, letterSpacing: 0.8, color: "var(--accent)", textTransform: "uppercase", marginBottom: 3 }}>
            Template 01
          </span>
          <h4 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: 12.5, color: "var(--ink-primary)", lineHeight: 1.15, letterSpacing: -0.3, maxWidth: 120 }}>
            Design once. Ship everywhere.
          </h4>
        </div>

        {/* Bottom white block (48% height) */}
        <div style={{
          height: "48%",
          background: "#FFFFFF",
          padding: "0 12px 10px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}>
          <span style={{ fontFamily: "var(--font-dm)", fontSize: 10, fontWeight: 700, color: "var(--ink-primary)" }}>Sage Studio</span>
          <span style={{ fontSize: 8, fontWeight: 600, color: "var(--accent)", background: "rgba(26,107,74,0.1)", padding: "1px 5px", borderRadius: 4 }}>Split 50/50</span>
        </div>

        {/* Overlapping Phone Mockup (spans both halves) */}
        <div style={{
          position: "absolute",
          top: "36%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 82,
          height: 108,
          background: "#2A3D2E",
          borderRadius: "10px 10px 0 0",
          padding: "4px 4px 0",
          boxShadow: "0 8px 24px rgba(20,26,20,0.18)",
          display: "flex",
          flexDirection: "column",
          zIndex: 2,
        }}>
          {/* Inner Screen */}
          <div style={{
            flex: 1,
            background: "#FFFFFF",
            borderRadius: "7px 7px 0 0",
            padding: 5,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}>
            {/* Mock App Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ width: 18, height: 4, background: "var(--accent)", borderRadius: 2 }} />
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#DCE0DC" }} />
            </div>
            {/* Balance Card */}
            <div style={{ background: "var(--accent-tint)", borderRadius: 4, padding: "4px 5px" }}>
              <div style={{ width: 22, height: 3, background: "var(--accent)", opacity: 0.7, borderRadius: 1.5 }} />
              <div style={{ width: 36, height: 6, background: "var(--accent)", borderRadius: 2, marginTop: 2 }} />
            </div>
            {/* Feed Rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <div style={{ width: "100%", height: 4, background: "#EEF1EE", borderRadius: 2 }} />
              <div style={{ width: "80%", height: 4, background: "#F5F7F5", borderRadius: 2 }} />
              <div style={{ width: "65%", height: 4, background: "#F5F7F5", borderRadius: 2 }} />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "tpl_bold_split",
    label: "Bold Split",
    tag: "High Contrast",
    render: () => (
      <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        {/* Top dark block */}
        <div style={{
          height: "48%",
          background: "#141A14",
          padding: "16px 12px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}>
          <div style={{ width: 14, height: 2.5, background: "var(--accent)", marginBottom: 5 }} />
          <h4 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: 13, color: "#FFFFFF", lineHeight: 1.1, letterSpacing: -0.4 }}>
            BUILT FOR SPEED.
          </h4>
        </div>

        {/* Bottom light block */}
        <div style={{
          height: "52%",
          background: "#F5F7F5",
          padding: "0 12px 10px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}>
          <span style={{ fontFamily: "var(--font-dm)", fontSize: 10, fontWeight: 700, color: "var(--ink-primary)" }}>Bold Split</span>
          <span style={{ fontSize: 8, fontWeight: 600, color: "#16A34A", background: "rgba(22,163,74,0.12)", padding: "1px 5px", borderRadius: 4 }}>Contrast</span>
        </div>

        {/* Overlapping Phone Mockup */}
        <div style={{
          position: "absolute",
          top: "32%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 80,
          height: 114,
          background: "#1C1C1E",
          borderRadius: "10px 10px 0 0",
          padding: "4px 4px 0",
          boxShadow: "0 10px 28px rgba(0,0,0,0.3)",
          display: "flex",
          flexDirection: "column",
          zIndex: 2,
        }}>
          {/* Inner Screen with Dark UI */}
          <div style={{
            flex: 1,
            background: "#1E241E",
            borderRadius: "7px 7px 0 0",
            padding: 5,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}>
            {/* Speed indicator */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 6, color: "#4ADE80", fontWeight: 800 }}>⚡ INSTANT</span>
              <span style={{ fontSize: 6, color: "#8E9E8E" }}>60 FPS</span>
            </div>
            {/* Large stat graphic */}
            <div style={{ background: "#273327", borderRadius: 4, padding: "4px 5px", display: "flex", alignItems: "baseline", gap: 3 }}>
              <span style={{ fontFamily: "var(--font-syne)", fontSize: 11, fontWeight: 900, color: "#FFFFFF" }}>0.02s</span>
              <span style={{ fontSize: 5, color: "#4ADE80" }}>LATENCY</span>
            </div>
            {/* Layer lines */}
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <div style={{ width: "100%", height: 4, background: "#2F3D2F", borderRadius: 2 }} />
              <div style={{ width: "75%", height: 4, background: "#2F3D2F", borderRadius: 2 }} />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "tpl_ink_night",
    label: "Ink Night",
    tag: "OLED Dark",
    render: () => (
      <div style={{ width: "100%", height: "100%", background: "#111318", padding: "16px 12px 10px", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden" }}>
        {/* Ambient emerald backlight */}
        <div style={{ position: "absolute", top: "25%", left: "50%", transform: "translate(-50%, -50%)", width: 100, height: 100, borderRadius: "50%", background: "radial-gradient(circle, rgba(26,107,74,0.3) 0%, transparent 70%)", pointerEvents: "none" }} />

        {/* Top Headline + Divider */}
        <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <h4 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: 13, color: "#FFFFFF", lineHeight: 1.15, letterSpacing: -0.4, marginBottom: 5 }}>
            Dark mode first.
          </h4>
          <div style={{ width: 24, height: 2, background: "var(--accent)", margin: "0 auto" }} />
        </div>

        {/* Phone Mockup at bottom */}
        <div style={{
          width: 84,
          height: 104,
          background: "#1C2026",
          borderRadius: "10px 10px 0 0",
          margin: "0 auto",
          padding: "4px 4px 0",
          boxShadow: "0 10px 32px rgba(0,0,0,0.6)",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: 2,
        }}>
          {/* Inner Screen */}
          <div style={{
            flex: 1,
            background: "#151921",
            borderRadius: "7px 7px 0 0",
            padding: 5,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}>
            {/* Sparkline chart */}
            <svg width="100%" height="28" viewBox="0 0 80 28" fill="none">
              <path d="M0 20 Q 20 22, 35 12 T 60 8 T 80 2" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <div style={{ display: "flex", gap: 3 }}>
              <div style={{ flex: 1, height: 12, background: "#1F2530", borderRadius: 3 }} />
              <div style={{ flex: 1, height: 12, background: "#1F2530", borderRadius: 3 }} />
            </div>
            <div style={{ width: "90%", height: 3, background: "#283240", borderRadius: 1.5 }} />
          </div>
        </div>

        {/* Bottom Tag */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 2 }}>
          <span style={{ fontFamily: "var(--font-dm)", fontSize: 10, fontWeight: 700, color: "#FFFFFF" }}>Ink Night</span>
          <span style={{ fontSize: 8, fontWeight: 600, color: "#4ADE80", background: "rgba(74,222,128,0.15)", padding: "1px 5px", borderRadius: 4 }}>OLED</span>
        </div>
      </div>
    ),
  },
  {
    id: "tpl_gradient_flow",
    label: "Emerald Gradient",
    tag: "Vibrant",
    render: () => (
      <div style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(145deg, #1A6B4A 0%, #0D3B6E 100%)",
        padding: "16px 12px 10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Top Headline */}
        <div style={{ textAlign: "center" }}>
          <span style={{ fontSize: 7, fontWeight: 700, letterSpacing: 0.8, color: "rgba(255,255,255,0.8)", textTransform: "uppercase", marginBottom: 3, display: "block" }}>
            Store Asset
          </span>
          <h4 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: 12.5, color: "#FFFFFF", lineHeight: 1.15, letterSpacing: -0.3 }}>
            Ready in seconds.
          </h4>
        </div>

        {/* Frosted Translucent Phone Mockup */}
        <div style={{
          width: 84,
          height: 104,
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255, 255, 255, 0.35)",
          borderRadius: "10px 10px 0 0",
          margin: "0 auto",
          padding: "4px 4px 0",
          boxShadow: "0 12px 32px rgba(0,0,0,0.3)",
          display: "flex",
          flexDirection: "column",
          zIndex: 2,
        }}>
          {/* Inner Screen */}
          <div style={{
            flex: 1,
            background: "#FFFFFF",
            borderRadius: "7px 7px 0 0",
            padding: 5,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 6, fontWeight: 800, color: "var(--ink-primary)" }}>1080×1920</span>
              <span style={{ fontSize: 5, color: "var(--accent)", fontWeight: 700 }}>4K PNG</span>
            </div>
            <div style={{ height: 26, background: "linear-gradient(135deg, #1A6B4A, #145A3D)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "white", fontSize: 6, fontWeight: 700 }}>EXPORT READY</span>
            </div>
            <div style={{ width: "80%", height: 3, background: "#E8ECE8", borderRadius: 1.5 }} />
            <div style={{ width: "60%", height: 3, background: "#E8ECE8", borderRadius: 1.5 }} />
          </div>
        </div>

        {/* Bottom Tag */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 2 }}>
          <span style={{ fontFamily: "var(--font-dm)", fontSize: 10, fontWeight: 700, color: "#FFFFFF" }}>Gradient Flow</span>
          <span style={{ fontSize: 8, fontWeight: 600, color: "#FFFFFF", background: "rgba(255,255,255,0.2)", padding: "1px 5px", borderRadius: 4 }}>Mesh 4K</span>
        </div>
      </div>
    ),
  },
  {
    id: "tpl_type_first",
    label: "Type First",
    tag: "Editorial",
    render: () => (
      <div style={{ width: "100%", height: "100%", background: "#FFFFFF", padding: "16px 10px 10px", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden" }}>
        {/* Left vertical accent bar */}
        <div style={{ position: "absolute", left: 8, top: 16, bottom: 32, width: 2.5, background: "var(--accent)" }} />

        {/* Main Content Layout (Text Left, Phone Right) */}
        <div style={{ paddingLeft: 12, display: "flex", gap: 6, flex: 1, marginTop: 4 }}>
          {/* Left Text */}
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: 6, fontWeight: 700, letterSpacing: 0.8, color: "var(--accent)", textTransform: "uppercase" }}>
              Editorial
            </span>
            <h4 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: 13, color: "var(--ink-primary)", lineHeight: 1.1, letterSpacing: -0.4, marginTop: 3 }}>
              Crafted<br />for indie<br />makers.
            </h4>
            <p style={{ fontFamily: "var(--font-dm)", fontSize: 7, color: "var(--ink-muted)", marginTop: 6, lineHeight: 1.3 }}>
              Pixel fidelity on every device.
            </p>
          </div>

          {/* Right Phone Mockup (emerging from right) */}
          <div style={{
            width: 48,
            height: 98,
            background: "#1C1C1E",
            borderRadius: "6px 0 0 6px",
            padding: "3px 0 0 3px",
            boxShadow: "-4px 8px 16px rgba(0,0,0,0.15)",
            marginRight: -10,
          }}>
            <div style={{
              width: "100%",
              height: "100%",
              background: "#F5F7F5",
              borderRadius: "4px 0 0 0",
              padding: 4,
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}>
              <div style={{ width: 14, height: 3, background: "var(--accent)", borderRadius: 1.5 }} />
              <div style={{ width: "100%", height: 24, background: "#E2E7E2", borderRadius: 3 }} />
              <div style={{ width: "80%", height: 3, background: "#CBD2CB", borderRadius: 1.5 }} />
            </div>
          </div>
        </div>

        {/* Bottom Tag */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: 12, zIndex: 2 }}>
          <span style={{ fontFamily: "var(--font-dm)", fontSize: 10, fontWeight: 700, color: "var(--ink-primary)" }}>Type First</span>
          <span style={{ fontSize: 8, fontWeight: 600, color: "var(--accent)", background: "rgba(26,107,74,0.1)", padding: "1px 5px", borderRadius: 4 }}>Display</span>
        </div>
      </div>
    ),
  },
  {
    id: "tpl_centered_minimal",
    label: "Centered Minimal",
    tag: "Pristine Light",
    render: () => (
      <div style={{ width: "100%", height: "100%", background: "#F5F7F5", padding: "16px 12px 10px", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative", overflow: "hidden" }}>
        {/* Top: Pill Badge + Centered Headline */}
        <div style={{ textAlign: "center" }}>
          <div style={{
            display: "inline-block",
            background: "var(--accent-tint)",
            padding: "2px 8px",
            borderRadius: 99,
            marginBottom: 4,
          }}>
            <span style={{ fontSize: 6, fontWeight: 800, color: "var(--accent)", letterSpacing: 0.8 }}>NEW RELEASE</span>
          </div>
          <h4 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: 12.5, color: "var(--ink-primary)", lineHeight: 1.15, letterSpacing: -0.3 }}>
            Showcase your craft.
          </h4>
        </div>

        {/* Centered Phone Mockup */}
        <div style={{
          width: 82,
          height: 100,
          background: "#1C1C1E",
          borderRadius: "10px 10px 0 0",
          margin: "0 auto",
          padding: "4px 4px 0",
          boxShadow: "0 8px 24px rgba(20,26,20,0.12)",
          display: "flex",
          flexDirection: "column",
          zIndex: 2,
        }}>
          {/* Inner Screen */}
          <div style={{
            flex: 1,
            background: "#FFFFFF",
            borderRadius: "7px 7px 0 0",
            padding: 5,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}>
            {/* App screen details */}
            <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
              <div style={{ width: 8, height: 8, borderRadius: 2, background: "var(--accent)" }} />
              <div style={{ width: 24, height: 3, background: "var(--ink-primary)", borderRadius: 1.5 }} />
            </div>
            <div style={{ height: 28, background: "#EDF3EE", borderRadius: 4, padding: 3, display: "flex", alignItems: "flex-end", gap: 2 }}>
              {[6, 12, 18, 10, 15, 20, 14].map((bar, i) => (
                <div key={i} style={{ flex: 1, height: bar, background: "var(--accent)", borderRadius: 1 }} />
              ))}
            </div>
            <div style={{ width: "70%", height: 3, background: "#E0E4E0", borderRadius: 1.5 }} />
          </div>
        </div>

        {/* Bottom Tag */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 2 }}>
          <span style={{ fontFamily: "var(--font-dm)", fontSize: 10, fontWeight: 700, color: "var(--ink-primary)" }}>Centered</span>
          <span style={{ fontSize: 8, fontWeight: 600, color: "var(--ink-muted)", background: "#E8ECE8", padding: "1px 5px", borderRadius: 4 }}>Standard</span>
        </div>
      </div>
    ),
  },
];

export default function Features() {
  const first = features[0];
  const rest = features.slice(1);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<{
    id: string;
    title: string;
    render: () => React.ReactNode;
  } | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedTemplate(null);
    };
    if (selectedTemplate) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedTemplate]);

  return (
    <section id="features" style={{ padding: isMobile ? "70px 0" : "100px 0", background: "var(--bg)", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 18 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: isMobile ? 0.2 : 0.3 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: isMobile ? 48 : 70 }}
        >
          <SectionBadge
            tag="What it does"
            icon={
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
              </svg>
            }
          />
          <h2 style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "clamp(28px, 4.5vw, 52px)",
            letterSpacing: -1.2,
            color: "var(--ink-primary)",
            lineHeight: 1.1,
            maxWidth: 560,
            margin: "0 auto 16px",
          }}>
            A specialist tool for serious makers
          </h2>
          <p style={{
            fontFamily: "var(--font-dm)",
            fontSize: isMobile ? 15 : 16,
            lineHeight: 1.6,
            color: "var(--ink-secondary)",
            maxWidth: 480,
            margin: "0 auto",
          }}>
            Not a dumbed-down Canva. Not an overbuilt design suite. Aperlo does one thing — makes your store screenshots exactly right.
          </p>
        </motion.div>
      </div>

      {/* ── Feature 01: Responsive Template Grid ── */}
      <div style={{ width: "100%", marginBottom: isMobile ? 80 : 120 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 14, marginBottom: 32 }}>
            <div>
              <div style={{ fontFamily: "var(--font-dm)", fontSize: 13, color: "var(--accent)", marginBottom: 6, letterSpacing: 1 }}>
                {first.number}
              </div>
              <h3 style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: "clamp(20px, 3vw, 34px)",
                letterSpacing: -0.8,
                color: "var(--ink-primary)",
                lineHeight: 1.15,
                marginBottom: 6,
              }}>
                {first.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-dm)",
                fontSize: 14.5,
                lineHeight: 1.55,
                color: "var(--ink-secondary)",
                maxWidth: 480,
              }}>
                {first.body}
              </p>
            </div>
          </div>

          {/* Responsive Template Grid: 3 columns on desktop, 2 on tablet, 1-2 on mobile */}
          <div
            className="templates-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
              gap: isMobile ? 18 : 24,
            }}
          >
            {templateCards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: isMobile ? 14 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.45 }}
                whileHover={!isMobile ? { y: -6, scale: 1.01, boxShadow: "0 20px 48px rgba(20,26,20,0.12)" } : {}}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedTemplate({
                  id: card.id,
                  title: card.id.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
                  render: card.render,
                })}
                style={{
                  height: isMobile ? 400 : 440,
                  background: "var(--surface)",
                  borderRadius: 18,
                  boxShadow: "0 4px 20px rgba(20,26,20,0.05)",
                  border: "1px solid var(--border-subtle)",
                  cursor: "pointer",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.25s ease",
                  position: "relative",
                }}
              >
                {card.render()}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Features 02–04: responsive 2-column or single column with in-view triggers ── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 70 : 120 }}>
          {rest.map((feat, idx) => (
            <div
              key={feat.number}
              className="feature-row"
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: isMobile ? 32 : 70,
                alignItems: "center",
              }}
            >
              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: isMobile ? 18 : 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: isMobile ? 0.2 : 0.3 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ order: isMobile ? 1 : idx % 2 === 0 ? 1 : 2 }}
              >
                <div style={{ fontFamily: "var(--font-dm)", fontSize: 13, color: "var(--accent)", marginBottom: 12, letterSpacing: 1 }}>
                  {feat.number}
                </div>
                <h3 style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  fontSize: "clamp(22px, 3vw, 34px)",
                  letterSpacing: -0.8,
                  color: "var(--ink-primary)",
                  lineHeight: 1.15,
                  marginBottom: 14,
                }}>
                  {feat.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: isMobile ? 15 : 16,
                  lineHeight: 1.65,
                  color: "var(--ink-secondary)",
                  marginBottom: 20,
                  maxWidth: 440,
                }}>
                  {feat.body}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {feat.tags.map((tag) => (
                    <span key={tag} style={{
                      fontFamily: "var(--font-dm)",
                      fontSize: 12,
                      color: "var(--ink-muted)",
                      background: "var(--surface)",
                      border: "1px solid var(--border-default)",
                      borderRadius: 6,
                      padding: "5px 10px",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Visual */}
              <motion.div
                className="feature-visual"
                initial={{ opacity: 0, y: isMobile ? 18 : 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: isMobile ? 0.2 : 0.3 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: isMobile ? 0.04 : 0.08 }}
                style={{
                  order: isMobile ? 2 : idx % 2 === 0 ? 2 : 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {feat.visual}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Interactive Lightbox Modal ── */}
      <AnimatePresence>
        {selectedTemplate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={() => setSelectedTemplate(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 999,
              background: "rgba(20, 26, 20, 0.7)",
              backdropFilter: "blur(10px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <motion.div
              initial={{ scale: 0.92, y: 16, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 16, opacity: 0 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "var(--surface)",
                borderRadius: 22,
                boxShadow: "0 24px 64px rgba(0,0,0,0.25)",
                border: "1px solid var(--border-subtle)",
                maxWidth: 660,
                width: "100%",
                maxHeight: "90vh",
                overflowY: "auto",
                padding: "clamp(20px, 4vw, 32px)",
                position: "relative",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: 24,
                alignItems: "center",
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedTemplate(null)}
                aria-label="Close template preview"
                style={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  border: "1px solid var(--border-subtle)",
                  background: "var(--bg)",
                  color: "var(--ink-primary)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 18,
                  lineHeight: 1,
                }}
              >
                ×
              </button>

              {/* Template Preview Card */}
              <div
                style={{
                  width: isMobile ? 210 : 240,
                  height: isMobile ? 370 : 420,
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 8px 28px rgba(20,26,20,0.1)",
                  border: "1px solid var(--border-subtle)",
                  flexShrink: 0,
                }}
              >
                {selectedTemplate.render()}
              </div>

              {/* Template Details */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14, flex: 1, textAlign: isMobile ? "center" : "left" }}>
                <div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "var(--accent-tint)", padding: "4px 12px", borderRadius: 99, marginBottom: 8 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
                    <span style={{ fontFamily: "var(--font-dm)", fontSize: 11.5, fontWeight: 600, color: "var(--accent)" }}>
                      Curated Preset
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontWeight: 800,
                      fontSize: "clamp(20px, 3vw, 26px)",
                      letterSpacing: -0.6,
                      color: "var(--ink-primary)",
                      marginBottom: 6,
                    }}
                  >
                    {selectedTemplate.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-dm)", fontSize: 13.5, lineHeight: 1.5, color: "var(--ink-secondary)", margin: 0 }}>
                    Pixel-perfect dimensions for Phone, 7&quot; Tablet, 10&quot; Tablet, iPhone 6.9&quot;, and iPad 13&quot;.
                  </p>
                </div>

                <div style={{ background: "var(--bg)", borderRadius: 12, padding: "12px 14px", border: "1px solid var(--border-subtle)" }}>
                  <div style={{ fontFamily: "var(--font-dm)", fontSize: 11.5, fontWeight: 600, color: "var(--ink-muted)", marginBottom: 6 }}>
                    Supported Resolutions
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: isMobile ? "center" : "flex-start" }}>
                    {["1080×1920", "1200×1920", "1600×2560", "1320×2868", "2064×2752"].map((res) => (
                      <span
                        key={res}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 10.5,
                          background: "var(--surface)",
                          border: "1px solid var(--border-default)",
                          padding: "2px 7px",
                          borderRadius: 4,
                          color: "var(--ink-primary)",
                        }}
                      >
                        {res}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 4 }}>
                  <a
                    href="#download"
                    onClick={() => setSelectedTemplate(null)}
                    style={{
                      background: "var(--accent)",
                      color: "white",
                      fontFamily: "var(--font-dm)",
                      fontWeight: 600,
                      fontSize: 13.5,
                      padding: "11px 18px",
                      borderRadius: 10,
                      textAlign: "center",
                      textDecoration: "none",
                      boxShadow: "0 3px 12px rgba(26,107,74,0.25)",
                    }}
                  >
                    Edit in Aperlo App
                  </a>
                  <button
                    onClick={() => setSelectedTemplate(null)}
                    style={{
                      background: "transparent",
                      border: "none",
                      fontFamily: "var(--font-dm)",
                      fontWeight: 500,
                      fontSize: 13,
                      color: "var(--ink-muted)",
                      cursor: "pointer",
                      padding: "4px",
                    }}
                  >
                    Back to Gallery
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
