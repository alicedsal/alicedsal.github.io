import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CursorTrail from "@/components/CursorTrail";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description = "cs student at unc-chapel hill, minor in education.";

export const metadata: Metadata = {
  title: "alice lourenco",
  description: `alice lourenco: ${description}`,
  openGraph: {
    title: "alice lourenco",
    description,
    url: "https://alicedsal.github.io/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <CursorTrail />
        {children}
      </body>
    </html>
  );
}
