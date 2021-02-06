import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Open Sans Condensed', sans-serif;
        padding: 20px 60px;

        @media screen and (max-width: 1024px) {
            padding: 20px 15px;
        }
    }

    a {
        text-decoration: none;
        color: black;
    }
`