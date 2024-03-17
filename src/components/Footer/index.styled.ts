import styled from 'styled-components';

export const StyledFooter = styled.footer`
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 70px;
  background-color: #808080;
  /* overflow: hidden; */

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const StyledCopyrightText = styled.div`
  text-align: center;
`;

export const StyledLinks = styled.div<{ color: string }>`
  ul {
    display: flex;
    font-size: 30px;

    a,
    a:visited {
      text-decoration: none;
      ${(props) =>
        props.color === 'dark'
          ? `color: var(--dark-color);`
          : `color: var(--light-color);`}
      transition: color 0.3s ease;
      li {
        list-style: none;
        margin-right: 20px;
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 50px;
          width: 50px;
          & svg {
            ${(props) =>
              props.color === 'dark'
                ? `fill: var(--dark-color);`
                : `fill: var(--light-color);`}
            cursor: pointer;
          }
          font-size: 1.5rem;
          ${(props) =>
            props.color === 'dark'
              ? `border: 2px solid var(--dark-color);`
              : `border: 2px solid var(--light-color);`};
          border-radius: 50%;
          &:hover {
            border: 2px solid var(--main-color);

            & svg {
              fill: var(--main-color);
            }
          }
        }
      }
    }
  }
`;
