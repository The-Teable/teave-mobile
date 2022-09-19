import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    text-decoration: none;
  }
  html {
    font-family: Noto Sans KR, Apple SD Gothic Neo, Roboto;
    font-size: 62.5%;
  }
`;

export default GlobalStyles;
