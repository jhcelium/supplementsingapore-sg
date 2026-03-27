import React from "react";
import type { SEOConfig } from "./SEOHead";

const BASE = "https://supplementsingapore.neoi.jp";

/** Single source for visible copy and DefinedTermSet JSON-LD. */
export const glossaryTerms: ReadonlyArray<{ name: string; description: string }> = [
  {
    name: "Health supplement (Singapore context)",
    description:
      "A product category sold to complement general diet and lifestyle, distinct from registered medicines. In Singapore, such products are subject to Health Sciences Authority rules on labelling and claims rather than full pharmaceutical registration in most cases.",
  },
  {
    name: "Supplement label",
    description:
      "The written information on packaging or inserts for a supplement product, typically including the ingredient list, serving size, suggested use, storage, importer or distributor details, and country of manufacturing.",
  },
  {
    name: "Serving size",
    description:
      "The amount of product that counts as one dose for label purposes—such as one capsule, two tablets, or a stated volume or weight—used together with per-serving nutrient amounts for comparison across products.",
  },
  {
    name: "Importer / distributor (Singapore)",
    description:
      "The party identified on packaging as responsible for placing the product on the Singapore market, often with a local address or contact used for traceability and consumer enquiries.",
  },
  {
    name: "Post-market surveillance",
    description:
      "Regulatory monitoring of products after they are sold, including review of adverse reports, label compliance, and marketplace listings, as applied by authorities to supplement categories in Singapore.",
  },
  {
    name: "Informational search intent",
    description:
      "A query pattern where the user seeks to understand categories, channels, or label conventions—such as supplements singapore or supplement label singapore—before or alongside any purchase decision.",
  },
];

export const seoConfig: SEOConfig = {
  title: "Supplements Singapore | Definitions",
  description:
    "Neutral definitions of common supplement and label terms used in the Singapore retail and regulatory context.",
  canonical: `${BASE}/definitions`,
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Supplements Singapore | Definitions",
    description:
      "Neutral definitions of common supplement and label terms used in the Singapore retail and regulatory context.",
    url: `${BASE}/definitions`,
    inLanguage: "en-SG",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".definitions-intro"],
    },
    isPartOf: {
      "@type": "WebSite",
      name: "Supplements Singapore",
      url: BASE,
    },
  },
};

export const definedTermSetJsonLd = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "Supplements Singapore — Key definitions",
  description: seoConfig.description,
  inLanguage: "en-SG",
  url: seoConfig.canonical,
  hasDefinedTerm: glossaryTerms.map((t) => ({
    "@type": "DefinedTerm",
    name: t.name,
    description: t.description,
  })),
};

const SupplementDefinitions: React.FC = () => {
  return (
    <div>
      <p className="ed-p definitions-intro">
        This page lists concise, neutral definitions for words and phrases often
        used when discussing supplements singapore in retail, online, and
        regulatory contexts. It is for orientation only: it does not describe
        specific products, give health advice, or replace official guidance from
        the Health Sciences Authority or qualified professionals.
      </p>

      <section className="ed-section">
        <p className="ed-section-label">Glossary</p>
        <h2 className="ed-h2">Terms</h2>
        {glossaryTerms.map((t) => (
          <div key={t.name} className="ed-category-block">
            <h3 className="ed-h3">{t.name}</h3>
            <p className="ed-p">{t.description}</p>
          </div>
        ))}
      </section>

      <section className="ed-section">
        <h2 className="ed-h2">Related context</h2>
        <p className="ed-p">
          For label-reading habits and packaging elements in more detail, see{" "}
          <a href={`${BASE}/label-reading-context`}>Label reading context</a>.
          For a broader hub overview, see the{" "}
          <a href={BASE}>Supplements Singapore guide</a>.
        </p>
      </section>
    </div>
  );
};

export default SupplementDefinitions;
