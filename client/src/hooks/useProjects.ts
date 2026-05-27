import { fetchAPI } from "@/lib/api/fetch-api";
import { getStrapiURL } from "@/lib/api/get-strapi-url";
import qs from "qs";

const articleQuery = () =>
  qs.stringify(
    {
      populate: {
        details: {
          populate: "*",
        },
        href: {
          populate: "*",
        },
        projects: {
          populate: "*",
        },
      },
    },
    {
      encodeValuesOnly: true,
    },
  );

const allProjectIdsQuery = qs.stringify(
  {
    fields: ["documentId"],
    pagination: {
      pageSize: 100,
    },
  },
  { encodeValuesOnly: true },
);

export async function fetchAllProjectIds(): Promise<string[]> {
  try {
    const path = "/api/projects";
    const BASE_URL = getStrapiURL();

    const url = new URL(path, BASE_URL);
    url.search = allProjectIdsQuery;
    const response = await fetchAPI(url.href, { method: "GET" });

    const projects = response.data ?? [];
    if (!Array.isArray(projects)) return [];

    return projects
      .map((project: { documentId?: string }) => project.documentId)
      .filter((id): id is string => Boolean(id));
  } catch {
    return [];
  }
}

export async function getArticle(documentId: string) {
  const path = `/api/projects/${documentId}`;
  const BASE_URL = getStrapiURL();

  const url = new URL(path, BASE_URL);
  url.search = articleQuery();
  const response = await fetchAPI(url.href, {
    method: "GET",
  });
  return response;
}
