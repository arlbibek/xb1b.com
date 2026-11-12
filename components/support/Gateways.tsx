import type { IconType } from "react-icons";
import {
  SiBitcoin,
  SiBuymeacoffee,
  SiEthereum,
  SiGithubsponsors,
  SiGooglepay,
  SiKofi,
  SiPaypal,
  SiPaytm,
  SiPhonepe,
  SiRazorpay,
  SiStripe,
  SiTether,
} from "react-icons/si";

type Locale = "en" | "ne";
/** A brand mark from Simple Icons, or a monogram where none exists. */
type Method = { name: string; icon?: IconType; mark?: string };
type Group = { id: string; title: { en: string; ne: string }; methods: Method[] };

const GROUPS: Group[] = [
  {
    id: "international",
    title: { en: "International", ne: "अन्तर्राष्ट्रिय" },
    methods: [
      { name: "PayPal", icon: SiPaypal },
      { name: "GitHub Sponsors", icon: SiGithubsponsors },
      { name: "Buy Me a Coffee", icon: SiBuymeacoffee },
      { name: "Ko-fi", icon: SiKofi },
      { name: "Card (Stripe)", icon: SiStripe },
    ],
  },
  {
    id: "nepal",
    title: { en: "Nepal", ne: "नेपाल" },
    methods: [
      { name: "eSewa", mark: "e" },
      { name: "Khalti", mark: "K" },
      { name: "Fonepay", mark: "F" },
      { name: "IME Pay", mark: "IME" },
    ],
  },
  {
    id: "india",
    title: { en: "India", ne: "भारत" },
    methods: [
      { name: "UPI", mark: "UPI" },
      { name: "Google Pay", icon: SiGooglepay },
      { name: "PhonePe", icon: SiPhonepe },
      { name: "Paytm", icon: SiPaytm },
      { name: "Razorpay", icon: SiRazorpay },
    ],
  },
  {
    id: "crypto",
    title: { en: "Crypto", ne: "क्रिप्टो" },
    methods: [
      { name: "Bitcoin", icon: SiBitcoin },
      { name: "Ethereum", icon: SiEthereum },
      { name: "USDT", icon: SiTether },
    ],
  },
];

const text = {
  en: {
    title: "More ways to support",
    soon: "Coming soon",
    lede: "Wallets, UPI and international options are on the way. For now, the bank transfer above is the only active option.",
  },
  ne: {
    title: "सहयोगका थप माध्यम",
    soon: "छिट्टै आउँदैछ",
    lede: "वालेट, UPI र अन्तर्राष्ट्रिय माध्यमहरू छिट्टै थपिँदैछन्। अहिलेलाई माथिको बैंक ट्रान्सफर मात्र सक्रिय छ।",
  },
};

/** Payment options that are not live yet: visible, muted and not clickable. */
export function Gateways({ locale }: { locale: Locale }) {
  const x = text[locale];
  return (
    <section className="support-section" aria-labelledby="gateways-title">
      <div className="support-section-head">
        <h2 id="gateways-title" className="support-section-title">{x.title}</h2>
        <span className="support-badge">{x.soon}</span>
      </div>
      <p className="support-muted">{x.lede}</p>
      <div className="gateways">
        {GROUPS.map((g) => (
          <div key={g.id} className="gateways__group">
            <h3 className="gateways__title">{g.title[locale]}</h3>
            <ul className="gateways__list" lang="en">
              {g.methods.map(({ name, icon: Icon, mark }) => (
                <li key={name} className="gateways__item" aria-disabled="true">
                  <span className="gateways__mark" aria-hidden="true">
                    {Icon ? <Icon size={16} /> : <span className="gateways__mono">{mark}</span>}
                  </span>
                  <span className="gateways__name">{name}</span>
                  <span className="sr-only"> ({x.soon})</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
