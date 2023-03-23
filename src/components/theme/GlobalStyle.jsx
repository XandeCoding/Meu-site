import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle `
    body {
        font-family: 'Poppins', sans-serif;
        font-display: fallback;
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.6;
        transition: all 0.50s linear;
    }

    .title {
        color: ${({ theme }) => theme.title };
    }

    .subtitle {
        color: ${({ theme }) => theme.subtitle};
        font-weight: bold;
    }

    .title:hover, .subtitle:hover {
        opacity: 0.80;
    }

    .icon {
        color: ${({ theme }) => theme.icons };

        &:hover {
            color: ${({ theme }) => theme.iconHover };
        }
    }

    .text {
        color: ${({ theme }) => theme.text};
    }
`
