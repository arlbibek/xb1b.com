import "../styles/globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Bibek Aryal",
  description:
    "Bibek Aryal — Cybersecurity, GRC, ISO/IEC 27001, Cloud and DevOps.",
  metadataBase: new URL("https://xb1b.com"),
  manifest: "/manifest.json",
  authors: [{ name: "Bibek Aryal" }],
  keywords: ["Bibek", "Aryal", "xb1b.com"],
  openGraph: {
    siteName: "Bibek Aryal",
    type: "website",
    url: "https://xb1b.com",
    title: "Bibek Aryal",
    description:
      "Bibek Aryal — Cybersecurity, GRC, ISO/IEC 27001, Cloud and DevOps.",
    images: [{ url: "/images/og.png", width: 1200, height: 630, alt: "Bibek Aryal" }],
  },
  icons: {
    icon: [
      { url: "/images/favicon.ico", sizes: "48x48" },
      { url: "/images/favicon.png", type: "image/png", sizes: "96x96" },
    ],
    apple: "/images/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
