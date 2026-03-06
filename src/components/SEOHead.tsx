export interface SEOConfig {
  title: string;
  description: string;
  canonical: string;
  jsonLd?: Record<string, unknown>;
}

/**
 * SEOHead documents the SEO configuration for a page.
 * In this Astro project, the actual <head> rendering is handled by
 * BaseLayout → Seo.astro. This component provides typed SEO config
 * that is consumed by the wrapping Astro page.
 *
 * Usage in a .tsx component:
 *   export const seoConfig: SEOConfig = { title, description, canonical, jsonLd }
 *
 * Usage in the wrapping .astro page:
 *   import { seoConfig } from "../components/MyPage";
 *   <BaseLayout fullTitle={seoConfig.title} description={seoConfig.description} path="..." />
 */
const SEOHead: React.FC<SEOConfig> = () => null;

export default SEOHead;
