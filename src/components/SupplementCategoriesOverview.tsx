import React from "react";
import type { SEOConfig } from "./SEOHead";

export const seoConfig: SEOConfig = {
  title: "Supplements Singapore | Category Overview",
  description:
    "A structured overview of supplement categories in Singapore, including regulatory framing and purchasing context.",
  canonical: "https://supplementsingapore.neoi.jp/supplement-categories-overview/",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Supplements Singapore | Category Overview",
    description:
      "A structured overview of supplement categories in Singapore, including regulatory framing and purchasing context.",
    url: "https://supplementsingapore.neoi.jp/supplement-categories-overview/",
    isPartOf: {
      "@type": "WebSite",
      name: "Supplements Singapore",
      url: "https://supplementsingapore.neoi.jp/",
    },
  },
};

const SupplementCategoriesOverview: React.FC = () => {
  return (
    <div>

      {/* Section 1 — Definition Block */}
      <section className="ed-section">
        <p className="ed-section-label">Definition</p>
        <h2 className="ed-h2">What "Supplements Singapore" Refers To</h2>
        <p className="ed-p">
          In Singapore's retail and regulatory context, "supplements" refers to
          a broad category of consumable products intended to complement general
          diet and lifestyle — not to diagnose, treat, or prevent any condition.
          The category includes vitamins, minerals, herbal extracts, probiotics,
          protein products, and functional food formulas. These products are
          regulated under the Health Sciences Authority (HSA) framework, which
          establishes labelling standards and restricts certain types of
          therapeutic claims. Products sold as supplements occupy a distinct
          classification from registered medicines. Singapore residents encounter
          these products across pharmacies, supermarkets, and online platforms,
          each operating within the same regulatory baseline.
        </p>
      </section>

      {/* Section 2 — Major Categories */}
      <section className="ed-section">
        <p className="ed-section-label">Major Categories</p>
        <h2 className="ed-h2">Supplement Categories Available in Singapore</h2>

        <div className="ed-category-block">
          <p className="ed-category-number">Category 1</p>
          <h3 className="ed-h3">Vitamins and Minerals</h3>
          <p className="ed-p">
            Vitamin and mineral supplements are among the most widely stocked
            categories in Singapore pharmacies and supermarkets. They range
            from single-nutrient formats — a standalone vitamin C tablet or a
            zinc capsule — to broad multi-nutrient formulas combining a range
            of micronutrients in a single serving. Labels typically list each
            ingredient by its chemical or common name, with amounts expressed
            per serving. The regulatory framework requires that claims on these
            products remain within permitted categories and do not describe
            treatment of specific conditions. Serving sizes and forms vary
            significantly across products and brands.
          </p>
        </div>

        <div className="ed-category-block">
          <p className="ed-category-number">Category 2</p>
          <h3 className="ed-h3">Herbal Products</h3>
          <p className="ed-p">
            Herbal supplements in Singapore include standardised plant extracts,
            traditional botanical preparations, and combination formulas drawing
            on both Asian and Western herbal traditions. This category is
            characterised by ingredient variation: the same plant may appear
            under different extraction ratios, concentration levels, or
            standardisation descriptors. Label transparency varies across
            products. The HSA applies the same labelling framework to herbal
            products as to other supplements, including restrictions on
            therapeutic claim language. When evaluating herbal products,
            reviewing the full ingredient list and extraction method — where
            disclosed — provides more useful information than the product name
            alone.
          </p>
        </div>

        <div className="ed-category-block">
          <p className="ed-category-number">Category 3</p>
          <h3 className="ed-h3">Probiotics and Digestive Support</h3>
          <p className="ed-p">
            Probiotic supplements contain live microorganism strains, typically
            from the Lactobacillus or Bifidobacterium families. Labels generally
            disclose the strain name, colony-forming unit (CFU) count, and
            storage requirements. Digestive support products may also include
            prebiotic fibres, digestive enzymes, or combination formulas pairing
            probiotics with other ingredients. In Singapore, this category is
            stocked across pharmacy and online channels. Label review for this
            category should include the CFU count per serving, the specific
            strains listed, and any storage conditions that affect viability
            after purchase.
          </p>
        </div>

        <div className="ed-category-block">
          <p className="ed-category-number">Category 4</p>
          <h3 className="ed-h3">Protein and Sports Nutrition</h3>
          <p className="ed-p">
            Protein supplements — including whey, casein, plant-based protein
            concentrates, and blended formats — are sold through sports retail
            channels, pharmacies, and online platforms in Singapore. The category
            also includes amino acid products, creatine formulas, and
            pre-workout or recovery formulas. Label review for this category
            should focus on protein content per serving, total caloric value,
            and added ingredients beyond the primary protein source. Many
            products in this category include multiple additives: flavourings,
            sweeteners, and secondary active ingredients. Comparing products
            requires consistent reference to the per-serving nutritional panel
            rather than the headline protein claim.
          </p>
        </div>

        <div className="ed-category-block">
          <p className="ed-category-number">Category 5</p>
          <h3 className="ed-h3">Beauty-Oriented Supplements</h3>
          <p className="ed-p">
            Beauty-oriented supplements in Singapore typically include collagen
            peptide products, biotin formulas, and combination products pairing
            collagen with vitamins C, E, or other antioxidant ingredients.
            Collagen products vary by source (bovine, marine, plant-derived),
            molecular weight, and hydrolysis method. These factors affect label
            descriptors but do not translate directly to uniform claims. Labels
            for this category should be read for ingredient source disclosure,
            serving size, and any allergen statements — particularly relevant
            for marine-sourced collagen products. The category is widely
            available across online platforms and pharmacy chains in Singapore.
          </p>
        </div>
      </section>

      {/* Section 3 — Retail Context */}
      <section className="ed-section">
        <p className="ed-section-label">Retail Context</p>
        <h2 className="ed-h2">Where Supplements Are Sold in Singapore</h2>
        <p className="ed-p">
          Supplements in Singapore are sold through three primary retail
          channels: licensed pharmacy chains, supermarkets and convenience
          retailers, and online marketplaces.
        </p>
        <p className="ed-p">
          <strong>Pharmacies</strong> offer direct access to pharmacists who can
          assist with label review, ingredient queries, and general purchasing
          context. The product range is typically curated, and products are
          stocked under professional supervision.
        </p>
        <p className="ed-p">
          <strong>Supermarkets</strong> stock a more limited but broadly
          accessible range, focused on commonly purchased categories such as
          vitamins, minerals, and some herbal products. These are available
          without pharmacist oversight.
        </p>
        <p className="ed-p">
          <strong>Online marketplaces</strong> offer the widest selection and
          easiest price comparison. They also require the most independent
          verification: buyer due diligence on seller identity, product
          completeness, and labelling compliance is important before purchasing
          through these channels.
        </p>
      </section>

      {/* Section 4 — Regulatory Context */}
      <section className="ed-section">
        <p className="ed-section-label">Regulatory Context</p>
        <h2 className="ed-h2">HSA Classification and Labelling Framework</h2>
        <p className="ed-p">
          Health supplements in Singapore are regulated by the Health Sciences
          Authority (HSA). The HSA distinguishes between registered health
          products — which have undergone formal pre-market evaluation — and
          health supplements, which are subject to post-market oversight and
          labelling requirements rather than pre-market registration in most
          cases.
        </p>
        <p className="ed-p">
          Labelling requirements under the HSA framework include restrictions on
          therapeutic claim language, ingredient disclosure obligations, and
          safety information requirements. Products making claims that exceed
          permitted categories may be subject to regulatory action.
        </p>
        <p className="ed-p">
          This regulatory framework establishes a minimum standard. It governs
          what can be stated on a label and what safety documentation sellers
          must maintain — it does not constitute an assessment of suitability
          for any individual purchaser. Consumers should apply their own
          label-reading process in addition to relying on regulatory compliance
          as a baseline.
        </p>
        <p className="ed-note">
          This section is informational only and does not constitute legal or
          regulatory advice.
        </p>
      </section>

      {/* Section 5 — Cross Reference */}
      <div className="ed-cross-ref">
        <strong>Related guide:</strong>{" "}
        <a href="https://supplementsingapore.neoi.jp/">
          Supplements Singapore guide
        </a>{" "}
        — a broader overview of the supplements singapore topic, covering
        pharmacy vs online buying, label comparison, and regulation context.
      </div>

    </div>
  );
};

export default SupplementCategoriesOverview;
