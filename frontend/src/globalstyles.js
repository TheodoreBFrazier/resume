// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @media (min-width: 1200px) {
    body {
      margin-left: 200px;
      margin-right: 200px;
    }
  }
`;

export default GlobalStyles;
