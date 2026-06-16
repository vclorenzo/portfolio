// import type { HomePageResponse } from "@/types/strapi";

const HOME_PAGE_QUERY = "/api/home-page?populate[blocks][populate]=*";

function getStrapiBaseUrl(): string {
  return process.env.STRAPI_API_URL ?? "http://localhost:1337";
}

export async function fetchHomePageContent() {
  const response = await fetch(`${getStrapiBaseUrl()}${HOME_PAGE_QUERY}`);

  if (!response.ok) {
    throw new Error(
      `Strapi request failed: ${response.status} ${response.statusText}`,
    );
  }

  return await response.json();
}
