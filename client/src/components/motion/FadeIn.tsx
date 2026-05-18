'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 32 },
	visible: (delay = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
	}),
};

type FadeInProps = {
	children: ReactNode;
	className?: string;
	delay?: number;
	id?: string;
};

export default function FadeIn({ children, className, delay = 0, id }: FadeInProps) {
	return (
		<motion.div
			id={id}
			className={className}
			variants={fadeUp}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: '-80px' }}
			custom={delay}
		>
			{children}
		</motion.div>
	);
}
