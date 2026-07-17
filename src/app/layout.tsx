import type { Metadata, Viewport } from "next";
import "./globals.css";
import CursorGlow from "@/components/effects/CursorGlow";
import ScrollProgress from "@/components/layout/ScrollProgress";

export const viewport: Viewport = {
  themeColor: "#050F1F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Bharath Matha Degree College | Koppa, Mysuru — Empowering Minds. Building Futures.",
  description:
    "Bharath Matha Degree College, Koppa, Periyapatna Taluk, Mysuru District, Karnataka. Affiliated to University of Mysore. Offering B.Com, BBA, and BA programs. Established 2011.",
  keywords:
    "Bharath Matha Degree College, BMDC, Koppa, Mysuru, Periyapatna, Karnataka, B.Com, BBA, BA, University of Mysore, degree college",
  openGraph: {
    title: "Bharath Matha Degree College | Koppa, Mysuru",
    description:
      "Premium degree education in Karnataka. Affiliated to University of Mysore. Established 2011.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}

