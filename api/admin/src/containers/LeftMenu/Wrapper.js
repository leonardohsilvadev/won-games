import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  ${({ theme: { main } }) => css`
  position: fixed;
  float: left;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${main.sizes.leftMenu.width};
  background: ${main.colors.won.blueLight};

  /* scrollbar overrides */
  * {
    ::-webkit-scrollbar {
      width: 7px;
    }

    ::-webkit-scrollbar-track,
    ::-webkit-scrollbar-track:hover {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${main.colors.leftMenu['title-color']};
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: ${main.colors.leftMenu['link-color']};
    }

    /* firefox */
    scrollbar-color: ${main.colors.leftMenu['title-color']} transparent;
  }
  `}
`;

export default Wrapper;
