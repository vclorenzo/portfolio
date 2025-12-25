import styled from 'styled-components';

export const SpecialTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	background-color: var(--primary-color);
	color: var(--dark-color);
	border-left: 3px solid var(--main-color);
	padding: 20px;
	text-align: left;
	line-height: 2.5;
	width: 100%;
	/* max-height: 250px; */
	overflow: auto;
`;
