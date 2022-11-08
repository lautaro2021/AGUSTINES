import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import axios from 'axios';
import { Analytics } from '@vercel/analytics/react';

const theme = {
  colors: {
    primary: '#fffff',
    secondary: '#ffffff',
  },
};

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  overflow-x: hidden;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }
`;

axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:1337';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
        <Analytics/>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
