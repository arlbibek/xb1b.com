import type { Metadata } from "next";
import ContactLinks from "@/components/ContactLinks";
import LandingFloatingIcons from "@/components/LandingFloatingIcons";
import ProjectLinks from "@/components/ProjectLinks";

export const metadata: Metadata = {
  title: "Bibek Aryal",
  description:
    "Bibek Aryal — Cybersecurity, GRC, ISO/IEC 27001, Cloud and DevOps.",
  openGraph: {
    title: "Bibek Aryal",
    description:
      "Bibek Aryal — Cybersecurity, GRC, ISO/IEC 27001, Cloud and DevOps.",
    url: "https://xb1b.com",
    type: "website",
  },
};

const SITE = "https://xb1b.com";

/** Tells search engines who this is; the page itself is nearly textless. */
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Bibek Aryal",
      publisher: { "@id": `${SITE}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE}/#person`,
      name: "Bibek Aryal",
      url: SITE,
      email: "contact@xb1b.com",
      image: `${SITE}/images/og.png`,
      description:
        "Cybersecurity, GRC, ISO/IEC 27001, cloud and DevOps practitioner.",
      sameAs: ["https://github.com/arlbibek"],
      knowsAbout: [
        "Cybersecurity",
        "Governance, Risk and Compliance",
        "ISO/IEC 27001",
        "IT Audit",
        "VAPT",
        "Cloud Infrastructure",
        "DevOps",
      ],
    },
    {
      "@type": "WebApplication",
      name: "Tithi",
      url: "https://tithi.xb1b.com",
      description: "Reminders for events by BS date and tithi.",
      author: { "@id": `${SITE}/#person` },
    },
    {
      "@type": "WebApplication",
      name: "Brahma",
      url: "https://brahma.xb1b.com",
      description: "Vedic daily companion.",
      author: { "@id": `${SITE}/#person` },
    },
  ],
};

export default function Home() {
  return (
    <main className="landing" aria-label="Bibek Aryal">
      <script
        type="application/ld+json"
        // Static, author-controlled object; "<" escaped so it cannot close the tag.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c"),
        }}
      />
      <div className="landing__milkyway" aria-hidden="true">
        <div className="landing__milkyway-band" />
        <div className="landing__milkyway-core" />
        <div className="landing__milkyway-dust landing__milkyway-dust--a" />
        <div className="landing__milkyway-dust landing__milkyway-dust--b" />
        <div className="landing__milkyway-dust landing__milkyway-dust--c" />
      </div>
      <h1 className="landing__name">
        <span>BIBEK</span>
        <span>ARYAL</span>
      </h1>
      <LandingFloatingIcons />
      <ContactLinks />
      <ProjectLinks />
    </main>
  );
}
