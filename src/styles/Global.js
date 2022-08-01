import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        /* TITLE */
        --title-font:"Montserrat";

        --title-color-primary:#FFF;
        --title-color-secondary:#656565;
    
        --background-title:#D9D9D9;

        /* FORM */
        --background-input:#ECECEC;
        --color-font-input:#656565;
        
        /* TABLE */
        --background-item-table:lightgray;
        --background-wrapper-table:#565555;
        --color-items-table:#777777;
    }
    *,*::before,*::after{
        box-sizing:border-box;
        -moz-box-sizing:border-box;
        -webkit-box-sizing:border-box;
        padding:0;
        margin:0;
        outline:none;
        border:none;
    }
    html{
        font-size:62.5%;
    }
    body{
        background-color:#F5F5F5;
        width:100%;
        height:100vh;
        overflow-x:hidden;
    }
    
`;
