import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Styrene A Web';
        src: url('/fonts/StyreneAWeb-Light.woff2') format('woff2');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Styrene A Web';
        src: url('/fonts/StyreneAWeb-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Styrene A Web';
        src: url('/fonts/StyreneAWeb-Medium.woff2') format('woff2');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Styrene A Web';
        src: url('/fonts/StyreneAWeb-Bold.woff2') format('woff2');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

  /* Global Styles */
    body {
        font-family: 'Styrene A Web', sans-serif;
        background-color: #fff;
        color: #000;
    }
`;