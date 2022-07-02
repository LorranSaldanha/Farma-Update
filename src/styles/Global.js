import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
    }
    
` 
