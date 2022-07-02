import {
    Container, ContainerImage, CentralImage,
    Centraltitle, Inputfields, Input, BarTop,
    ItemsBarTop, CheckItem,
} from "./styles";

import { Header } from "../Header/"
import Image from '..//..//assets/MaisQueFarmacia.png'

export function Section3() {
    return (
        <>
            <Container>
                <Header />
                <ContainerImage>
                    <CentralImage src={Image}></CentralImage>
                    <Centraltitle>mais que farmacia</Centraltitle>
                </ContainerImage>
                <Centraltitle bar >adicionar mais que farmacia</Centraltitle>
                <Inputfields>
                    <Input placeholder="logo :" ></Input>
                    <Input placeholder="banner :"></Input>
                    <Input placeholder="categoria principal :"></Input>
                    <Input placeholder="titulo :"></Input>
                    <Input placeholder="descrição :"></Input>
                    <Input placeholder="coleta material :"></Input>
                    <Input placeholder="tempo :"></Input>
                    <Input placeholder="resultado :"></Input>
                    <Input placeholder="recomendação :"></Input>
                    <Input placeholder="ativo :"></Input>
                </Inputfields>
                <BarTop>
                    <ItemsBarTop>titulo</ItemsBarTop>
                    <ItemsBarTop>descrição</ItemsBarTop>
                    <ItemsBarTop>ativar</ItemsBarTop>
                </BarTop>
                <BarTop ContentItems>
                    <ItemsBarTop item >flavio calçados</ItemsBarTop>
                    <ItemsBarTop item >rua 24 - jardim dolorido</ItemsBarTop>
                    <CheckItem type='checkbox' className="switch_1"></CheckItem>
                </BarTop>
                <BarTop ContentItems>
                    <ItemsBarTop item >flavio calçados</ItemsBarTop>
                    <ItemsBarTop item >rua 24 - jardim dolorido</ItemsBarTop>
                    <CheckItem type='checkbox' className="switch_1"></CheckItem>
                </BarTop>
                <BarTop ContentItems>
                    <ItemsBarTop item >flavio calçados</ItemsBarTop>
                    <ItemsBarTop item >rua 24 - jardim dolorido</ItemsBarTop>
                    <CheckItem type='checkbox' className="switch_1"></CheckItem>
                </BarTop>
                <BarTop ContentItems></BarTop>
            </Container>
        </>
    );
}