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
    // <div className="fixed inset-x-0 bottom-0 top-header z-40 bg-dark">
    <div className="relative top-[65px] h-screen top-header bg-dark">
      <iframe
        title={title ?? "Resume"}
        src={pdfUrl}
        className="h-full w-full border-0"
      />
    </div>
  );
}
