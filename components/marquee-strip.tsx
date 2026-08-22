"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const itemsRow1 = [
  "Screenshot it. Ship it.",
  "No bloat. Just precision.",
  "Built for Android makers.",
  "From canvas to Play Store.",
  "Templates that earn their place.",
  "80+ Curated Layouts.",
  "iPhone & Android Dimensions in One Tap.",
];

const itemsRow2 = [
  "50-step undo history",
  "Lossless PNG & 4K JPG Export",
  "Pixel-precise layers panel",
  "No subscription lock-in",
  "Crafted for indie developers",
  "Play Store compliance guaranteed",
];

export default function MarqueeStrip() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const tween1Ref = useRef<gsap.core.Tween | null>(null);
  const tween2Ref = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!row1Ref.current || !row2Ref.current) return;

    // Row 1: Leftward infinite flow
    tween1Ref.current = gsap.to(row1Ref.current, {
      xPercent: -50,
      duration: 26,
      ease: "none",
      repeat: -1,
    });

    // Row 2: Rightward reverse flow
    gsap.set(row2Ref.current, { xPercent: -50 });
    tween2Ref.current = gsap.to(row2Ref.current, {
      xPercent: 0,
      duration: 32,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween1Ref.current?.kill();
      tween2Ref.current?.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    if (tween1Ref.current && tween2Ref.current) {
      gsap.to(tween1Ref.current, { timeScale: 0.25, duration: 0.6 });
      gsap.to(tween2Ref.current, { timeScale: 0.25, duration: 0.6 });
    }
  };

  const handleMouseLeave = () => {
    if (tween1Ref.current && tween2Ref.current) {
      gsap.to(tween1Ref.current, { timeScale: 1, duration: 0.6 });
      gsap.to(tween2Ref.current, { timeScale: 1, duration: 0.6 });
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: "100%",
        overflow: "hidden",
        background: "var(--ink-primary)",
        padding: "16px 0",
        position: "relative",
        zIndex: 3,
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        cursor: "default",
      }}
    >
      {/* Row 1 */}
      <div
        ref={row1Ref}
        style={{
          display: "flex",
          width: "max-content",
          willChange: "transform",
        }}
      >
        {[...itemsRow1, ...itemsRow1].map((item, i) => (
          <div key={`r1-${i}`} style={{ display: "flex", alignItems: "center", gap: 24, paddingRight: 24, flexShrink: 0 }}>
            <span
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: 14.5,
                color: "var(--accent-on)",
                whiteSpace: "nowrap",
                letterSpacing: 0.3,
              }}
            >
              {item}
            </span>
            <svg width="6" height="6" viewBox="0 0 6 6">
              <circle cx="3" cy="3" r="3" fill="var(--accent)" />
            </svg>
          </div>
        ))}
      </div>

      {/* Row 2: Subtle secondary tape */}
      <div
        ref={row2Ref}
        style={{
          display: "flex",
          width: "max-content",
          willChange: "transform",
          opacity: 0.7,
        }}
      >
        {[...itemsRow2, ...itemsRow2].map((item, i) => (
          <div key={`r2-${i}`} style={{ display: "flex", alignItems: "center", gap: 20, paddingRight: 20, flexShrink: 0 }}>
            <span
              style={{
                fontFamily: "var(--font-dm)",
                fontWeight: 500,
                fontSize: 12.5,
                color: "rgba(255,255,255,0.75)",
                whiteSpace: "nowrap",
                letterSpacing: 0.4,
                textTransform: "uppercase",
              }}
            >
              {item}
            </span>
            <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#4ADE80" }} />
          </div>
        ))}
      </div>
    </div>
  );
}
