import type { Metadata } from "next";
import Link from "next/link";

const shareImageAlt =
  "Arturo Locsin — Technology Site Leadership, Product & Engineering Management, Ho Chi Minh City";

export const metadata: Metadata = {
  title: "Projects — Arturo Locsin",
  description: "Projects by Arturo Locsin. Coming soon.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects — Arturo Locsin",
    description: "Projects by Arturo Locsin. Coming soon.",
    url: "/projects",
    // Page-level openGraph replaces the site-wide one, so point at the shared image again.
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: shareImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    images: [{ url: "/twitter-image.png", alt: shareImageAlt }],
  },
};

export default function Projects() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 z-10 h-2.5 bg-bold" />
      <div aria-hidden="true" className="halftone" />

      <main className="relative flex min-h-dvh items-center px-7 py-20 sm:px-[clamp(28px,10vw,176px)]">
        <div className="flex w-full max-w-xl flex-col">
          <div className="flex items-center gap-3.5">
            <span aria-hidden="true" className="h-1.5 w-14 bg-bold" />
            <span className="font-mono text-[13px] text-muted">arturo.locsin.io/projects</span>
          </div>
          <h1 className="mt-6 text-[clamp(2.25rem,4.5vw,3.25rem)] font-semibold leading-[1.15] tracking-[-0.02em]">
            Projects
          </h1>
          <p className="mt-5 text-lg leading-[1.7] text-muted">
            I’m putting this page together. Check back soon.
          </p>
          <Link
            href="/"
            className="-mx-2.5 mt-10 inline-flex min-h-11 items-center self-start rounded-md px-2.5 text-[17px] font-medium text-link transition-colors hover:bg-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
          >
            ← Back home
          </Link>
        </div>
      </main>
    </div>
  );
}
