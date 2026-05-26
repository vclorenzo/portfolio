"use client";

import Lottie from "lottie-react";
import Image from "next/image";
import Link from "next/link";
import manAnimation from "@/assets/man.json";
import blobScene from "@/assets/svg/blob-scene-haikei.svg";
import FadeIn from "@/components/motion/FadeIn";
import SocialLinks from "@/components/SocialLinks";
import type { Site } from "@/types/content";
import { DynamicSectionProps } from "@/types/strapi";
import { StrapiImage } from "../custom/StrapiImage";

// type AboutProps = {
//   site: Site;
// };

export default function DynamicSection({
  theme,
  imageDirection,
  title,
  content,
  bgImage,
  socials,
  callToAction,
}: DynamicSectionProps) {
  const { url, alternativeText } = bgImage || {};
  const { text, href, isExternal } = callToAction || {};

  return (
    <section
      id="about"
      className="section-pad relative min-h-[724px] overflow-hidden"
    >
      {url && (
        <div className="absolute inset-0 z-0">
          <StrapiImage
            src={url}
            alt={alternativeText || ""}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      )}
      <div className="relative z-10 mx-auto grid max-w-content items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16">
        <FadeIn className="mx-auto w-full max-w-md">
          <Lottie animationData={manAnimation} loop />
        </FadeIn>

        <FadeIn delay={0.15} className="flex flex-col gap-12 p-5">
          <h2 className="text-5xl text-dark md:text-[60px]">{title}</h2>
          <p className="font-condensed text-[15px] leading-relaxed text-dark">
            {content}
          </p>
          <div className="flex flex-col items-start gap-4">
            <SocialLinks socials={socials} theme={theme} />
            <Link
              href={href ?? ""}
              target={isExternal ? "_blank" : "_self"}
              className="btn-dark"
            >
              {text}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
