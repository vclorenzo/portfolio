import styled from 'styled-components';

export const StyledProjectContentContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	padding: 0 20px;
	${(props) => (props.isFullScreen ? '' : `max-width: 1176px;`)}
`;
export const ProjectItemContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 50px;
`;
