import Lottie from 'lottie-react';
import React, { useState } from 'react';
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
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = ({ target: { name, value } }) => {
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			emailjs.send(
				'service_dkglfok',
				'template_7k5y4ao',
				{
					from_name: form.name,
					to_name: 'Vanz',
					from_email: form.email,
					to_email: 'vc.lorenzo16@gmail.com',
					message: form.message,
				},
				'Fi6OImXN1IEO24tYw'
			);
			setLoading(false);
			alert('Message sent successfully');
			setForm({ name: '', email: '', message: '' });
		} catch (error) {
			console.log(error);
			alert('Message sending failed');
		}
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
							<form onSubmit={handleSubmit}>
								<label htmlFor="name">Full Name</label>
								<input
									name="name"
									id="name"
									type="text"
									required
									placeholder="Enter Full Name"
									value={form.name}
									onChange={handleChange}
								/>
								<label htmlFor="email">Email</label>
								<input
									name="email"
									id="email"
									type="email"
									required
									placeholder="Enter Email"
									value={form.email}
									onChange={handleChange}
								/>
								<label htmlFor="message">Message</label>
								<textarea
									name="message"
									id="message"
									required
									placeholder="Enter Message"
									rows={5}
									value={form.message}
									onChange={handleChange}
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
