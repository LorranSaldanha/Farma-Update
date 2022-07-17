import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    min-height:100vh;
    overflow-x:hidden;
`

export const HeroHeader = styled.header`
    background: #003C8D;
    height:24.0rem;
    width:100% ;
`
export const TitleHero = styled.h1`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 3.9rem;
    text-align: center;
    padding:10.0rem 0;
    color:#FFF;
    text-transform:uppercase;
`

export const FormLogin = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    width:100%;
    height:auto;
    padding:1.0rem;
`

export const InputLogin = styled.input`
    width:100%;
    padding:2.0rem;
    border-radius:.9rem;
    background:#D9D9D9;
    font-weight:700;
    font-family:"Montserrat";
    font-size:1.6rem;
    text-transform:capitalize;
    text-align:left;
    color:#131418;
    &::placeholder{
        opacity:.8;
        letter-spacing:.03rem;
    }
`


export const LabelLogin = styled.label`
    font-family:"Montserrat";
    font-weight:700;
    color:#003C8D;
    padding:2.0rem;
    font-size:2.0rem;
    text-transform:uppercase;
    text-align:center;
    
`
export const ButtonLink = styled.button`
    background: #003C8D;
    color:#FFF;
    font-family:"Montserrat";
    font-size:2.0rem;
    font-weight:700;
    letter-spacing:.09rem;
    text-transform:uppercase;
    /* border:solid #D9D9D9 .02rem; */
    text-align:center;
    padding:2.0rem;
    margin:5.0rem;
    width:100%;
    border-radius:.9rem;
    -webkit-box-shadow: 0px 0px 6px 1px rgba(217, 217, 217, 1);
    -moz-box-shadow: 0px 0px 6px 1px rgba(217, 217, 217, 1);
    box-shadow: 0px 0px 6px 1px rgba(217, 217, 217, 1);`

