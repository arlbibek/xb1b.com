import type { Metadata } from "next";
import { Support } from "@/components/support/Support";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "मेरो काममा सहयोग गर्नुहोस्",
  description: "तिथि र मेरा अन्य परियोजनाहरूको होस्टिङ र विकासमा सहयोग गर्नुहोस्।",
  alternates: {
    canonical: "/ne/support",
    languages: { en: "/support", ne: "/ne/support" },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/ne/support`,
    locale: "ne_NP",
    title: "मेरो काममा सहयोग गर्नुहोस्",
    description: "तिथि र मेरा अन्य परियोजनाहरूको होस्टिङ र विकासमा सहयोग गर्नुहोस्।",
  },
  twitter: {
    title: "मेरो काममा सहयोग गर्नुहोस्",
    description: "तिथि र मेरा अन्य परियोजनाहरूको होस्टिङ र विकासमा सहयोग गर्नुहोस्।",
  },
};

export default function NepaliSupportPage() {
  return <Support locale="ne" />;
}
