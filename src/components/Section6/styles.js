import styled from "styled-components";


export const ContainerForm = styled.form`
    margin:10.0rem 0;
    display:block;
    width:100%;
    height:100%;
`
export const FormField = styled.div`
    width:100%;
    box-sizing:border-box;
    height:auto;
    padding:1.0rem;
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
    color: #003C8D;
    text-transform:${props => props.word ? 'uppercase' : 'capitalize'};

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
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    padding:1.0rem ;
    margin-top:3.0rem ;

`
export const ButtonLink = styled.a`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: bold;
    line-height: 2.0rem;
    font-size:1.8rem;
    color:#003C8D;
    padding:1.8rem ;
    text-align:center;
    background: #FFC000;
    border-radius: 1.7rem;
    text-decoration:none;
    &::first-letter{
        text-transform:capitalize;
    }
    @media screen and (max-width:22.5em){
    margin:1.0rem  ;
    width:100%;

    }

`