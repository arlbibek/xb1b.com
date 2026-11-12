import { FEATURED, getOpenSource, type Project } from "@/lib/projects";

type Locale = "en" | "ne";

const text = {
  en: {
    title: "What you’re supporting",
    lede: "Everything here is free to use. Contributions keep the servers on and the work going.",
    featured: "Apps",
    open: "Open source",
    visit: "Visit",
    source: "Source",
    archived: "Archived",
    soon: "Coming soon",
    stars: (n: number) => `${n} GitHub ${n === 1 ? "star" : "stars"}`,
    newTab: "(opens in a new tab)",
  },
  ne: {
    title: "तपाईंले केलाई सहयोग गर्दै हुनुहुन्छ",
    lede: "यहाँका सबै परियोजना निःशुल्क छन्। तपाईंको सहयोगले सर्भर चलाउन र काम अघि बढाउन मद्दत गर्छ।",
    featured: "एपहरू",
    open: "खुला स्रोत",
    visit: "हेर्नुहोस्",
    source: "कोड",
    archived: "संग्रहित",
    soon: "छिट्टै आउँदैछ",
    stars: (n: number) => `${n} GitHub स्टार`,
    newTab: "(नयाँ ट्याबमा खुल्छ)",
  },
};

const Star = ({ size = 10 }: { size?: number }) => (
  <svg viewBox="0 0 12 12" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M6 0c.4 3.6 2.4 5.6 6 6-3.6.4-5.6 2.4-6 6-.4-3.6-2.4-5.6-6-6 3.6-.4 5.6-2.4 6-6Z" />
  </svg>
);

const Arrow = () => (
  <svg viewBox="0 0 12 12" width="9" height="9" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 9 9 3M4.5 3H9v4.5" />
  </svg>
);

const host = (url: string) => new URL(url).host;

function Featured({ p, x, locale }: { p: Project; x: (typeof text)["en"]; locale: Locale }) {
  return (
    <article className="pcard pcard--featured">
      <span className="pcard__glow" aria-hidden="true" />
      <h4 className="pcard__name" lang="en">
        <span className="pcard__star"><Star size={12} /></span>
        <a className="pcard__link" href={p.site} target="_blank" rel="noopener">
          {p.name}
          <span className="sr-only"> {x.newTab}</span>
        </a>
      </h4>
      <p className="pcard__note">{p.note[locale]}</p>
      <p className="pcard__meta" lang="en">
        <span>{host(p.site!)}</span>
        <Arrow />
      </p>
    </article>
  );
}

function Repo({ p, x, locale }: { p: Project; x: (typeof text)["en"]; locale: Locale }) {
  const href = p.repo ? `https://github.com/${p.repo}` : undefined;
  const soon = p.status === "soon";
  return (
    <article className={`pcard${soon ? " pcard--soon" : ""}`}>
      <div className="pcard__head">
        <h4 className="pcard__name pcard__name--sm" lang="en">
          {href ? (
            <a className="pcard__link" href={href} target="_blank" rel="noopener">
              {p.name}
              <span className="sr-only"> {x.newTab}</span>
            </a>
          ) : (
            p.name
          )}
        </h4>
        {p.status !== "live" && (
          <span className="support-badge">{soon ? x.soon : x.archived}</span>
        )}
      </div>
      <p className="pcard__note">{p.note[locale]}</p>
      <p className="pcard__meta" lang="en">
        {p.language && (
          <span className="pcard__lang">
            <span className={`pcard__dot pcard__dot--${p.language.replace(/\W/g, "").toLowerCase()}`} aria-hidden="true" />
            {p.language}
          </span>
        )}
        {typeof p.stars === "number" && p.stars > 0 && (
          <span className="pcard__stars" aria-label={x.stars(p.stars)}>
            <Star /> {p.stars}
          </span>
        )}
        {href && (
          <span className="pcard__go">
            {x.source} <Arrow />
          </span>
        )}
      </p>
    </article>
  );
}

/** "What you're supporting": the two apps first, then open-source work. */
export async function Projects({ locale }: { locale: Locale }) {
  const x = text[locale];
  const repos = await getOpenSource();
  return (
    <section className="support-section" aria-labelledby="projects-title">
      <h2 id="projects-title" className="support-section-title">{x.title}</h2>
      <p className="support-muted">{x.lede}</p>
      <h3 className="support-eyebrow">{x.featured}</h3>
      <div className="pgrid pgrid--featured">
        {FEATURED.map((p) => <Featured key={p.name} p={p} x={x} locale={locale} />)}
      </div>
      <h3 className="support-eyebrow">{x.open}</h3>
      <div className="pgrid">
        {repos.map((p) => <Repo key={p.name} p={p} x={x} locale={locale} />)}
      </div>
    </section>
  );
}
