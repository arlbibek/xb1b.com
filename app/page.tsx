import LandingFloatingIcons from "@/components/LandingFloatingIcons";
import ProjectLinks from "@/components/ProjectLinks";
import {
  EMAIL,
  EXPERTISE,
  PROJECTS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_SUMMARY,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site";

const PERSON_ID = `${SITE_URL}/#person`;

/**
 * The page is nearly textless, so this graph is what tells search engines and
 * LLM crawlers who it is about. Facts come from `lib/site.ts` only.
 */
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": PERSON_ID },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: SITE_URL,
      name: SITE_TITLE,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": PERSON_ID },
      mainEntity: { "@id": PERSON_ID },
      primaryImageOfPage: `${SITE_URL}/images/og.png`,
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: SITE_NAME,
      givenName: "Bibek",
      familyName: "Aryal",
      url: SITE_URL,
      mainEntityOfPage: { "@id": `${SITE_URL}/#profile` },
      email: `mailto:${EMAIL}`,
      image: `${SITE_URL}/images/og.png`,
      description: SITE_SUMMARY,
      jobTitle: "Co-Founder",
      worksFor: {
        "@type": "Organization",
        name: "Trinity Technology",
        url: "https://trinitytech.com.np",
      },
      knowsAbout: EXPERTISE,
      sameAs: ["https://github.com/arlbibek"],
    },
    ...PROJECTS.map((p) => ({
      "@type": "WebApplication",
      "@id": `${p.href}/#app`,
      name: p.name,
      url: p.href,
      description: p.description,
      applicationCategory: p.category,
      operatingSystem: "Any (web browser)",
      author: { "@id": PERSON_ID },
      creator: { "@id": PERSON_ID },
    })),
  ],
};

export default function Home() {
  return (
    <main className="landing" aria-label={SITE_NAME}>
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
      {/* The space keeps the heading "Bibek Aryal", not "BIBEKARYAL", for
          crawlers and screen readers; the spans are blocks so it never shows. */}
      <h1 className="landing__name">
        <span>Bibek</span> <span>Aryal</span>
      </h1>
      {/* The sky is decorative and hidden from assistive tech, so this is the
          page's only prose: who this is, for screen readers and crawlers. */}
      <p className="sr-only">{SITE_SUMMARY}</p>
      <LandingFloatingIcons />
      <ProjectLinks />
    </main>
  );
}
