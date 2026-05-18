'use client';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import FadeIn from '@/components/motion/FadeIn';
import type { Project } from '@/types/content';

type ProjectsProps = {
	projects: Project[];
};

export default function Projects({ projects }: ProjectsProps) {
	return (
		<section id="projects" className="section-pad min-h-[724px]">
			<div className="mx-auto max-w-content px-5">
				<FadeIn>
					<h2 className="mb-12 text-center text-5xl text-light md:text-[60px]">
						Featured Projects
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
					{projects.map((project) => (
						<SwiperSlide key={project.name}>
							<a
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
								className="group block overflow-hidden rounded-xl"
							>
								<div
									className="relative flex min-h-[320px] items-end bg-cover bg-center p-8 transition-transform duration-500 group-hover:scale-[1.02] md:min-h-[420px]"
									style={{ backgroundImage: `url(${project.image})` }}
								>
									<div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />
									<div className="relative z-10 max-w-xl space-y-3">
										<h3 className="text-2xl font-medium text-light md:text-[30px]">
											{project.name}
										</h3>
										<p className="font-condensed text-sm text-light/90 md:text-base">
											{project.description}
										</p>
										<div className="flex flex-wrap gap-2">
											{project.tags.map((tag) => (
												<span
													key={tag}
													className="rounded-full bg-main/90 px-3 py-1 font-condensed text-xs text-dark"
												>
													{tag}
												</span>
											))}
										</div>
									</div>
								</div>
							</a>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
