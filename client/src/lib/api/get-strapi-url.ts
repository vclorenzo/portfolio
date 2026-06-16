export function getStrapiURL() {
  return process.env.STRAPI_URL || "http://localhost:1337";
}
