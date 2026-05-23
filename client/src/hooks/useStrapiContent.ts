import { useEffect, useState } from "react";
import { fetchHomePageContent } from "@/lib/fetch-home-page";
import type { HomePage, HomePageResponse } from "@/types/strapi";

export type UseStrapiContentResult = {
  data: HomePage | null;
  meta: HomePageResponse["meta"] | null;
  isLoading: boolean;
  error: Error | null;
};

export function useStrapiContent(): UseStrapiContentResult {
  const [data, setData] = useState<HomePage | null>(null);
  const [meta, setMeta] = useState<HomePageResponse["meta"] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetchHomePageContent();
        if (!cancelled) {
          setData(response.data);
          setMeta(response.meta);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error
              ? err
              : new Error("Failed to fetch Strapi content"),
          );
          setData(null);
          setMeta(null);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return { data, meta, isLoading, error };
}
