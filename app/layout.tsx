import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aperlo.cocodestudio.com"),
  title: {
    default: "Aperlo — Screenshot it. Ship it.",
    template: "%s | Aperlo",
  },
  description:
    "The Play Store screenshot maker for solo Android developers. Beautiful templates, precise editor, perfect exports.",
  keywords: ["play store screenshots", "screenshot maker", "android app marketing", "indie developer tools", "flutter app", "ios screenshots", "app store screenshots", "app marketing"],
  authors: [{ name: "CoCode Studio" }],
  creator: "CoCode Studio",
  publisher: "CoCode Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Aperlo — Screenshot it. Ship it.",
    description: "The Play Store & App Store screenshot maker for solo developers and indie makers.",
    url: "https://aperlo.cocodestudio.com",
    siteName: "Aperlo",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aperlo — Screenshot it. Ship it.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aperlo — Screenshot it. Ship it.",
    description: "The Play Store & App Store screenshot maker for solo developers and indie makers.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://aperlo.cocodestudio.com",
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
