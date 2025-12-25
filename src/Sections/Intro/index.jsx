import React from 'react';
import Typewriter from 'typewriter-effect';
import {
	StyledMainTitleText,
	StyledSubtitleText,
} from '../../components/Text/index.styled.js';
import { VideoBg } from './index.styled.js';
import Video from '../../assets/bokeh.mp4';
import { StyledLightButton } from '../../components/Buttons/index.styled.js';
import {
	StyledContentContainer,
	MasterContainer,
	StyledTextContainer,
} from '../../components/Container/index.styled.js';

const Intro = () => {
	return (
		<MasterContainer id="intro">
			<StyledContentContainer>
				<VideoBg autoPlay loop muted src={Video} typeof="video/mp4" />
				<StyledTextContainer isCentered={true}>
					<StyledMainTitleText isCentered={true}>
						Vanz Lorenzo
					</StyledMainTitleText>
					<StyledSubtitleText>I specialize in</StyledSubtitleText>
					<StyledSubtitleText>
						<Typewriter
							options={{
								strings: ['Frontend Development', 'Backend Development'],
								cursor: '',
								autoStart: true,
								loop: true,
							}}
						/>
					</StyledSubtitleText>
					<a href="#projects">
						<StyledLightButton>View Projects</StyledLightButton>
					</a>
				</StyledTextContainer>
			</StyledContentContainer>
		</MasterContainer>
	);
};

export default Intro;
