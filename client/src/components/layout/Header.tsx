'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '@/components/Logo';
import SocialLinks from '@/components/layout/SocialLinks';
import { navLinks } from '@/data/content';
import { useActiveSection } from '@/hooks/useActiveSection';
import type { Site } from '@/types/content';
import { cn } from '@/lib/utils';

const headerSections = ['intro', 'about', 'skills', 'projects', 'contact'];

type HeaderProps = {
	site: Site;
};

export default function Header({ site }: HeaderProps) {
	const [open, setOpen] = useState(false);
	const active = useActiveSection(headerSections);

	const close = () => setOpen(false);

	return (
		<header className="sticky top-0 z-50 flex h-[100px] items-center justify-between bg-header px-8 md:px-[70px]">
			<a href="#intro" className="flex shrink-0 text-primary" aria-label="Home">
				<Logo width={60} height={60} />
			</a>

			<nav className="hidden sm:block" aria-label="Main">
				<ul className="flex gap-8">
					{navLinks.map((link) => (
						<li key={link.id} className="list-none">
							<a
								href={link.href}
								className={cn(
									'font-condensed text-lg transition-colors hover:text-main',
									active === link.id && 'text-main'
								)}
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>
			</nav>

			<button
				type="button"
				className="text-3xl text-main sm:hidden"
				onClick={() => setOpen((v) => !v)}
				aria-label={open ? 'Close menu' : 'Open menu'}
				aria-expanded={open}
			>
				{open ? <FaTimes /> : <FaBars />}
			</button>

			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-40 bg-dark/90 backdrop-blur-sm sm:hidden"
						onClick={close}
					>
						<motion.nav
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ type: 'spring', damping: 28, stiffness: 280 }}
							className="absolute right-0 top-0 flex h-full w-[min(320px,85vw)] flex-col gap-8 bg-header px-10 py-24"
							onClick={(e) => e.stopPropagation()}
							aria-label="Mobile"
						>
							<ul className="flex flex-col gap-6">
								{navLinks.map((link) => (
									<li key={link.id} className="list-none">
										<a
											href={link.href}
											onClick={close}
											className="font-condensed text-2xl uppercase tracking-wide text-light hover:text-main"
										>
											{link.label}
										</a>
									</li>
								))}
							</ul>
							<SocialLinks site={site} variant="light" className="mt-auto" />
						</motion.nav>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
