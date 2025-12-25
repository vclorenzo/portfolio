import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledMainTitleText = styled.h1`
	${(props) =>
		props.textColor === 'dark'
			? `color: var(--dark-color);`
			: `color: var(--light-color);`}
	${(props) => (props.isCentered ? `text-align: center;` : '')}

  font-size: 60px;
`;

export const StyledTitleText = styled.h3`
	${(props) =>
		props.textColor === 'dark'
			? `color: var(--dark-color);`
			: `color: var(--light-color);`}
	${(props) => (props.isCentered ? `text-align: center;` : '')}

  font-size: 60px;
	h1 {
		text-align: center;
		font-size: 60px;
	}
`;
export const StyledMainText = styled(motion.h2)`
	font-family: 'Roboto Condensed', sans-serif;
	font-size: 150px;
	@media (max-width: 540px) {
		font-size: 80px;
	}
`;

export const StyledSubtitleText = styled.p`
	font-size: 35px;
	text-align: center;
	@media (max-width: 320px) {
		font-size: 25px;
	}
`;
export const StyledSubtitleTextSm = styled.p`
	font-size: 25px;
	@media (max-width: 320px) {
		font-size: 20px;
	}
`;

export const StyledTextSp = styled.p`
	font-family: 'Roboto Condensed', sans-serif;
	font-size: 15px;
`;
export const StyledTextMenu = styled.p`
	font-family: 'Roboto Condensed', sans-serif;
	font-size: 18px;
`;
