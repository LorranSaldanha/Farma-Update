import {
    Container, ContainerImage, CentralImage,
    Centraltitle, Inputfields, Input, BarTop,
    ItemsBarTop, CheckItem,
} from "./styles";

import { Header } from "../Header/"
import Image from '..//..//assets/Localização.png'

export function Section5() {
    return (
        <>
            <Container>
                <Header />
                <ContainerImage>
                    <CentralImage src={Image}></CentralImage>
                    <Centraltitle>nossas lojas</Centraltitle>
                </ContainerImage>
                <Centraltitle bar >adicionar nossas lojas</Centraltitle>
                <Inputfields>
                    <Input placeholder="imagem :"></Input>
                    <Input placeholder="descrição :"></Input>
                    <Input placeholder="localizção :"></Input>
                    <Input placeholder="ativo :"></Input>
                </Inputfields>
                <BarTop>
                    <ItemsBarTop>produto</ItemsBarTop>
                    <ItemsBarTop>descrição</ItemsBarTop>
                    <ItemsBarTop>ativar</ItemsBarTop>
                </BarTop>
                <BarTop ContentItems>
                    <ItemsBarTop item >flavio calçados</ItemsBarTop>
                    <ItemsBarTop item >zzzzzzzzzzz</ItemsBarTop>
                    <CheckItem type='checkbox' className="switch_1"></CheckItem>
                </BarTop>
                <BarTop ContentItems>
                    <ItemsBarTop item >flavio calçados</ItemsBarTop>
                    <ItemsBarTop item >yyyyyyyyyyy</ItemsBarTop>
                    <CheckItem type='checkbox' className="switch_1"></CheckItem>
                </BarTop>
                <BarTop ContentItems>
                    <ItemsBarTop item >flavio calçados</ItemsBarTop>
                    <ItemsBarTop item >zzzzzzzzzzz</ItemsBarTop>
                    <CheckItem type='checkbox' className="switch_1"></CheckItem>
                </BarTop>
                <BarTop ContentItems>
                    <ItemsBarTop item >flavio calçados</ItemsBarTop>
                    <ItemsBarTop item >yyyyyyyyyyy</ItemsBarTop>
                    <CheckItem type='checkbox' className="switch_1"></CheckItem>
                </BarTop>
                <BarTop ContentItems></BarTop>
            </Container>
        </>
    );
}