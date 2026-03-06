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

const s: Record<string, React.CSSProperties> = {
  page: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "0 16px 48px",
    fontFamily:
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    color: "#111",
    lineHeight: 1.7,
  },
  sectionBlock: {
    borderTop: "1px solid #d0d0d0",
    paddingTop: "28px",
    marginTop: "28px",
  },
  sectionLabel: {
    fontSize: "11px",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "#777",
    marginBottom: "8px",
  },
  h2: {
    fontSize: "18px",
    fontWeight: 600,
    margin: "0 0 14px",
    color: "#111",
  },
  categoryBlock: {
    borderLeft: "2px solid #d0d0d0",
    paddingLeft: "16px",
    marginBottom: "28px",
  },
  categoryNumber: {
    fontSize: "11px",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: "#999",
    marginBottom: "4px",
  },
  categoryTitle: {
    fontSize: "16px",
    fontWeight: 600,
    margin: "0 0 10px",
    color: "#111",
  },
  p: {
    margin: "0 0 12px",
    fontSize: "15px",
  },
  crossRefBox: {
    borderTop: "1px solid #d0d0d0",
    borderBottom: "1px solid #d0d0d0",
    padding: "16px 0",
    marginTop: "28px",
    fontSize: "14px",
    color: "#444",
  },
  link: {
    color: "#0b63ce",
    textDecoration: "none",
  },
};

const SupplementCategoriesOverview: React.FC = () => {
  return (
    <div style={s.page}>

      {/* Section 1 — Definition Block */}
      <section style={s.sectionBlock}>
        <p style={s.sectionLabel}>Definition</p>
        <h2 style={s.h2}>What "Supplements Singapore" Refers To</h2>
        <p style={s.p}>
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
      <section style={s.sectionBlock}>
        <p style={s.sectionLabel}>Major Categories</p>
        <h2 style={s.h2}>Supplement Categories Available in Singapore</h2>

        <div style={s.categoryBlock}>
          <p style={s.categoryNumber}>Category 1</p>
          <h3 style={s.categoryTitle}>Vitamins and Minerals</h3>
          <p style={s.p}>
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

        <div style={s.categoryBlock}>
          <p style={s.categoryNumber}>Category 2</p>
          <h3 style={s.categoryTitle}>Herbal Products</h3>
          <p style={s.p}>
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

        <div style={s.categoryBlock}>
          <p style={s.categoryNumber}>Category 3</p>
          <h3 style={s.categoryTitle}>Probiotics and Digestive Support</h3>
          <p style={s.p}>
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

        <div style={s.categoryBlock}>
          <p style={s.categoryNumber}>Category 4</p>
          <h3 style={s.categoryTitle}>Protein and Sports Nutrition</h3>
          <p style={s.p}>
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

        <div style={{ ...s.categoryBlock, marginBottom: 0 }}>
          <p style={s.categoryNumber}>Category 5</p>
          <h3 style={s.categoryTitle}>Beauty-Oriented Supplements</h3>
          <p style={s.p}>
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
      <section style={s.sectionBlock}>
        <p style={s.sectionLabel}>Retail Context</p>
        <h2 style={s.h2}>Where Supplements Are Sold in Singapore</h2>
        <p style={s.p}>
          Supplements in Singapore are sold through three primary retail
          channels: licensed pharmacy chains, supermarkets and convenience
          retailers, and online marketplaces.
        </p>
        <p style={s.p}>
          <strong>Pharmacies</strong> offer direct access to pharmacists who can
          assist with label review, ingredient queries, and general purchasing
          context. The product range is typically curated, and products are
          stocked under professional supervision.
        </p>
        <p style={s.p}>
          <strong>Supermarkets</strong> stock a more limited but broadly
          accessible range, focused on commonly purchased categories such as
          vitamins, minerals, and some herbal products. These are available
          without pharmacist oversight.
        </p>
        <p style={s.p}>
          <strong>Online marketplaces</strong> offer the widest selection and
          easiest price comparison. They also require the most independent
          verification: buyer due diligence on seller identity, product
          completeness, and labelling compliance is important before purchasing
          through these channels.
        </p>
      </section>

      {/* Section 4 — Regulatory Context */}
      <section style={s.sectionBlock}>
        <p style={s.sectionLabel}>Regulatory Context</p>
        <h2 style={s.h2}>HSA Classification and Labelling Framework</h2>
        <p style={s.p}>
          Health supplements in Singapore are regulated by the Health Sciences
          Authority (HSA). The HSA distinguishes between registered health
          products — which have undergone formal pre-market evaluation — and
          health supplements, which are subject to post-market oversight and
          labelling requirements rather than pre-market registration in most
          cases.
        </p>
        <p style={s.p}>
          Labelling requirements under the HSA framework include restrictions on
          therapeutic claim language, ingredient disclosure obligations, and
          safety information requirements. Products making claims that exceed
          permitted categories may be subject to regulatory action.
        </p>
        <p style={s.p}>
          This regulatory framework establishes a minimum standard. It governs
          what can be stated on a label and what safety documentation sellers
          must maintain — it does not constitute an assessment of suitability
          for any individual purchaser. Consumers should apply their own
          label-reading process in addition to relying on regulatory compliance
          as a baseline.
        </p>
        <p style={{ ...s.p, marginBottom: 0, color: "#666", fontSize: "13px" }}>
          This section is informational only and does not constitute legal or
          regulatory advice.
        </p>
      </section>

      {/* Section 5 — Cross Reference */}
      <div style={s.crossRefBox}>
        <strong>Related guide:</strong>{" "}
        <a
          href="https://supplementsingapore.neoi.jp/"
          style={s.link}
        >
          Supplements Singapore guide
        </a>{" "}
        — a broader overview of the supplements singapore topic, covering
        pharmacy vs online buying, label comparison, and regulation context.
      </div>

    </div>
  );
};

export default SupplementCategoriesOverview;
