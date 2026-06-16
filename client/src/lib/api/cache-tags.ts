export const STRAPI_TAGS = {
  homePage: "strapi:home-page",
  global: "strapi:global",
  pages: "strapi:pages",
  projects: "strapi:projects",
} as const;

/**
 * Keep Strapi data cached until a webhook calls revalidateTag.
 * Do not use a time-based TTL — background revalidation can fail when
 * Strapi Cloud is slow, and a silent empty response would wipe the page.
 */
export const STRAPI_FETCH_CACHE = {
  revalidate: false,
} as const;
