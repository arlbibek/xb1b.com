"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
type Locale = "en" | "ne";
const pill = "support-button";

type Turnstile = {
  render: (node: HTMLElement, options: Record<string, unknown>) => string;
  remove: (id: string) => void;
};
type Details = { qr: string; fields: [string, string][] };
const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function BankSupport({ locale }: { locale: Locale }) {
  const ne = locale === "ne";
  const [started, setStarted] = useState(false);
  const [ready, setReady] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);
  const [details, setDetails] = useState<Details | null>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const api = (window as Window & { turnstile?: Turnstile }).turnstile;
    if (!ready || !started || !container.current || !api || !siteKey || details) return;
    let active = true;
    const id = api.render(container.current, {
      sitekey: siteKey,
      action: "support",
      theme: "dark",
      size: "compact",
      language: ne ? "ne" : "en",
      callback: async (token: string) => {
        setBusy(true);
        setError(false);
        try {
          const response = await fetch("/api/support", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }),
            cache: "no-store",
          });
          if (!response.ok) throw new Error("Verification failed");
          const data: Details = await response.json();
          if (active) setDetails(data);
        } catch { if (active) setError(true); }
        finally { if (active) setBusy(false); }
      },
      "error-callback": () => { if (active) setError(true); },
      "expired-callback": () => { if (active) setError(true); },
    });
    return () => { active = false; api.remove(id); };
  }, [ready, started, attempt, details, ne]);

  return (
    <section className="support-card" aria-label={ne ? "बैंकमार्फत सहयोग" : "Bank contribution"}>
      <h2 className="support-card-title">{ne ? "बैंकमार्फत सहयोग" : "Bank contribution"}</h2>
      {details ? (
        <>
          {/* The data URL is returned only after server verification; no public image URL. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={details.qr} alt={ne ? "सहयोगका लागि बैंक QR" : "Bank QR for contributions"} width={640} height={640} className="support-qr" />
          <a href={details.qr} download="bibek-aryal-bank-qr.png" className={pill}>{ne ? "QR सेभ गर्नुहोस्" : "Save QR"}</a>
          <dl className="support-fields" lang="en">
            {details.fields.map(([label, value]) => (
              <div key={label}>
                <dt className="support-muted">{label}</dt>
                <dd className="support-value">{value}</dd>
              </div>
            ))}
          </dl>
        </>
      ) : !siteKey ? (
        <p className="support-muted">{ne ? "बैंक विवरण अहिले उपलब्ध छैन। कृपया पछि प्रयास गर्नुहोस्।" : "Bank details are temporarily unavailable. Please check back soon."}</p>
      ) : (
        <>
          <p className="support-muted">{ne ? "बैंक विवरण हेर्न Cloudflare को मानव प्रमाणीकरण पूरा गर्नुहोस्।" : "Complete a human check by Cloudflare to reveal the bank QR and account details."}</p>
          {!started ? (
            <button type="button" className={pill} onClick={() => setStarted(true)}>{ne ? "बैंक विवरण हेर्नुहोस्" : "Show bank details"}</button>
          ) : (
            <>
              <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" onReady={() => setReady(true)} onError={() => setError(true)} />
              <div ref={container} />
              {busy && <p role="status" className="text-sm">{ne ? "प्रमाणीकरण हुँदैछ…" : "Verifying…"}</p>}
              {error && <div className="support-feedback"><p role="alert" className="support-error">{ne ? "प्रमाणीकरण हुन सकेन। फेरि प्रयास गर्नुहोस्।" : "Verification could not finish. Please try again."}</p><button type="button" disabled={busy} className={pill} onClick={() => { if (!ready) { window.location.reload(); return; } setError(false); setAttempt((n) => n + 1); }}>{ne ? "फेरि प्रयास गर्नुहोस्" : "Try again"}</button></div>}
            </>
          )}
        </>
      )}
    </section>
  );
}
