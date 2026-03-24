export interface SEOConfig {
  title: string;
  description: string;
  /** Absolute URL, no trailing slash (except never ends with / for paths). */
  canonical: string;
  jsonLd?: Record<string, unknown>;
}

/**
 * SEOHead documents the SEO configuration for a React-wrapped page.
 * Actual <head> output is produced by BaseLayout → Seo.astro, which supports:
 * - title, meta description, canonical (no trailing slash)
 * - og:title, og:description, og:url, og:image, og:locale, og:site_name
 * - twitter:card (summary_large_image), twitter:title, twitter:description, twitter:image
 * - hreflang (en-SG, x-default)
 * - optional BreadcrumbList JSON-LD via BaseLayout `breadcrumbItems`
 * - per-page JSON-LD via <script type="application/ld+json"> in the page
 *
 * BaseLayout optional props:
 * - ogImage: override default OG/Twitter image (absolute URL)
 * - breadcrumbItems: { name, path }[] — path "" for home; "/about" etc. no trailing slash
 */
const SEOHead: React.FC<SEOConfig> = () => null;

export default SEOHead;
