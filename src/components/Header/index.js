import {
  HamburgerMenu,
  MenuToggle,
  MenuButton,
  Span,
  List,
  ButtonLink, Layer,
} from './styles'

export function Header() {
  return (
    <HamburgerMenu className='hamburger-menu'>
      <MenuToggle type="checkbox" id='menu__toggle'></MenuToggle>
      <MenuButton className='menu__btn' htmlFor='menu__toggle'>
        <Span />
      </MenuButton>
      <List className='menu__box'>
        <Layer>
          <ButtonLink to="/">mais vantagens</ButtonLink>
          <ButtonLink to="/servicos">serviços</ButtonLink>
          <ButtonLink to="/masquefarmacia">mais que farmacia</ButtonLink>
          <ButtonLink to="/ofertas">Ofertas</ButtonLink>
          <ButtonLink to="/adicionarnossaslojas">adicionar nossas lojas</ButtonLink>
          <ButtonLink to="/escolhasuaoperacao">escolha sua operação</ButtonLink>
          <ButtonLink to="/finalizarvenda">acumular troco</ButtonLink>
          <ButtonLink to="/resgatartroco">resgatar troco</ButtonLink>
          <ButtonLink to="/meubox">meu box</ButtonLink>
          <ButtonLink to="/sejaassociado">Associe-se</ButtonLink>
          <ButtonLink to="/notificacoes">notificações</ButtonLink>
          <ButtonLink to="/login">login</ButtonLink>
        </Layer>
      </List>
    </HamburgerMenu>
  )
}

