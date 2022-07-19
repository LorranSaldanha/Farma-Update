import { Link } from "react-router-dom";
import styled from 'styled-components';


export const MenuToggle = styled.input`
  opacity:0;
  visibility:hidden;
  position:absolute;
  &:checked + .menu__btn > span {
  transform: rotate(45deg);
  }
  &:checked + .menu__btn > span::before {
  top: 0;
  transform: rotate(0deg);
  }
  &:checked + .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
  }
  &:checked ~ .menu__box {
  left: 0 ;
}

`
export const MenuButton = styled.label`
  top: 3.5rem;
  left: 1.6rem;
  width: 3.0rem;
  height: 3.0rem;
  cursor: default;
  z-index: 999999;
  position: absolute;
`

export const HamburgerMenu = styled.div`

.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: .3rem;
  background-color: #FFF;
  transition-duration: .25s;
}
.menu__btn > span::before {
  content: '';
  top: -1.2rem;
}
.menu__btn > span::after {
  content: '';
  top: 1.2rem;
}
`
export const Span = styled.span`
  margin:0;
`
export const List = styled.ul`
  display: block;
  position: absolute;
  z-index:99999;
  top: 0;
  left: -100%;
  width: 100%;
  min-height: 100%;
  margin:-5.0rem 0;
  list-style: none;
  background-color: #003C8D;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
  transition-duration: .25s;
  @media screen and (max-width:360px){
    padding:1.0rem;
  }

`
export const Layer = styled.div`
  margin:10.0rem 0;
`
export const ButtonLink =styled(Link)`
    margin:1.0rem 0;
    margin-bottom: 1em;
    display: block;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size:1.6rem;
    color:#FFF;
    line-height: 2.8rem;
    text-align: center;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    text-decoration:none;
    @media screen and (max-width:320px){
    font-size:1.5rem;
  }


`



























