export const STRAPI_TAGS = {
  homePage: "strapi:home-page",
  global: "strapi:global",
  pages: "strapi:pages",
  projects: "strapi:projects",
} as const;

/** Fallback TTL when a webhook does not fire (seconds). */
export const STRAPI_REVALIDATE_SECONDS = 3600;
