import styled from 'styled-components';

export const StyledFormContainer = styled.div`
	font-size: 24px;

	& form {
		border-radius: 20px;
		background: var(--base-color);
		color: var(--dark-color);
		padding: 50px 30px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
		gap: 25px;

		& input,
		textarea {
			border: 3px solid;
			font-size: 20px;
			width: 100%;
			padding: 10px;
			border-radius: 5px;
		}
	}
`;
