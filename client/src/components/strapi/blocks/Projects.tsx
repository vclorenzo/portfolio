"use client";

import FadeIn from "@/components/motion/FadeIn";
import { getStrapiMedia } from "@/components/strapi/custom/StrapiImage";
import { ImageProps, LinkProps } from "@/types/strapi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type ProjectsProps = {
  title: string;
  name: string;
  description: string;
  images: ImageProps[];
  tags: { name: string }[];
  imageURL: LinkProps;
};

export default function Projects({
  title,
  name,
  description,
  images,
  tags,
  imageURL,
}: ProjectsProps) {
  const projectLink = Array.isArray(imageURL) ? imageURL[0] : imageURL;

  return (
    <section id="projects" className="section-pad min-h-[724px]">
      <div className="mx-auto max-w-content px-5">
        <FadeIn>
          <h2 className="mb-12 text-center text-5xl text-light md:text-[60px]">
            {title}
          </h2>
        </FadeIn>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="pb-14"
        >
          {images?.map((image) => {
            const imageSrc = getStrapiMedia(image.url);
            if (!imageSrc) return null;

            return (
              <SwiperSlide key={image.id ?? image.documentId}>
                <a
                  href={projectLink?.href ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-xl"
                >
                  <div
                    className="relative flex min-h-[320px] items-end bg-cover bg-center p-8 transition-transform duration-500 group-hover:scale-[1.02] md:min-h-[420px]"
                    style={{ backgroundImage: `url(${imageSrc})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />
                    <div className="relative z-10 max-w-xl space-y-3">
                      <h3 className="text-2xl font-medium text-light md:text-[30px]">
                        {name}
                      </h3>
                      <p className="font-condensed text-sm text-light/90 md:text-base">
                        {description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span
                            key={tag.name}
                            className="rounded-full bg-main/90 px-3 py-1 font-condensed text-xs text-dark"
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
