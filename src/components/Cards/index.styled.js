import styled from 'styled-components';

export const StyledCards = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 500px;
	height: 400px;
	${(props) =>
		props.bgImage
			? `background: url(${props.bgImage});
			   background-size: cover;
			   background-position: center;`
			: `background: var(--dark-color);`};

	border-radius: 10px;
	position: relative;
`;

export const StyledCardsFx = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	border-radius: 10px;
	position: absolute;

	// Using ::before for the background hover effect
	&::before {
		content: '';
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0);
		border-radius: 10px;
		transition: background-color 0.3s ease, opacity 0.3s ease;
	}

	&:hover::before {
		background-color: var(--dark-color);
		opacity: 0.5;
	}

	// Ensure the text stays above the pseudo-element
	& > * {
		position: relative;
		z-index: 1;
	}
`;
