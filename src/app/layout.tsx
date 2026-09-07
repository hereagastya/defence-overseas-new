import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Defence Overseas | Study Abroad, Guided Right",
  description:
    "Defence Overseas helps students navigate studying abroad — from choosing the right university and programme to applications, admissions and visa guidance.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} scroll-smooth motion-reduce:scroll-auto`}
    >
      <body className="bg-cream font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
