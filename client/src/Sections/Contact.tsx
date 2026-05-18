'use client';

import emailjs from '@emailjs/browser';
import Lottie from 'lottie-react';
import { useRef, useState, type FormEvent } from 'react';
import mailAnimation from '@/assets/mail.json';
import FadeIn from '@/components/motion/FadeIn';

export default function Contact() {
	const formRef = useRef<HTMLFormElement>(null);
	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		if (!formRef.current) return;

		setLoading(true);
		setStatus('idle');

		try {
			await emailjs.sendForm(
				'service_gn677xk',
				'template_7k5y4ao',
				formRef.current,
				{ publicKey: 'Fi6OImXN1IEO24tYw' }
			);
			setStatus('success');
			formRef.current.reset();
		} catch {
			setStatus('error');
		} finally {
			setLoading(false);
		}
	};

	return (
		<section id="contact" className="section-pad min-h-[724px] bg-dark">
			<div className="mx-auto grid max-w-content items-center gap-12 px-5 lg:grid-cols-2">
				<FadeIn className="flex flex-col gap-12 p-5">
					<h2 className="text-5xl text-light md:text-[60px]">Let&apos;s Connect</h2>
					<p className="text-xl text-light/90 md:text-[25px]">
						If you have questions or just want to say hi, feel free to message me.
					</p>

					<form ref={formRef} onSubmit={handleSubmit} className="glass-panel space-y-4">
						<div>
							<label htmlFor="name" className="mb-1 block font-condensed text-sm text-light">
								Full Name
							</label>
							<input
								id="name"
								name="name"
								type="text"
								required
								placeholder="Enter Full Name"
								className="form-field"
							/>
						</div>
						<div>
							<label htmlFor="email" className="mb-1 block font-condensed text-sm text-light">
								Email
							</label>
							<input
								id="email"
								name="email"
								type="email"
								required
								placeholder="Enter Email"
								className="form-field"
							/>
						</div>
						<div>
							<label htmlFor="subject" className="mb-1 block font-condensed text-sm text-light">
								Subject
							</label>
							<input
								id="subject"
								name="subject"
								type="text"
								required
								placeholder="Enter Subject"
								className="form-field"
							/>
						</div>
						<div>
							<label htmlFor="message" className="mb-1 block font-condensed text-sm text-light">
								Message
							</label>
							<textarea
								id="message"
								name="message"
								required
								rows={5}
								placeholder="Enter Message"
								className="form-field resize-y"
							/>
						</div>

						{status === 'success' && (
							<p className="text-center font-condensed text-sm text-main">
								Message sent successfully!
							</p>
						)}
						{status === 'error' && (
							<p className="text-center font-condensed text-sm text-red-400">
								Something went wrong. Please try again.
							</p>
						)}

						<button type="submit" className="btn-form" disabled={loading}>
							{loading ? 'Sending...' : 'Submit'}
						</button>
					</form>
				</FadeIn>

				<FadeIn delay={0.2} className="mx-auto w-full max-w-md">
					<Lottie animationData={mailAnimation} loop />
				</FadeIn>
			</div>
		</section>
	);
}
