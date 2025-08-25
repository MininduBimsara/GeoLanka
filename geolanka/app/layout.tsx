import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GeoLankaNavbar from "@/components/Navbar";
import GeoLankaFooter from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

// Optimized font loading - only Inter with font-display: swap
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Prevents invisible text during font swap
  preload: true,
  fallback: ["system-ui", "arial"], // System fallbacks
  weight: ["300", "400", "500", "600", "700"], // Only weights used
});

export const metadata: Metadata = {
  title: "GeoLanka - Precision Mapping for Sri Lanka",
  description:
    "Mapping the future of Sri Lanka, one location at a time. Advanced geo-mapping solutions with AI-powered analysis and satellite integration.",
  keywords:
    "Sri Lanka mapping, GIS, geospatial technology, satellite mapping, geographic data",
  authors: [{ name: "GeoLanka Team" }],
  openGraph: {
    title: "GeoLanka - Precision Mapping for Sri Lanka",
    description: "Advanced geo-mapping solutions for Sri Lankan excellence",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          {/* Navbar will appear on all pages */}
          <GeoLankaNavbar />

          {/* Main content with proper spacing for fixed navbar */}
          <div className="pt-20">{children}</div>

          {/* Footer will appear on all pages */}
          <GeoLankaFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
