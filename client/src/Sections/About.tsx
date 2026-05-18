"use client";

import Lottie from "lottie-react";
import Image from "next/image";
import Link from "next/link";
import manAnimation from "@/assets/man.json";
import blobScene from "@/assets/svg/blob-scene-haikei.svg";
import FadeIn from "@/components/motion/FadeIn";
import SocialLinks from "@/components/layout/SocialLinks";
import type { Site } from "@/types/content";

type AboutProps = {
  site: Site;
};

export default function About({ site }: AboutProps) {
  return (
    <section
      id="about"
      className="section-pad relative min-h-[724px] overflow-hidden"
    >
      <Image
        src={blobScene}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="relative z-10 mx-auto grid max-w-content items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16">
        <FadeIn className="mx-auto w-full max-w-md">
          <Lottie animationData={manAnimation} loop />
        </FadeIn>

        <FadeIn delay={0.15} className="flex flex-col gap-12 p-5">
          <h2 className="text-5xl text-dark md:text-[60px]">About Me</h2>
          <p className="font-condensed text-[15px] leading-relaxed text-dark">
            {site.about}
          </p>
          <div className="flex flex-col items-start gap-4">
            <SocialLinks site={site} variant="dark" />
            <Link href="/profile" className="btn-dark">
              View Resume
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
