import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aperlo.app"),
  title: "Aperlo — Screenshot it. Ship it.",
  description:
    "The Play Store screenshot maker for solo Android developers. Beautiful templates, precise editor, perfect exports.",
  keywords: ["play store screenshots", "screenshot maker", "android app marketing", "indie developer tools", "flutter app"],
  openGraph: {
    title: "Aperlo — Screenshot it. Ship it.",
    description: "The premium App Store screenshot maker for solo developers and indie makers.",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aperlo — Screenshot it. Ship it.",
    description: "The premium App Store screenshot maker for solo developers and indie makers.",
  },
};

import StudioCursor from "@/components/studio-cursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Syne+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <StudioCursor />
        {children}
      </body>
    </html>
  );
}
