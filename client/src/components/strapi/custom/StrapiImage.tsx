import { getStrapiURL } from "@/lib/api/get-strapi-url";
import Image from "next/image";

interface StrapiImageProps {
  src: string;
  alt: string;
  className?: string;
  [key: string]: string | number | boolean | undefined;
}

export function StrapiImage({
  src,
  alt,
  className,
  ...rest
}: Readonly<StrapiImageProps>) {
  const imageUrl = getStrapiMedia(src);
  if (!imageUrl) return null;

  return <Image src={imageUrl} alt={alt} className={className} {...rest} />;
}

export function getStrapiMedia(url: string | null) {
  if (url == null) return null;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("http") || url.startsWith("//")) return url;
  return getStrapiURL() + url;
}

/**
 * URL for embeddable media (iframes).
 * Local `/uploads/` paths are same-origin and proxied via next.config rewrites.
 * Strapi Cloud CDN URLs are returned as-is (full absolute URL).
 */
export function getStrapiProxiedMedia(url: string | null) {
  if (url == null) return null;
  if (url.startsWith("/uploads/")) return url;

  if (url.startsWith("http") || url.startsWith("//")) {
    try {
      const parsed = new URL(url, url.startsWith("//") ? "https:" : undefined);
      if (parsed.pathname.startsWith("/uploads/")) return parsed.pathname;
      return parsed.href;
    } catch {
      return null;
    }
  }

  if (url.startsWith("uploads/")) return `/${url}`;
  return url.startsWith("/") ? url : `/${url}`;
}
