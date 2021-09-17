import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #EDFCF4;
        --green: #00C063;
        --orange: #FFB830;
        --blue: #5089C6;
        --green-box: #33CC95;
        --green-dark: #2B7A4B;
        --green-light: #40E282;

        --status-todo: rgba(255, 184, 48, 0.33);
        --status-done: #DAF2E4;
        --status-doing: rgba(80, 137, 198, 0.38);

        --text-title: #363f5f;
        --text-body: #969cb3;

        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    } 

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`