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
    background:${(props) => props.color ? "#F44336 " : "#FFC000"};
    border:solid #EEEEEE .20rem;
    border-radius:.9rem;
    font-family:"Montserrat";
    font-weight:700;
    font-size:1.6rem;
    color:${(props) => props.color ? "#FFF" : "#003C8D"};
    text-transform:${(props) => props.color ? "uppercase" : "inicial"};
    margin:${(props) => props.color ? "3.0rem 1.5rem" : "1.5rem "};
    &::first-letter{
        text-transform:capitalize;
    }
    
    
`
export const TextFooter = styled.p`
    color:#BDBDBD;
    font-size:1.6rem;
    font-weight:700;
    font-family:"Montserrat";
    margin-top:5.0rem;

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