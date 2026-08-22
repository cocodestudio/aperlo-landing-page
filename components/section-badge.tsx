"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionBadgeProps {
  tag?: string;
  label?: string;
  icon?: ReactNode;
  align?: "center" | "left" | "right";
  className?: string;
}

export default function SectionBadge({
  tag,
  label,
  icon,
  className = "",
}: SectionBadgeProps) {
  const displayText = tag || label || "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -2, scale: 1.03 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "5px 12px 5px 7px",
        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(245, 247, 245, 0.75) 100%)",
        border: "1px solid rgba(26, 107, 74, 0.2)",
        borderRadius: 8,
        boxShadow: "0 2px 6px rgba(20, 26, 20, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(12px)",
        cursor: "default",
        marginBottom: 20,
      }}
    >
      {/* Indicator icon / pulse node */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 20,
        height: 20,
        borderRadius: 5,
        background: "var(--accent-tint)",
        border: "1px solid rgba(26, 107, 74, 0.16)",
        color: "var(--accent)",
        position: "relative",
        flexShrink: 0,
      }}>
        {icon ? (
          icon
        ) : (
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <motion.span
              animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "var(--accent)",
              }}
            />
            <span style={{
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: "var(--accent)",
              zIndex: 1,
            }} />
          </div>
        )}
      </div>

      {/* Badge Tag Text */}
      {displayText && (
        <span style={{
          fontFamily: "var(--font-dm)",
          fontWeight: 700,
          fontSize: 11,
          letterSpacing: 1.1,
          color: "var(--accent)",
          textTransform: "uppercase",
        }}>
          {displayText}
        </span>
      )}
    </motion.div>
  );
}
