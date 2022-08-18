import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        box-sizing : border-box
    }
    ul{
        list-style: none;
        padding: 0;
    }
    a,p,span {
        text-decoration: none;
    }
    a:active{
        color: black;
    }
    html,body {
        height: 100%;
    }
    body{
        margin: 0;
    }
    h1,p{
        margin: 0;
    }
    #root{
        display: flex;
        flex-direction: column;
        height:100vh;
    }
`;

export default GlobalStyles;
