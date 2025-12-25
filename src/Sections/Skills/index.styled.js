import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledSkillItemContainer = styled(motion.div)`
	width: 100%;
	${(props) => (props.isExtended ? `height: 120vh;` : `height: 100vh;`)}
	display: grid;
	align-items: center;
`;

export const SkillsShowcaseContainer = styled(motion.div)`
	height: 100%;
	width: 100vw;

	display: flex;
	gap: 10px;
	@media (min-width: 812px) {
		height: 100%;
		width: 100%;
		/* padding: 30px 30px; */
	}
	justify-content: space-evenly;
	align-items: center;
	background-color: var(--main-color);
`;

export const SkillsShowcaseItem = styled(motion.div)`
	display: flex;
	flex-direction: column;
	text-align: center;
	gap: 5px;
	font-size: 50px;
	height: 100px;
	width: 100px;
	p {
		font-size: 15px;
	}

	@media (min-width: 541px) and (max-width: 1024px) {
		font-size: 70px;
		height: 100px;
		width: 100px;
	}

	@media (min-width: 1440px) {
		font-size: 70px;
		height: 120px;
		width: 120px;
	}

	@media (min-width: 1024px) {
		border: 4px solid ${(props) => props.theme.bgColor};
	}
	display: flex;
	justify-content: center;
	align-items: center;
	& svg {
		fill: ${(props) => props.theme.bgColor};
	}
`;
