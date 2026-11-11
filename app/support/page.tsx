import type { Metadata } from "next";
import { Support } from "@/components/support/Support";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support my work",
  description: "Help support hosting and development for Tithi and my other projects.",
  alternates: {
    canonical: "/support",
    languages: { en: "/support", ne: "/ne/support" },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/support`,
    title: "Support my work",
    description: "Help support hosting and development for Tithi and my other projects.",
  },
  twitter: {
    title: "Support my work",
    description: "Help support hosting and development for Tithi and my other projects.",
  },
};

export default function SupportPage() {
  return <Support locale="en" />;
}
