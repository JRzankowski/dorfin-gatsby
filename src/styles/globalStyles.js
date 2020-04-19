import {createGlobalStyle} from 'styled-components';
import theme from "./theme";

const {fontSizes, fonts} = theme;

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    height: 200vh;
    font-family: ${fonts.mainFont} ;
  }

  button {
    padding: 0;
    cursor: pointer;
    font-family: ${fonts.mainFont};
  }
  p {
    font-size: 16px;
  }
  ul {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyles;
