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

export async function useArticle(documentId: string) {
  const path = `/api/projects/${documentId}`;
  const BASE_URL = getStrapiURL();

  const url = new URL(path, BASE_URL);
  url.search = articleQuery();
  const response = await fetchAPI(url.href, {
    method: "GET",
  });
  return response;
}
