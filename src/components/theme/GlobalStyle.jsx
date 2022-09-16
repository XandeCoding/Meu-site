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

        &:hover {
            opacity: 0.80;
        }
    }

    .subtitle {
        color: ${({ theme }) => theme.subtitle};
        font-weight: bold;
    }

    .icon {
        color: ${({ theme }) => theme.icons };
    }

    .text {
        color: ${({ theme }) => theme.text};
    }
`