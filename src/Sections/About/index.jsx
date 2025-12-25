import React from 'react';
import {
	StyledTextSp,
	StyledTitleText,
} from '../../components/Text/index.styled.js';
import { StyledDarkButton } from '../../components/Buttons/index.styled.js';
import Lottie from 'lottie-react';
import animationData from '../../assets/man.json';
import {
	StyledItemContainer,
	MasterContainer,
	StyledSplitContainer,
	StyledTextContainer,
} from '../../components/Container/index.styled.js';
import bgImage from '../../assets/svg/blob-scene-haikei.svg';
import { SpecialTextContainer } from './index.styled.js';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<MasterContainer bgImage={bgImage} withPadding={true}>
			<StyledSplitContainer isGapped={true} id="about">
				<StyledItemContainer>
					<Lottie animationData={animationData} />
				</StyledItemContainer>
				<StyledItemContainer>
					<StyledTextContainer>
						<StyledTitleText textColor={'dark'}>About Me</StyledTitleText>
						<SpecialTextContainer>
							<StyledTextSp>
								Hi! my name is Vanz. I am a Software engineer with over 5 years
								of experience in the industry. My expertise primarily focuses in
								Frontend Development along with a familiar understanding of
								Backend Development. Continuously learning new technologies.
							</StyledTextSp>
						</SpecialTextContainer>
						<a href={'/profile'} style={{ width: 'fit-content' }}>
							<StyledDarkButton>View Projects</StyledDarkButton>
						</a>
					</StyledTextContainer>
				</StyledItemContainer>
			</StyledSplitContainer>
		</MasterContainer>
	);
};

export default About;
