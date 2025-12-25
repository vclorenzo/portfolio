import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  z-index: 9999;
  padding: 0 70px;
  background-color: #808080;
  overflow: hidden;
  position: sticky;
  top: 0;

  @media (max-width: 767px) {
    padding: 0 30px;
  }
`;

export const StyledLogo = styled.div`
  display: flex;
`;

export const StyledNav = styled.div`
  ul {
    display: flex;
    li {
      list-style: none;
      margin-right: 30px;
      &:last-child {
        margin-right: 0;
      }
      a:hover {
        color: var(--main-color);
      }
    }
  }
  @media (max-width: 540px) {
    display: none;
  }
`;

export const NavHamburgerIcon = styled.div`
  display: none;
  @media (max-width: 540px) {
    display: block;
    position: absolute;
    top: 10;
    right: 0;
    padding: 0 30px;
    font-size: 30px;
    cursor: pointer;
  }
`;
