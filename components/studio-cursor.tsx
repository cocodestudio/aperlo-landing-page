"use client";
import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export default function StudioCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isCanvas, setIsCanvas] = useState(false);

  // Position motion values
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Spring physics for outer lens (fluid, weightless lag)
  const lensSpring = { damping: 28, stiffness: 320, mass: 0.3 };
  const smoothLensX = useSpring(mouseX, lensSpring);
  const smoothLensY = useSpring(mouseY, lensSpring);

  // Spring physics for ambient glow (gentle, atmospheric trailing)
  const glowSpring = { damping: 45, stiffness: 140, mass: 0.8 };
  const smoothGlowX = useSpring(mouseX, glowSpring);
  const smoothGlowY = useSpring(mouseY, glowSpring);

  // Spring physics for center pinpoint (near-instantaneous precision)
  const dotSpring = { damping: 35, stiffness: 700, mass: 0.1 };
  const smoothDotX = useSpring(mouseX, dotSpring);
  const smoothDotY = useSpring(mouseY, dotSpring);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Disable on touch / mobile devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, input, textarea, [role='button'], .nav-cta, select, .cursor-pointer");
      const canvasTarget = target.closest(".template-grid, .feature-visual, [data-cursor='canvas']");

      setIsHovered(!!interactive);
      setIsCanvas(!!canvasTarget && !interactive);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 99999,
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      {/* ── Layer 1: Ambient Studio Glow (Atmospheric trailing spotlight) ── */}
      <motion.div
        style={{
          position: "absolute",
          x: smoothGlowX,
          y: smoothGlowY,
          translateX: "-50%",
          translateY: "-50%",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26, 107, 74, 0.08) 0%, rgba(26, 107, 74, 0.02) 45%, transparent 70%)",
          filter: "blur(24px)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* ── Layer 2: Precision Studio Glass Lens (Fluid interactive ring) ── */}
      <motion.div
        style={{
          position: "absolute",
          x: smoothLensX,
          y: smoothLensY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: isHovered ? 44 : isCanvas ? 38 : 28,
            height: isHovered ? 44 : isCanvas ? 38 : 28,
            scale: isClicking ? 0.76 : 1,
            borderColor: isHovered
              ? "rgba(26, 107, 74, 0.65)"
              : isCanvas
              ? "rgba(26, 107, 74, 0.45)"
              : "rgba(26, 107, 74, 0.3)",
            backgroundColor: isHovered
              ? "rgba(26, 107, 74, 0.06)"
              : "rgba(255, 255, 255, 0.25)",
            backdropFilter: isHovered ? "blur(4px)" : "blur(1.5px)",
          }}
          transition={{
            type: "spring",
            stiffness: 420,
            damping: 26,
            mass: 0.25,
          }}
          style={{
            position: "relative",
            borderRadius: "50%",
            border: "1.2px solid",
            boxShadow: isHovered
              ? "0 4px 20px rgba(26, 107, 74, 0.18), inset 0 0 12px rgba(26, 107, 74, 0.06)"
              : "0 2px 10px rgba(20, 26, 20, 0.04)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Micro crosshair ticks on hover */}
          {isHovered && (
            <>
              {/* Top tick */}
              <span style={{ position: "absolute", top: -3, left: "50%", transform: "translateX(-50%)", width: 1.5, height: 3.5, background: "var(--accent)", borderRadius: 1 }} />
              {/* Bottom tick */}
              <span style={{ position: "absolute", bottom: -3, left: "50%", transform: "translateX(-50%)", width: 1.5, height: 3.5, background: "var(--accent)", borderRadius: 1 }} />
              {/* Left tick */}
              <span style={{ position: "absolute", left: -3, top: "50%", transform: "translateY(-50%)", width: 3.5, height: 1.5, background: "var(--accent)", borderRadius: 1 }} />
              {/* Right tick */}
              <span style={{ position: "absolute", right: -3, top: "50%", transform: "translateY(-50%)", width: 3.5, height: 1.5, background: "var(--accent)", borderRadius: 1 }} />
            </>
          )}

          {/* Shutter Click Ripple Effect */}
          <AnimatePresence>
            {isClicking && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0.8 }}
                animate={{ scale: 2.4, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  border: "1px solid var(--accent)",
                  background: "rgba(26, 107, 74, 0.15)",
                }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* ── Layer 3: Pinpoint Center Laser (Instant precision anchor) ── */}
      <motion.div
        style={{
          position: "absolute",
          x: smoothDotX,
          y: smoothDotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            scale: isHovered ? 0 : isClicking ? 1.4 : 1,
            opacity: isHovered ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
          style={{
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: "var(--accent)",
            boxShadow: "0 0 6px rgba(26, 107, 74, 0.7)",
          }}
        />
      </motion.div>
    </div>
  );
}
