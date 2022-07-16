// =============== Components
import {
    Container, ContainerImage, CentralImage,
    Centraltitle, Inputfields, Input,
} from "./styles";

// =============== 

import { Header } from "../Header/"
import Image from '..//..//assets/Rings.png'


export function Section11() {

    return (
        <>
            <Container>
                <Header />
                <ContainerImage>
                    <CentralImage src={Image}></CentralImage>
                    <Centraltitle>notificações</Centraltitle>
                </ContainerImage>
                <Centraltitle bar="bar" >adicionar - notificações</Centraltitle>
                <Inputfields>
                    <Input placeholder=" titulo :" ></Input>
                    <Input placeholder="mensagem :"></Input>
                    <Input placeholder="fonte :"></Input>
                    <Input placeholder="ativo :"></Input>
                </Inputfields>

            </Container>
        </>
    );
}