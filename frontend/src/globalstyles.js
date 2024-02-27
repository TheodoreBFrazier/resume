// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @media (min-width: 1200px) {
    body {
      margin-left: 400px;
      margin-right: 400px;
    }
  }
`;

export default GlobalStyles;
