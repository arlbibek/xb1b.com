import { EMAIL, PROJECTS } from "@/lib/site";

/** Foot of the sky: two quiet "named stars", then quieter ways to support or reach me. */
export default function ProjectLinks() {
  return (
    <footer className="foot">
      <nav className="projects" aria-label="Projects">
        {PROJECTS.map(({ name, href, note }) => (
          <a
            key={name}
            className="projects__link"
            href={href}
            target="_blank"
            rel="noopener"
          >
            <span className="projects__label">
              <svg
                className="projects__star"
                viewBox="0 0 12 12"
                width="9"
                height="9"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6 0c.4 3.6 2.4 5.6 6 6-3.6.4-5.6 2.4-6 6-.4-3.6-2.4-5.6-6-6 3.6-.4 5.6-2.4 6-6Z" />
              </svg>
              <span className="projects__name">{name}</span>
              <svg
                className="projects__arrow"
                viewBox="0 0 12 12"
                width="9"
                height="9"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 9 9 3M4.5 3H9v4.5" />
              </svg>
              <span className="sr-only"> (opens in a new tab)</span>
            </span>
            <span className="projects__note">{note}</span>
          </a>
        ))}
      </nav>
      <div className="foot__contact">
        <a className="foot__email" href="/support">
          Support my work
        </a>
        <span className="foot__sep" aria-hidden="true">
          ·
        </span>
        <a
          className="foot__email"
          href={`mailto:${EMAIL}`}
          aria-label={`Email ${EMAIL}`}
        >
          {EMAIL}
        </a>
      </div>
    </footer>
  );
}
