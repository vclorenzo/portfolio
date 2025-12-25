import React, { useState } from 'react';
import ReactModal from 'react-modal';
import {
	CloseButton,
	StyledModalContainer,
	StyledModalItemContainer,
} from './index.styled.js';
import { StyledTextMenu } from '../Text/index.styled.js';
import { StyledLinks } from '../Footer/index.styled.js';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const Modal = ({ toggleModal }) => {
	const [isModalOpen, setIsModalOpen] = useState(true);
	return (
		<ReactModal
			isOpen={isModalOpen}
			onRequestClose={() => {
				setIsModalOpen(false);
			}}
			className={'gallery-modal'}
			overlayClassName={'gallery-modal-overlay'}
		>
			<StyledModalContainer>
				<CloseButton>
					<IoClose onClick={toggleModal} />
				</CloseButton>
				<StyledModalItemContainer>
					<StyledTextMenu onClick={toggleModal}>
						<a href="#about">ABOUT</a>
					</StyledTextMenu>
				</StyledModalItemContainer>
				<StyledModalItemContainer>
					<StyledTextMenu onClick={toggleModal}>
						<a href="#skills">SKILLS</a>
					</StyledTextMenu>
				</StyledModalItemContainer>
				<StyledModalItemContainer>
					<StyledTextMenu onClick={toggleModal}>
						<a href="#projects">PROJECTS</a>
					</StyledTextMenu>
				</StyledModalItemContainer>
				<StyledModalItemContainer>
					<StyledTextMenu onClick={toggleModal}>
						<a href="#contact">CONTACT</a>
					</StyledTextMenu>
				</StyledModalItemContainer>
				<StyledLinks color={'dark'}>
					<ul>
						<a
							className="test"
							href="https://www.linkedin.com/in/vanz-czeray-lorenzo-981893189/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<li>
								<div>
									<FaLinkedin />
								</div>
							</li>
						</a>
						<a
							className="test"
							href="https://github.com/vclorenzo"
							target="_blank"
							rel="noreferrer noopener"
						>
							<li>
								<div>
									<FaGithub />
								</div>
							</li>
						</a>
					</ul>
				</StyledLinks>
			</StyledModalContainer>
		</ReactModal>
	);
};

export default Modal;
