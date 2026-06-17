import { getStrapiProxiedMedia } from "@/components/strapi/custom/StrapiImage";

export default function ResumeViewer({
  title,
  pdf,
}: {
  title?: string;
  pdf?: { url?: string | null } | null;
}) {
  const pdfUrl = getStrapiProxiedMedia(pdf?.url ?? null);

  if (!pdfUrl) {
    return null;
  }

  return (
    <section className="mt-[65px] flex min-h-[724px] h-[calc(100vh-100px)] w-full items-center justify-center overflow-hidden">
      <iframe
        title={title ?? "Resume"}
        src={pdfUrl}
        className="h-full w-full border-0"
      />
    </section>
  );
}
