import { PROJECTS } from "@/lib/site";

/**
 * Everything the support page shows under "What you're supporting".
 * Featured projects are the live apps from `lib/site.ts`; the rest are GitHub
 * repositories. Star counts are fetched at build time and revalidated daily;
 * the numbers here are only the fallback when GitHub cannot be reached.
 */
export type Status = "live" | "archived" | "soon";

export type Project = {
  name: string;
  /** Owner/name on GitHub, only for public repositories. */
  repo?: string;
  /** Live site, when there is one. */
  site?: string;
  language?: string;
  status: Status;
  stars?: number;
  note: { en: string; ne: string };
};

export const FEATURED: Project[] = PROJECTS.map((p) => ({
  name: p.name,
  site: p.href,
  status: "live",
  note:
    p.name === "Tithi"
      ? {
          en: "Birthday, anniversary and shraddha reminders by Bikram Sambat date and tithi, in Google Calendar or by email.",
          ne: "जन्मदिन, विवाह वार्षिकोत्सव र श्राद्धको सम्झना विक्रम संवत् मिति र तिथि अनुसार, गुगल क्यालेन्डर वा इमेलमा।",
        }
      : {
          en: "A Vedic daily companion: sun and moon, Brahma Muhurta, pañcāṅga and circadian guidance timed to your real sunrise.",
          ne: "वैदिक दैनिक साथी: सूर्य र चन्द्र, ब्राह्ममुहूर्त, पञ्चाङ्ग र तपाईंको वास्तविक सूर्योदय अनुसारको दिनचर्या।",
        },
}));

export const OPEN_SOURCE: Project[] = [
  {
    name: "windows-ahk",
    repo: "arlbibek/windows-ahk",
    language: "AutoHotkey",
    status: "live",
    stars: 52,
    note: {
      en: "A simple, intuitive AutoHotkey script that adds the Windows shortcuts you wish it had.",
      ne: "विन्डोजमा चाहिने सर्टकटहरू थप्ने सरल AutoHotkey स्क्रिप्ट।",
    },
  },
  {
    name: "dVoting",
    repo: "arlbibek/dVoting",
    language: "JavaScript",
    status: "archived",
    stars: 136,
    note: {
      en: "A decentralized voting system built on the Ethereum blockchain.",
      ne: "इथेरियम ब्लकचेनमा आधारित विकेन्द्रित मतदान प्रणाली।",
    },
  },
  {
    name: "PocketBar",
    language: "C#",
    status: "soon",
    note: {
      en: "Your Android phone as a wireless taskbar for Windows 11, with secure local pairing.",
      ne: "सुरक्षित स्थानीय पेयरिङसहित एन्ड्रोइड फोनलाई विन्डोज ११ को वायरलेस टास्कबार बनाउने एप।",
    },
  },
  {
    name: "nadap-switch",
    repo: "arlbibek/nadap-switch",
    language: "PowerShell",
    status: "live",
    stars: 1,
    note: {
      en: "A lightweight Windows utility to switch between network adapters in a click.",
      ne: "नेटवर्क एडप्टरहरू एकै क्लिकमा बदल्ने हल्का विन्डोज उपकरण।",
    },
  },
];

const DAY = 60 * 60 * 24;

async function stars(repo: string): Promise<number | undefined> {
  const token = process.env.GITHUB_TOKEN;
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "xb1b.com",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      next: { revalidate: DAY },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return undefined;
    const data: { stargazers_count?: unknown } = await res.json();
    return typeof data.stargazers_count === "number" ? data.stargazers_count : undefined;
  } catch {
    return undefined;
  }
}

/** Open-source projects with live star counts, falling back to the static ones. */
export async function getOpenSource(): Promise<Project[]> {
  return Promise.all(
    OPEN_SOURCE.map(async (p) =>
      p.repo ? { ...p, stars: (await stars(p.repo)) ?? p.stars } : p,
    ),
  );
}
