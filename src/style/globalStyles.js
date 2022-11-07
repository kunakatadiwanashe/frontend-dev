import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
      transition: all .5s linear;
  }
  .chrt {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
  }
  .togglebtn{
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
    border-radius: 50px;cursor: pointer;
    
  }
 

`;

export const lightTheme = {
  body: '#EFEDED',
  text: '#00000',
  primary: '#FFFF',
  div: '2F2D2D',
};

export const darkTheme = {
  body: '#121212',
  text: '#fff',
  primary: '#2F2D2D',
};