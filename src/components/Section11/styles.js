import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    width:100%;
    height:auto;
    position:absolute;
    z-index:0;
`
export const ContainerImage = styled.div`
    width: 100%;
    height: 35.0rem;
    background: #003C8D;
    
`
export const CentralImage = styled.img`
    display:block;
    width:100%;
    max-width:30% ;
    margin:10.0rem auto;
    filter:invert(1);

`
export const Centraltitle = styled.h1`
    width: 95% ;
    height: auto;

    background:${props => props.bar ? '#D9D9D9' : 'transparent'};
    font-size:${props => props.bar ? '1.8rem' : '2.4rem'};
    margin:${props => props.bar ? '3.0rem auto' : '-10.0rem auto'};
    border-radius:${props => props.bar ? '3.9rem' : 'none'};
    padding:${props => props.bar ? '1.0rem ' : '3.0rem 0'};
    color:${props => props.bar ? '#656565' : '#FFF'};

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    line-height: 2.8rem;
    text-align: center;
    letter-spacing: -0.05em;
    text-transform: uppercase;

`
export const Inputfields = styled.form`
    width:100%;
    padding:0 1.0rem;
`
export const Input = styled.input`
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

// =================== // =======================






// =================== // =======================

























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

