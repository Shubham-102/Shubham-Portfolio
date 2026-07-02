import type { Metadata } from "next";
import { Anton, Oswald } from "next/font/google";
import Script from "next/script";
import { personal } from "@/lib/data";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: "400",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${personal.name} — ${personal.roles[0]}`,
  description: personal.tagline,
  openGraph: {
    title: `${personal.name} — Portfolio`,
    description: personal.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${anton.variable} ${oswald.variable}`}>
      <body className="font-sans bg-base text-ink antialiased">
        <SmoothScroll />
        {children}
        <Script
          src="https://scripts.simpleanalyticscdn.com/latest.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
