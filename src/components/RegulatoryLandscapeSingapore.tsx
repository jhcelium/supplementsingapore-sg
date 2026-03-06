import React from "react";
import type { SEOConfig } from "./SEOHead";

export const seoConfig: SEOConfig = {
  title: "Supplements Singapore | Regulatory Landscape",
  description:
    "Understanding how supplements are classified and regulated in Singapore.",
  canonical:
    "https://supplementsingapore.neoi.jp/regulatory-landscape-singapore/",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Supplements Singapore | Regulatory Landscape",
    description:
      "Understanding how supplements are classified and regulated in Singapore.",
    url: "https://supplementsingapore.neoi.jp/regulatory-landscape-singapore/",
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
    lineHeight: 1.75,
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
    margin: "0 0 16px",
    color: "#111",
  },
  p: {
    margin: "0 0 14px",
    fontSize: "15px",
  },
  labelTable: {
    width: "100%",
    borderCollapse: "collapse" as const,
    fontSize: "14px",
    margin: "16px 0 0",
  },
  th: {
    borderBottom: "1px solid #d0d0d0",
    borderTop: "1px solid #d0d0d0",
    padding: "8px 12px",
    textAlign: "left" as const,
    fontWeight: 600,
    background: "#fafafa",
  },
  td: {
    borderBottom: "1px solid #e8e8e8",
    padding: "8px 12px",
    verticalAlign: "top" as const,
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

const RegulatoryLandscapeSingapore: React.FC = () => {
  return (
    <div style={s.page}>

      {/* Section 1 — Intro Definition */}
      <section style={s.sectionBlock}>
        <p style={s.sectionLabel}>Intro Definition</p>
        <h2 style={s.h2}>
          Positioning Supplements Between Food and Medicinal Products
        </h2>
        <p style={s.p}>
          In Singapore's regulatory framework, health supplements occupy a
          distinct position between general food products and registered
          medicinal products. They are not classified as food under the Sale of
          Food Act, nor do they typically fall within the registration
          requirements applicable to pharmaceutical drugs and therapeutic
          products under the Health Products Act. This intermediate
          classification reflects both the nature of the products — consumable
          items intended to complement diet rather than treat disease — and the
          regulatory approach taken by the Health Sciences Authority (HSA) to
          manage a product category characterised by substantial variety and
          volume.
        </p>
        <p style={s.p}>
          Supplements singapore residents purchase exist along a spectrum from
          single-ingredient micronutrient capsules to multi-component botanical
          formulas. The regulatory framework addresses this variety not through
          uniform pre-market evaluation, but through a combination of
          post-market surveillance, labelling requirements, and category-based
          classification criteria. Understanding where a product sits within
          this framework provides context for how its label should be read and
          what its regulatory status does and does not convey.
        </p>
      </section>

      {/* Section 2 — Classification Context */}
      <section style={s.sectionBlock}>
        <p style={s.sectionLabel}>Classification Context</p>
        <h2 style={s.h2}>
          Health Products and Medicinal Products: Classification Distinctions
        </h2>
        <p style={s.p}>
          The Health Products Act (HPA) provides the primary legislative
          framework within which the HSA classifies and regulates health-related
          consumables in Singapore. Under this framework, products are assessed
          according to their composition, intended purpose, and the nature of
          any claims made on their labelling or promotional materials.
        </p>
        <p style={s.p}>
          <strong>Medicinal products</strong> — including prescription drugs,
          over-the-counter medicines, and therapeutic biologicals — are subject
          to pre-market product registration. Approval requires submission of
          safety, efficacy, and quality data. These products may carry specific
          therapeutic claims corresponding to their registered indications.
        </p>
        <p style={s.p}>
          <strong>Health supplements</strong>, by contrast, are generally not
          subject to pre-market product registration under the HPA, though
          specific sub-categories may require listing or notification to the
          HSA before market entry. The key determinant is whether the product
          makes a therapeutic claim: a product that represents itself as
          treating, curing, or preventing a named condition is more likely to
          be assessed under the medicinal product pathway than as a supplement.
        </p>
        <p style={s.p}>
          This classification boundary is significant for consumers because it
          affects what claims are permissible on product labels, what
          documentation sellers must maintain, and what recourse is available
          through the regulatory framework if products are found to be
          mislabelled or non-compliant. The classification does not, however,
          determine individual product suitability or constitute a quality
          endorsement.
        </p>
      </section>

      {/* Section 3 — Labeling Expectations */}
      <section style={s.sectionBlock}>
        <p style={s.sectionLabel}>Labelling Expectations</p>
        <h2 style={s.h2}>Label Components and Disclosure Requirements</h2>
        <p style={s.p}>
          The HSA's labelling framework for health supplements in Singapore
          establishes several expected disclosure categories. These requirements
          exist to ensure that purchasers have access to the information needed
          to make an informed decision about a product's composition and origin.
          The following components represent standard elements of a compliant
          supplement label.
        </p>

        <table style={s.labelTable}>
          <thead>
            <tr>
              <th style={s.th}>Label Component</th>
              <th style={s.th}>Context</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={s.td}><strong>Ingredient listing</strong></td>
              <td style={s.td}>
                Active and inactive ingredients should be identified by name,
                typically in descending order by quantity. Herbal or botanical
                ingredients may include both common and Latin names. The
                ingredient list is the primary reference for evaluating product
                composition and identifying potential overlaps with other
                products.
              </td>
            </tr>
            <tr>
              <td style={s.td}><strong>Serving size</strong></td>
              <td style={s.td}>
                Labels should specify what constitutes one serving — expressed
                as a number of tablets, capsules, millilitres, or grams — and
                indicate the amount of each key ingredient per serving. Serving
                size disclosure allows for meaningful comparison between
                products that may present ingredients at different
                concentrations or formats.
              </td>
            </tr>
            <tr>
              <td style={s.td}><strong>Importer information</strong></td>
              <td style={s.td}>
                Products sold in Singapore should identify the local importer
                or distributor, with contact information sufficient to trace
                the product's Singapore-market entry point. This requirement
                is particularly relevant for products manufactured outside
                Singapore and sold through online or specialist retail
                channels.
              </td>
            </tr>
            <tr>
              <td style={{ ...s.td, borderBottom: "none" }}>
                <strong>Country of origin</strong>
              </td>
              <td style={{ ...s.td, borderBottom: "none" }}>
                The country in which the product was manufactured is a standard
                disclosure element. For products with complex supply chains —
                where raw ingredients are sourced from multiple origins and
                formulation occurs in a separate jurisdiction — the country of
                origin typically refers to the final manufacturing location
                rather than the origin of individual ingredients.
              </td>
            </tr>
          </tbody>
        </table>

        <p style={{ ...s.p, marginTop: "16px" }}>
          Labels that omit one or more of these components, or that present
          required information in a manner that obscures rather than discloses,
          warrant additional scrutiny before purchase. The absence of importer
          information is a commonly observed gap in online marketplace listings.
        </p>
      </section>

      {/* Section 4 — Online Sales Context */}
      <section style={s.sectionBlock}>
        <p style={s.sectionLabel}>Online Sales Context</p>
        <h2 style={s.h2}>
          Marketplace Sellers and the Regulatory Environment
        </h2>
        <p style={s.p}>
          Online marketplaces that operate in Singapore function as
          intermediaries between sellers — which may include manufacturers,
          authorised distributors, parallel importers, and individual resellers
          — and end purchasers. The regulatory obligations that apply to a given
          transaction depend in part on the nature of the seller's relationship
          to the product and to the Singapore market.
        </p>
        <p style={s.p}>
          Authorised distributors operating with formal agreements from product
          manufacturers occupy a different position in the distribution chain
          from independent resellers sourcing products through grey-market or
          parallel import channels. From a purchaser's perspective, the
          practical distinction is most visible in the consistency and
          completeness of product labelling: authorised distribution typically
          results in Singapore-market-specific labels with local importer
          information, while parallel imports may carry labelling intended for
          other markets, potentially with different language, serving size
          conventions, or claim language.
        </p>
        <p style={s.p}>
          The HSA's post-market surveillance framework extends to online
          channels. The authority monitors marketplace listings for products
          that carry prohibited claims, contain undisclosed active ingredients,
          or fail to meet labelling standards. Enforcement actions — including
          product recalls and seller restrictions — are publicly documented
          through the HSA's communications channels.
        </p>
        <p style={s.p}>
          For purchasers, the online sales environment introduces additional
          information asymmetry relative to physical retail. The absence of a
          pharmacist or store associate as an intermediary places greater
          reliance on the buyer's own label-reading and seller-evaluation
          process. Products lacking local importer identification, carrying
          labels not in English, or accompanied by promotional language that
          appears inconsistent with permitted claim categories merit closer
          review before purchase.
        </p>
      </section>

      {/* Section 5 — Cross Link */}
      <div style={s.crossRefBox}>
        <strong>Related overview:</strong>{" "}
        <a href="https://supplementsingapore.neoi.jp/" style={s.link}>
          Supplements Singapore guide
        </a>{" "}
        — a structured introduction to the supplements singapore topic,
        including pharmacy vs online buying, label comparison methodology,
        and regulation context for first-time purchasers.
      </div>

    </div>
  );
};

export default RegulatoryLandscapeSingapore;
