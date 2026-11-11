import { afterEach, beforeEach, describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { POST } from "../app/api/support/route.ts";

const originalFetch = globalThis.fetch;
const names = ["TURNSTILE_SECRET_KEY", "TURNSTILE_HOSTNAMES"];
const originalEnv = Object.fromEntries(names.map((name) => [name, process.env[name]]));
let calls;
const request = (token = "valid-token", origin = "https://xb1b.com") => new Request("https://xb1b.com/api/support", {
  method: "POST",
  headers: { origin, "Content-Type": "application/json" },
  body: JSON.stringify({ token }),
});
const result = (overrides = {}) => ({ success: true, hostname: "xb1b.com", action: "support", ...overrides });
beforeEach(() => {
  process.env.TURNSTILE_SECRET_KEY = "fixture-secret";
  process.env.TURNSTILE_HOSTNAMES = "xb1b.com";
  calls = 0;
  globalThis.fetch = async () => { calls++; return Response.json(result()); };
});
afterEach(() => {
  globalThis.fetch = originalFetch;
  for (const [name, value] of Object.entries(originalEnv)) {
    if (value === undefined) delete process.env[name];
    else process.env[name] = value;
  }
});

// Run from the repository root, as npm run test:support does.
describe("private bank reveal", () => {
  it("fails closed without configuration", async () => {
    delete process.env.TURNSTILE_SECRET_KEY;
    assert.equal((await POST(request())).status, 503);
    assert.equal(calls, 0);
  });
  it("handles a normalized internal Next URL using the incoming host", async () => {
    const incoming = new Request("http://localhost:3019/api/support", {
      method: "POST",
      headers: { host: "127.0.0.1:3019", origin: "http://127.0.0.1:3019", "Content-Type": "application/json" },
      body: JSON.stringify({ token: "valid-token" }),
    });
    assert.equal((await POST(incoming)).status, 200);
  });
  it("rejects cross-origin requests and empty tokens", async () => {
    assert.equal((await POST(request("token", "https://other.example"))).status, 403);
    assert.equal((await POST(request(""))).status, 400);
    assert.equal(calls, 0);
  });
  for (const invalid of [{ success: false }, { hostname: "other.example" }, { action: "login" }]) {
    it(`rejects invalid verification ${JSON.stringify(invalid)}`, async () => {
      globalThis.fetch = async () => Response.json(result(invalid));
      const response = await POST(request());
      assert.equal(response.status, 403);
      assert.deepEqual(Object.keys(await response.json()), ["error"]);
    });
  }
  it("fails closed when verification is unavailable", async () => {
    globalThis.fetch = async () => { throw new Error("offline"); };
    assert.equal((await POST(request())).status, 503);
  });
  it("returns the private QR only after server verification, without caching or phone", async () => {
    globalThis.fetch = async (url, options) => {
      assert.equal(url, "https://challenges.cloudflare.com/turnstile/v0/siteverify");
      assert.deepEqual(JSON.parse(options.body), { secret: "fixture-secret", response: "valid-token" });
      return Response.json(result());
    };
    const response = await POST(request());
    assert.equal(response.status, 200);
    assert.match(response.headers.get("Cache-Control"), /no-store/);
    assert.match(response.headers.get("X-Robots-Tag"), /noindex/);
    const body = await response.json();
    const qr = await readFile(new URL("../private/support/bank-qr.png", import.meta.url));
    assert.equal(body.qr, `data:image/png;base64,${qr.toString("base64")}`);
    assert.ok(body.fields.some(([label, value]) => label === "Account number" && value.startsWith("001010") && value.length === 20));
    assert.ok(!body.fields.some(([label]) => /phone|contact/i.test(label)));
  });
});
