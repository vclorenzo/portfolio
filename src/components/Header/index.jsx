import React from 'react';
import {
	NavHamburgerIcon,
	StyledHeader,
	StyledLogo,
	StyledNav,
} from './index.styled.js';
import Logo from '../../assets/svg/Logo.jsx';
import { FaBars } from 'react-icons/fa';

const Header = ({ toggleModal }) => {
	return (
		<StyledHeader>
			<a href="#intro">
				<StyledLogo>
					<Logo width={60} height={60} />
				</StyledLogo>
			</a>
			<NavHamburgerIcon onClick={toggleModal}>
				<FaBars />
			</NavHamburgerIcon>
			<StyledNav>
				<ul>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#skills">Skills</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</StyledNav>
		</StyledHeader>
	);
};

export default Header;
