import SocialLinks from '@/components/layout/SocialLinks';
import type { Site } from '@/types/content';

type FooterProps = {
	site: Site;
};

export default function Footer({ site }: FooterProps) {
	return (
		<footer className="flex min-h-[120px] flex-col items-center justify-center gap-6 bg-dark py-10">
			<SocialLinks site={site} variant="light" />
			<p className="font-condensed text-sm text-medium">
				Copyright © {new Date().getFullYear()}. All Rights Reserved
			</p>
		</footer>
	);
}
