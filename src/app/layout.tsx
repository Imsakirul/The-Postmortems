import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif, EB_Garamond, Cinzel } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
});

const ibmPlexSerif = IBM_Plex_Serif({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-serif",
});

const ebGaramond = EB_Garamond({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-eb-garamond",
});

const cinzel = Cinzel({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "The Postmortems | Investigate. Verify. Reveal.",
  description: "India's Independent Investigative Journalism Platform",
  applicationName: "The Postmortems",
  appleWebApp: {
    title: "The Postmortems",
  },
  openGraph: {
    siteName: "The Postmortems",
    title: "The Postmortems",
  },
  twitter: {
    title: "The Postmortems",
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "The Postmortems",
      "url": "https://www.thepostmortems.in",
      "logo": "https://www.thepostmortems.in/favicon.png"
    },
    {
      "@type": "WebSite",
      "name": "The Postmortems",
      "alternateName": "The Postmortems",
      "url": "https://www.thepostmortems.in"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${ibmPlexSerif.variable} ${ebGaramond.variable} ${cinzel.variable}`}>
      <body style={{ fontFamily: "var(--font-eb-garamond), Georgia, 'Times New Roman', serif" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

