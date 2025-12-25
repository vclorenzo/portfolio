import React from 'react';

import {
	MasterContainer,
	StyledContentContainer,
} from '../../components/Container/index.styled.js';
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import {
	StyledCards,
	StyledCardsFx,
} from '../../components/Cards/index.styled.js';
import {
	ProjectItemContainer,
	StyledProjectContentContainer,
} from './index.styled.js';
import {
	StyledSubtitleText,
	StyledTitleText,
} from '../../components/Text/index.styled.js';

import GraphsImg from '../../assets/Data-Analytics.jpg';

const links = [
	{
		name: 'Inventory Management App',
		url: 'https://master.df9wpu1secyh3.amplifyapp.com/',
		image: GraphsImg,
	},
];

const ProjectSlide = ({ name, url, image }) => {
	return (
		<ProjectItemContainer>
			<a href={url} target="_blank" rel="noopener noreferrer">
				<StyledCards bgImage={image}>
					<StyledCardsFx>
						<StyledSubtitleText>{name}</StyledSubtitleText>
					</StyledCardsFx>
				</StyledCards>
			</a>
		</ProjectItemContainer>
	);
};

const Projects = () => {
	return (
		<MasterContainer id="projects" withPadding={true}>
			<StyledContentContainer>
				<StyledTitleText textColor={'light'} isCentered={true}>
					Featured Projects
				</StyledTitleText>
				<StyledProjectContentContainer isFullScreen={true} id="#projects">
					<Swiper
						// install Swiper modules
						modules={[Navigation, Pagination, Autoplay]}
						spaceBetween={10}
						slidesPerView={1}
						navigation
						pagination={{ clickable: true }}
						// autoplay={{ delay: 5000, disableOnInteraction: false }}
						// loop={true}
					>
						{links.map((link) => (
							<SwiperSlide key={link.name}>
								<ProjectSlide
									name={link.name}
									url={link.url}
									image={link.image}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</StyledProjectContentContainer>
			</StyledContentContainer>
		</MasterContainer>
	);
};

export default Projects;
