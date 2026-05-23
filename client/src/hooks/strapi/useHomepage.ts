import { fetchAPI } from "@/lib/api/fetch-api";
import { getStrapiURL } from "@/lib/api/get-strapi-url";

export async function useHomepage() {
  const path = "/api/homepage";
  const BASE_URL = getStrapiURL();

  const url = `${BASE_URL}${path}`;
  const response = await fetchAPI(url, {
    method: "GET",
  });
  return response;
}
