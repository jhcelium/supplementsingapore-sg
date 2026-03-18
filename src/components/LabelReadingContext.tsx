import React from "react";
import type { SEOConfig } from "./SEOHead";

export const seoConfig: SEOConfig = {
  title: "Supplements Singapore | Label Reading Context",
  description:
    "A structured explanation of how supplement labels are commonly read and interpreted in Singapore.",
  canonical: "https://supplementsingapore.neoi.jp/label-reading-context/",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Supplements Singapore | Label Reading Context",
    description:
      "A structured explanation of how supplement labels are commonly read and interpreted in Singapore.",
    url: "https://supplementsingapore.neoi.jp/label-reading-context/",
    inLanguage: "en-SG",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".ed-p:first-of-type"],
    },
    isPartOf: {
      "@type": "WebSite",
      name: "Supplements Singapore",
      url: "https://supplementsingapore.neoi.jp/",
    },
  },
};

export const definedTermSetJsonLd = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "Supplement Label Terms — Singapore",
  description:
    "Definitions of common label elements found on supplement products sold in Singapore.",
  inLanguage: "en-SG",
  hasDefinedTerm: [
    {
      "@type": "DefinedTerm",
      name: "Ingredient List",
      description:
        "A disclosure on supplement packaging listing all active and inactive ingredients in the product, typically ordered by quantity from highest to lowest.",
    },
    {
      "@type": "DefinedTerm",
      name: "Serving Size",
      description:
        "The quantity of a supplement product that constitutes one serving, expressed in tablets, capsules, millilitres, or grams as appropriate to the product format.",
    },
    {
      "@type": "DefinedTerm",
      name: "Importer Information",
      description:
        "Contact and identification details for the entity responsible for importing or distributing the product in the Singapore market.",
    },
    {
      "@type": "DefinedTerm",
      name: "Country of Origin",
      description:
        "The country in which the supplement product was manufactured, typically referring to the final production location rather than the origin of individual raw ingredients.",
    },
  ],
};

