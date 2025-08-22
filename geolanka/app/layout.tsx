// geolanka/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import GeoLankaNavbar from "@/components/Navbar";
import GeoLankaFooter from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Add the fonts from your design system
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
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
        {/* Add Google Fonts for your design system */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${playfairDisplay.variable} font-sans antialiased`}
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
