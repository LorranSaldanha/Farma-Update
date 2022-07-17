import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    min-height:100vh;
    background:#003C8D;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
`
export const ContainerForm = styled.form`
    width:100%;
    height: auto;
    padding:1.0rem;
    margin: 12.0rem auto;
    text-align:center;
`
export const InputField = styled.input`
    border-radius:1.7rem;
    font-size:1.6rem;
    font-weight:700;
    text-transform:capitalize;
    color:#424242;
    background:#F5F5F5;
    width:100%;
    padding:2.0rem;
    margin:2.0rem 0;
    &::placeholder{
        color:#757575;
        opacity:.8;
        font-size:1.7rem;
    }
`
export const TextLabel = styled.label`
    font-size:2.5rem;
    color: #FFF;
    font-weight:700;
    font-family:"Montserrat";
    text-transform:${(props) => props.label ? "uppercase" : "capitalize"};
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
    background:${(props) => props.color ? "#DF2029 " : "#FFC000"};
    border-radius:.9rem;
    font-family:"Montserrat";
    font-weight:700;
    font-size:1.6rem;
    color:${(props) => props.color ? "#FFF" : "#003C8D"};
    text-transform:${(props) => props.color ? "uppercase" : "inicial"};
    &::first-letter{
        text-transform:capitalize;
    }
    margin:1.5rem ;
    
    
`