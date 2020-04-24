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
    font-family: ${fonts.mainFont} ;
    background-color: black ;
  }
  section{
    position: relative;
    z-index: 1;
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
