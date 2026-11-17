const sections = [
  {
    title: "Writing",
    note: "Essays and longer pieces, when they're ready.",
  },
  {
    title: "Works",
    note: "Personal projects, experiments, and things I've built.",
  },
  {
    title: "Thoughts",
    note: "Shorter notes and half-formed ideas.",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-2xl flex-col justify-center px-6 py-24">
      <p className="text-sm uppercase tracking-[0.2em] text-muted">
        arturo.locsin.io
      </p>
      <h1 className="mt-4 font-serif text-5xl leading-tight sm:text-6xl">
        Arturo Locsin
      </h1>
      <p className="mt-6 max-w-md text-lg text-muted">
        A personal corner of the web for my own work, thoughts, and writing.
        It&apos;s quiet here for now. Things will show up soon.
      </p>

      <ul className="mt-14 divide-y divide-foreground/10 border-y border-foreground/10">
        {sections.map((section) => (
          <li
            key={section.title}
            className="flex items-baseline justify-between gap-4 py-5"
          >
            <div>
              <p className="font-serif text-2xl">{section.title}</p>
              <p className="mt-1 text-sm text-muted">{section.note}</p>
            </div>
            <span className="shrink-0 text-sm text-muted">Coming soon</span>
          </li>
        ))}
      </ul>

      <footer className="mt-16 flex flex-wrap items-baseline justify-between gap-4 text-xs text-muted">
        <span>© {new Date().getFullYear()} Arturo Locsin</span>
        <a
          href="https://locsin.io"
          className="text-accent underline-offset-4 hover:underline"
        >
          ← locsin.io
        </a>
      </footer>
    </main>
  );
}
