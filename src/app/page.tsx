import Image from "next/image";

import { Icon } from "@/components/Icon";

import { links } from "./links";
import { person, siteUrl } from "./site";

/** Structured data (schema.org Person) describing Arturo to search engines. */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  url: `${siteUrl}/`,
  image: person.image,
  jobTitle: person.jobTitle,
  description: person.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: person.location.city,
    addressCountry: person.location.countryCode,
  },
  knowsAbout: person.topics,
  sameAs: links.filter((link) => link.isProfile).map((link) => link.href),
};

export default function Home() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      <script
        type="application/ld+json"
        // Escape "<" so the JSON can never close the script tag early.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 z-10 h-2.5 bg-bold" />
      <div aria-hidden="true" className="halftone" />

      <main className="relative flex min-h-dvh items-center px-7 py-20 sm:px-[clamp(28px,10vw,176px)] sm:py-[clamp(72px,9vw,128px)]">
        <div className="flex w-full max-w-xl flex-col">
          <Image
            src="/arturo.jpg"
            alt="Arturo Locsin, smiling"
            width={120}
            height={120}
            priority
            className="size-[120px] rounded-full bg-photo object-cover shadow-[0_0_0_5px_var(--background),0_0_0_6px_var(--line)]"
          />

          <div className="mt-10 flex items-center gap-3.5">
            <span aria-hidden="true" className="h-1.5 w-14 bg-bold" />
            <span className="font-mono text-[13px] text-muted">arturo.locsin.io</span>
          </div>

          <h1 className="mt-6 text-[clamp(2.25rem,4.5vw,3.25rem)] font-semibold leading-[1.15] tracking-[-0.02em]">
            Hi, I’m Arturo.
          </h1>

          <div className="mt-5 flex flex-col gap-4 text-lg leading-[1.7] text-muted">
            <p>
              I’ve spent over 20 years working in software, from engineering and
              product management to leading teams. Most recently, I spent six years
              building and running a tech lab in Ho Chi Minh City that grew to around
              60 people. Now I’m building my own thing.
            </p>
            <p>
              I play basketball any chance I get. A good night in means a pizza, a
              cold drink, and a film I can get lost in. I also have a soft spot for
              pretty much anything that takes me back to the ’90s. My favorite
              moments are the ones when there’s nothing left on the calendar and I
              can just hang out with my kids.
            </p>
          </div>

          <nav aria-label="Find me online" className="mt-10">
            <ul className="flex flex-col items-start text-[17px] font-medium">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    rel={link.isProfile ? "me" : undefined}
                    className="-mx-2.5 inline-flex min-h-11 items-center gap-3 rounded-md px-2.5 text-link transition-colors hover:bg-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-link"
                  >
                    <Icon name={link.icon} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </main>
    </div>
  );
}
