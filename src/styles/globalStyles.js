import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  *, body {
    font-family:  ${({ theme }) => theme.fonts.primary};
    font-weight: 400;
    text-rendering: optimizeLegibility;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }
  
  body {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.white};
  }

  b {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default GlobalStyle;
