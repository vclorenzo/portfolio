import { fetchAPI } from "@/lib/api/fetch-api";
import {
  STRAPI_REVALIDATE_SECONDS,
  STRAPI_TAGS,
} from "@/lib/api/cache-tags";
import { getStrapiURL } from "@/lib/api/get-strapi-url";
import qs from "qs";

// to update query params, use qs.stringify
const homePageQuery = qs.stringify({
  populate: {
    blocks: {
      populate: "*",
    },
  },
});

export async function getHomepage() {
  const path = "/api/home-page";
  const BASE_URL = getStrapiURL();

  const url = new URL(path, BASE_URL);
  url.search = homePageQuery;
  const response = await fetchAPI(url.href, {
    method: "GET",
    next: {
      tags: [STRAPI_TAGS.homePage],
      revalidate: STRAPI_REVALIDATE_SECONDS,
    },
  });
  return response;
}
