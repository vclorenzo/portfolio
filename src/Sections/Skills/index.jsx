import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { FaSass } from 'react-icons/fa';
import {
	SiExpress,
	SiGatsby,
	SiGraphql,
	SiJavascript,
	SiMongodb,
	SiMui,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiReact,
	SiRedux,
	SiStrapi,
	SiStyledcomponents,
	SiTypescript,
} from 'react-icons/si';
import { useInView } from 'react-intersection-observer';
import {
	MasterContainer,
	StyledSplitContainer,
	StyledTextContainer,
} from '../../components/Container/index.styled.js';
import { StyledMainText } from '../../components/Text/index.styled.js';
import {
	SkillsShowcaseContainer,
	SkillsShowcaseItem,
	StyledSkillItemContainer,
} from './index.styled.js';

const ContainerVariantL = {
	hidden: { x: '-100%', opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,

		transition: {
			type: 'tween',
			duration: 1,
			delay: 1,

			ease: 'easeInOut',
			staggerChildren: 0.1,
			when: 'beforeChildren',
		},
	},
};
const ContainerVariantR = {
	hidden: { x: '100%', opacity: 0 },
	visible: {
		x: 0,
		opacity: 1,

		transition: {
			type: 'tween',
			duration: 1,
			delay: 1,

			ease: 'easeInOut',
			staggerChildren: 0.1,
			when: 'beforeChildren',
		},
	},
};

const CardVariant = {
	hidden: { y: '20%', opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,

		transition: {
			duration: 0.5,
			ease: 'easeOut',
		},
	},
};
const TextVariant = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,

		transition: {
			delay: 0.5,
			duration: 5,
			ease: 'easeOut',
		},
	},
};

const hoverObj = {
	scale: 1.1,
	originY: 1,
	originX: 1,
};

const SkillsDev = ({ animation }) => {
	return (
		<StyledSplitContainer isFullScreen={true} id="skills" isReversed={false}>
			<StyledSkillItemContainer>
				<StyledTextContainer isCentered={true}>
					<StyledMainText
						variants={TextVariant}
						initial="hidden"
						animate={animation}
					>
						SKILLS
					</StyledMainText>
				</StyledTextContainer>
			</StyledSkillItemContainer>
			<StyledSkillItemContainer
				variants={ContainerVariantR}
				initial="hidden"
				animate={animation}
			>
				<SkillsShowcaseContainer>
					<SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
						<SiJavascript />
						<p>Javascript</p>
					</SkillsShowcaseItem>
					<SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
						<SiTypescript />
						<p>Typescript</p>
					</SkillsShowcaseItem>
				</SkillsShowcaseContainer>
				<SkillsShowcaseContainer>
					<SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
						<SiReact />
						<p>ReactJS</p>
					</SkillsShowcaseItem>
					<SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
						<SiNextdotjs />
						<p>NextJS</p>
					</SkillsShowcaseItem>
					<SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
						<SiGatsby />
						<p>GasbyJS</p>
					</SkillsShowcaseItem>
				</SkillsShowcaseContainer>
				<SkillsShowcaseContainer>
					<SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
						<SiStyledcomponents />
						<p>Styled Components</p>
					</SkillsShowcaseItem>
					<SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
						<FaSass />
						<p>Sass</p>
					</SkillsShowcaseItem>
					<SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
						<SiMui />
						<p>Material UI</p>
					</SkillsShowcaseItem>
					<SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
						<SiRedux />
						<p>Redux Toolkit</p>
					</SkillsShowcaseItem>
				</SkillsShowcaseContainer>
				<SkillsShowcaseContainer>
					<SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
						<SiNodedotjs />
						<p>NodeJS</p>
					</SkillsShowcaseItem>
					<SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
						<SiExpress />
						<p>ExpressJS</p>
					</SkillsShowcaseItem>
				</SkillsShowcaseContainer>
				<SkillsShowcaseContainer>
					<SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
						<SiMongodb />
						<p>MongoDB</p>
					</SkillsShowcaseItem>
					<SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
						<SiPostgresql />
						<p>Postgresql</p>
					</SkillsShowcaseItem>
					<SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
						<SiGraphql />
						<p>Graphql</p>
					</SkillsShowcaseItem>
					<SkillsShowcaseItem variants={CardVariant} whileHover={hoverObj}>
						<SiStrapi />
						<p>Strapi CMS</p>
					</SkillsShowcaseItem>
				</SkillsShowcaseContainer>
			</StyledSkillItemContainer>
		</StyledSplitContainer>
	);
};

const Skills = () => {
	const { ref: refDev, inView: inViewDev } = useInView();
	const { ref: refQA, inView: inViewQA } = useInView();
	const animationOne = useAnimation();
	const animationTwo = useAnimation();

	useEffect(() => {
		if (inViewDev) {
			animationOne.start('visible');
		}
		if (inViewQA) {
			animationTwo.start('visible');
		}
		if (!inViewDev) {
			animationOne.start('hidden');
		}
		if (!inViewQA) {
			animationTwo.start('hidden');
		}
	}, [animationOne, animationTwo, inViewDev, inViewQA]);

	return (
		<MasterContainer bgColor={'#333'}>
			<div ref={refDev}>
				<SkillsDev animation={animationOne} />
			</div>
		</MasterContainer>
	);
};

export default Skills;
