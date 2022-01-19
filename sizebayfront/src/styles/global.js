import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    box-sizing: border-box;
    width: 50%;
    font-family: "Roboto", sans-serif;
    background: #555555;
  }
`;
