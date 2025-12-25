import Lottie from 'lottie-react';
import React, { useState, useRef } from 'react';
import animationData from '../../assets/mail.json';
import { StyledFormButton } from '../../components/Buttons/index.styled.js';
import {
	MasterContainer,
	StyledItemContainer,
	StyledSplitContainer,
	StyledTextContainer,
} from '../../components/Container/index.styled.js';
import {
	StyledSubtitleTextSm,
	StyledTitleText,
} from '../../components/Text/index.styled.js';
import { StyledFormContainer } from './index.styled.js';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const [loading, setLoading] = useState(false);
	const form = useRef();

	const handleSubmit = async (e) => {
		e.preventDefault();

		emailjs
			.sendForm('service_gn677xk', 'template_7k5y4ao', form.current, {
				publicKey: 'Fi6OImXN1IEO24tYw',
			})
			.then(
				() => {
					alert('Email sent successfully!');
					setLoading(false);
					form.current.reset();
				},
				(error) => {
					alert('Email sending failed. Please try again later.');
				}
			);
	};

	return (
		<MasterContainer id="contact" bgColor={'#333'} withPadding={true}>
			<StyledSplitContainer isFullScreen={false} isGapped={true}>
				<StyledItemContainer>
					<StyledTextContainer>
						<StyledTitleText>Let's Connect</StyledTitleText>
						<StyledSubtitleTextSm>
							If you have questions or just want to say hi, feel free to message
							me.
						</StyledSubtitleTextSm>
						{/* <a
							href="mailto:vc.lorenzo16@gmail.com"
							style={{ display: 'inline-block', maxWidth: '150px' }}
						>
							<StyledOutlineButton>
								<MdMailOutline />
								<RiArrowDropRightLine />
							</StyledOutlineButton>
						</a> */}
						<StyledFormContainer>
							<form ref={form} onSubmit={handleSubmit}>
								<label htmlFor="name">Full Name</label>
								<input
									name="name"
									id="name"
									type="text"
									required
									placeholder="Enter Full Name"
									value={form.name}
								/>
								<label htmlFor="email">Email</label>
								<input
									name="email"
									id="email"
									type="email"
									required
									placeholder="Enter Email"
									value={form.email}
								/>
								<label htmlFor="subject">Subject</label>
								<input
									name="subject"
									id="subject"
									type="subject"
									required
									placeholder="Enter Subject"
									value={form.subject}
								/>
								<label htmlFor="message">Message</label>
								<textarea
									name="message"
									id="message"
									required
									placeholder="Enter Message"
									rows={5}
									value={form.message}
								/>
								<div
									style={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										width: '100%',
										marginTop: '20px',
									}}
								>
									<StyledFormButton type="submit">
										{loading ? 'Sending...' : 'Submit'}
									</StyledFormButton>
								</div>
							</form>
						</StyledFormContainer>
					</StyledTextContainer>
				</StyledItemContainer>

				<StyledItemContainer>
					<Lottie animationData={animationData} />
				</StyledItemContainer>
			</StyledSplitContainer>
		</MasterContainer>
	);
};

export default Contact;
