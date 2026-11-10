import {
  EMAIL,
  EXPERTISE,
  PROJECTS,
  SITE_NAME,
  SITE_SUMMARY,
  SITE_URL,
} from "@/lib/site";

export const dynamic = "force-static";

/** Plain-text summary for LLM crawlers (llmstxt.org), built from lib/site.ts. */
export function GET() {
  const body = [
    `# ${SITE_NAME}`,
    "",
    `> ${SITE_SUMMARY}`,
    "",
    `This is the personal site of ${SITE_NAME} (${SITE_URL}). It is a single page: his name, links to his projects, and a contact address.`,
    "",
    "## Expertise",
    "",
    ...EXPERTISE.map((e) => `- ${e}`),
    "",
    "## Projects",
    "",
    ...PROJECTS.map((p) => `- [${p.name}](${p.href}): ${p.description}`),
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
