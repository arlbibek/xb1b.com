import Link from "next/link";
import { SITE_NAME } from "@/lib/site";
import { BankSupport } from "./BankSupport";

const text = {
  en: {
    title: "Support my work",
    intro: "Your contribution helps cover hosting and development for Tithi and my other projects.",
    instructions: "Reveal the bank QR and account details below, then contribute any amount in NPR using your banking app. On your phone, save the QR and select it from your banking app’s gallery if supported.",
    note: "Check the recipient’s name before sending. Contributions go directly to my personal bank account. Your banking app provides payment confirmation; this site does not record or confirm transfers.",
    privacy: "When you choose to reveal the details, Cloudflare Turnstile processes browser and network information to check for automated access. The bank details stay hidden until the server verifies the check.",
    thanks: "Thank you for supporting my work. Every contribution is optional.",
    other: "नेपाली",
  },
  ne: {
    title: "मेरो काममा सहयोग गर्नुहोस्",
    intro: "तपाईंको सहयोग तिथि र मेरा अन्य परियोजनाहरूको होस्टिङ र विकासमा प्रयोग हुन्छ।",
    instructions: "तल बैंकको QR र खाता विवरण हेरेर आफ्नो बैंकिङ एपबाट नेपाली रुपैयाँमा चाहेको रकम सहयोग गर्नुहोस्। फोनमा QR सेभ गरेर बैंकिङ एपले समर्थन गरेमा ग्यालरीबाट छान्न सक्नुहुन्छ।",
    note: "पठाउनुअघि प्राप्तकर्ताको नाम जाँच गर्नुहोस्। सहयोग सिधै मेरो व्यक्तिगत बैंक खातामा जान्छ। भुक्तानीको पुष्टि बैंकिङ एपमा हुन्छ; यस साइटले भुक्तानीको अभिलेख वा पुष्टि गर्दैन।",
    privacy: "बैंक विवरण हेर्न रोज्दा स्वचालित पहुँच जाँच्न Cloudflare Turnstile ले ब्राउजर र नेटवर्क जानकारी प्रशोधन गर्छ। सर्भरमा प्रमाणीकरण भएपछि मात्र बैंक विवरण देखाइन्छ।",
    thanks: "मेरो काममा सहयोग गर्नुभएकोमा धन्यवाद। सहयोग पूर्ण रूपमा ऐच्छिक हो।",
    other: "English",
  },
};

export function Support({ locale }: { locale: "en" | "ne" }) {
  const x = text[locale];
  return (
    <main className="support-page" lang={locale}>
      <div className="support-content">
        <nav className="support-nav" aria-label={locale === "ne" ? "नेभिगेसन" : "Navigation"}>
          <Link href="/">{SITE_NAME}</Link>
          <Link href={locale === "en" ? "/ne/support" : "/support"} lang={locale === "en" ? "ne" : "en"}>{x.other}</Link>
        </nav>
        <header className="support-intro">
          <h1>{x.title}</h1>
          <p className="support-lede">{x.intro}</p>
          <p className="support-muted">{x.instructions}</p>
        </header>
        <BankSupport locale={locale} />
        <div className="support-notes">
          <p>{x.note}</p>
          <p>{x.privacy} <a href="https://www.cloudflare.com/privacypolicy/">Cloudflare Privacy Policy</a></p>
          <p>{x.thanks}</p>
        </div>
      </div>
    </main>
  );
}
