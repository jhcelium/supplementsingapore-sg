import site from "../../data/site.json";

/** Breadcrumb segment: `path` is "" or "/" for home; otherwise `/segment` with no trailing slash. */
export type BreadcrumbCrumb = { name: string; path: string };

/** Site origin with no trailing slash, e.g. https://example.com */
export function siteOrigin(): string {
  return `https://${site.domain}`;
}

/**
 * Absolute canonical URL for a path, no trailing slash (except origin has no path).
 * path: "/", "", undefined → https://example.com
 * path: "/about/", "/about" → https://example.com/about
 */
export function absoluteUrl(path?: string): string {
  const base = siteOrigin();
  const p = path ?? "/";
  if (p === "/" || p === "") return base;
  let normalized = p.startsWith("/") ? p : `/${p}`;
  if (normalized.length > 1 && normalized.endsWith("/")) {
    normalized = normalized.slice(0, -1);
  }
  return base + normalized;
}
