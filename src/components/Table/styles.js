import styled from "styled-components";

export const TableItmes = styled.table`
    width:100%;
    margin:1.0rem ;
    padding:1.0rem ;
    border-collapse:collapse;
    display:flexbox;
    overflow-x:auto;
`
export const Tbody = styled.tbody`
    margin:0 auto;
    `
export const Tr = styled.tr`
    &:nth-child(even){
        background:lightgray;
    }
`
export const Button = styled.button`
    background:none;
    font-size:2.6rem;
    .edit__icon{
        color:#003C8D;
    }
    .trash__icon{
        color:#CD201F;
    }
`
export const Th = styled.th`
letter-spacing:.2rem;
    background:#565555;
    font-size:1.6rem;
    color: #fff;
    font-weight:700;
    font-family:'Montserrat';
    padding:2.0rem;
    text-transform:uppercase;
`

export const Td = styled.td`
    font-family:'Montserrat';
    font-weight:700;
    font-size:1.6rem;
    padding:1.0rem;
    text-align:center;
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
    cursor: pointer; 
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

