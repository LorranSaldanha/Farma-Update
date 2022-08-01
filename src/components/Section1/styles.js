import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    min-height:100vh;
`
// ========== Image ==========
export const WrapperHeader = styled.header`
    background:#003C8D;
    width:100%;
    min-height:30.0rem ;
    padding:2.0rem;

    @media screen and (min-width:1280px){
        max-width:50.0rem;
        border-radius:0 0 3.0rem;
    }
`
export const WrapperImage = styled.img`
    width: 100%;
    max-width:50% ;
    display: block;
    margin:0 auto;


`
// ========== Image ==========

// ========== Title ==========
export const TitleCentral = styled.h1`
    text-align: center;
    text-transform:uppercase;
    font-family:var(--title-font);
    font-weight:700;
    letter-spacing:.03rem;
    border-radius:2.5rem;
    color:var(--title-color-primary);
    
    @media screen and (min-width:1280px){
        max-width:50.0rem;
    }


`
// ========== Title ==========

// ========== Form ==========
export const FormFiled = styled.form`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:1.0rem;
    height:auto;   
    
    @media screen and (min-width:1280px){
        max-width:66.0rem;
        margin-left:51.0rem;
    }
`
export const InputFields = styled.input`
    width:100%;
    padding:2.0rem;
    background:var(--background-input);
    border-radius:.5rem;
    margin:1.0rem 0;
    color:var(--color-font-input);
    font-family:var(--title-font);
    text-transform:capitalize;
    font-size:1.6rem;
    font-style:normal;
    font-weight:700;
    text-align:left;
    
    &::placeholder{
        text-transform:uppercase;
        opacity:.8;
    }
    
    
`
export const TitleForm = styled.h1`
    text-align: center;
    text-transform:uppercase;
    font-family:var(--title-font);
    font-weight:700;
    letter-spacing:.03rem;
    border-radius:2.5rem;
    color:var(--title-color-primary);
    padding:2.0rem;

    @media screen and (min-width:1280px){
        max-width: 70.0rem;
        color:var(--title-color-secondary);
        background:var(--background-title);
        border-radius:0 3.0rem 3.0rem 0;
        margin-left:50.0rem;
        margin-top:-26.0rem;

    }
    
`
export const ButtonForm = styled.button`
    background:#003C8D;
    color:var( --title-color-primary);
    font-family:var(--title-font);
    text-transform:uppercase;
    font-weight:700;
    padding:2.0rem;
    width:100%;
    border-radius:.5rem;


`
// ========== Form ==========

// ========== Table ==========
export const TableItems = styled.table`
    width:100%;
    border-collapse:collapse;
    margin:0;
    padding:1.0rem;
    overflow-x:auto;
    display:flex;
    @media screen and (min-width:1280px){
        max-width:100%;
        margin:auto;
        padding:0;

        overflow-x:hidden;
        padding-bottom:2.0rem;

    }

`
export const TableTbody = styled.tbody`
    margin:0 auto;
    
`
export const TableTr = styled.tr`
    &:nth-child(even){
      background:var(--background-item-table);
    }
    
`
export const TableTh = styled.th`
    background:var(--background-wrapper-table);
    font-family:var(--title-font);
    text-transform:uppercase;
    font-weight:700;
    color:var(--title-color-primary);
    letter-spacing:.03rem;
    padding:2.0rem;
    font-size:1.6rem;

    @media screen and (min-width:1280px){
        padding: 1.0rem  10.0rem ;
    }

`
export const TableTd =styled.td`
    font-family:var(--title-font);
    padding:1.0rem;
    font-size:1.6rem;
    text-transform:uppercase;
    text-align:center;
    font-weight:700;
    color:var(--color-items-table);

`
export const CheckItem = styled.input`
    font-size: 30px; 
    -webkit-appearance: none; 
    -moz-appearance: none; 
    appearance: none; 
    width: 5.6rem; 
    height: 2.6rem; 
    background: #D9D9D9; 
    border-radius: 3em; 
    position: relative; 
    cursor: default; 
    outline: none; 
    -webkit-transition: all .2s ease-in-out; 
    transition: all .2s ease-in-out; 
    border:solid .050rem #BDBDBD; 

    /* ============================== */
    &:checked{
        background: #003071; 
        border:solid .060rem #000;
    }
    /* ============================== */

    &[type="checkbox"].switch_1:after{ 
    position: absolute; 
    content: ""; 
    width: 2.5rem; 
    height: 2.5rem; 
    border-radius: 50%; 
    background: #fff; 
    -webkit-box-shadow: 0 0 .25em rgba(0,0,0,.3); 
    box-shadow: 0 0 .25em rgba(0,0,0,.3); 
    -webkit-transform: scale(.7); 
    transform: scale(.7); 
    left: 0; 
    -webkit-transition: all .2s ease-in-out; 
    transition: all .2s ease-in-out; 
 
    /* ============================== */

    }
    &[type="checkbox"].switch_1:checked:after{ 
     left: calc(100% - 2.5rem); 
    } 

`


