import { createGlobalStyle } from 'styled-components'

import colors from '../../colors.json'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');

  :root {
    --background-main: ${colors.background_main};
    --background-secondary: ${colors.background_secondary};

    --border-main: ${colors.border_main};

    --background-card: ${colors.background_card};
    --background-card-light: ${colors.background_card_light};

    --text-main: ${colors.text_main};
    --text-secondary: ${colors.text_secondary};
    --text-tertiary: ${colors.text_tertiary};

    --primary: ${colors.primary};
    --primary-dark: ${colors.primary_dark};
    --primary-light: ${colors.primary_light};

    --secondary: ${colors.secondary};
    --secondary-dark: ${colors.secondary_dark};
    --secondary-light: ${colors.secondary_light};

    --button-main: ${colors.button_main};
    --button-dark: ${colors.button_dark};
    --button-light: ${colors.button_light};

  }

  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none; 
    user-select: none;
  }

  body {
    background-color: var(--background-main);
    color: var(--text-secondary);
    position: relative;
  }

  body, input, textarea, button {
    font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  nav, ul, li {
    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary-dark);
    border: 0px none #ffffff;
    border-radius: 50px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary);
  }

  ::-webkit-scrollbar-thumb:active {
    background: var(--primary-light);
  }

  ::-webkit-scrollbar-track {
    background: var(--background-main);
    border: 0px none #ffffff;
    border-radius: 35px;
  }

  ::-webkit-scrollbar-track:hover {
    background: var(--background-card-light);
  }

  ::-webkit-scrollbar-track:active {
    background: var(--background-card);
  }

  ::-webkit-scrollbar-corner {
    background: transparent;
  }

  .modal .modal-dialog .modal-content {
    background-color: var(--background-card-light);

    .modal-body {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`