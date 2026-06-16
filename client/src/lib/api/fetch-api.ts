type NextFetchRequestConfig = {
  revalidate?: number | false;
  tags?: string[];
};

interface FetchAPIOptions {
  method: "GET" | "POST" | "PUT" | "DELETE";
  authToken?: string;
  body?: Record<string, unknown>;
  next?: NextFetchRequestConfig;
  /** When true, failed requests throw instead of returning empty data. */
  throwOnError?: boolean;
}

export class StrapiFetchError extends Error {
  constructor(
    message: string,
    public readonly status?: number,
  ) {
    super(message);
    this.name = "StrapiFetchError";
  }
}

const STRAPI_FETCH_RETRIES = 4;
const STRAPI_FETCH_RETRY_DELAY_MS = 2000;
const RETRYABLE_STATUS_CODES = new Set([429, 502, 503, 504]);

function retryDelayMs(attempt: number) {
  return STRAPI_FETCH_RETRY_DELAY_MS * (attempt + 1);
}

async function fetchWithRetry(
  url: string,
  init: RequestInit,
  retries = STRAPI_FETCH_RETRIES,
): Promise<Response> {
  let lastError: unknown;
  let lastRetryableResponse: Response | undefined;

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      const response = await fetch(url, init);

      if (RETRYABLE_STATUS_CODES.has(response.status) && attempt < retries) {
        lastRetryableResponse = response;
        await new Promise((resolve) =>
          setTimeout(resolve, retryDelayMs(attempt)),
        );
        continue;
      }

      return response;
    } catch (error) {
      lastError = error;
      if (attempt < retries) {
        await new Promise((resolve) =>
          setTimeout(resolve, retryDelayMs(attempt)),
        );
      }
    }
  }

  if (lastRetryableResponse) {
    return lastRetryableResponse;
  }

  throw lastError;
}

export async function fetchAPI(url: string, options: FetchAPIOptions) {
  const {
    method,
    authToken,
    body,
    next,
    throwOnError = method === "GET",
  } = options;

  const headers: RequestInit & { next?: NextFetchRequestConfig } = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(authToken && { Authorization: `Bearer ${authToken}` }),
    },
    ...(body && { body: JSON.stringify(body) }),
    ...(next && { next }),
  };

  try {
    const response = await fetchWithRetry(url, headers);
    const contentType = response.headers.get("content-type");

    if (contentType?.includes("application/json")) {
      const payload = await response.json();

      if (!response.ok) {
        const message = `Strapi request failed (${response.status} ${response.statusText}) for ${url}`;

        if (throwOnError) {
          throw new StrapiFetchError(message, response.status);
        }

        return {
          ...payload,
          status: response.status,
          statusText: response.statusText,
        };
      }

      return payload;
    }

    const message = `Unexpected response from ${url} (${response.status})`;

    if (throwOnError) {
      throw new StrapiFetchError(message, response.status);
    }

    return { status: response.status, statusText: response.statusText };
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`Failed to ${method} ${url}:`, error);
    }

    if (throwOnError) {
      throw error;
    }

    return { data: null };
  }
}
