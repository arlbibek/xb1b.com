import { readFile } from "node:fs/promises";
import path from "node:path";

const json = (body: unknown, status = 200) => Response.json(body, {
  status,
  headers: {
    "Cache-Control": "private, no-store, max-age=0",
    "X-Robots-Tag": "noindex, nofollow, noarchive",
  },
});

export async function POST(request: Request) {
  // Next may normalize the internal request URL to localhost behind a proxy.
  const url = new URL(request.url);
  const origin = `${url.protocol}//${request.headers.get("host") ?? url.host}`;
  if (request.headers.get("origin") !== origin)
    return json({ error: "Forbidden" }, 403);
  if (!request.headers.get("content-type")?.startsWith("application/json"))
    return json({ error: "JSON required" }, 415);
  const secret = process.env.TURNSTILE_SECRET_KEY;
  const hosts = process.env.TURNSTILE_HOSTNAMES?.split(",").map((s) => s.trim()).filter(Boolean);
  if (!secret || !hosts?.length) return json({ error: "Unavailable" }, 503);
  const raw = await request.text();
  if (raw.length > 4096) return json({ error: "Invalid request" }, 400);
  let token: unknown;
  try { token = JSON.parse(raw)?.token; } catch { return json({ error: "Invalid request" }, 400); }
  if (typeof token !== "string" || !token || token.length > 2048)
    return json({ error: "Verification required" }, 400);
  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, response: token }),
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
    const result = await response.json();
    if (!response.ok || result.success !== true || result.action !== "support" || !hosts.includes(result.hostname))
      return json({ error: "Verification failed" }, 403);
    const image = await readFile(path.join(process.cwd(), "private/support/bank-qr.png"));
    return json({
      qr: `data:image/png;base64,${image.toString("base64")}`,
      fields: [
        ["Name", "Bibek Aryal"],
        ["Account number", "00101000001549401655"],
        ["Account type", "Saving Account"],
        ["Currency", "NPR"],
        ["Bank", "Prime Commercial Bank Ltd"],
        ["Branch", "Kamalpokhari, Kathmandu, Nepal (Central Office)"],
      ],
    });
  } catch {
    return json({ error: "Temporarily unavailable" }, 503);
  }
}
