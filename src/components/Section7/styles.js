import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    height:100%;
    overflow-x:hidden;
`
export const HeroHeader = styled.header`
    background: #003C8D;
    height:23.0rem;
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
    color:${props => props.title ? '#003C8D' : '#fff'};
    margin:${props => props.title ? '-9.0rem' : '0'};
    &::first-letter{
        text-transform:capitalize;
    }
`
export const ContainerForm = styled.form`
    padding:1.0rem;
`
export const LabelForm = styled.label`
    display:flex;
    justify-content:center;
    align-items:center; 
    margin:1.0rem 0;
    color:#003C8D;
    text-transform:${props => props.label ? 'uppercase' : 'capitalize'};
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 2.0rem;
    line-height: 39px;
    text-align: center;
    color: #003C8D;
`
export const InputField = styled.input`
    width: 100%;
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
    padding:1.0rem;
`
export const Button = styled.a`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 2.0rem;
    line-height: 3.9rem;
    text-transform:uppercase;
    text-align: ${props => props.price ? 'right' : 'center'};

    color: #003C8D;
    padding:2.0rem;
    width:${props => props.button ? '50%' : '50%'};
    background: #FFC000;
    border-radius: 1.7rem;
    
`
export const LineBehavior = styled.div`
    max-width:95%;
    margin:2.0rem auto;
    border-top: 1px solid #656565;
`
