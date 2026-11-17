import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arturo.locsin.io"),
  title: "Arturo Locsin",
  description: "Arturo Locsin's personal site: works, thoughts, and writing.",
  openGraph: {
    title: "Arturo Locsin",
    description: "Works, thoughts, and writing.",
    url: "https://arturo.locsin.io",
    siteName: "Arturo Locsin",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${fraunces.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
