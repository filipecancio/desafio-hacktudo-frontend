import { createGlobalStyle } from 'styled-components';

export const Base = createGlobalStyle`
  html, 
  body, 
  #root {
    height: 100%;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
  }
`;
