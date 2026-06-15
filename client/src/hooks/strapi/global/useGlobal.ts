import { fetchAPI } from "@/lib/api/fetch-api";
import {
  STRAPI_REVALIDATE_SECONDS,
  STRAPI_TAGS,
} from "@/lib/api/cache-tags";
import { getStrapiURL } from "@/lib/api/get-strapi-url";
import qs from "qs";

const globalSettingQuery = qs.stringify(
  {
    populate: {
      header: {
        populate: {
          logo: {
            populate: {
              image: true,
            },
          },
          navigation: true,
          callToAction: true,
        },
      },
      footer: {
        populate: "*",
      },
    },
  },
  {
    encodeValuesOnly: true,
  },
);
export async function getGlobal() {
  const path = "/api/global";
  const BASE_URL = getStrapiURL();

  const url = new URL(path, BASE_URL);
  url.search = globalSettingQuery;
  const response = await fetchAPI(url.href, {
    method: "GET",
    next: {
      tags: [STRAPI_TAGS.global],
      revalidate: STRAPI_REVALIDATE_SECONDS,
    },
  });
  return response;
}
