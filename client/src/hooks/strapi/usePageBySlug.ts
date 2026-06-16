import { fetchAPI } from "@/lib/api/fetch-api";
import { STRAPI_FETCH_CACHE, STRAPI_TAGS } from "@/lib/api/cache-tags";
import { getStrapiURL } from "@/lib/api/get-strapi-url";
import qs from "qs";
import { cache } from "react";

const allPageSlugsQuery = qs.stringify(
  {
    fields: ["slug"],
    pagination: {
      pageSize: 100,
    },
  },
  { encodeValuesOnly: true },
);

const dynamicPageQuery = (slug: string) =>
  qs.stringify(
    {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: {
        blocks: {
          populate: "*",
        },
      },
    },
    { encodeValuesOnly: true },
  );

export async function fetchAllPageSlugs(): Promise<string[]> {
  try {
    const path = "/api/pages";
    const BASE_URL = getStrapiURL();

    const url = new URL(path, BASE_URL);
    url.search = allPageSlugsQuery;
    const response = await fetchAPI(url.href, {
      method: "GET",
      next: {
        ...STRAPI_FETCH_CACHE,
        tags: [STRAPI_TAGS.pages],
      },
    });

    const pages = response.data ?? [];
    if (!Array.isArray(pages)) return [];

    return pages
      .map((page: { slug?: string }) => page.slug)
      .filter((slug): slug is string => Boolean(slug));
  } catch {
    return [];
  }
}

export const getPageBySlug = cache(async (slug: string) => {
  const path = "/api/pages";
  const BASE_URL = getStrapiURL();

  const url = new URL(path, BASE_URL);
  url.searchParams.append("filters[slug][$eq]", slug);
  url.searchParams.append("populate[blocks][populate]", "*");
  const response = await fetchAPI(url.href, {
    method: "GET",
    next: {
      ...STRAPI_FETCH_CACHE,
      tags: [STRAPI_TAGS.pages, `strapi:page:${slug}`],
    },
  });
  return response;
});
