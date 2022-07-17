import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height:100vh;
    background:#003C8D;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const ContainerForm = styled.form`
    width:100%;
    display:block;
`
export const FormField = styled.div` 
    width:100%;
    box-sizing:border-box;
    height:auto;
    padding:1.0rem 2.0rem ; 
`
export const LabelForm = styled.label`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 39px;
    display:flex;
    justify-content:center;
    margin-bottom:1.0rem;
    color: #FFF;
    text-transform:${(props) => props.word ? 'uppercase' : 'capitalize'};

`
export const InputField = styled.input`
    width: 100%;
    margin:.5rem 0;
    padding:2.0rem ;
    background: #ECECEC;
    border-radius: .5rem;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.7rem;
    text-transform: uppercase;
    color: #656565;
`
export const ContainerButtons = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    padding:1.0rem;
`
export const ButtonLink = styled.a` 
    background:${(props) => props.button ? "#CD201F" : "#FFC000"};
    padding:1.5rem;
    font-size:1.7rem;
    font-weight:700;
    font-family:"Montserrat";
    margin:1.6rem;
    border-radius:.9rem;
    color:${(props) => props.button ? "#F5F5F5" : "#003C8D"};
    text-transform:${(props) => props.button ? "uppercase" : "inicial"};
    &::first-letter{
        text-transform:capitalize;
    }
`