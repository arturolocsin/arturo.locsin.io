export type Project = {
  name: string;
  /** Full public URL of the project. */
  href: string;
  /** Short mono label beside the name, e.g. a status or audience. */
  tag: string;
  description: string;
  screenshot: {
    /** Path under /public. Replace the file to update the screenshot. */
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

/** Projects page entries, in display order. Add, remove or reorder here. */
export const projects: Project[] = [
  {
    name: "Hyperlocali",
    href: "https://hyperlocali.com",
    tag: "Open beta",
    description:
      "A local guide for new and international residents, starting with Vinhomes Grand Park in Ho Chi Minh City. It gathers the recommendations scattered across Google Maps, Facebook groups and group chats, with quick ways to call, message, book or get there.",
    screenshot: {
      src: "/projects/hyperlocali.jpg",
      alt: "The Hyperlocali homepage: “Navigate local life without the extra steps”, with a phone showing local listings",
      width: 800,
      height: 500,
    },
  },
  {
    name: "Is This a Travel?",
    href: "https://isthisatravel.com",
    tag: "Basketball",
    description:
      "Watch the play, make the call. A new clip every day: vote travel or clean, see how everyone else ruled, and argue your case. I play any chance I get, and nothing starts a debate faster than a questionable gather step.",
    screenshot: {
      src: "/projects/isthisatravel.jpg",
      alt: "The Is This a Travel? homepage: today’s Play of the Day, ready to watch and vote on",
      width: 800,
      height: 500,
    },
  },
];

/** The domain shown on each card, e.g. "hyperlocali.com". */
export function displayDomain(href: string) {
  return new URL(href).hostname.replace(/^www\./, "");
}
