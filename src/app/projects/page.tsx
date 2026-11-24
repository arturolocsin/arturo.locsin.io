import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { displayDomain, projects } from "./projects";

const shareImageAlt =
  "Arturo Locsin — Technology Site Leadership, Product & Engineering Management, Ho Chi Minh City";

const description =
  "Things Arturo Locsin is building on his own time: Hyperlocali, a local guide for new and international residents, and Is This a Travel?, a game for basketball fans.";

export const metadata: Metadata = {
  title: "Projects — Arturo Locsin",
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects — Arturo Locsin",
    description,
    url: "/projects",
    // Page-level openGraph replaces the site-wide one, so point at the shared image again.
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: shareImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    images: [{ url: "/twitter-image.png", alt: shareImageAlt }],
  },
};

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-link";

export default function Projects() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 z-10 h-2.5 bg-bold" />
      <div aria-hidden="true" className="halftone" />

      <main className="relative mx-auto max-w-[1180px] px-7 py-20 sm:px-[clamp(28px,6vw,80px)] sm:py-[clamp(72px,9vw,120px)]">
        <header className="flex flex-wrap items-end justify-between gap-x-16 gap-y-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3.5">
              <span aria-hidden="true" className="h-1.5 w-14 bg-bold" />
              <span className="font-mono text-[13px] text-muted">arturo.locsin.io/projects</span>
            </div>
            <h1 className="mt-6 text-[clamp(2.25rem,4.5vw,3.25rem)] font-semibold leading-[1.15] tracking-[-0.02em]">
              Projects
            </h1>
            <p className="mt-5 text-lg leading-[1.7] text-muted">
              A couple of things I’m building on my own time. Both started as small
              problems I kept running into, and both are still growing.
            </p>
          </div>
          <Link
            href="/"
            className={`-mx-2.5 inline-flex min-h-11 items-center rounded-md bg-background/85 px-2.5 text-[17px] font-medium text-link transition-colors hover:bg-hover ${focusRing}`}
          >
            ← Back home
          </Link>
        </header>

        <div aria-hidden="true" className="mt-14 mb-12 h-px bg-foreground/15 sm:mt-16 sm:mb-14" />

        <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-x-12 gap-y-16">
          {projects.map((project, index) => (
            <li key={project.href}>
              <a
                href={project.href}
                className={`group flex flex-col rounded-[10px] ${focusRing}`}
              >
                <div className="overflow-hidden rounded-[10px] border border-foreground/15 bg-white transition-colors group-hover:border-link">
                  <Image
                    src={project.screenshot.src}
                    alt={project.screenshot.alt}
                    width={project.screenshot.width}
                    height={project.screenshot.height}
                    sizes="(min-width: 1180px) 520px, (min-width: 768px) 45vw, 100vw"
                    priority={index === 0}
                    className="block aspect-[16/10] w-full object-cover object-top"
                  />
                </div>
                <div className="mt-7 flex items-baseline justify-between gap-4">
                  <h2 className="text-[28px] font-semibold leading-[1.2] tracking-[-0.015em]">
                    {project.name}
                  </h2>
                  <span className="shrink-0 font-mono text-[12px] uppercase tracking-[0.04em] text-muted">
                    {project.tag}
                  </span>
                </div>
                <p className="mt-3 text-[17px] leading-[1.7] text-muted">{project.description}</p>
                <span className="-mx-2.5 mt-4 inline-flex min-h-11 items-center gap-2 self-start rounded-md px-2.5 text-[17px] font-medium text-link transition-colors group-hover:bg-hover">
                  {displayDomain(project.href)}
                  <span aria-hidden="true">↗</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