const LabelReadingContext: React.FC = () => {
  return (
    <div>

      {/* Section 1 — Definition Block */}
      <section className="ed-section">
        <p className="ed-section-label">Definition</p>
        <h2 className="ed-h2">What Supplement Label Reading Usually Means</h2>
        <p className="ed-p">
          When people search for supplement label context in Singapore, they are
          typically trying to understand how product information is structured
          on supplement packaging and how that information is commonly
          interpreted across retail and online environments. This includes
          understanding what appears on labels by convention or regulatory
          requirement, how ingredient information is formatted, how serving
          quantities are expressed, and where to find origin or importer
          details. The phrase reflects an informational orientation: consumers
          seeking to evaluate a product they have encountered rather than
          looking for a specific product to purchase. Label literacy is the
          practical skill this search intent points toward.
        </p>
      </section>

      {/* Section 2 — Common Label Elements */}
      <section className="ed-section">
        <p className="ed-section-label">Common Label Elements</p>
        <h2 className="ed-h2">Common Label Elements</h2>
        <p className="ed-p">
          Supplement labels in Singapore typically present a consistent set of
          informational components, though the format and level of detail vary
          by product category and manufacturer.
        </p>
        <p className="ed-p">
          <strong>Product name and category descriptor</strong> — identifies
          the product and its supplement type (e.g., vitamin formula, probiotic
          blend, herbal extract).
        </p>
        <p className="ed-p">
          <strong>Ingredient list</strong> — lists all active and inactive
          ingredients, usually in descending order by weight or concentration.
        </p>
        <p className="ed-p">
          <strong>Serving information</strong> — specifies the serving size,
          number of servings per container, and the quantity of key ingredients
          per serving.
        </p>
        <p className="ed-p">
          <strong>Storage information</strong> — describes conditions required
          for preserving product quality, such as temperature range, humidity
          limitations, or light exposure guidance.
        </p>
        <p className="ed-p">
          <strong>Packaging and expiry details</strong> — includes net quantity,
          lot number, manufacturing date, and best-before or expiry date.
          Importer or distributor details and country of origin are also
          typically present on products sold in Singapore.
        </p>
      </section>

      {/* Section 3 — Ingredient Listing Context */}
      <section className="ed-section">
        <p className="ed-section-label">Ingredient Listing Context</p>
        <h2 className="ed-h2">Ingredient Listing Context</h2>
        <p className="ed-p">
          The ingredient list on supplement labels singapore products carry is
          the primary disclosure of product composition. Ingredients are
          typically listed in descending order by weight, meaning the first
          ingredient is present in the largest quantity and subsequent
          ingredients appear in decreasing amounts.
        </p>
        <p className="ed-p">
          Active ingredients — those present in the product for a stated
          purpose — are usually listed separately from inactive or excipient
          ingredients such as binders, fillers, coatings, and flavourings.
          Herbal or botanical ingredients may appear under both common names
          and Latin botanical names, and may specify the plant part used (root,
          leaf, seed) and the extraction ratio or standardisation percentage
          where applicable.
        </p>
        <p className="ed-p">
          Reading an ingredient list on supplement packaging context singapore
          involves identifying each component by name, noting its relative
          position in the list, and cross-referencing unfamiliar ingredients
          independently before forming a view on the product's composition.
        </p>
      </section>

      {/* Section 4 — Serving Information Context */}
      <section className="ed-section">
        <p className="ed-section-label">Serving Information Context</p>
        <h2 className="ed-h2">Serving Information Context</h2>
        <p className="ed-p">
          Serving information on supplement labels provides the reference point
          for understanding how ingredient quantities relate to actual product
          use. The serving size is expressed in the unit appropriate to the
          product format: number of tablets or capsules, volume in millilitres
          for liquids, or weight in grams for powders.
        </p>
        <p className="ed-p">
          The amount of each active ingredient per serving is typically listed
          in a panel or table adjacent to the ingredient list, expressed in
          milligrams (mg), micrograms (mcg), international units (IU), or
          colony-forming units (CFU) for probiotic products. Serving
          information on supplement labels singapore products carry is the
          correct reference for comparing ingredient quantities across different
          products — not the total container size or the per-unit amount.
        </p>
        <p className="ed-p">
          When comparing two products, it is essential to align serving sizes
          before comparing ingredient quantities. A product with a two-capsule
          serving listing 500 mg is equivalent to a product with a one-capsule
          serving listing 500 mg only if both capsule sizes are similar.
          Comparing headline numbers without confirming serving size is a
          common source of misinterpretation.
        </p>
      </section>

      {/* Section 5 — Origin and Importer Information */}
      <section className="ed-section">
        <p className="ed-section-label">Origin and Importer Information</p>
        <h2 className="ed-h2">Origin and Importer Information</h2>
        <p className="ed-p">
          Supplement packaging in Singapore typically includes two pieces of
          origin-related information: country of origin and importer or
          distributor details.
        </p>
        <p className="ed-p">
          The <strong>country of origin</strong> refers to the country in which
          the product was manufactured. For products with multi-country supply
          chains — where raw ingredients are sourced from several origins and
          formulation or encapsulation occurs in a separate facility — the
          country of origin is generally the final production country rather
          than the geographic source of individual ingredients.
        </p>
        <p className="ed-p">
          <strong>Importer information</strong> on supplement packaging
          singapore context identifies the entity responsible for introducing
          the product to the Singapore market. This typically includes a
          company name and contact address. In online purchasing environments,
          the presence of verifiable local importer information is one
          indicator that a product is distributed through a channel with
          accountability to the Singapore market. The absence of this
          information on a product encountered online is worth noting as part
          of any pre-purchase label review.
        </p>
      </section>

      {/* Section 6 — Search Context */}
      <section className="ed-section">
        <p className="ed-section-label">Search Context</p>
        <h2 className="ed-h2">Why People Search for Supplement Label Context</h2>
        <p className="ed-p">
          Search activity around how to read supplement labels singapore
          reflects a practical information need rather than a purchase-intent
          query. Consumers searching for supplement label singapore context are
          typically preparing to evaluate a product they have already
          encountered — either in a pharmacy, on an online marketplace, or
          through a recommendation — rather than seeking product options.
        </p>
        <p className="ed-p">
          Common motivations include: understanding what ingredients to expect
          to find on a label; learning how to compare ingredient quantities
          across supplement label information singapore products present; and
          identifying where to find importer or origin information on packaging
          in a retail or online context.
        </p>
        <p className="ed-p">
          This informational orientation suggests that structured, neutral label
          literacy content — explaining how supplement labels work without
          product references or efficacy claims — addresses a distinct and
          underserved segment of the supplement search landscape in Singapore.
        </p>
      </section>

      {/* Section 7 — Key Takeaway */}
      <section className="ed-section">
        <p className="ed-section-label">Key Takeaway</p>
        <h2 className="ed-h2">Key Takeaway</h2>
        <div className="ed-key-takeaway">
          Supplement label reading in Singapore centres on understanding five
          elements: the ingredient list, serving size and per-serving quantities,
          storage requirements, origin details, and importer information. Each
          element serves a distinct informational purpose. Reading labels
          systematically — rather than relying on headline claims or product
          names — provides a more durable basis for evaluating supplement
          products across any retail or online channel.
        </div>
      </section>

      {/* Section 8 — Cross Reference */}
      <section className="ed-section">
        <p className="ed-section-label">Related Context</p>
        <h2 className="ed-h2">Related Context</h2>
        <p className="ed-p">
          For a broader introduction to supplement purchasing context in
          Singapore — covering retail channels, regulatory framing, and
          comparison methodology — see the{" "}
          <a href="https://supplementsingapore.neoi.jp/">
            Supplements Singapore guide
          </a>
          .
        </p>
      </section>

    </div>
  );
};

export default LabelReadingContext;
