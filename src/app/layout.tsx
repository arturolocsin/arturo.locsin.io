import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource/jetbrains-mono/400.css";

import "./globals.css";
import { person, siteUrl } from "./site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: person.name,
  description: person.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: person.name,
    description: person.description,
    url: "/",
    siteName: person.name,
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: person.name,
    description: person.description,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f8f7f3",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
