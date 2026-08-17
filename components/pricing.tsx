"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "forever",
    tagline: "Everything you need to start shipping",
    color: "var(--surface)",
    accent: "var(--ink-primary)",
    border: "var(--border-default)",
    isPro: false,
    features: [
      { text: "20 templates included", included: true },
      { text: "Unlimited screenshots", included: true },
      { text: "3 collections", included: true },
      { text: "PNG & JPG export", included: true },
      { text: "App Store iOS sizes", included: true },
      { text: "Google Play sizes", included: false },
      { text: "WEBP export", included: false },
      { text: "Batch export (ZIP)", included: false },
      { text: "Custom export sizes", included: false },
      { text: "PRO templates (60+)", included: false },
    ],
    cta: "Download free",
    ctaBg: "transparent",
    ctaColor: "var(--ink-primary)",
    ctaBorder: "var(--border-default)",
  },
  {
    id: "pro",
    name: "PRO",
    price: "$4.99",
    period: "per month",
    tagline: "For developers who are serious about growth",
    color: "var(--ink-primary)",
    accent: "var(--accent)",
    border: "var(--accent)",
    isPro: true,
    features: [
      { text: "80+ premium templates", included: true },
      { text: "Unlimited screenshots", included: true },
      { text: "Unlimited collections", included: true },
      { text: "PNG, JPG & WEBP export", included: true },
      { text: "App Store iOS sizes", included: true },
      { text: "Google Play sizes", included: true },
      { text: "WEBP export", included: true },
      { text: "Batch export (ZIP)", included: true },
      { text: "Custom export sizes", included: true },
      { text: "PRO templates (60+)", included: true },
    ],
    cta: "Start with PRO",
    ctaBg: "var(--accent)",
    ctaColor: "white",
    ctaBorder: "var(--accent)",
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" style={{ padding: "120px 0", background: "var(--bg)" }}>
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <div style={{
            display: "inline-block",
            background: "var(--accent-tint)",
            border: "1px solid rgba(26,107,74,0.2)",
            borderRadius: 999,
            padding: "6px 16px",
            marginBottom: 20,
          }}>
            <span style={{ fontFamily: "var(--font-dm)", fontWeight: 500, fontSize: 13, color: "var(--accent)" }}>Simple pricing</span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "clamp(28px, 4vw, 48px)",
            letterSpacing: -1,
            color: "var(--ink-primary)",
            lineHeight: 1.15,
            marginBottom: 24,
          }}>
            Start free. Upgrade when ready.
          </h2>

          {/* Billing toggle */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <span style={{ fontFamily: "var(--font-dm)", fontSize: 14, color: annual ? "var(--ink-muted)" : "var(--ink-primary)", fontWeight: annual ? 400 : 600 }}>Monthly</span>
            <motion.button
              onClick={() => setAnnual(!annual)}
              style={{
                width: 48,
                height: 26,
                borderRadius: 13,
                background: annual ? "var(--accent)" : "var(--border-default)",
                border: "none",
                cursor: "pointer",
                padding: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: annual ? "flex-end" : "flex-start",
                transition: "background 0.3s",
              }}
            >
              <motion.div
                layout
                style={{ width: 20, height: 20, borderRadius: "50%", background: "white" }}
              />
            </motion.button>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontFamily: "var(--font-dm)", fontSize: 14, color: annual ? "var(--ink-primary)" : "var(--ink-muted)", fontWeight: annual ? 600 : 400 }}>Annual</span>
              {annual && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    fontFamily: "var(--font-dm)",
                    fontWeight: 600,
                    fontSize: 11,
                    color: "var(--accent)",
                    background: "var(--accent-tint)",
                    padding: "2px 8px",
                    borderRadius: 999,
                    border: "1px solid rgba(26,107,74,0.2)",
                  }}
                >
                  Save 33%
                </motion.span>
              )}
            </div>
          </div>
        </motion.div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignItems: "start" }}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={plan.isPro ? { y: -6 } : { y: -2 }}
              style={{
                background: plan.color,
                borderRadius: 20,
                padding: "40px 36px",
                border: `1.5px solid ${plan.border}`,
                boxShadow: plan.isPro ? "0 24px 80px rgba(26,107,74,0.3)" : "0 8px 32px rgba(20,26,20,0.08)",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              {/* Glow for PRO */}
              {plan.isPro && (
                <div style={{
                  position: "absolute",
                  top: -60,
                  right: -60,
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  background: "rgba(26,107,74,0.35)",
                  filter: "blur(60px)",
                  pointerEvents: "none",
                }} />
              )}

              {/* PRO badge */}
              {plan.isPro && (
                <div style={{
                  position: "absolute",
                  top: 24,
                  right: 24,
                  background: "var(--accent)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  padding: "4px 12px",
                  borderRadius: 999,
                }}>
                  <span style={{ fontFamily: "var(--font-dm)", fontWeight: 700, fontSize: 11, color: "white", letterSpacing: 0.5 }}>PRO</span>
                </div>
              )}

              {/* Plan name */}
              <p style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: 18,
                color: plan.isPro ? "white" : "var(--ink-primary)",
                marginBottom: 8,
              }}>
                {plan.name}
              </p>

              {/* Price */}
              <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 6 }}>
                <span style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: 48,
                  lineHeight: 1,
                  letterSpacing: -2,
                  color: plan.isPro ? "white" : "var(--ink-primary)",
                }}>
                  {plan.isPro && annual ? "$3.29" : plan.price}
                </span>
                <span style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: 14,
                  color: plan.isPro ? "rgba(255,255,255,0.6)" : "var(--ink-muted)",
                  paddingBottom: 8,
                }}>
                  /{plan.period}
                </span>
              </div>

              <p style={{
                fontFamily: "var(--font-dm)",
                fontSize: 14,
                color: plan.isPro ? "rgba(255,255,255,0.7)" : "var(--ink-secondary)",
                marginBottom: 32,
                lineHeight: 1.5,
              }}>
                {plan.tagline}
              </p>

              {/* Divider */}
              <div style={{ height: 1, background: plan.isPro ? "rgba(255,255,255,0.12)" : "var(--border-subtle)", marginBottom: 28 }} />

              {/* Features */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
                {plan.features.map((feat) => (
                  <div key={feat.text} style={{ display: "flex", alignItems: "center", gap: 10, opacity: feat.included ? 1 : 0.4 }}>
                    <div style={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      background: feat.included ? (plan.isPro ? "rgba(255,255,255,0.15)" : "var(--accent-tint)") : "transparent",
                      border: feat.included ? "none" : `1px solid ${plan.isPro ? "rgba(255,255,255,0.2)" : "var(--border-default)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      {feat.included && (
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={plan.isPro ? "white" : "var(--accent)"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                    <span style={{
                      fontFamily: "var(--font-dm)",
                      fontSize: 14,
                      color: plan.isPro ? (feat.included ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.35)") : (feat.included ? "var(--ink-primary)" : "var(--ink-disabled)"),
                      textDecoration: !feat.included ? "line-through" : "none",
                    }}>
                      {feat.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "14px 0",
                  borderRadius: 12,
                  background: plan.ctaBg,
                  border: `1.5px solid ${plan.ctaBorder}`,
                  color: plan.ctaColor,
                  fontFamily: "var(--font-dm)",
                  fontWeight: 600,
                  fontSize: 15,
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Fine print */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{
            textAlign: "center",
            fontFamily: "var(--font-dm)",
            fontSize: 13,
            color: "var(--ink-muted)",
            marginTop: 24,
            lineHeight: 1.6,
          }}
        >
          No credit card required for free plan. Cancel PRO anytime. All screenshots and collections remain yours.
        </motion.p>
      </div>
    </section>
  );
}
