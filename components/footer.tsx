"use client";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: "var(--surface)",
      borderTop: "1px solid var(--border-subtle)",
      padding: "48px 24px 32px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Top: brand + links */}
        <div className="footer-grid">
          {/* Brand */}
          <div style={{ maxWidth: 300 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <Image
                src="/app_icon.png"
                alt="Aperlo"
                width={32}
                height={32}
                style={{ borderRadius: 8 }}
              />
              <span style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 18, color: "var(--ink-primary)", letterSpacing: -0.3 }}>
                Aperlo
              </span>
            </div>
            <p style={{ fontFamily: "var(--font-dm)", fontSize: 14, color: "var(--ink-muted)", lineHeight: 1.65 }}>
              The screenshot tool for App developers. Export for App Store and Google Play in one tap.
            </p>
          </div>

          {/* Links */}
          <div className="footer-links">
            {/* Product */}
            <div>
              <p style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 11, color: "var(--ink-muted)", textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 14 }}>
                Product
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["Features", "Templates"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    style={{ fontFamily: "var(--font-dm)", fontSize: 14, color: "var(--ink-secondary)", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-secondary)")}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div>
              <p style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 11, color: "var(--ink-muted)", textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 14 }}>
                Legal
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["Privacy policy", "Terms of service"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={{ fontFamily: "var(--font-dm)", fontSize: 14, color: "var(--ink-secondary)", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-secondary)")}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <p style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 11, color: "var(--ink-muted)", textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 14 }}>
                Connect
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {["GitHub", "Email us"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    style={{ fontFamily: "var(--font-dm)", fontSize: 14, color: "var(--ink-secondary)", textDecoration: "none", transition: "color 0.15s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-secondary)")}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: "1px solid var(--border-subtle)",
          paddingTop: 24,
          marginTop: 48,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <span style={{ fontFamily: "var(--font-dm)", fontSize: 13, color: "var(--ink-muted)" }}>
            © {currentYear} Aperlo by CoCode Studio
          </span>
        </div>

      </div>
    </footer>
  );
}
