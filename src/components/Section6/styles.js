import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
`
export const HeroHeader = styled.header`
    background: #003C8D;
    height:24.0rem;
    width:100%;
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
    margin:2.0rem 0;
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

    background:#E0E0E0;
    text-align:left;
    color: #2C3E50;

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
export const ContentButtons = styled.div`
    width:100%;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    flex-wrap:wrap;
    margin-top:2.0rem;
`
export const ButtonLink = styled.button`
    font-family:"Montserrat";
    font-weight:700;
    font-size:2.0rem;
    width:100% ;
    padding:2.0rem;
    border-radius:.9rem;

    background:${(props) => props.color ? "#F44336 " : "#FFC000"};
    color:${(props) => props.color ? "#FFF" : "#003C8D"};
    text-transform:${(props) => props.color ? "uppercase" : "inicial"};
    margin:${(props) => props.color ? "3.0rem 1.5rem" : "1.5rem "};

    &::first-letter{
        text-transform:capitalize;
    }
    
`
export const TextFooter = styled.p`
    color:#424242;
    font-size:1.6rem;
    font-weight:700;
    font-family:"Montserrat";
    margin-top:5.0rem;
    text-align:center;

    &::before,&::after{
    background:#BDBDBD ;
    content: "";
    display: block;
    margin:2.5rem auto;
    height: 1px;
    width: 60%;
}
    
`
export const UpperCase = styled.span`
    text-transform:uppercase;
    text-align:center;
`