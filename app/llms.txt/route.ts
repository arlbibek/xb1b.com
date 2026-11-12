import {
  EMAIL,
  EXPERTISE,
  PROJECTS,
  SITE_NAME,
  SITE_SUMMARY,
  SITE_URL,
} from "@/lib/site";
import { OPEN_SOURCE } from "@/lib/projects";

export const dynamic = "force-static";

/** Plain-text summary for LLM crawlers (llmstxt.org), built from lib/site.ts. */
export function GET() {
  const body = [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_SUMMARY}`,
    "",
    `This is the personal site of ${SITE_NAME} (${SITE_URL}). The home page has his name, links to his projects and a contact address; /support lists his projects and ways to support them.`,
    "",
    "## Expertise",
    "",
    ...EXPERTISE.map((e) => `- ${e}`),
    "",
    "## Projects",
    "",
    ...PROJECTS.map((p) => `- [${p.name}](${p.href}): ${p.description}`),
    "",
    "## Open source",
    "",
    ...OPEN_SOURCE.map((p) =>
      p.repo
        ? `- [${p.name}](https://github.com/${p.repo}): ${p.note.en}${p.status === "archived" ? " (archived)" : ""}`
        : `- ${p.name}: ${p.note.en} (coming soon)`,
    ),
    "",
    "## Support",
    "",
    `- [Support my work](${SITE_URL}/support): bank transfer (NPR); more payment options coming soon.`,
    "",
    "## Work",
    "",
    "- [Trinity Technology](https://trinitytech.com.np): co-founder.",
    "",
    "## Contact",
    "",
    `- Email: ${EMAIL}`,
    "- GitHub: https://github.com/arlbibek",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
