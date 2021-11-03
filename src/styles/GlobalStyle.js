import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  * {
    ${reset}
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
   body {
    color: rgb(120, 120, 120);
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
  }

  input {
    all: unset;
    margin-left: 5px;
  }

  button {
    all: unset;
    cursor: pointer;
  }
`;

export default GlobalStyle;
