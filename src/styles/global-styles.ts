import { css } from 'lit';

export const globalStyles = css`
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
    }
    header {
        background-color: #4CAF50;
        color: white;
        padding: 1rem;
        text-align: center;
    }
    nav a {
        color: white;
        margin: 0 1rem;
        text-decoration: none;
    }
    main {
        padding: 1rem;
    }
    footer {
        background-color: #333;
        color: white;
        text-align: center;
        padding: 1rem;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
`;