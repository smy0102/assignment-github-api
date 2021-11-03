import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  * {
    ${reset}
    box-sizing: border-box;
  }

  body {
    color: rgb(120, 120, 120);
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 14px;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  input {
    all: unset;
    margin-left: 5px;
  }

  button {
    all: unset;
    cursor: pointer;
  }

  tr {
    border-bottom: 1px solid rgba(230, 230, 230, 0.7);
  }
`;

export default GlobalStyle;
