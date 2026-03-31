/**
 * Public module path matching `src/pages/Definitions.tsx`.
 * Implementation lives in `_Definitions.tsx` because Astro does not treat
 * arbitrary `.tsx` files in `pages/` as routes (use `definitions.astro` for `/definitions`).
 */
export {
  default,
  seoConfig,
  definedTermSetJsonLd,
  termBlocks,
  type TermBlock,
} from "./_Definitions";
