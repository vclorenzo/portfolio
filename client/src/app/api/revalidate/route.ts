import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { STRAPI_TAGS } from "@/lib/api/cache-tags";

type StrapiWebhookBody = {
  event?: string;
  model?: string;
  uid?: string;
  entry?: {
    slug?: string;
    documentId?: string;
  };
};

function getModelId(body: StrapiWebhookBody): string {
  return (body.uid ?? body.model ?? "").toLowerCase();
}

function revalidateHomePage() {
  revalidateTag(STRAPI_TAGS.homePage);
  revalidatePath("/");
}

function revalidateGlobal() {
  revalidateTag(STRAPI_TAGS.global);
  revalidatePath("/", "layout");
}

function revalidatePages(slug?: string) {
  revalidateTag(STRAPI_TAGS.pages);

  if (slug) {
    revalidatePath(`/${slug}/`);
    return;
  }

  revalidatePath("/[slug]/", "page");
}

function revalidateProjects(documentId?: string) {
  revalidateTag(STRAPI_TAGS.projects);
  revalidateHomePage();

  if (documentId) {
    revalidatePath(`/projects/${documentId}/`);
    return;
  }

  revalidatePath("/projects/[projectId]/", "page");
}

function handleStrapiWebhook(body: StrapiWebhookBody): string[] {
  const model = getModelId(body);
  const revalidated: string[] = [];

  if (model.includes("home-page")) {
    revalidateHomePage();
    revalidated.push(STRAPI_TAGS.homePage, "/");
  }

  if (model.includes("global")) {
    revalidateGlobal();
    revalidated.push(STRAPI_TAGS.global, "layout:/");
  }

  if (model.includes("page")) {
    revalidatePages(body.entry?.slug);
    revalidated.push(STRAPI_TAGS.pages, body.entry?.slug ?? "all-pages");
  }

  if (model.includes("project")) {
    revalidateProjects(body.entry?.documentId);
    revalidated.push(STRAPI_TAGS.projects, body.entry?.documentId ?? "all-projects");
  }

  return revalidated;
}

export async function POST(request: NextRequest) {
  const secret =
    request.nextUrl.searchParams.get("secret") ??
    request.headers.get("x-revalidate-secret");

  if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  let body: StrapiWebhookBody = {};

  try {
    body = await request.json();
  } catch {
    // Allow manual triggers with no body.
  }

  const revalidated = handleStrapiWebhook(body);

  if (revalidated.length === 0) {
    revalidateHomePage();
    revalidateGlobal();
    revalidated.push("fallback:home-page", "fallback:global");
  }

  return NextResponse.json({
    revalidated: true,
    paths: revalidated,
    event: body.event ?? null,
    model: getModelId(body) || null,
    now: Date.now(),
  });
}
