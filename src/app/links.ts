export type IconName = "linkedin" | "facebook" | "instagram" | "projects" | "download";

export type ProfileLink = {
  label: string;
  href: string;
  icon: IconName;
  /** Marks a profile of mine on another site (rel="me"). */
  isProfile?: boolean;
};

/** Homepage links, in display order. Add, remove or reorder here. */
export const links: ProfileLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arturolocsin/",
    icon: "linkedin",
    isProfile: true,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/arturo.locsin/",
    icon: "facebook",
    isProfile: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/r2roloxn/",
    icon: "instagram",
    isProfile: true,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: "projects",
  },
];

/** CV download, shown on its own line under the links. Replace the PDF in /public to update it. */
export const cv = {
  label: "Download my CV",
  href: "/arturo-locsin-cv.pdf",
  fileName: "Arturo-Locsin-CV.pdf",
  note: "PDF · 160 KB",
};
