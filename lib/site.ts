/** Single source for facts that appear in metadata, JSON-LD and llms.txt. */
export const SITE_URL = "https://xb1b.com";
export const SITE_NAME = "Bibek Aryal";
export const EMAIL = "contact@xb1b.com";

export const SITE_TITLE = "Bibek Aryal — Cybersecurity, GRC and ISO/IEC 27001";

export const SITE_DESCRIPTION =
  "Bibek Aryal is a cybersecurity and GRC practitioner (ISO/IEC 27001, IT audit, VAPT), co-founder of Trinity Technology, and the maker of Tithi and Brahma.";

/** One plain paragraph a person, a search engine or an LLM can quote. */
export const SITE_SUMMARY =
  "Bibek Aryal is a cybersecurity and GRC practitioner and the co-founder of Trinity Technology. He works on ISO/IEC 27001 implementation and audit, IT audit, VAPT, security operations, and the Linux, cloud and DevOps infrastructure behind them. He also builds Tithi, which reminds families of birthdays, anniversaries and shraddha by Bikram Sambat date and tithi, and Brahma, a Vedic daily companion.";

export const EXPERTISE = [
  "Cybersecurity",
  "Governance, Risk and Compliance (GRC)",
  "ISO/IEC 27001",
  "IT Audit",
  "Vulnerability Assessment and Penetration Testing (VAPT)",
  "Security Operations",
  "Incident Response",
  "Identity and Access Management",
  "Linux Administration",
  "Cloud Infrastructure",
  "DevOps",
  "Self-Hosted Infrastructure",
] as const;

export const PROJECTS = [
  {
    name: "Tithi",
    href: "https://tithi.xb1b.com",
    note: "BS date & tithi reminders",
    description:
      "Web app that reminds families of birthdays, anniversaries and shraddha by Bikram Sambat (BS) date and tithi, in Google Calendar or by email.",
    category: "LifestyleApplication",
  },
  {
    name: "Brahma",
    href: "https://brahma.xb1b.com",
    note: "Vedic daily companion",
    description:
      "Vedic daily companion: sun and moon astronomy, Brahma Muhurta, pañcāṅga and circadian guidance timed to your real sunrise.",
    category: "LifestyleApplication",
  },
] as const;
