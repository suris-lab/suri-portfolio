import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Suri Slai | Portfolio",
  description:
    "A personal portfolio for Suri Slai, focused on product thinking, systems, and digital delivery.",
  openGraph: {
    title: "Suri Slai | Portfolio",
    description:
      "Product-minded builder focused on practical digital products, systems, and outcomes.",
    images: [
      {
        url: "/hero-workspace.png",
        width: 1536,
        height: 1024,
        alt: "Abstract dark workspace visual"
      }
    ]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
