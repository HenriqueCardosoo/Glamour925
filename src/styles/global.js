import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Raleway";
  font-weight: 400;
}

body {
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
}

`;
