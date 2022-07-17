import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    min-height:100vh;
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
    width:100%;
    height: auto;
    padding:1.0rem;
    margin: 12.0rem auto;
    text-align:center;
    text-align:left;
    
    
`
export const InputField = styled.input`
    background: ${(props) => props.changed ? " #FFC000" : " #E0E0E0"};
    text-align:${(props) => props.changed ? "right" : "left"};
    border-radius:1.7rem;
    font-size:2.0rem;
    font-family:"Montserrat";
    font-weight:${(props) => props.changed ? "700" : "700"};
    text-align:${(props) => props.changedd ? "center" : ""};
    text-transform:capitalize;
    color:${(props) => props.changed ? "#003C8D" : "#424242"};
    width:100%;
    padding:2.0rem;
    margin:2.0rem 0;
    &::placeholder{
        color:#757575;
        opacity:.8;
        font-size:1.7rem;
    }
`
export const SubForm = styled.div`
    display:flex;
    flex-direction:column;
    

`
export const InputSub = styled.input`
    width:50%;
    padding:2.0rem;
    background:#FFC000;
    border-radius:1.7rem;
    color:#003C8D;
    font-weight:700;
    font-size:2.0rem;
    text-align:center;
    display:block;
    margin:2.0rem auto;
    text-transform:capitalize;

`
export const TextLabel = styled.label`
    font-size:2.4rem;
    color: #003C8D;
    font-weight:700;
    font-family:"Montserrat";
    &::first-letter{
        text-transform:capitalize;
    }
    text-transform:${(props) => props.label ? "uppercase" : "capitalize"};
`

export const AreaField = styled.div`
    &::before{
        background:${(props)=> props.changed ? "purple" : "#BDBDBD"} ;
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
