import { createGlobalStyle } from 'styled-components';

export const CssReset = createGlobalStyle`
    /* CSS Resets */
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body, h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    dl, dd, ol, ul, figure, hr, fieldset, legend {
        margin: 0;
        padding: 0;
    }

    ul, ol {
        list-style: none;
        padding: 0;
    }

    html:focus-within {
        scroll-behavior: smooth;
    }

    body {
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    }

    h1, h2, h3, h4, h5, h6, p, blockquote, pre, a,
    abbr, acronym, address, big, cite, code, del,
    dfn, em, img, ins, kbd, q, s, samp, small, span,
    strike, strong, sub, sup, tt, var, b, u, i, center {
        font-size: 100%;
        font-weight: normal;
        vertical-align: baseline;
    }

    fieldset {
        border: 0;
        padding: 0;
        margin: 0;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    input, button, textarea, select {
        font: inherit;
        color: inherit;
        margin: 0;
        padding: 0;
        border: 0;
        background: none;
    }

    button {
        background-color: transparent;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote::before, blockquote::after, q::before, q::after {
        content: '';
        content: none;
    }

    img {
        max-width: 100%;
        display: block;
    }

    textarea {
        resize: vertical;
    }
`;