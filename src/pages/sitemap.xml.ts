import site from "../../data/site.json";
import { listArticleIds } from "../lib/content";

export const prerender = true;

const TODAY = new Date().toISOString().split("T")[0];

interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

export async function GET() {
  const base = `https://${site.domain}`;

  const staticPages: SitemapEntry[] = [
    { loc: base, lastmod: TODAY, changefreq: "weekly", priority: "1.0" },
    { loc: `${base}/about`, lastmod: TODAY, changefreq: "monthly", priority: "0.8" },
    { loc: `${base}/faq`, lastmod: TODAY, changefreq: "monthly", priority: "0.8" },
    { loc: `${base}/supplement-categories-overview`, lastmod: TODAY, changefreq: "monthly", priority: "0.8" },
    { loc: `${base}/regulatory-landscape-singapore`, lastmod: TODAY, changefreq: "monthly", priority: "0.8" },
    { loc: `${base}/supplement-market-context`, lastmod: TODAY, changefreq: "monthly", priority: "0.8" },
    { loc: `${base}/label-reading-context`, lastmod: TODAY, changefreq: "monthly", priority: "0.8" },
    { loc: `${base}/definitions`, lastmod: TODAY, changefreq: "monthly", priority: "0.8" },
  ];

  const articlePages: SitemapEntry[] = listArticleIds().map((id) => ({
    loc: `${base}/articles/${id}`,
    lastmod: TODAY,
    changefreq: "monthly",
    priority: "0.6",
  }));

  const allPages = [...staticPages, ...articlePages];

  const urls = allPages
    .map(
      (p) =>
        `<url>` +
        `<loc>${p.loc}</loc>` +
        `<lastmod>${p.lastmod}</lastmod>` +
        `<changefreq>${p.changefreq}</changefreq>` +
        `<priority>${p.priority}</priority>` +
        `</url>`
    )
    .join("");

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urls +
    `</urlset>`;

  return new Response(body, {
    status: 200,
    headers: { "Content-Type": "application/xml" },
  });
}
