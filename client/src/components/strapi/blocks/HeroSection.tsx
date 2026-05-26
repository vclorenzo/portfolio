"use client";

import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";
import { HeroSectionProps } from "@/types/strapi";
import { getStrapiMedia } from "@/components/strapi/custom/StrapiImage";
import Link from "next/link";

// type IntroProps = {
// 	site: Site;
// };

export default function HeroSection({
  heading,
  subHeading,
  bgImage,
  callToAction,
  specializations,
}: HeroSectionProps) {
  const roles = useTypewriter(
    specializations?.map((specialization) => specialization.name) || [],
  );
  const { text, href, isExternal } = callToAction || {};
  const bgVideoUrl = getStrapiMedia(bgImage?.url ?? null);

  return (
    <section
      id="intro"
      className="relative flex min-h-[724px] h-screen w-full items-center justify-center overflow-hidden"
    >
      {bgVideoUrl && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-cover"
          src={bgVideoUrl}
        />
      )}
      <div className="absolute inset-0 z-[1] bg-dark/30" />

      <motion.div
        className="relative z-10 flex max-w-content flex-col items-center gap-12 px-5 text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-5xl text-light md:text-[60px]">{heading}</h1>
        <div className="space-y-2">
          <p className="text-xl text-light md:text-[30px]">{subHeading}</p>
          <p className="min-h-[2.5rem] text-xl text-main md:text-[30px]">
            {roles}
            <span className="ml-1 inline-block h-[1.1em] w-0.5 animate-pulse bg-main align-middle" />
          </p>
        </div>
        <Link href={href ?? ""} target={isExternal ? "_blank" : "_self"}>
          <button type="button" className="btn-light">
            {text}
          </button>
        </Link>
      </motion.div>
    </section>
  );
}
