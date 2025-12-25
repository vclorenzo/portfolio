import React, { useState } from 'react';
import Intro from '../Sections/Intro/index.jsx';
import About from '../Sections/About/index.jsx';
import Skills from '../Sections/Skills/index.jsx';
import Projects from '../Sections/Projects/index.jsx';
import Contact from '../Sections/Contact/index.jsx';
import Header from '../components/Header/index.jsx';
import Footer from '../components/Footer/index.jsx';
import Modal from '../components/Modal/index.jsx';

const Home = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};
	return (
		<>
			<Header isModalOpen={isModalOpen} toggleModal={toggleModal} />
			<Intro />
			<About />
			<Skills />
			<Projects />
			<Contact />
			<Footer />

			{isModalOpen && <Modal toggleModal={toggleModal} />}
		</>
	);
};

export default Home;
