import styled, { css } from 'styled-components';

const A = styled.a`
  ${({ theme: { main: { colors } } }) => css`
  position: relative;
  padding-top: 0.7rem;
  padding-bottom: 0.2rem;
  padding-left: 1.6rem;
  min-height: 3.6rem;
  border-left: 0.3rem solid transparent;
  cursor: pointer;
  color: ${colors.leftMenu['link-color']};
  text-decoration: none;
  display: block;
  -webkit-font-smoothing: antialiased;

  &:hover {
    color: ${colors.white};
    background: ${colors.won.blue};
    border-left: 0.3rem solid ${colors.won.orange};
    text-decoration: none;
  }

  &:focus {
    color: ${colors.white};
    text-decoration: none;
  }

  &:visited {
    color: ${colors.leftMenu['link-color']};
  }

  &.linkActive {
    color: white !important;
    border-left: 0.3rem solid ${colors.won.orange};
  }
  `}
`;

export default A;
