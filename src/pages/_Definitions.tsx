/**
 * Definitions page body for `/definitions` (imported by definitions.astro).
 * Astro ignores `_*.tsx` under pages/; see `Definitions.tsx` for the public re-export path.
 */
import React from "react";
import SEOHead, { type SEOConfig } from "../components/SEOHead";

const BASE = "https://supplementsingapore.neoi.jp";

export type TermBlock = {
  name: string;
  direct: string;
  supporting: string;
};

export const termBlocks: ReadonlyArray<TermBlock> = [
  {
    name: "Supplements Singapore",
    direct:
      "In search and everyday language, supplements singapore usually refers to the local universe of vitamins, minerals, herbs, probiotics, protein products, and similar non-prescription items sold in Singapore. It signals interest in where products appear, how they are labelled, and what information people need before comparing options—not a single product category or a clinical recommendation.",
    supporting:
      "People asking what supplements singapore usually mean are often orienting to retail and online channels at once: pharmacies, health stores, supermarkets, and marketplaces. The phrase ties to how supplement label singapore text is written for this market and how serving information on supplement labels is presented for local sale. It does not name brands or outcomes; it describes a topic area and reading context for comparison. Neutral definitions help separate general literacy from personal decisions that belong with clinicians or pharmacists.",
  },
  {
    name: "Supplement Label",
    direct:
      "A supplement label is the printed or digital label information that identifies a product and lists ingredients, serving data, and related statements on packaging or inserts. For supplement label singapore reading, the label is the primary place to verify what a product contains and how the seller describes suggested use, independent of advertising copy elsewhere.",
    supporting:
      "What supplement labels usually include, in broad terms, are the product name, a full ingredient list with amounts per serving where provided, serving size and servings per container, storage guidance, and importer or distributor contact lines where applicable. Readers compare supplement label singapore disclosures to check consistency with online listings. The label is descriptive documentation, not proof that any product suits a particular person. Strong or therapeutic-sounding language on non-medicinal products warrants careful cross-check against regulatory expectations rather than assumption.",
  },
  {
    name: "Serving Information",
    direct:
      "Serving information states how much of the product counts as one dose—such as capsules per serving or millilitres per drink—and the quantity of key ingredients tied to that serving. It is the correct, label-based basis for comparing stated nutrient amounts across comparable products, not the total individual bottle size alone.",
    supporting:
      "What serving information means on supplement packaging is the bridge between the ingredient list and practical comparison. Two products may list the same nutrient, but only serving-normalised amounts are comparable. Labels may express units as milligrams, micrograms, IU, or CFU for probiotics. Online listings sometimes abbreviate or round; the packaging remains the reference for supplement label singapore checks. This section describes label mechanics only; it does not tell anyone how much to take—that is outside the scope of general definitions and belongs with qualified advice.",
  },
  {
    name: "Importer Information",
    direct:
      "Importer information names the party responsible for placing the product on the Singapore market, often with a local address or contact route. It supports traceability when a purchaser needs to confirm who stands behind the product sold here and how to reach that party for ordinary product questions or documentation requests.",
    supporting:
      "What importer information means on packaging is distinct from the manufacturer’s overseas address alone: it identifies the Singapore-facing distribution role where shown. This line matters in retail context singapore because online offers may show photos intended for other countries. A clear local importer line is one element readers use alongside supplement label singapore ingredient text. Absence of identifiable importer details on a listing does not by itself prove anything, but it is a common checkpoint in cautious reading. No legal conclusion should be drawn from these general notes.",
  },
  {
    name: "Retail Context",
    direct:
      "Retail context singapore describes where and how supplements are encountered: pharmacy counters with professional staff present, specialty health aisles, supermarket shelves, and online marketplaces or direct seller sites. Each setting changes what help is available at the moment of purchase and how completely physical packaging can be inspected before paying.",
    supporting:
      "Understanding retail context singapore helps interpret why the same supplements singapore searches surface different follow-up questions. In-store pharmacy visits may allow ingredient questions at the counter; self-service supermarket aisles rely on label reading alone; online flows add seller verification to supplement label singapore review. None of these channels is described here as superior—only different in access to guidance and in how completely packaging is inspectable before payment. The aim is neutral orientation for search and reading, not channel endorsement or discouragement.",
  },
];

export const seoConfig: SEOConfig = {
  title: "Supplements Singapore | Definitions",
  description:
    "Definitions of core supplement-related terms commonly used in Singapore, including labels, serving information, importer details, and retail context.",
  canonical: `${BASE}/definitions`,
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Supplements Singapore | Definitions",
    description:
      "Definitions of core supplement-related terms commonly used in Singapore, including labels, serving information, importer details, and retail context.",
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
  name: "Supplements Singapore — Core definitions",
  description: seoConfig.description,
  inLanguage: "en-SG",
  url: seoConfig.canonical,
  hasDefinedTerm: termBlocks.map((t) => ({
    "@type": "DefinedTerm",
    name: t.name,
    description: `${t.direct} ${t.supporting}`,
  })),
};

const Definitions: React.FC = () => {
  return (
    <div>
      <SEOHead {...seoConfig} />
      <p className="ed-p definitions-intro">
        This page defines vocabulary you will see in supplements singapore search
        results, on supplement label singapore packaging, and in discussions of
        retail context singapore. It explains what the phrase usually signals, what
        supplement labels typically include, what serving information on supplement
        labels is for, what importer information on supplement packaging is meant to
        convey, and how retail setting shapes reading habits. These notes support SEO
        and answer-engine style queries with short, quotable explanations. They are
        not medical or legal advice, not product guidance, and not a substitute for
        Health Sciences Authority publications or your clinician’s judgment.
      </p>

      {termBlocks.map((t) => (
        <section key={t.name} className="ed-section">
          <h2 className="ed-h2">{t.name}</h2>
          <p className="ed-p">{t.direct}</p>
          <p className="ed-p">{t.supporting}</p>
        </section>
      ))}

      <section className="ed-section">
        <h2 className="ed-h2">Key Takeaway</h2>
        <div className="ed-key-takeaway">
          Supplements singapore is a broad local topic spanning channels and label
          literacy. Supplement label singapore text carries ingredients, serving
          information, and often importer lines that matter for traceability. Retail
          context singapore changes how much help you have while reading labels in
          place. These definitions stay descriptive: they do not recommend products,
          doses, or legal interpretations—only shared language for clearer search and
          reading.
        </div>
      </section>

      <section className="ed-section">
        <h2 className="ed-h2">Related Context</h2>
        <p className="ed-p">
          For a wider hub overview of buying context, regulation framing, and
          comparison habits, see the{" "}
          <a href="https://supplementsingapore.neoi.jp">Supplements Singapore guide</a>
          .
        </p>
      </section>
    </div>
  );
};

export default Definitions;
