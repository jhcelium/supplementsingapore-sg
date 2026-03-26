/**
 * FAQ page module for `faq.astro`.
 * Named `_Faq.tsx` so Astro ignores it as a route (only `.astro` files define routes here).
 */
import React from "react";
import type { SEOConfig } from "../components/SEOHead";

const BASE = "https://supplementsingapore.neoi.jp";

export const seoConfig: SEOConfig = {
  title: "Supplements Singapore | FAQ",
  description:
    "Frequently asked questions about supplements in Singapore, including retail context, label reading, and common search intent.",
  canonical: `${BASE}/faq`,
};

/** Six Q&A pairs for visible content and FAQPage JSON-LD (answers 40–60 words). */
export const faqPairs: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: 'What does "supplements singapore" usually refer to?',
    a: "In everyday use, the phrase usually refers to the local environment for vitamins, minerals, herbs, probiotics, protein products, and similar health supplement categories sold in Singapore. It covers where products appear, how packaging and supplement label information are presented, and what people look up before buying. It often signals an overview or orientation need rather than a request for a single named product.",
  },
  {
    q: "Where are supplements commonly sold in Singapore?",
    a: "They are commonly sold through licensed pharmacies, health-focused retailers, supermarkets, and online marketplaces or direct seller websites that ship to Singapore. Each channel offers a different shopping context: some provide pharmacist access at purchase, others emphasise self-service selection and comparison. The supplement market singapore spans these outlets, so the same broad category may appear in more than one type of retail setting.",
  },
  {
    q: "How are supplement labels commonly read in Singapore?",
    a: "Readers typically start with the ingredient list and serving size, then note importer or distributor details and country of origin. Supplement label singapore scrutiny also includes allergen lines and caution text. People often compare per-serving amounts across products and check whether online listings match packaging. This describes a common reading habit; it is not a substitute for professional advice about personal suitability.",
  },
  {
    q: "What information usually appears on supplement packaging?",
    a: "Packaging commonly shows the product name, full ingredient list, amount per serving, servings per container, suggested use, storage instructions, batch or expiry dating, and importer or distributor contact details. Labels may also state country of manufacturing. Together these elements support questions about composition and traceability without referencing specific products or making outcome claims.",
  },
  {
    q: "Why do people search for supplements in Singapore?",
    a: "Searches often reflect a need to understand where to buy supplements singapore, how labels work, or what the supplement market singapore looks like before purchasing. Some want to clarify what supplements usually refer to in singapore; others focus on how supplement labels are commonly read. Intent is usually informational rather than tied to a single promotional offer.",
  },
  {
    q: "Is this site focused on product recommendations?",
    a: "No. This site offers structured, neutral background on supplements singapore topics such as retail context and label reading. It does not rank products, endorse brands, or tell individuals what they should take. Those decisions belong with qualified clinicians or pharmacists. Content here is for general orientation only and is not medical or legal advice.",
  },
];

export function buildWebPageJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: seoConfig.title,
    description: seoConfig.description,
    url: seoConfig.canonical,
    inLanguage: "en-SG",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".faq-intro"],
    },
    isPartOf: {
      "@type": "WebSite",
      name: "Supplements Singapore",
      url: BASE,
    },
  };
}

export function buildFaqPageJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: "Supplements Singapore — Frequently Asked Questions",
    url: seoConfig.canonical,
    inLanguage: "en-SG",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".faq-intro"],
    },
    mainEntity: faqPairs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/**
 * FAQ page body. Head tags are provided by BaseLayout → Seo.astro (not react-helmet-async).
 * Styling uses the shared editorial system (ed-*), not Tailwind.
 */
const Faq: React.FC = () => {
  return (
    <div>
      <p className="ed-p faq-intro">
        This page answers frequently asked questions about supplements in Singapore
        in a concise, neutral way. It explains what people usually mean when they
        discuss supplements singapore, where items are commonly sold, how supplement
        labels are typically read, and which details usually appear on packaging. It
        also outlines why people search supplements singapore and clarifies that this
        site does not recommend specific products. The supplement market singapore
        and supplement label singapore context are described in general terms only.
        Nothing here is medical, legal, or regulatory advice. Use this FAQ as a
        starting point for your own reading and for discussions with a pharmacist or
        clinician if needed.
      </p>

      {faqPairs.map((item) => (
        <section key={item.q} className="ed-section faq-item">
          <h2 className="ed-h2">{item.q}</h2>
          <p className="ed-p">{item.a}</p>
        </section>
      ))}

      <section className="ed-section">
        <h2 className="ed-h2">Key Takeaway</h2>
        <div className="ed-key-takeaway">
          The supplements singapore topic spans retail channels, label formats, and
          typical search questions about where products are sold and how packaging is
          read. Supplement label singapore checks usually focus on ingredients,
          servings, and origin or importer lines. Understanding the supplement market
          singapore in broad terms helps you frame better questions for professionals.
          This FAQ is informational only: it does not recommend products or replace
          medical, legal, or regulatory guidance tailored to your situation.
        </div>
      </section>

      <section className="ed-section">
        <h2 className="ed-h2">Related Context</h2>
        <p className="ed-p">
          For a broader structured overview of purchasing context, regulation
          framing, and comparison habits, see the{" "}
          <a href="https://supplementsingapore.neoi.jp">Supplements Singapore guide</a>
          .
        </p>
      </section>
    </div>
  );
};

export default Faq;
