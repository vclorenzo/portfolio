import { basePath } from "@/lib/basePath";

/** Served from `public/resume/` — reliable with `output: "export"` */
const resumeUrl = `${basePath}/resume/Resume_Vanz_Lorenzo.pdf`;

export default function ResumeViewer() {
  return (
    <div className="fixed inset-0 bg-dark">
      <iframe
        title="Resume — Vanz Lorenzo"
        src={resumeUrl}
        className="h-full w-full border-0"
      />
    </div>
  );
}
