import { fetchAPI } from "@/lib/api/fetch-api";
import { getStrapiURL } from "@/lib/api/get-strapi-url";
import qs from "qs";

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
  const path = "/api/pages";
  const BASE_URL = getStrapiURL();

  const url = new URL(path, BASE_URL);
  url.search = allPageSlugsQuery;
  const response = await fetchAPI(url.href, { method: "GET" });

  const pages = response.data ?? [];
  if (!Array.isArray(pages)) return [];

  return pages
    .map((page: { slug?: string }) => page.slug)
    .filter((slug): slug is string => Boolean(slug));
}

export async function usePageBySlug(slug: string) {
  const path = "/api/pages";
  const BASE_URL = getStrapiURL();

  const url = new URL(path, BASE_URL);
  url.search = dynamicPageQuery(slug);
  const response = await fetchAPI(url.href, {
    method: "GET",
  });
  return response;
}
