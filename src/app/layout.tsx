import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "LexUID to BigInt Converter | Convert Between LexUID and BigInt Formats",
  description:
    "A powerful tool to convert between LexUID and BigInt formats. Fast, accurate, and easy to use with real-time conversion and error handling.",
  keywords: [
    "lexuid",
    "bigint",
    "converter",
    "conversion tool",
    "typescript",
    "nextjs",
    "web application",
  ],
  authors: [{ name: "Alex Little", url: "https://github.com/alex1092" }],
  openGraph: {
    title: "LexUID to BigInt Converter",
    description:
      "Convert between LexUID and BigInt formats with ease. Real-time conversion with error handling.",
    type: "website",
    locale: "en_US",
    url: "https://lexuid-to-bigint.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "LexUID to BigInt Converter",
    description:
      "Convert between LexUID and BigInt formats with ease. Real-time conversion with error handling.",
    creator: "@alex1092",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://lexuid-to-bigint.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
