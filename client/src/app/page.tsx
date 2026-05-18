import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import About from '@/Sections/About';
import Contact from '@/Sections/Contact';
import Intro from '@/Sections/Intro';
import Projects from '@/Sections/Projects';
import Skills from '@/Sections/Skills';
import { getPortfolioContent } from '@/lib/get-portfolio-content';

export default function HomePage() {
	const { site, skills, projects, skillCategories } = getPortfolioContent();

	return (
		<>
			<Header site={site} />
			<main>
				<Intro site={site} />
				<About site={site} />
				<Skills skills={skills} skillCategories={skillCategories} />
				<Projects projects={projects} />
				<Contact />
			</main>
			<Footer site={site} />
		</>
	);
}
