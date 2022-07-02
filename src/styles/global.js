import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');

  :root {
    --background-main-color: #191e23;
    --background-card-color: #222931;
    --background-side-color: #1d2228;

    --white-text: #fff;
    --gray-600-text: #7A899D;
    --gray-400-text: #2f3945;
    --gray-300-text: #444e5b;
    --gray-200-text: #313b47;
    --gray-100-text: #1b2126;

    --primary: #f3ad33;
    --secondary: #2A323C;

  }

  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none; 
    user-select: none;
  }

  body {
    background-color: var(--background-main-color);
    color: var(--gray-600-text);
  }

  body, input, textarea, button {
    font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
`