

import {
    Container, ContainerImage, CentralImage,
    Centraltitle, Inputfields, Input,
} from "./styles";

import { Header } from "../Header/"
import Image from '..//..//assets/MeuBox.png'
import { Table } from "../Table";

export function Section9() {
    
    return (
        <>
            <Container>
                <Header />
                <ContainerImage>
                    <CentralImage src={Image}></CentralImage>
                    <Centraltitle>meu box</Centraltitle>
                </ContainerImage>
                <Centraltitle bar >meu box</Centraltitle>
                <Inputfields>
                    <Input placeholder="cod_box :"></Input>
                    <Input placeholder="nome_box :"></Input>
                    <Input placeholder="endereço :"></Input>
                    <Input placeholder="localizção :"></Input>
                    <Input placeholder="ativo :"></Input>
                </Inputfields>

                {/* ====================== // ======================== */}
                {/* ====================== // ======================== */}
                <Table/>

            </Container>
        </>
    );
}