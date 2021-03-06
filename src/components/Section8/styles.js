import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    min-height:100vh;
    overflow-x:hidden;
`
export const HeroHeader = styled.header`
    background: #003C8D;
    height: 23.0rem auto;
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
    color: #FFF;
    &::first-letter{
        text-transform:capitalize;
    }
`
export const ContainerForm = styled.form`
    width:100%;
    height: auto;
    padding:1.2rem;
    margin: 5.0rem auto;
    text-align:center;
    text-align:left;
   
`
export const TextLabel = styled.label`
    font-size:2.2rem;
    font-weight:700;
    font-family:"Montserrat";
    color:#003C8D;
    
    &:nth-of-type(1){
        text-transform:capitalize;
    }
    &:nth-of-type(2){
        text-transform:uppercase;
    }
    &:nth-of-type(3){
        text-transform:capitalize;
    }

`
export const InputForm = styled.input`
    font-family:"Montserrat";
    font-size:2.0rem;
    font-weight:700;
    font-style:normal;
    letter-spacing:.03rem;
    text-transform:capitalize;

    background:${(props) => props.background ? "#FFC000" : "#E0E0E0"};
    text-align:${(props) => props.background ? "right" : "left"};
    color:${(props) => props.background ? "#003C8D" : "#2C3E50"};

    border-radius:1.0rem;
    width:100%;
    padding:1.6rem;
    margin:2.0rem 0;

    &::placeholder{
        color:#757575;
        opacity:.7;
        font-size:1.6rem;
    }
`

export const PartitionLine = styled.div`
    &::before{
        background:#BDBDBD ;
        content: "";
        display: block;
        margin:2.5rem auto;
        height: 1px;
        width: 100%;
    }

`
export const ContentButtons = styled.div`
    width:100%;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-wrap:wrap;
    margin-top:2.0rem;
`
export const ButtonLink = styled.button`
    width:100% ;
    padding:2.0rem;
    background:#25D366;
    border:solid #EEEEEE .20rem;
    border-radius:.9rem;
    font-family:"Montserrat";
    font-weight:700;
    font-size:2.0rem;
    color:#FFF;
    text-transform:uppercase;
    margin:3.0rem 0;
    
`