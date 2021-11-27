import styled from 'styled-components';

import { colors } from './helpers/colors';

export const DateContainer = styled.section`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    width: 90vw;
    margin: auto;
    margin-top: 5vh;

    h1 {
      flex-grow: 0;
      font-size: 60px;
      font-weight: 500;
      color: ${colors.grey};
    }

    h2 {
      font-size: 24px;
      font-weight: 400;
      color: ${colors.grey};
    }

    h3 {
      font-size: 24px;
      font-weight: 300;
      color: ${colors.grey};
    }

    & div {
      flex-grow: 3;
    }

    a {
      text-decoration: none;
    }
  }
`;
