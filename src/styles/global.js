import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        /* Cores globais, para usar chame assim: background-color: var(--red-color) */
        --background-color: #1d2025;
        --surface-color: #102A43;
        --font-color: white;
        --primary-color: #1edecb;
        --secondary-color: #b7efa2;
        --auxiliary-color: #acb3bd;
    }
    *{
        margin: 0;
        font-family: "Arial", sans-serif;
    }
    body{
        
    }
`;
