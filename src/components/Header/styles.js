import { Link } from "react-router-dom"
import styled from 'styled-components'

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
  top: 4.0rem;
  left: 2.0rem;
  width: 3.5rem;
  height: 3.0rem;
  cursor: pointer;
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
  background-color: #BDBDBD;
  transition-duration: .25s;
}
.menu__btn > span::before {
  content: '';
  top: -1.3rem;
}
.menu__btn > span::after {
  content: '';
  top: 1.3rem;
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
  min-height: 100vh;
  margin:-5.0rem 0;
  padding: 10.0rem ;
  list-style: none;
  background-color: #003C8D;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
  transition-duration: .25s;
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

`



























