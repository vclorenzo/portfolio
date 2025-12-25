import styled from 'styled-components';

export const StyledLightButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #f4f4f4;
	cursor: pointer;
	width: 200px;
	height: 60px;
	border-radius: 5px;
	border: none;
	color: var(--dark-color);
	font-size: 24px;
	font-weight: 500;

	&:hover {
		background-color: var(--main-color);
		color: var(--light-color);
	}
`;

export const StyledDarkButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #333;
	cursor: pointer;
	width: 200px;
	height: 60px;
	border-radius: 5px;
	border: none;
	color: var(--light-color);
	font-size: 24px;
	font-weight: 500;

	&:hover {
		background: none;
		color: #333;
		outline: 3px solid #333;
		svg {
			fill: #333;
		}
	}
`;

export const StyledOutlineButton = styled.button`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background: #f4f4f4;
	cursor: pointer;
	width: 150px;
	height: 60px;
	border-radius: 5px;
	color: #333;
	font-size: 24px;
	font-weight: 500;
	svg {
		fill: #333;
		font-size: 40px;
	}

	&:hover {
		background: none;
		color: var(--main-color);
		outline: 3px solid var(--main-color);
		svg {
			fill: var(--main-color);
		}
	}
`;
export const StyledFormButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	width: 100%;
	height: 60px;
	border-radius: 5px;
	background-color: var(--dark-color);
	color: var(--light-color);
	font-size: 24px;
	font-weight: 500;

	&:hover {
		background: none;
		color: var(--light-color);
		background-color: var(--darkless-color);
	}
`;
