import styled from 'styled-components';

export const StyledModalContainer = styled.div`
  position: fixed;
  width: 90%;
  height: 90%;
  /* margin: auto; */
  border-radius: 20px;
  background: var(--base-color);
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
export const StyledModalItemContainer = styled.div`
  font-size: 30px;
  font-weight: bolder;
  color: var(--dark-color);
  /* height: 100%; */
  display: flex;
  -webkit-box-pack: center;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px;
  display: flex;
  justify-content: flex-end;
  & svg {
    fill: var(--dark-color);
    font-size: 30px;
  }
`;
